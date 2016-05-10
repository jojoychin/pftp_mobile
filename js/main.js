/* Your code starts here */
var app = {};

var value = '';
var work = {
    "#archive": {
        "title": "archive",
        "pageType": "archive",
        "nonArchiveItem": true
    },
    "#bottle": {
        "title": "bottle",
        "hash": "#bottle",
        "pageType": "multipleChoice",
        "mainImg": "images/bottle.png",
        "questionText": "What is the liquid inside?",
        //"buttonClass": ["poisonBtn", "makeupBtn", "otherBtn"],
        "buttons": ["poison", "makeup", "other"],
        "category": "matahari_mailing1",
        "sqImage": "images/bottle_circle.png",
    },
    "#other": {
        "title": "other",
        "hash": "#other",
        "pageType": "questionBlank",
        "mainImg": "images/bottle.png",
        "questionText": "What is it then?",
        "category": "matahari_mailing1",
        // "nextpage": "#ink",
        "sqImage": "blank",
        "btn": {
            "class":"submit",
            "text": "SUBMIT",
            "target": "ink"
        }
    },
    "#makeup": {
        "title": "makeup",
        "hash": "#makeup",
        "pageType": "audio",
        "mainImg": "images/bottle.png",
        "category": "matahari_mailing1",
        "sqImage": "blank",
        "audioFile": "audio/bottle.mp3"
    },
    "#poison": {
        "title": "poison",
        "hash": "#poison",
        "pageType": "text",
        "mainImg": "images/bottle.png",
        "header": "This is not poison, but...",
        "paragraph": "In 1899, when Zelle (who later became Mata Hari) and MacLeod’s children fell violently ill from complications relating to the treatment of syphilis contracted from their parents, though the family claimed they were poisoned by an irate servant. Their daughter, Jeanne survived, but their firstborn son, Norman died. Some sources[6] maintain that one of MacLeod's enemies may have poisoned a supper to kill both of their children. Many note this as a possible catalyst for the disintegration of their marriage as letters from Zelle to her father indicate that she blamed MacLeod for the supposed poisoning.",
        "link": "Read more at wikipedia.org",
        "category": "matahari_mailing1",
        "sqImage": "blank"
    },
    "#ink": {
        "title": "ink",
        "hash": "#ink",
        "pageType": "text",
        "mainImg": "images/french_invisibleink.jpg",
        "header": "Declassified WWI formula",
        "paragraph": "This German invisible ink formula, written in French and translated, is described in an Office of Navel Intelligence document dated June 1918. This shows that the French managed to crack the German formula during World War One.<br><br>Kept classified for 95 years, the document shows that invisible ink was made by mixing compressed aspirin with pure water...",
        "link": "Read more at wired.com",
        "category": "matahari_mailing1",
        "sqImage": "blank",
        "nextBool": true,
        "btn": [{
            "class":"next",
            "text": "next",
            "target": "ink2"
        }]
    },
    "#ink2": {
        "title": "ink2",
        "hash": "#ink2",
        "pageType": "text",
        "mainImg": "images/artofman_invisibleink.jpg",
        "header": "The History of Invisible Ink",
        "paragraph": "In April of this year, the CIA released its oldest classified documents and the last from the World War I era. Dating from 1917 and 1918, the papers mainly contain recipes for “secret writing”–instructions for agents of the Office of Naval Intelligence (the CIA did not yet exist) on how make invisible ink. Such a low-tech espionage method may seem quaint today, but invisible ink was once a very serious business and an important tool in a spy’s bag of tricks...",
        "link": "Read more at artofmanliness.com",
        "category": "matahari_mailing1",
        "sqImage": "blank",
        "nextBool": true,
        "btn": [{
            "class": "previous",
            "text": "previous",
            "target": "ink"
        }, {
            "class":"next",
            "text": "next",
            "target": "ink3"
        }]
    },
    "#letter1": {
        "title": "letter1",
        "hash": "#letter1",
        "pageType": "audio",
        "audioFile": "audio/letter1.mp3",
        "category": "matahari_mailing1",
        "mainImg": "images/letter.jpeg",
        "sqImage": "images/letter1_circle.png",
    },
    "#jewelry": {
        "title": "jewelry",
        "hash": "#jewelry",
        "pageType": "audio",
        "audioFile": "audio/jewelry.mp3",
        "category": "matahari_mailing1",
        "sqImage": "images/earring_circle.png",
        "mainImg": "images/earring_audio.png"

    },
    "#sachet": {
        "title": "sachet",
        "hash": "#sachet",
        "pageType": "audio",
        "category": "matahari_mailing1",
        "sqImage": "images/sachet_circle.png",
        "mainImg": "images/sachet_audio.png",
        "audioFile": "audio/sachet.mp3",
        "btn": {
            "text": "Play"
        }
    },
    "#money": {
        "title": "money",
        "hash": "#money",
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
        "pageType": "audio",
        "audioFile": "audio/photo_odeon.mp3",
        "mainImg": "images/photo_guimet.jpg",
        "category": "matahari_mailing1",
        "sqImage": "images/photo_circle.png",
    },
    "#photo2": {
        "title": "photo2",
        "hash": "#photo2",
        "pageType": "text",
        "header": "Mata Hari",
        "paragraph": "Margaretha Geertruida \"Margreet\" MacLeod (7 August 1876 – 15 October 1917), better known by the stage name Mata Hari, was a Dutch Frisian exotic dancer and courtesan who was convicted of being a spy[1] and executed by firing squad in France under charges of espionage for Germany during World War I.[2].",
        "link": "Read more at wikipedia.org",
        "mainImg": "images/photo_guimet.jpg",
        "category": "matahari_mailing1",
        "sqImage": "blank",
    }
};

