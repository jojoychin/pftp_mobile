/* Your code starts here */

var app = {};
var value = '';
var work = {
    "#bottle": {   "title": "bottle",
        "hash": "#bottle",
        "templateType": "tpl_multipleChoice",
        "mainImg": "images/bottle.png",
        "questionText": "What is the liquid inside?",
        "buttonClass":["poisonBtn", "makeupBtn", "otherBtn"],
        "buttonText": ["poison", "makeup","other"],
        "category": "matahari_mailing1",
        "sqImage": "images/bottle_circle.png",
    },
    "#other": { 
        "title": "other",
        "hash": "#other",
        "templateType": "tpl_questionBlank",
        "mainImg": "images/bottle.png",
        "questionText": "What is it then?",
        "category": "matahari_mailing1",
        "sqImage": "blank",
    },
    "#letter1": {   "title": "letter1",
        "hash": "#letter1",
        "category": "matahari_mailing1",
        "sqImage": "images/letter1_circle.png",
    },
    "#jewelry": {   "title": "jewelry",
        "hash": "#jewelry",
        "templateType": "tpl_audio",
        "category": "matahari_mailing1",
        "sqImage": "images/earring_circle.png",
        "mainImg": "images/earring_audio.png"

    },
    "#sachet": {   "title": "sachet",
        "hash": "#sachet",
        "templateType": "tpl_audio",
        "category": "matahari_mailing1",
        "sqImage": "images/sachet_circle.png",
        "audioImg": "images/sachet"
    },
    "#money": {   "title": "money",
        "hash": "#money",
        "templateType": "tpl_noInfo",
        "text": "No info available at this time.",
        "category": "matahari_mailing1",
        "sqImage": "images/money_circle.png",
        "mainImg": "images/money.png"
    },
    "#key": {   "title": "key",
        "hash": "#key",
        "category": "matahari_mailing1",
        "sqImage": "images/key_circle.png"
    },
    "#photo": {
        "title": "photo",
        "hash": "#photo",
        "templateType": "tpl_text",
        "header": "Mata Hari",
        "paragraph": "Margaretha Geertruida \"Margreet\" MacLeod (7 August 1876 – 15 October 1917), better known by the stage name Mata Hari, was a Dutch Frisian exotic dancer and courtesan who was convicted of being a spy[1] and executed by firing squad in France under charges of espionage for Germany during World War I.[2].",
        "link": "Read more at wikipedia.org",
        "mainImg": "images/photo_guimet.jpg",
        "category": "matahari_mailing1",
        "sqImage": "images/photo_circle.png",
    }
};

app.init = function() {
    console.log('Your code starts here!');
    // deploy hash listener
    hashRouter();
    // Refresh hash
    location.hash = '';
    location.hash = '#archive';
};

// A function where we detect the change of '#' on the browser address field
var hashRouter = function() {
    $(window).off('hashchange').on('hashchange', function() {
        console.log('Current hash is ' + location.hash);
        if (location.hash == '#archive') {
            renderArchive();
        } else if (location.hash == '#about') {
            renderAbout();
        } else {
            renderProject(location.hash);
            var hashNoSymbol = location.hash;
            var tag = hashNoSymbol.replace(/\#+/g, '');
            console.log("This is the tag: "+tag);
        }
        attachEvents();
    });
};

// A function where we keep all user's interaction listener (buttons, etc)
var attachEvents = function() {
    console.log('Attaching Events');

    // project button
    $('.choiceBtn').off('click').on('click', function(e) {
        value = e.target.innerHTML;
        var valNoPunc = value.replace(/[.,\'-\/#!%?\^&\*;:{}=\-_`~()]+/g,'');
        var valNoSpace = valNoPunc.replace(/\s+/g, '');
        location.hash = '#'+valNoSpace;
    });

    $('.archiveBtn').off('click').on('click', function() {
        console.log('clicked');
        location.hash = '#archive';
    });

    $('.backBtn').off('click').on('click', function(){
        location.hash = '#work';
    });

    var findButton;
    var elements;
    var workImgs;

};

/*
	functions to render different pages
*/
function renderArchive () {
    var findHeight = $('#nav').height();
    console.log(findHeight);
    console.log('rendered work');
    // This is how we compile underscore template
    // Usually, it may be applied to other template brands as well
    var tplToCompile = $('#tpl_archive').html();
    var compiled = _.template(tplToCompile, {
        title: 'JOANNA CHIN',
        date: new Date(),
        projects: work
    });
    $('#view').html(compiled);

    for (var i in work) {
        if (work[i].sqImage != 'blank'){
            var img = $('<a href='+work[i].hash+' id=\"'+work[i].title+'\"><img src='+work[i].sqImage+'></a>');
            img.appendTo('#imageBlock');
        }
    }
    window.scrollTo(0, 0);
};

function renderProject(hash) {
    var projectCat;
    var projectImg;
    var projectTitle;
    var tempType;
    var tempBtnText = [];
    var tempBtnID = [];

    //if key for each item is hash...
            var item = work[hash];    
            console.log(value + ' matched to '+ work[hash].title);//work[i].title);

            tempType = item.templateType;//work[i].templateType;
            projectCat = item.category;//work[i].category;
            projectImg = item.mainImg;//work[i].audioImg;
            projectTitle = item.title;//work[i].title; 

    //get stuff from data base
    if (tempType == 'tpl_audio'){
        console.log("GOT HERE");
        var tplToCompile = $('#tpl_audio').html();
        var compiled = _.template(tplToCompile, {
            title: projectTitle,
            category: projectCat,
            mainImg: '<img src='+ projectImg + '>',
            date: new Date()
        });
        $('#view').html(compiled);
    }

    if (tempType == 'tpl_multipleChoice'){
        console.log("GOT HERE");
        var tplToCompile = $('#tpl_multipleChoice').html();
        var compiled = _.template(tplToCompile, {
            title: projectTitle,
            category: projectCat,
            mainImg: '<img src='+ projectImg + '>',
            questionText: item.questionText,
            buttonText: item.buttonText,
            buttonClass: item.buttonClass,
            date: new Date()
        });
        $('#view').html(compiled);

        for (var i in item.buttonText) {
        var button = $('<button class=\"choiceBtn\">'+item.buttonText[i]+'</button>');
        button.appendTo('#choiceBtns');
        }
    }

    if (tempType == 'tpl_questionBlank'){
        var tplToCompile = $('#tpl_questionBlank').html();
        var compiled = _.template(tplToCompile, {
            title: projectTitle,
            category: projectCat,
            mainImg: '<img src='+ projectImg + '>',
            questionText: item.questionText,
            date: new Date()
        });
        $('#view').html(compiled);
    }


    if (tempType == 'tpl_noInfo'){
        var tplToCompile = $('#tpl_noInfo').html();
        var compiled = _.template(tplToCompile, {
            title: projectTitle,
            category: projectCat,
            mainImg: '<img src='+ projectImg + '>',
            text: item.text,
            date: new Date()
        });
        $('#view').html(compiled);
    }

    if (tempType == 'tpl_text'){
        var tplToCompile = $('#tpl_text').html();
        var compiled = _.template(tplToCompile, {
            title: projectTitle,
            category: projectCat,
            mainImg: '<img src='+ projectImg + '>',
            header: item.header,
            paragraph: item.paragraph,
            link: item.link,
            date: new Date()
        });
        $('#view').html(compiled);
    }


    window.scrollTo(0, 0);

}

app.init();