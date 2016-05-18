/* Your code starts here */
var app = {};

var value = '';
var work = {
    "#introquestion": {
        "title": "introquestion",
        "hash": "#introquestion",
        "category": "matahari_mailing1",
        "pageType": "multipleChoice",
        "mainImg": "images/photo_1910_dark.jpg",
        "questionText": "Do you know who sent the post?",
        "buttons": ["yes", "no"],
        "sqImage": "blank",
    },
    "#yes": {
        "title": "yes",
        "hash": "#yes",
        "category": "matahari_mailing1",
        "pageType": "questionBlank",
        "mainImg": "images/photo_1910_dark.jpg",
        "questionText": "Who sent the post?",
        "sqImage": "blank",
        "nextBool": true,
        "submitBtn": {
            "class": "submit",
            "text": "submit",
            "target": "matahari"
        },
        "btn": [{
            "text": "Hint",
            "target": "no"
        }]
    },
    "#no": {
        "title": "no",
        "hash": "#no",
        "category": "matahari_mailing1",
        "pageType": "noInfo",
        "mainImg": "images/photo_1910_dark.jpg",
        "sqImage": "blank",
        "text": "Ah, well then you may want to do a little research before accessing the Archives.",
        "nextBool": true,
        "btn": [{
            "text": "Hint 1",
            "target": "hint1"
        }, {
            "text": "Hint 2",
            "target": "hint2"
        }, {
            "text": "Hint 3",
            "target": "hint3"
        }],
    },
    "#hint1": {
        "title": "hint1",
        "hash": "#hint1",
        "category": "matahari_mailing1",
        "pageType": "noInfo",
        "mainImg": "images/photo_1910_dark.jpg",
        "sqImage": "blank",
        "text": "Relisten to the audio and look at the objects. Try searching for keywords like \"female traitor\" or \"prison.\"",
        "nextBool": true,
        "btn": [{
            "text": "Back",
            "target": "no"
        }, {
            "text": "Guess",
            "target": "yes"
        }],
    },
    "#hint2": {
        "title": "hint2",
        "hash": "#hint2",
        "category": "matahari_mailing1",
        "pageType": "noInfo",
        "mainImg": "images/photo_1910_dark.jpg",
        "sqImage": "blank",
        "text": "Perhaps you read in her letter, \"sold secrets to Germany.\" What does this make her?",
        "nextBool": true,
        "btn": [{
            "text": "Back",
            "target": "no"
        }, {
            "text": "Guess",
            "target": "yes"
        }],
    },
    "#hint3": {
        "title": "hint3",
        "hash": "#hint3",
        "category": "matahari_mailing1",
        "pageType": "noInfo",
        "mainImg": "images/photo_1910_dark.jpg",
        "sqImage": "blank",
        "text": "She mentions in her message some \"wartime secrets.\" Perhaps try that in combination with other search terms.",
        "nextBool": true,
        "btn": [{
            "text": "Back",
            "target": "no"
        }, {
            "text": "Guess",
            "target": "yes"
        }],
    },
    "#matahari": {
        "title": "matahari",
        "hash": "#matahari",
        "pageType": "text",
        "mainImg": "images/photo_1910.jpg",
        "header": "Mata Hari",
        "paragraph": "Your first mailing is from Mata Hari, a Dutch-born exotic dancer and courtesan who was accused of espionage during WWI. The French believed that she was responsible for selling wartime secrets to the Germans, but others believe that her only crime was being a scandalous woman in a time when tensions were high.",
        "link": "Is she guilty?<br><br>Your journey begins in the <a href=\"#archive\">ARCHIVES</a>.",
        "category": "matahari_mailing1",
        "sqImage": "blank",
        // "nextBool": true,
        // "btn": [{
        //     "text": "ARCHIVES",
        //     "target": "archive"
        // }]
    },
    "#archive": {
        "title": "archive",
        "hash": "#archive",
        "pageType": "archive",
        "nonArchiveItem": true,
    },
    "#about": {
        "title": "about",
        "hash": "#about",
        "pageType": "about",
        "mainImg": "images/postbox.jpg",
        "header": "Post from the Past",
        "paragraph": "Post from the Past (PFTP) is a mysterious monthly subscription box service in which you receive packages from people in the past. Hear their voices and uncover their stories through an immersive physical and digital journey.",
        "link": "Sign up to beta test at <a href=\"http://postfromthepast.net\" target=\"_blank\">postfromthepast.net</a>",
        "nonArchiveItem": true,
    },
    "#bottle": {
        "title": "bottle",
        "hash": "#bottle",
        "pageType": "multipleChoice",
        "mainImg": "images/bottle.png",
        "questionText": "What is the liquid inside?",
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
        "submitBtn": {
            "class": "submit",
            "text": "SUBMIT",
            "target": "otherink"
        }
    },
    "#otherink": {
        "title": "otherink",
        "hash": "#otherink",
        "pageType": "noInfo",
        "mainImg": "images/bottle.png",
        "text": "It might very well be invisible ink. That's certainly what the French thought she was found with this bottle of suspicious liquid.<br><br> Congrats - you've unlocked additional information on invisible ink.",
        "category": "matahari_mailing1",
        // "nextpage": "#ink",
        "sqImage": "blank",
        "nextBool": true,
        "btn": [{
            "text": "invisible ink",
            "target": "ink"
        }]
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
        "mainImg": "images/bottle.jpg",
        "header": "This is not poison, but...",
        "paragraph": "In 1899, when Zelle (who later became Mata Hari) and MacLeod’s children fell violently ill from complications relating to the treatment of syphilis contracted from their parents, though the family claimed they were poisoned by an irate servant. Their daughter, Jeanne survived, but their firstborn son, Norman died. Some sources[6] maintain that one of MacLeod's enemies may have poisoned a supper to kill both of their children. Many note this as a possible catalyst for the disintegration of their marriage as letters from Zelle to her father indicate that she blamed MacLeod for the supposed poisoning.",
        "link": "Read more at <a href=\"https://en.wikipedia.org/wiki/Mata_Hari\" target=\"_blank\">wikipedia.org</a>",
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
        "link": "Read more at <a href=\"https://www.wired.com/2011/04/revealed-skin-messages-invisible-ink-and-other-secret-wwi-spycraft/\" target=\"_blank\">wired.com</a>",
        "category": "matahari_mailing1",
        "sqImage": "blank",
        "nextBool": true,
        "btn": [{
            "class": "next",
            "text": ">",
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
        "link": "Read more at <a href=\"http://www.artofmanliness.com/2011/09/09/man-knowledge-the-history-of-invisible-ink/\" target=\"_blank\">artofmanliness.com</a>",
        "category": "matahari_mailing1",
        "sqImage": "blank",
        "nextBool": true,
        "btn": [{
            "class": "previous",
            "text": "<",
            "target": "ink"
        }, {
            "class": "next",
            "text": ">",
            "target": "ink3"
        }]
    },
    "#letter1": {
        "title": "letter1",
        "hash": "#letter1",
        "pageType": "audio",
        "audioFile": "audio/letter1.mp3",
        "category": "matahari_mailing1",
        "mainImg": "images/letter_close.jpg",
        "sqImage": "images/letter1_circle.png",
    },
    "#jewelry": {
        "title": "jewelry",
        "hash": "#jewelry",
        "pageType": "audio",
        "audioFile": "audio/jewelry.mp3",
        "category": "matahari_mailing1",
        "sqImage": "images/earring_circle.png",
        "mainImg": "images/earring.jpg"

    },
    "#sachet": {
        "title": "sachet",
        "hash": "#sachet",
        "pageType": "audio",
        "category": "matahari_mailing1",
        "sqImage": "images/sachet_circle.png",
        "mainImg": "images/sachet.jpg",
        "audioFile": "audio/sachet.mp3",
        "btn": {
            "text": "Play"
        }
    },
    "#money": {
        "title": "money",
        "hash": "#money",
        "pageType": "noInfo",
        "text": "Franc notes from circa 1900. No other info available at this time.",
        "category": "matahari_mailing1",
        "sqImage": "images/money_circle.png",
        "mainImg": "images/money.jpg"
    },
    "#key": {
        "title": "key",
        "hash": "#key",
        "pageType": "noInfo",
        "text": "These types of keys were characteristic of locked jewelry boxes in the early 1900s. No other info available at this time.",
        "category": "matahari_mailing1",
        "sqImage": "images/key_circle.png",
        "mainImg": "images/key.jpg"
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
    // if (location.hash == ''){
    //     location.hash = '';
    //     location.hash = '#archive';
    // } else if (location.hash == '#introquestion'){
    //     location.hash = '';
    //     location.hash = '#introquestion';
    // }
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
        '.genericBtn': function(){
            location.hash = '#' + this.id;
        },
        '.choiceBtn': function(e) {
            console.log(e.target);
            console.log("ID is: " + this.id);
            value = this.id; //e.target.id;
            var valNoPunc = value.replace(/[.,\'-\/#!%?\^&\*;:{}=\-_`~()]+/g, '');
            var valNoSpace = valNoPunc.replace(/\s+/g, '');
            location.hash = '#' + valNoSpace;
        },
        '.archiveBtn': function() {
            location.hash = '#archive';
        },
        '.aboutBtn': function() {
            location.hash = '#about';
        },
        '.next': function() {
            console.log("submitting response");
            location.hash = '#' + this.id;
        },
        '.previous': function() {
            console.log("submitting response");
            location.hash = '#' + this.id;
        },
        '.submit': function() {

            //change other to ink after ink info has been uncovered
            if (this.id == "ink") {
                if ('#bottle' in work) {
                    work['#bottle'].buttons[2] = 'ink';
                }
            }

            console.log("submitting response");
            location.hash = '#' + this.id;
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

    $("#audioFile").bind("ended", function() {
        $('.audioButton').text('PLAY').addClass('playAudio').removeClass('stopAudio');
        attachEvents();
    });

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

    var bgImg;
    if ('mainImg' in item) {
        bgImg = item.mainImg;
        item.mainImg = makeImageTag(item.mainImg);
    }

    var template = {
        create: function(templateName) {

            var tplToCompile = $("#tpl_" + templateName).html();
            var compiled = _.template(tplToCompile, item);
            $('#view').html(compiled);

            //clear background image
            $('body').css("backgroundImage", "none");

            if (templateName in template.addl) {
                template.addl[templateName]();
            }

            if (item.nextBool) {
                for (var i in item.btn) {
                    var button = template.makeButton(item.btn[i], item.btn[i].class);
                    button.appendTo('.page');
                }
            }

            attachEvents(item);
        },
        makeButton: function(btnInfo, btnClass) {

            if (typeof btnInfo === 'string' || btnInfo instanceof String) {
                btnInfo = {
                    text: btnInfo
                };
            }

            if ('class' in btnInfo) {
                btnClass = btnInfo.class;
            } else if (btnClass === undefined) {
                btnClass = 'genericBtn';
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

                    var button = template.makeButton(item.buttons[i], buttonClass);

                    button.appendTo('#choiceBtns');
                }

                //attach background image
                $('body').css("backgroundImage", "url(" + bgImg + ")")
                    .css("backgroundSize", "cover")
                    .css("text-align", "center");

            },
            audio: function() {
                console.log("Adding audio src " + item.audioFile);
                $('#audioFile').attr({
                    'src': item.audioFile
                });
                console.log("audio background image is: " + item.backgroundImg);

                //attach background image
                $('body').css("backgroundImage", "url(" + bgImg + ")")
                    .css("backgroundSize", "cover")
                    .css("text-align", "center");
            },
            questionBlank: function() {
                console.log("Adding submit btn");

                var buttonClass = "submit";

                var button = template.makeButton(item.submitBtn, buttonClass);

                button.appendTo('#fillInBlank');

                $('body').css("backgroundImage", "url(" + bgImg + ")")
                    .css("backgroundSize", "cover")
                    .css("text-align", "center");
            },
            noInfo: function() {
                $('body').css("backgroundImage", "url(" + bgImg + ")")
                    .css("backgroundSize", "cover")
                    .css("text-align", "center");
            }
        }

    };

    template.create(item.pageType);
    window.scrollTo(0, 0);
};

app.init();