app.init = function() {
    console.log('app init');
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
    });
};

// A function where we keep all user's interaction listener (buttons, etc)
var attachEvents = function(_item) {
    console.log('Attaching Events');

    var buttons = {
        '.choiceBtn': function(e) {
            console.log(e.target);
            console.log("ID is: " + this.id);
            value = this.id;//e.target.id;
            var valNoPunc = value.replace(/[.,\'-\/#!%?\^&\*;:{}=\-_`~()]+/g, '');
            var valNoSpace = valNoPunc.replace(/\s+/g, '');
            location.hash = '#' + valNoSpace;
        },
        '.archiveBtn': function() {
            location.hash = '#archive';
        },
        '.next': function() {
            console.log("submitting response");
            location.hash = '#'+this.id;
        },
        '.previous': function() {
            console.log("submitting response");
            location.hash = '#'+this.id;
        },
        '.submit': function() {
            console.log("submitting response");
            location.hash = '#'+this.id;
        },
        '.playAudio': function() {
            console.log("Attempting to play audio");
            var thisAudio = document.getElementById('audioFile');
            thisAudio.load();
            thisAudio.play();

            $('.audioButton').text('STOP').addClass('stopAudio').removeClass('playAudio');
            attachEvents();

        },
        '.stopAudio': function() {
            console.log("Attempting to stop audio");
            var thisAudio = document.getElementById('audioFile');
            thisAudio.pause();
            thisAudio.currentTime = 0;
            // thisAudio.stop();

            $('.audioButton').text('PLAY').addClass('playAudio').removeClass('stopAudio');
            attachEvents();
        }
    };

    for (var key in buttons) {
        $(key).off('click').on('click', buttons[key]);
    }

};

/* functions to render different pages */

var renderPage = function(hash) {

    var startAudio = null;
    var audioFiles = [];

    //function to make image tag
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

            if (item.nextBool){
                for (var i in item.btn){
                    var button = template.makeButton(item.btn[i], item.btn[i].class);
                    button.appendTo('.page');
                }
            }

            attachEvents(item);
        },
        makeButton: function(btnInfo, btnClass) {
        
            //var btnInfo = item.buttons[i];

            //var btnTarget = btnInfo.text;
            if (typeof btnInfo === 'string' || btnInfo instanceof String) {
                btnInfo = {
                    text: btnInfo
                };
            }

            //var btnClass = 

            if ('class' in btnInfo){
                btnClass = btnInfo.class;
            }else if (btnClass === undefined){
                btnClass = 'genericButton';
            }

            if (!('target' in btnInfo)) {
                btnInfo.target = btnInfo.text;
            };
            var made = $('<button />', {
                'class': btnClass,
                'text': btnInfo.text,
                'target': btnInfo.target,
                'id': btnInfo.target
            });
            return made;
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

                var buttonClass = "choiceBtn";

                for (var i in item.buttons) {
                    
                    var button = template.makeButton(item.buttons[i],buttonClass);

                    button.appendTo('#choiceBtns');
                }
            }, //,
            audio: function() {
                console.log("Adding audio src " + item.audioFile);
                $('#audioFile').attr({
                    'src': item.audioFile
                });
            },
            questionBlank: function() {
                console.log("Adding submit btn");

                var buttonClass = "submit";

                var button = template.makeButton(item.btn, buttonClass);

                button.appendTo('#fillInBlank');
            }
        }

    };

    template.create(item.pageType);
    // console.log("what is image?: "+item.mainImg);
    window.scrollTo(0, 0);
};

app.init();