/* Your code starts here */

var app = {};
var value = '';
var work = {
    "#archive": {
        "title": "archive",
        "pageType": "archive",
        "templateType": "tpl_archive",
        "nonArchiveItem": true
    },
    "#bottle": {
        "title": "bottle",
        "hash": "#bottle",
        "templateType": "tpl_multipleChoice",
        "pageType": "multipleChoice",
        "mainImg": "images/bottle.png",
        "questionText": "What is the liquid inside?",
        "buttonClass": ["poisonBtn", "makeupBtn", "otherBtn"],
        "buttonText": ["poison", "makeup", "other"],
        "category": "matahari_mailing1",
        "sqImage": "images/bottle_circle.png",
    },
    "#other": {
        "title": "other",
        "hash": "#other",
        "templateType": "tpl_questionBlank",
        "pageType": "questionBlank",
        "mainImg": "images/bottle.png",
        "questionText": "What is it then?",
        "category": "matahari_mailing1",
        "sqImage": "blank",
    },
    "#letter1": {
        "title": "letter1",
        "hash": "#letter1",
        "category": "matahari_mailing1",
        "sqImage": "images/letter1_circle.png",
    },
    "#jewelry": {
        "title": "jewelry",
        "hash": "#jewelry",
        "templateType": "tpl_audio",
        "category": "matahari_mailing1",
        "sqImage": "images/earring_circle.png",
        "mainImg": "images/earring_audio.png"

    },
    "#sachet": {
        "title": "sachet",
        "hash": "#sachet",
        "templateType": "tpl_audio",
        "pageType": "audio",
        "category": "matahari_mailing1",
        "sqImage": "images/sachet_circle.png",
        "audioImg": "images/sachet"
    },
    "#money": {
        "title": "money",
        "hash": "#money",
        "templateType": "tpl_noInfo",
        "pageType": "noInfo",
        "text": "No info available at this time.",
        "category": "matahari_mailing1",
        "sqImage": "images/money_circle.png",
        "mainImg": "images/money.png"
    },
    "#key": {
        "title": "key",
        "hash": "#key",
        "category": "matahari_mailing1",
        "sqImage": "images/key_circle.png"
    },
    "#photo": {
        "title": "photo",
        "hash": "#photo",
        "templateType": "tpl_text",
        "pageType": "text",
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

        renderPage(location.hash);
        var hashNoSymbol = location.hash;
        var tag = hashNoSymbol.replace(/\#+/g, '');
        console.log("This is the tag: " + tag);

        attachEvents();
    });
};

// A function where we keep all user's interaction listener (buttons, etc)
var attachEvents = function() {
    console.log('Attaching Events');

    var buttons = {
        '.choiceBtn': function(e) {
            value = e.target.innerHTML;
            var valNoPunc = value.replace(/[.,\'-\/#!%?\^&\*;:{}=\-_`~()]+/g, '');
            var valNoSpace = valNoPunc.replace(/\s+/g, '');
            location.hash = '#' + valNoSpace;

        },
        '.archiveBtn': function() {
            console.log('clicked');
            location.hash = '#archive';

        },
        '.backBtn': function() {
            location.hash = '#work';
        }
    };

    for (var key in buttons) {
        $(key).off('click').on('click', buttons[key]);
    }

};

/* functions to render different pages */

var renderPage = function(hash) {

    var makeImageTag = function(imgURL) {
        return '<img src=' + imgURL + '>';
    };

    var item = {};
    //if key for each item is hash...
    if (hash in work) {
        item = $.extend({}, work[hash]);
        console.log(value + ' matched to ' + work[hash].title); //work[i].title);
    }
    item.date = new Date();

    if ('mainImg' in item) {
        item.mainImg = makeImageTag(item.mainImg);
    }

    var template = {
        create: function(templateName) {

            var tplToCompile = $("#tpl_" + templateName).html();
            var compiled = _.template(tplToCompile, item);
            $('#view').html(compiled);

            if (templateName in template.addl) {
                template.addl[templateName]();
            }
        },
        addl: {
            archive: function() {
                for (var i in work) {
                    if (!work[i].nonArchiveItem && work[i].sqImage != 'blank') {
                        var img = $('<a href=' + work[i].hash + ' id=\"' + work[i].title + '\"><img src=' + work[i].sqImage + '></a>');
                        img.appendTo('#imageBlock');
                    }
                }
            },
            multipleChoice: function() {
                console.log("GOT HERE");

                for (var i in item.buttonText) {
                    var button = $('<button class=\"choiceBtn\">' + item.buttonText[i] + '</button>');
                    button.appendTo('#choiceBtns');
                }
            } //,
        }

    };

    template.create(item.pageType);

    window.scrollTo(0, 0);

};

app.init();