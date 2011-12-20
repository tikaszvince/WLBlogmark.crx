function init() {
var BlogMark = {
	title: '',
	description: '',
	url: '',
	href: ''
};
var content = document.getElementById('content');
chrome.tabs.getSelected(null,function(tab){
	BlogMark.title = tab.title;
	BlogMark.description = tab.title;
	BlogMark.url = tab.url;

	if ( document.selection ) {
		BlogMark.description = document.selection.createRange().text;
	}

	BlogMark.href =
		'http://weblabor.hu/blogmarkok/bekuldes?'
		//'http://weblabor.vince/blogmarkok/bekuldes?'
			+'t='+ encodeURIComponent( BlogMark.title)
			+'&u=' + escape(BlogMark.url)
			+'&n=' + encodeURIComponent(BlogMark.description)
		;
	content.innerHTML = '';
	content.innerHTML = '<'+'iframe src="'+BlogMark.href+'" id="ifr"><'+'/iframe'+'>';
});
};

//end
