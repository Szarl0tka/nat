
// Header
var playVideo = document.getElementsByClassName("play")[0];
var cover = document.getElementsByClassName("cover")[0];
var video = document.getElementsByClassName("header-video")[0];
var nav = document.getElementsByClassName("header-nav")[0];
var body = document.getElementById("body");
var scroll = document.getElementsByClassName("scroll")[0];

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var playerHeight;

playVideo.addEventListener("click", playVideoOnClick);
window.addEventListener("scroll", stickyMenu);



if(windowHeight > windowWidth)
{
	playerHeight = windowHeight/2;
}
else {
	playerHeight = windowHeight;
}

/* ----- SCROLL BUTTON ----- */
	// function scrollOnClick() {
	// 	scroll.scrollIntoView();
	// }


/* ----- YOUTUBE API ----- */
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubePlayerAPIReady() {
		player = new YT.Player('player', {
			height: playerHeight,
			width: windowWidth,
			videoId: 'ptAerxy8Sv0',
			playerVars: {
			controls: 0,
			rel: 0,
			showinfo: 0
			},
		});
	}


/* ----- VIDEO ----- */
	function playVideoOnClick() {
		cover.classList.remove('in');
		cover.classList.toggle('out');
		//settimeout
		player.playVideo();
		window.addEventListener("scroll", stopVideoOnScroll);
	}

	function stopVideoOnScroll() {
		if(document.documentElement.scrollTop > (nav.offsetTop - 50)) {
			player.pauseVideo();		
			cover.classList.remove('out');
			cover.classList.add('in');
		}
		else {
			video.classList.remove('out');
		}
	}


/* ----- MENU ----- */
	function stickyMenu() {
		if(document.documentElement.scrollTop >= video.offsetHeight) {	
			nav.classList.add('fixed'); 
		}

		var topMain = document.getElementsByClassName("news")[0];

		if(document.documentElement.scrollTop < topMain.offsetTop)
		{
			nav.classList.remove('fixed');
			nav.classList.toggle('static');
		}
	}


/* ----- SLIDES ABOUT ----- */
	var items = document.querySelectorAll(".about-item");

	items.forEach(function(item) {

		item.onclick = function() {

			items.forEach(function(item2){
				item2.classList.remove('in');
				item2.classList.add('out');
			});

			item.classList.remove('out');
			item.classList.toggle('in');
		}
	});
