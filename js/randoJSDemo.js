app = {

}

var activePages = [];


object{
	next: ['sachetSub1','sachetSub2','sachetSub3']
}

allPages{
	sachetSub1: {
		type: 'audio',
		bgImage: 'url',
		content: {title: 'asdfasdf',
		text: 'asdfasdfsdaf'}
	}
}

// var renderPage = function(pageData){

// 	var templateNames = {
// 		audio: 'audio-template',
// 		text: 'text-template',
// 		video: 'video-template'
// 	};

// 	var templateToRender = templateNames[pageData.type];

// 	renderTemplate[templateToRender](pageData);
	
// }

var renderNextPages = function(){

	//app.activePages = object.next;
	//var onDeckPages = [];
	activePages = [];

	for (var i in object.next){

		var pageName = object.next[i];
		allPages[pageName].storedIndex = i;

		activePages.push(allPages[pageName]);
	}

	//activePages = onDeckPages;

	renderTemplate(activePages[0]);
	//renderTemplate(object.next[0]);
}

// for (var i in object.next){

// 	renderTemplate(object.next[i]);

// 	//renderPage(object.next[i]);

// 	//contentPage.create(object.next[i]);
// }

var renderTemplate = function(data){

		var templateMap = {
		'audio': 'audio-template',
		'video': 'video-template',
		'text': 'text-template'
	}

	var compiled = _.template(templateMap[data.type], data);

	var checkThenMove = function(t){
		if (t < activePages.length && t > -1){
			renderTemplate(activePages[t]);
			//return true;
		} else {
			// alert("that page doesn't exist, jerk!");
			//return false;
		}
	}

	$(thepageyoujustmade).on('swipeRight',function(){
		var target = +data.storedIndex+1;
		checkThenMove(target);
		// if (canMoveCheck(target)){
		// 	renderTemplate(activePages[target]);
		// }
	});

	$(thepageyoujustmade).on('swipeLeft',function(){
		var target = +data.storedIndex-1;
		checkThenMove(target);
		// if (canMoveCheck(target)){
		// 	renderTemplate(activePages[target]);
		// }
	});

	// var renderFunctions = {
	// 	audio: function(){
	// 		// var compiled = _.template(data.type, data);
	// 		var compiled = _.template('audio-template', data);
	// 		// {
 //   //          title: data.title,
 //   //          content: data.content,
 //   //          bgImage: data.bgImage,
 //   //          date: new Date()
 //   //      }
 //        	//);
	// 	},
	// 	video: function(){
	// 		var compiled = _.template('video-template', data);
	// 	},
	// 	text: function(){
	// 		var compiled = _.template('text-template', data);
	// 	}
	// };

	// renderFunctions[data.type]();

}

// var renderTemplate = {
// 	audio: function(bg,content){
// 		$('.header').html(content.title);
// 		$('.content-body').html(content.text);

// 		var compiled = _.template(templateNames.audio, {
//             title: projectTitle,
//             category: projectCat,
//             audioImg: '<img src='+ projectAud + '>',
//             date: new Date()
//         });
// 	},
// 	video: function(){

// 	},
// 	text: function(){

// 	}
// }


var contentPage = {
	header: "",
	text: "",
	bgImage: "",
	templateType: "",
	create: function(data){

		var newPage = $.extend({},contentPage);

		for (key in data){
		contentPage[key] = data[key];
		}

		contentPage.render();
	},
	render: function(){
		var compiled = _.template(contentPage.templateType, {
            title: projectTitle,
            category: projectCat,
            audioImg: '<img src='+ projectAud + '>',
            date: new Date()
        });
	}
}

contentPage.create(pageData);

