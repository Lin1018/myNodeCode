const http = require('http');
const cheerio = require('cheerio');
const Promise =require('bluebird');
const baseUrl = 'http://www.imooc.com/learn/';
var videoIds = [637,348];

function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var title = $('.course-infos .path span').text();
	var number = parseInt($($('.statics .meta-value')[0]).text(), 10);

	// courseData = {
	// 	title: title,
	// 	number: number,
	// 	videos: [{
	// 		chapterTitle: '',
	// 		videos: [0
	// 		  title: '',
	// 		  id: ''0
	// 		]
	// 	}]
	// }

	var courseData = {
		title: title,
		videos: [],
		number: number,
	}

	chapters.each(function(item) {
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}

		videos.each(function(item) {
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text().trim();
			var id = video.attr('href').split('video/')[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			});
		});

		courseData.videos.push(chapterData);

	});

	return courseData;
}

function printCourseInfo(coursesData) {
	coursesData.forEach(function(courseData) {
		console.log(courseData.number + ' 人学过' + courseData.title+'\n');
	});

	coursesData.forEach(function(courseData) {
		console.log('### ' + courseData.title+'\n');
		courseData.videos.forEach(function(item){
			var chapterTitle = item.chapterTitle;
			console.log(chapterTitle + '\n');
			item.videos.forEach(function(video){
				console.log('【' + video.id + '】' + video.title);
			});			
		});
	});
}

function getPageAsync(url) {
	return new Promise(function(resolve, reject) {
		console.log('正在爬取 ' + url);

		http.get(url, function(res) {
		    var html = '';

		    res.on('data', function(chunk){
		        html += chunk;
		    });

		    res.on('end', function(){
		        resolve(html);
		    });

		    res.on('error', function(err){
		    	reject(err);
		        console.log('获取章节出错！');
		    });

		});

	});
}

var fetchCourseArray = [];

videoIds.forEach(function(id) {
	fetchCourseArray.push(getPageAsync(baseUrl + id));
});

Promise
	.all(fetchCourseArray)
	.then(function(pages) {
		var coursesData = [];

		pages.forEach(function(html) {
			var courses = filterChapters(html);

			coursesData.push(courses);
		});

		coursesData.sort(function(a, b) {
			return a.number < b.number
		});

		printCourseInfo(coursesData);		
	})