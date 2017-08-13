const https = require('https');
const cheerio = require('cheerio');

const url = 'https://music.douban.com/';

function filterChapters(html) {
	var $ = cheerio.load(html);
	var bigTitle = $('.nav-logo a').text();
	var videoTitle = $('.article .header').find('li').text().trim();
	var artists = $('.artists');
	var number = parseInt( $('.center .join-block a').text() ,10);

	// courseData = {
	// 	bigTitle: '',
	// 	videoTitle: '',
	// 	number: '',
	// 	video: [{
	// 		videoAuthor: '';
	// 	}]
	// }

	var courseData = {
		bigTitle: bigTitle,
		videoTitle: videoTitle,
		number: number,
		videos: []
	};	

	artists.each(function(item){
		var artists = $(this);
		var videoAuthor = $('.artist-item').find('a').text().trim();
		var videoData = {
			videoAuthor: videoAuthor
		};
		courseData.videos.push(videoData);

	});

	return courseData;
}

function printCourseInfo(courseData) {
	var bigTitle = courseData.bigTitle;
	console.log(bigTitle + '\n');

	var number = courseData.number;
	console.log('音乐人数：' + number + '\n');

	var videoTitle = courseData.videoTitle;
	console.log(videoTitle + '\n');

	courseData.videos.forEach(function(video){
		console.log(video.videoAuthor);
	});

}

https.get(url, function(res){
	var html = '';

	res.on('data', function(chunk){
		html += chunk;
	});

	res.on('end', function(){
		var courseData = filterChapters(html);
		printCourseInfo(courseData);
	});

	res.on('error', function(){
		console.log('爬取数据出错');
	});

})