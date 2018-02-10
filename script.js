window.addEventListener("load", init);

//---- HOUSE START POINTS --------------------------
var griffScore = 1500;
var huffScore = 1672;
var raveScore = 1600;
var slyScore = 900;
var ctx;

//---- BARS FOR HOUSE POINTS -----------------------
var griffBar;
var huffBar;
var raveBar;
var slyBar;

//---- POTIONS GAME VARS ---------------------------
var ingredients = ["snake", "slugs", "quills"];
var quantities = [3, 2, 1];
var state;

//---- LOCAL STORAGE BACKGROUND VARS ---------------
var houseBg = "#9966ff";
var getBg;


var knutsCurrency = 207897707;
var penceCurrency = 210006200;
var pounds;
var pence;
var galleons;
var sickles;
var knuts;


function init() {
    setPageBG();
    $("#sidebar").show("slide", { direction: "up" }, 1000);
    $('#houseBtn').click(housesPage);
    $('#classBtn').click(classesPage);
    $('#homeBtn').click(homePage);
    $('#societyBtn').click(societyPage);
    $('#potionBookBtn').click(potionsListPage);
    $('#spellBookBtn').click(spellsListPage);
    $('#settingsBtn').click(settingsPage);
    $('#mapBtn').click(mapPage);
    $('#eventBtn').click(eventsPage);
    $('#wikiBtn').click(currencyPage);
}

//     ******************************************
// --- *             HOME PAGE                  *---
//     ******************************************

function homePage() {
//change title ---------------------------------------------
    document.getElementById("title").textContent = "Wizard Central";
    document.getElementById("title").style.color = "#e3c431";
    setPageBG();
//hide scroll if visible ------------------------------------
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//if backingImg exists, drop it out & remove it
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#socMenu').length) {
        $("#socMenu").hide("fade", 1000, function () {
            $("#socMenu").remove();
        });
    }
    if ($('#playarea').length) {
        $("#playarea").hide("fade", 2000, function () {
            $("#playarea").remove();
        });
    } 
    if ($("#classBar").length) {
        $("#classBar").remove();
    }
    if ($("#houseBar").length) {
        $("#houseBar").remove();
    }
//fade the menu back in ------------------------------------
    $("#menu").show("fade", 3000);
//fade the smoke particles back in -------------------------
    $("#particles-js").show("fade", 2000);
}


//     ******************************************
// --- *               HOUSES                   * ---
//     ******************************************

//---- CREATES HOGWARTS HOUSE PAGE ------------------
function housesPage() {
    document.getElementById("title").textContent = "";
    setPageBG();
    //checks if scroll is on page. if it is, slide it off and empty it.
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($("#houseBar").length) {
        $("#houseBar").remove();
    }
//create empty div to add house columns in -----------------
    $('<div id="backingImg"></div>').appendTo("#wrapper");
    $('<div id="redsquare"></div><div id="yellowsquare"></div><div id="bluesquare"></div><div id="greensquare"></div>').appendTo('#backingImg');
    $('#redsquare').show("drop", { direction: "left" }, 1500);
    $('#yellowsquare').show("drop", { direction: "left" }, 1500);
    $('#bluesquare').show("drop", { direction: "right" }, 1500);
    $('#greensquare').show("drop", { direction: "right" }, 1500, function () {
//hide menu & particles-------------------------------------
        $("#menu").hide("fade");
        $("#particles-js").hide("fade");
//once new background is loaded, create the house buttons---
        $('<button id="griffBtn"></button>').appendTo("#redsquare");
        $('<button id="slithBtn"></button>').appendTo("#greensquare");
        $('<button id="huffBtn"></button>').appendTo("#yellowsquare");
        $('<button id="ravenBtn"></button>').appendTo("#bluesquare");
        $('<button id="houseCup"></button>').appendTo("#backingImg");
//fade buttons in -------------------------------------------
        $('#griffBtn').show("fade");
        $('#slithBtn').show("fade");
        $('#huffBtn').show("fade");
        $('#ravenBtn').show("fade");
        $('#houseCup').show("fade");
//add click event listeners to buttons-----------------------
        $('#griffBtn').click(griffindorPage);
        $('#slithBtn').click(slitherinPage);
        $('#huffBtn').click(hufflepuffPage);
        $('#ravenBtn').click(ravenclawPage);
        $('#houseCup').click(pointsPage);
    });
}

//---- CREATES HUFFLEPUFF PAGE ----------------------
function hufflepuffPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Hufflepuff";
    document.getElementById("title").style.color = "black";
    document.getElementById("wrapper").style.background = "#e3c431";
    //hide current content
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<img src="images/huff.png" id="crest"/>').appendTo("#scroll");
//creates cup link to house points page------------------
        $('<button id="huffCup"></button>').appendTo("#scroll");
        $('#huffCup').click(pointsPage);
//creates slideshow -------------------------------------
        $('<div id="slides" class="my-gallery swipeshow huffslides"><ul class="slides"><li class="slide"><img src="images/huff2.png" class="imgs"/></li><li class="slide"><img src="images/huff1.png" class="imgs"/></li><li class="slide"><img src="images/QuidPuff.jpg" class="imgs"/></li></ul><div class="dots"></div></div></div>').appendTo("#scroll");
        document.getElementById("slides").style.background = "rgba(150, 100, 0, 0.5)";
//creates text content ------------------------------------
        $("<div id='content'><div id='padout'><p>Hufflepuff is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. The emblematic animal is a badger, and yellow and black are its colours. The Head of Hufflepuff is Pomona Sprout and the Fat Friar is the House's patron ghost.</p><p>Hufflepuff corresponds roughly to the element of earth, and it is for that reason that the House colours were chosen: yellow represented wheat, while black was emblematic of soil. The Hufflepuff points hourglass contains yellow diamonds</p></div></div>").appendTo("#scroll");
        $(function() {
            $(".my-gallery").swipeshow();
            $dots: $("div.dots");
        });
        houseMenuBar();
    });
    
}

//---- CREATES GRYFFINDOR PAGE ----------------------
function griffindorPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Gryffindor";
    document.getElementById("title").style.color = "black";
    document.getElementById("wrapper").style.background = "#d22127";
    //hide current content
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<img src="images/griff.png" id="crest"/>').appendTo("#scroll");
//creates cup link to house points page------------------
        $('<button id="griffCup"></button>').appendTo("#scroll");
        $('#griffCup').click(pointsPage);
//creates slideshow -------------------------------------
       //creates slideshow -------------------------------------
        $('<div id="slides" class="my-gallery swipeshow griffslides"><ul class="slides"><li class="slide"><img src="images/gryffcommon.png" class="imgs"/></li><li class="slide"><img src="images/gryffcommon2.png" class="imgs"/></li><li class="slide"><img src="images/gryffquid.png" class="imgs"/></li></ul><div class="dots"></div></div></div>').appendTo("#scroll");
        document.getElementById("slides").style.background = "rgba(250, 0, 0, 0.5)";
//creates text content ------------------------------------
        $("<div id='content'><div id='padout'><p>Gryffindor is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Godric Gryffindor. The particular characteristics of studentsSorted into Gryffindor are courage, chivalry, and determination. The emblematic animal is a lion, and its colours are red and gold. Sir Nicholas de Mimsy-Porpington, also known as Nearly Headless Nick is the house ghost.</p><p>Gryffindor corresponds roughly to the element of fire, and it is for that reason that the colours red and gold were chosen to represent the HouseThe colour of fire corresponds to that of a lion as well, red representing the mane and tail and gold representing the coat.</p></div></div>").appendTo("#scroll");
        $(function () {
            $(".my-gallery").swipeshow();
            $dots: $("div.dots");
        });
        houseMenuBar();
    });
}

//---- CREATES SLITHERING PAGE ----------------------
function slitherinPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Slitherin";
    document.getElementById("title").style.color = "black";
    document.getElementById("wrapper").style.background = "#4ab44a";
    //hide current content
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<img src="images/slith.png" id="crest"/>').appendTo("#scroll");
//creates cup link to house points page------------------
        $('<button id="slithCup"></button>').appendTo("#scroll");
        $('#slithCup').click(pointsPage);
//creates slideshow -------------------------------------
        $('<div id="slides" class="my-gallery swipeshow griffslides"><ul class="slides"><li class="slide"><img src="images/slytherincommon2.png" class="imgs"/></li><li class="slide"><img src="images/slytherincommon.png" class="imgs"/></li><li class="slide"><img src="images/slytherinquid.png" class="imgs"/></li></ul><div class="dots"></div></div></div>').appendTo("#scroll");
        document.getElementById("slides").style.background = "rgba(100, 250, 100, 0.5)";
//creates text content ------------------------------------
        $("<div id='content'><div id='padout'><p>Slytherin is one of the four Houses at Hogwarts School of Witchcraft and Wizardry. Founded by Salazar Slytherin, the house is composed mostly of pure-blood students, due to its founder's mistrust of Muggle-borns. The house is traditionally home to students who exhibit such traits as cunning, resourcefulness, and ambition. Its emblematic animal is a snake and its colours are green and silver. The house ghost is the Bloody Baron and its gem is green.</p><p>Slytherin corresponds roughly with the element of water with serpents being commonly associated with the sea and lochs in western European mythology as well as serpents being physically fluid and flexible animals.The colours also correspond with waters around lakes and lochs often being green, and silver being often associated with grey rain water.</p></div></div>").appendTo("#scroll");
        $(function () {
            $(".my-gallery").swipeshow();
            $dots: $("div.dots");
        });
        houseMenuBar();
    });
}

//creates ravenclaw page ------------------------------
function ravenclawPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Ravenclaw";
    document.getElementById("title").style.color = "black";
    document.getElementById("wrapper").style.background = "#087fa9";
    //hide current content
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<img src="images/raven.png" id="crest"/>').appendTo("#scroll");
//creates cup link to house points page------------------
        $('<button id="ravenCup"></button>').appendTo("#scroll");
        $('#ravenCup').click(pointsPage);
//creates slideshow -------------------------------------
        $('<div id="slides" class="my-gallery swipeshow"><ul class="slides"><li class="slide"><img src="images/ravencommon2.png" class="imgs"/></li><li class="slide"><img src="images/ravencommon.png" class="imgs"/></li><li class="slide"><img src="images/ravenquid.png" class="imgs"/></li></ul><div class="dots"></div></div></div>').appendTo("#scroll");
        document.getElementById("slides").style.background = "rgba(0, 150, 250, 0.5)";
//creates text content ------------------------------------
        $("<div id='content'><div id='padout'><p>Ravenclaw is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Rowena Ravenclaw. Members of this house are characterised by their wit, learning, and wisdom. Its house colours are blue and bronze, and its symbol is an eagle. The house ghost, who in life was the daughter of the house's founder Rowena Ravenclaw, is the Grey Lady.</p><p>Ravenclaw roughly corresponds with the element of air; the House colours blue and bronze were chosen to represent the sky and eagle feathers respectively, both having much to do with air.</p></div></div>").appendTo("#scroll");
        $(function() {
            $(".my-gallery").swipeshow();
            $dots: $("div.dots");
        });
        houseMenuBar();
    });
}

function houseMenuBar(){
    if (!$("#houseBar").length) {
        $("<div id='houseBar'><ul id='housesMenu'><li>Houses<ul><li id='houseMenuBtn'>Houses</li><li id='gryffMenuBtn'>Gryffindor</li><li id='huffMenuBtn'>Hufflepuff</li><li id='raveMenuBtn'>Ravenclaw</li><li id='slithMenuBtn'>Slitherin</li></ul></li></ul></div>").appendTo("#wrapper");
        $("#housesMenu").menu({
            position: {
                my: "top",
                at: "left"
            }
        });

        $("#houseBar").show( function(){
            $('#houseMenuBtn').click(housesPage);
            $('#gryffMenuBtn').click(griffindorPage);
            $('#huffMenuBtn').click(hufflepuffPage);
            $('#raveMenuBtn').click(ravenclawPage);
            $('#slithMenuBtn').click(slitherinPage);
        });
        
    }
}


//     ******************************************
// --- *                POINTS                  * ---
//     ******************************************

//---- CREATES CONTENT FOR POINTS PAGE---------------
function pointsPage() {
//change title to empty string-----------------------------
    document.getElementById("title").textContent = "";
    setPageBG();
//checks if scroll is on page. if it is, slide it off and empty it.
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($("#houseBar").length) {
        $("#houseBar").remove();
    }
//create empty div to add house columns in -----------------
	
    $('<div id="backingImg2"></div>').appendTo("#wrapper");
//create house columns and append them to the backingImg div
    $('<div id="redcol"></div><div id="yellowcol"></div><div id="bluecol"></div><div id="greencol"></div>').appendTo('#backingImg2');
    $('#redcol').show("drop", { direction: "up" }, 1500);
    $('#yellowcol').show("drop", { direction: "up" }, 1500);
    $('#bluecol').show("drop", { direction: "up" }, 1500);
    $('#greencol').show("drop", { direction: "up" }, 1500, function(){ 
//creates help/info pop up----------------------------------
        $('<button id="helpBtn">?</Button>').appendTo('#greencol');
        $("<div id='helpDialog'><img src='images/pointInfo.png'/></div>").appendTo('#greencol');
// initialises the dialog box -------------------------------
        $( "#helpDialog" ).dialog({
            autoOpen: false,
            position: { my: "center", at: "center", of: "#wrapper" },
            minHeight: 450,
            minWidth: 600
        });
//disables background & adds overlay over background---------
        $("div#helpDialog").dialog({
            open: function (event, ui) {
                $(".ui-widget-overlay").css({
                    opacity: 0.4,
                    filter: "Alpha(Opacity=100)",
                    backgroundColor: "black"
                });
            },
            modal: true
        });
//open/close dialog ------------------------------------------
        $("#helpBtn").click(
            function() {
                $("#helpDialog").dialog("open");
                console.log("click");
            });
        $("div#helpDialog").click(
            function() {
                $("#helpDialog").dialog("close");
            });
    });
//create the thinner scroll and slide it in ontop ----------
    $('<div id="smallScroll"><div/>').appendTo('#backingImg2');
    $('#smallScroll').show("slide", 1500);
    $('<button id="griffPointsBtn"></button>').appendTo("#smallScroll");
	$('#griffPointsBtn').click(griffindorPage);
    $('<button id="slyPointsBtn"></button>').appendTo("#smallScroll");
	$('#slyPointsBtn').click(slitherinPage);
    $('<button id="huffPointsBtn"></button>').appendTo("#smallScroll");
	$('#huffPointsBtn').click(hufflepuffPage);
    $('<button id="ravePointsBtn"></button>').appendTo("#smallScroll");
    $('#ravePointsBtn').click(ravenclawPage);
    
    //create the bars ----------
    $('<div id="griffBar" class="bar"><div></div><div></div><img src="images/bar.png" class="barimg"/></div>').appendTo('#smallScroll');
    $('<div id="huffBar" class="bar"><div></div><div></div><img src="images/bar.png" class="barimg"/></div>').appendTo('#smallScroll');
    $('<div id="raveBar" class="bar"><div></div><div></div><img src="images/bar.png" class="barimg"/></div>').appendTo('#smallScroll');
    $('<div id="slyBar" class="bar"><div></div><div></div><img src="images/bar.png" class="barimg"/></div>').appendTo('#smallScroll');
    
    griffBar = document.getElementById("griffBar");
    griffBar.childNodes[0].style.background = "#d22127";
    griffBar.childNodes[1].style.background = "#8b1c20";
    huffBar = document.getElementById("huffBar");
    huffBar.childNodes[0].style.background = "#e3c431";
    huffBar.childNodes[1].style.background = "#a69025";
    raveBar = document.getElementById("raveBar");
    raveBar.childNodes[0].style.background = "#087fa9";
    raveBar.childNodes[1].style.background = "#0e5770";
    slyBar = document.getElementById("slyBar");
    slyBar.childNodes[0].style.background = "#4ab44a";
    slyBar.childNodes[1].style.background = "#307c30";
    
//creates score for Gryffindor ----------	
	$('<p id="griffPoints"></p>').appendTo("#smallScroll");
	document.getElementById("griffPoints").textContent = griffScore;
	randomGriffPoints();
	
//creates score for Hufflepuff ----------	
	$('<p id="huffPoints"></p>').appendTo("#smallScroll");
	document.getElementById("huffPoints").textContent = huffScore;
	randomHuffPoints();
	
//creates score for Ravenclaw ----------	
	$('<p id="ravePoints"></p>').appendTo("#smallScroll");
	document.getElementById("ravePoints").textContent = raveScore;
	randomRavePoints();
	
//creates score for Slytherin ----------	
	$('<p id="slyPoints"></p>').appendTo("#smallScroll");
	document.getElementById("slyPoints").textContent = slyScore;
	randomSlyPoints();	
}

function appendGriffPoints(point){
	griffScore += point;
	document.getElementById("griffPoints").textContent = griffScore;
    
    updateBars();
}
//---- RANDOM NUMBERS FOR POINTS PAGE----------------
function randomGriffPoints() {
	var point = Math.floor((Math.random() * 10) +1);
    var time = Math.floor((Math.random() * 4) +1);
	appendGriffPoints(point);
	setTimeout(function(){runGriffInterval(); }, (time * 1000));
}

function appendHuffPoints(point){
	huffScore += point;
	document.getElementById("huffPoints").textContent = huffScore;
    
    updateBars();
}
//---- RANDOM NUMBERS FOR POINTS PAGE----------------
function randomHuffPoints() {
	var point = Math.floor((Math.random() * 10) +1);
    var time = Math.floor((Math.random() * 4) +1);
	appendHuffPoints(point);
	setTimeout(function(){runHuffInterval(); }, (time * 1000));
}

function appendRavePoints(point){
	raveScore += point;
	document.getElementById("ravePoints").textContent = raveScore;
    
    updateBars();
}
//---- RANDOM NUMBERS FOR POINTS PAGE----------------
function randomRavePoints() {
	var point = Math.floor((Math.random() * 10) +1);
    var time = Math.floor((Math.random() * 4) +1);
	appendRavePoints(point);
    setTimeout(function(){runRaveInterval(); }, (time * 1000));
}

function appendSlyPoints(point){
	slyScore += point;
	document.getElementById("slyPoints").textContent = slyScore;   
    updateBars();
}
//---- RANDOM NUMBERS FOR POINTS PAGE----------------
function randomSlyPoints() {
	var point = Math.floor((Math.random() * 10) +1);
    var time = Math.floor((Math.random() * 4) +1);
	appendSlyPoints(point);
	setTimeout(function(){runSlyInterval(); }, (time * 1000));
}

function runGriffInterval(){
	randomGriffPoints();
}
function runHuffInterval(){
	randomHuffPoints();
}
function runRaveInterval(){
	randomRavePoints();
}
function runSlyInterval(){
	randomSlyPoints();
}

function updateBars() {
    var total = griffScore + huffScore + raveScore + slyScore;
    var griffProp = (griffScore / total).toFixed(2) * 100;
    var huffProp = (huffScore / total).toFixed(2) * 100;
    var raveProp = (raveScore / total).toFixed(2) * 100;
    var slyProp = (slyScore / total).toFixed(2) * 100;
    
    var arr = [griffProp, huffProp, raveProp, slyProp];
    var i = arr.indexOf(Math.max(...arr));
    griffBar.style.boxShadow = "";
    huffBar.style.boxShadow = "";
    raveBar.style.boxShadow = "";
    slyBar.style.boxShadow = "";
    switch(i) {
        case 0:
            griffBar.style.boxShadow = "-3px -3px 6px #d22127, 3px 3px 6px #d22127";
            break;
        case 1:
            huffBar.style.boxShadow = "-3px -3px 6px #e3c431, 3px 3px 6px #e3c431";;
            break;
        case 2:
            raveBar.style.boxShadow = "-3px -3px 6px #087fa9, 3px 3px 6px #087fa9";
            break;
        case 3:
            slyBar.style.boxShadow = "-3px -3px 6px #4ab44a, 3px 3px 6px #4ab44a";
            break;
    }
    
    griffBar.childNodes[0].style.width = griffProp + "%";
    huffBar.childNodes[0].style.width = huffProp + "%";
    raveBar.childNodes[0].style.width = raveProp + "%";
    slyBar.childNodes[0].style.width = slyProp + "%";
    
    var griffProg = ((griffScore % 1000) / 1000).toFixed(2) * 100;
    var huffProg = ((huffScore % 1000) / 1000).toFixed(2) * 100;
    var raveProg = ((raveScore % 1000) / 1000).toFixed(2) * 100;
    var slyProg = ((slyScore % 1000) / 1000).toFixed(2) * 100;
    
    griffBar.childNodes[1].style.width = griffProg + "%";
    huffBar.childNodes[1].style.width = huffProg + "%";
    raveBar.childNodes[1].style.width = raveProg + "%";
    slyBar.childNodes[1].style.width = slyProg + "%";
}
//END OF POINTS


//     ******************************************
// --- *               CLASSES                  * ---
//     ******************************************

//---- CREATES THE MENU FOR THE CLASSES--------------
function classesPage() {
//change title ---------------------------------------------
    document.getElementById("title").textContent = "Classes";
    document.getElementById("title").style.color = "#e3c431";
    document.getElementById("wrapper").style.background = 'url("images/DADA02.jpg")';
//hide scroll if visible ------------------------------------
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($("#classBar").length) {
        $("#classBar").remove();
    }
//if backingImg exists, drop it out & remove it
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
//fade the menu out ------------------------------------
    $("#menu").hide("fade", 1000);
//fade the smoke particles out -------------------------
    $("#particles-js").hide("fade", 2000);
//create div to add buttons on-------------------------
    $("<div id='classMenu'></div>").appendTo("#main");
//create buttons----------------------------------------
    $('<button id="potionsBtn"></button>').appendTo('#classMenu');
    $('<button id="herbologyBtn"></button>').appendTo('#classMenu');
    $('<button id="charmsBtn"></button>').appendTo('#classMenu');
    $('<button id="transfigBtn"></button>').appendTo('#classMenu');
    $('<button id="flyingBtn"></button>').appendTo('#classMenu');
    $('<button id="historyBtn"></button>').appendTo('#classMenu');
    $('<button id="astronomyBtn"></button>').appendTo('#classMenu');
    $('<button id="datdaBtn"></button>').appendTo('#classMenu');
//fade buttons in----------------------------------------
    $("#potionsBtn").show("fade", 3000);
    $("#herbologyBtn").show("fade", 3000);
    $("#charmsBtn").show("fade", 3000);
    $("#transfigBtn").show("fade", 3000);
    $("#flyingBtn").show("fade", 3000);
    $("#historyBtn").show("fade", 3000);
    $("#astronomyBtn").show("fade", 3000);
    $("#datdaBtn").show("fade", 3000);
//add click event listeners to buttons-------------------
    $("#potionsBtn").click(potionsPage);
    $("#herbologyBtn").click(herbologyPage);
    $("#charmsBtn").click(charmsPage);
    $("#transfigBtn").click(transfigPage);
    $("#flyingBtn").click(flyingPage);
    $("#historyBtn").click(historyPage);
    $("#astronomyBtn").click(astroPage);
    $("#datdaBtn").click(defencePage);
}

function potionsPage() {
//---- CHANGE TITLE ---------------------------------
    document.getElementById("title").textContent = "Potions";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//---- CREATE NEW CONTENT ---------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);    
        $('<button id="potionsBook"></button>').appendTo("#scroll");
        $("#potionsBook").click(potionsListPage);
        
//---- VIDEO CONTENT --------------------------------
        $("<video id='videoshow' autoplay controls><source src='videos/potions.mp4' type='video/mp4'></video>").appendTo("#scroll");
//---- CREATE TEXT CONTENT --------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>At Hogwarts School of Witchcraft and Wizardry, Potions is a required subject for students, from first year to fifth year. Potion recipes can be found in many books, including the books the students at Hogwarts use in their classes, but the intricacies of timing, ageing, stirring techniques, and bottling which are much more difficult to learn without the mentoring of the experienced masters. Certain ingredients can be found in the cupboard in the classroom, but others have to be bought before the start of the year at the apothecary. Around 1981, Severus Snape became the professor of Potions at Hogwarts; he served as the school's potions professor through 1996, when he was replaced by Horace Slughorn.</p><p class='dropcap'>Ordinary Wizarding Level examinations are taken at the end of a student's fifth year; as such students are spent learning Ordinary Wizarding Level potions and possibly revisiting the past four years of lessons. As part of their Potions O.W.L., students must sit a written exam one of the questions asks to describe Polyjuice Potion and its purpose and after students must complete a practical exam. Professor Snape mentions that achieving a high mark at Ordinary Wizarding Level is difficult, which was later demonstrated in 1996, when only twelve students reached the required level to advance to N.E.W.T.</p></div>").appendTo("#padout");
        $("<div id='curriculumText'><ul><li>Aconite, bezoars, some basic details on preparation of the Draught of Living Death such as what would be created if powdered root of asphodel was added to an Infusion of Wormwood, and the difference between Monkshood and Wolfbane.</li><li>Types of Cauldrons</li><li>Types of Vials</li><li>Cure for Boils</li><li>Forgetfulness Potion</li><li>Antidote to Common Poisons</li><li>Herbicide Potion</li><li>Wideye Potion</li><li>Wiggenweld Potion</li><li>Collecting the ingredients for Wiggenweld Potion</li><li>The 12 uses of dragon blood</li><li>Potion Ingredients such as: Moly, Dittany, Flobberworm Mucus, Wiggentree bark, Asphodel, Puffapod spores, and Moondew</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });        
}
//---- PROFESSOR CARD ANIMATION ---------------------
function snapeClick(){
    $('<div id="filter"></div>').appendTo("#scroll");
    $("#snapeCardSprite").animate({
        height: "431px",
        width: "456px",
        left: "+=195",
        top: "+=30"
    }, 1000, function(){
        $("#snapeCardSprite").animateSprite({
            fps: 15,
            animations: {
                flip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },
            loop: false,
        });
        $("#snapeCardSprite").unbind("click", handler);
    });
    $('<button id="close"></button>').appendTo("#filter");
    $('#close').click(function(){
        $('#snapeCardSprite').hide();
        $('#filter').hide("fade",function(){
            $('#filter').remove();
            $('#snapeCardSprite').remove();
            $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
            $('#snapeCardSprite').click(snapeClickCall);
        });
    });
}
function snapeClickCall(){
    snapeClick();
}

function herbologyPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Herbology";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);
    //creates slideshow -------------------------------------
        $("<video id='videoshow' autoplay controls><source src='videos/herbology.mp4' type='video/mp4' muted></video>").appendTo("#scroll");
    //creates text content ------------------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>Herbology is a mandatory class at Hogwarts for the first five years of a student's education. Students spend class time learning about the different varieties of magical plants that exist. The further into a student's education the more difficult and dangerous the plants become.</p><p class='dropcap'>In the fifth year students take Ordinary Wizarding Level examinations, much of the year is spent working with a variety of more dangerous plants like the Fanged Geranium, as well as revisiting the past four years of lessons. As part of their Herbology O.W.L, students must sit a written exam, and then complete a practical exam, during which the students work with a wide selection of plants.</p></div>").appendTo("#padout");
        $("<div id='curriculumText'><ul><li>Fire-Making Spell</li><li>Venomous Tentacula (Not practically)</li><li>Spiky Bush</li><li>Bouncing Bulb</li><li>Severing Charm</li><li>Puffapods</li><li>Moly</li><li>Asphodel</li><li>Dried Nettles</li><li>Dittany</li><li>Wormwood</li><li>Mandrake Root</li><li>Aconite</li><li>Lumos Solem</li><li>Devil's Snare</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });
           
}

function charmsPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Charms";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);
        $('<button id="potionsBook"></button>').appendTo("#scroll");
         $("#potionsBook").click(spellsListPage);
    //creates slideshow -------------------------------------
        $("<video id='videoshow' autoplay controls muted><source src='videos/charms.mp4' type='video/mp4'></video>").appendTo("#scroll");
    //creates text content ------------------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>Charms is a required subject for all students in their first five years at Hogwarts School of Witchcraft and Wizardry. The spells learned in Charms class are taken from textbooks. Students are taught specific wand movements and proper pronunciation. Often students partner up in class to experiment on one another. Charms was Hermione Granger's favourite subject until she started Arithmancy in 1993.</p><p class='dropcap'>Ordinary Wizarding Level examinations are taken at the end of a student's fifth year; as such students are spent learning Ordinary Wizarding Level potions and possibly revisiting the past four years of lessons. As part of their Potions O.W.L., students must sit a written exam one of the questions asks to describe Polyjuice Potion and its purpose and after students must complete a practical exam. Professor Snape mentions that achieving a high mark at Ordinary Wizarding Level is difficult, which was later demonstrated in 1996, when only twelve students reached the required level to advance to N.E.W.T.</p></div>").appendTo("#padout");
        $("<div id='curriculumText'><ul><li>Levitation Charm</li><li>Wand-Lighting Charm</li><li>Lumos Solem</li><li>Fire-Making Spell</li><li>Softening Charm</li><li>Severing Charm</li><li>Unlocking Charm</li><li>Locking Spell</li><li>Mending Charm</li><li>Make a pineapple dance across a desk</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });
           
}

function transfigPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Transfiguration";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);
    //creates slideshow -------------------------------------
        $("<video id='videoshow' autoplay controls muted><source src='videos/transfiguration.mp4' type='video/mp4'></video>").appendTo("#scroll");
    //creates text content ------------------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>Transfiguration is a required subject for all first year to fifth year students, with the option of a N.E.W.T. (Nastily Exhausting Wizarding Test) course in sixth and seventh year. Minerva McGonagall was the Transfiguration Professor from 1956 until 1998, the year in which she became Headmistress of the school. Before her, Albus Dumbledore taught Transfiguration. It's unknown who became the Transfiguration professor after she became Headmistress of Hogwarts. McGonagall believes Transfiguration to be more elegant and superior to other types of magic.</p><p class='dropcap'>Students practice actual transfigurations during classes. Accidents sometimes result in partial transfigurations and theoretical homework is sometimes assigned. The further into a student's education the more difficult the classwork and homework becomes.</p><p class='dropcap'>In fifth year students take the Ordinary Wizarding Level examination, much of the year is spent learning Ordinary Wizarding Level material, as well as revisiting the past four years of lessons. As part of their Transfiguration O.W.L., students must sit a written exam, and then complete a practical exam, one of the questions on the written exam asks the definition of Switching spells and one aspect of the practical is Vanishment. In order to advance to N.E.W.T.-level for the final two years of education a student must achieve a high O.W.L. score of either 'Outstanding' or 'Exceeds Expectations' on their exam.</p><p class='dropcap'>Like charms work, Transfiguration is achieved through concentration, precise wand movements, and the proper pronunciation of an incantation. However it is generally more difficult than Charms and requires great effort.</p></div>").appendTo("#padout");
        $("<div id='curriculumText'><ul><li>The alphabet</li><li>The transformation formula, which is that the intended transformation is directly influenced by bodyweight (a), viciousness (v), wand power (w), concentration (c), and a fifth unknown variable (Z)</li><li>Desk into Pig (not practically)</li><li>Match to needle</li><li>Switching Spell</li><li>Mice to Snuffboxes</li><li>Avifors Spell</li><li>Small creature to matchbox</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });
           
}

function flyingPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Flying";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);
    //creates slideshow -------------------------------------
        $("<video id='videoshow' autoplay controls muted><source src='videos/flying.mp4' type='video/mp4'></video>").appendTo("#scroll");
    //creates text content ------------------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>Flying, also known as Broom Flight Class, is a subject taught at Hogwarts School of Witchcraft and Wizardry. It is taught by Madam Hooch to first-years only. The subject teaches students how to flybroomsticks. In some lessons, the use of enchanted rings was used to guide flight.</p>").appendTo("#padout");
        //On the subject PDF there's no curriculum for flying class we could maybe make something up.
		$("<div id='curriculumText'><ul><li>The alphabet</li><li>The transformation formula, which is that the intended transformation is directly influenced by bodyweight (a), viciousness (v), wand power (w), concentration (c), and a fifth unknown variable (Z)</li><li>Desk into Pig (not practically)</li><li>Match to needle</li><li>Switching Spell</li><li>Mice to Snuffboxes</li><li>Avifors Spell</li><li>Small creature to matchbox</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });      
}

function historyPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "History of Magic";
    document.getElementById("title").style.color = "black";
    //document.getElementById("wrapper").style.background = "#e3c431";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);
    //creates slideshow -------------------------------------
        $("<video id='videoshow' autoplay controls muted><source src='videos/potions.mp4' type='video/mp4'></video>").appendTo("#scroll");
    //creates text content ------------------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>History of Magic is a core class and subject taught at Hogwarts School of Witchcraft and Wizardry. This class is a study of magical history. This is one of the subjects where the use of magic practically isn't necessary. History of Magic is taught from the first year to the fifth, with the option of N.E.W.T.courses in sixth and seventh year.</p><p class='dropcap'>Students practice actual transfigurations during classes. Accidents sometimes result in partial transfigurations and theoretical homework is sometimes assigned. The further into a student's education the more difficult the classwork and homework becomes.</p><p class='dropcap'>The lesson plan usually consists of lectures on the 'History of Wizards and the Magical World' (in which goblin rebellions appear most memorably). This class is similar to the study of History in the Muggle World, as particular emphasis is placed upon remembering dates, names and events.</p></div>").appendTo("#padout");
        $("<div id='curriculumText'><ul><li>Gargoyle Strike of 1911</li><li>Soap Blizzard of 1378</li><li>Werewolf Code of Conduct</li><li>Emeric the Evil</li><li>Uric the Oddball</li><li>Gaspard Shingleton</li><li>Elfric the Eager</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });  
}

function astroPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Astronomy";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);
    //creates slideshow -------------------------------------
        $("<video id='videoshow' autoplay controls muted><source src='videos/potions.mp4' type='video/mp4'></video>").appendTo("#scroll");
    //creates text content ------------------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>Astronomy lessons are spent learning the names of stars and the movements of planets. It is a required class for the first five years of study. And is optional in the last two.</p>").appendTo("#padout");
        //On the subject PDF there's no curriculum for flying class we could maybe make something up.
		$("<div id='curriculumText'><ul><li>During the first year of studies at Hogwarts, students must study the night skies through their telescopes every Wednesday at midnight and learn the different names of the stars and the movements of the planets.</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });      
}

function defencePage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "D.A.T.D.A";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<div id="snapeCardSprite"></div>').appendTo("#scroll");
        $('#snapeCardSprite').click(snapeClick);
    //creates slideshow -------------------------------------
        $("<video id='videoshow' autoplay controls muted><source src='videos/DADA.mp4' type='video/mp4'></video>").appendTo("#scroll");
    //creates text content ------------------------------------
        $("<div id='content'><div id='padout'></div></div>").appendTo("#scroll");
        $("<button id='about'>About</button>").appendTo("#padout");
        $("<button id='curriculum'>Curriculum</button>").appendTo("#padout");
        $("#about").click(aboutSwap);
        $("#curriculum").click(curriculumSwap); 
        $("<div id='aboutText'><p class='dropcap'>Defence Against the Dark Arts (sometimes written as DADA) is a core class and subject taught at Hogwarts School of Witchcraft and Wizardry. In this class students learn how to magically defend themselves against Dark Creatures, the Dark Arts, and other dark charms.</p><p class='dropcap'> Offensive magic is also taught in this class, such as how to duel, which requires the use of both offensive and defensive magic.</p></div>").appendTo("#padout");
        $("<div id='curriculumText'><ul><li><strong>Dark creatures</strong></li><li>Curing werewolf bites</li><li>Gnomes</li><li>Doxies</li><li>Snails</li><li>Imps</li><li>Bowtruckles</li><li>Ghosts</li><li>Gargoyles</li><li>Hags</li><li>Fire Crabs</li><li>Gytrashes</li><li><strong>Spells</strong></li><li>Curse of the Bogies</li><li>Knockback jinx</li><li>Vermillious</li><li>Verdimillious</li><li>Wand-Lighting Charm</li><li>Smokescreen Spell</li><li>Green Sparks</li><li>Red Sparks</li><li>Periculum</li></ul></div>").appendTo("#padout");
        classMenuBar();
       });     
}

function aboutSwap(){
    $("#aboutText").show("fade");
    $("#curriculumText").hide("fade");
    $("#about").css( "color", "rgba(0, 0, 0, 0.5)");
    $("#curriculum").css( "color", "rgba(0, 0, 0, 1)" );
}

function curriculumSwap(){
    $("#aboutText").hide("fade");
    $("#curriculumText").show("fade");
    $("#about").css( "color", "rgba(0, 0, 0, 1)" );
    $("#curriculum").css( "color", "rgba(0, 0, 0, 0.5)" );
}

function classMenuBar(){
    if (!$("#classBar").length) {
    $("<div id='classBar'><ul id='classesMenu'><li>Classes<ul><li id='classMenuBtn'>Classes Page</li><li id='potMenuBtn'>Potions</li><li id='herbMenuBtn'>Herbology</li><li id='charmMenuBtn'>Charms</li><li id='transMenuBtn'>Transfiguration</li><li id='flyMenuBtn'>Flying</li><li id='hisMenuBtn'>History Of Magic</li><li id='astMenuBtn'>Astronomy</li><li id='dataMenuBtn'>Defence Against the Dark Arts</li></ul></li></ul></div>").appendTo("#wrapper");
    $("#classesMenu").menu({
        position: {
            my: "top",
            at: "left"
        }
    });

    $("#classBar").show( function(){
    $('#classMenuBtn').click(classesPage);
    $('#potMenuBtn').click(potionsPage);
    $('#herbMenuBtn').click(herbologyPage);
    $('#charmMenuBtn').click(charmsPage);
    $('#transMenuBtn').click(transfigPage);
    $('#flyMenuBtn').click(flyingPage);
    $('#hisMenuBtn').click(historyPage);
    $('#astMenuBtn').click(astroPage);
    $('#dataMenuBtn').click(defencePage);
        });
    }
}


//     ******************************************
// --- *               SOCIETIES                * ---
//     ******************************************

//---- CREATES MAIN MENU FOR SOCIETIES --------------
function societyPage() {
    document.getElementById("title").textContent = "Societies Board";
    document.getElementById("title").style.color = "#e3c431";
    document.getElementById("wrapper").style.background = 'url("images/board.jpg")';
//hide scroll if visible ------------------------------------
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//if backingImg exists, drop it out & remove it
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
//fade the menu out ------------------------------------
    $("#menu").hide("fade", 1000);
//fade the smoke particles out -------------------------
    $("#particles-js").hide("fade", 2000);
//create the container for the buttons to go in    
    $('<div id="socMenu"></div>').appendTo('#main');
    $('#socMenu').show("fade", 2000, function(){
//creates the gobstones poster button ------------------
        $('<button id="gobBtn"></button>').appendTo('#socMenu');
        $('#gobBtn').show("fade", 1000);
//creates gobstones dialog pop up----------------------
        $("<div id='gobDialog'>Gobstone's Club</div>").appendTo('#socMenu');
        $( "#gobDialog" ).dialog({
            autoOpen: false
        });
        $( "#gobDialog" ).dialog({
            position: { my: "center", at: "bottom", of: "#gobBtn" }
        });
        $("#gobBtn").hover(
            function() {
                $("#gobDialog").dialog("open");
            },
            function() {
                $("#gobDialog").dialog("close");
            }
        );
        $("#gobBtn").click(
            function() {
                $("#gobDialog").dialog("close");
            });

//creates spew button ---------------------------------
        $('<button id="spewBtn"></button>').appendTo('#socMenu');
        $('#spewBtn').show("fade", 1000);
//creates gobstones dialog pop up----------------------
        $("<div id='spewDialog'>S.P.E.W</div>").appendTo('#socMenu');
        $( "#spewDialog" ).dialog({
            autoOpen: false
        });
        $( "#spewDialog" ).dialog({
            position: { my: "center", at: "bottom", of: "#spewBtn" }
        });
        $("#spewBtn").hover(
            function() {
                $("#spewDialog").dialog("open");
            },
            function() {
                $("#spewDialog").dialog("close");
            }
        );
        $("#spewBtn").click(
            function() {
                $("#spewDialog").dialog("close");
            });

//creates quidditch button-----------------------------
        $('<button id="quidBtn"></button>').appendTo('#socMenu');
        $('#quidBtn').show("fade", 1000);
//creates gobstones dialog pop up----------------------
        $("<div id='quidDialog'>Quidditch</div>").appendTo('#socMenu');
        $( "#quidDialog" ).dialog({
            autoOpen: false
        });
        $( "#quidDialog" ).dialog({
            position: { my: "center", at: "bottom", of: "#quidBtn" }
        });
        $("#quidBtn").hover(
            function() {
                $("#quidDialog").dialog("open");
            },
            function() {
                $("#quidDialog").dialog("close");
            }
        );
        $("#quidBtn").click(
            function() {
                $("#quidDialog").dialog("close");
            });

    //creates slug club button-----------------------------
        $('<button id="slugBtn"></button>').appendTo('#socMenu');
        $('#slugBtn').show("fade", 1000);
    //creates slug clubs dialog pop up----------------------
        $("<div id='slugDialog'>Slug Club</div>").appendTo('#socMenu');
        $( "#slugDialog" ).dialog({
            autoOpen: false
        });
        $( "#slugDialog" ).dialog({
            position: { my: "center", at: "bottom", of: "#slugBtn" }
        });
        $("#slugBtn").hover(
            function() {
                $("#slugDialog").dialog("open");
            },
            function() {
                $("#slugDialog").dialog("close");
            }
        );
        $("#slugBtn").click(
            function() {
                $("#slugDialog").dialog("close");
            });

    //creates dumbledore's army button button-----------------------------
        $('<button id="dArmyBtn"></button>').appendTo('#socMenu');
        $('#dArmyBtn').show("fade", 1000);
    //creates dumbledore's army dialog pop up----------------------
        $("<div id='dArmyDialog'>Dumbledore's Army</div>").appendTo('#socMenu');
        $( "#dArmyDialog" ).dialog({
            autoOpen: false
        });

        $( "#dArmyDialog" ).dialog({
            position: { my: "center", at: "bottom", of: "#dArmyBtn" }
        });
        $("#dArmyBtn").hover(
            function() {
                $("#dArmyDialog").dialog("open");
            },
            function() {
                $("#dArmyDialog").dialog("close");
            }
        );
        $("#dArmyBtn").click(
            function() {
                $("#dArmyDialog").dialog("close");
            });

    //creates Card Club button button-----------------------------
        $('<button id="wizCardBtn"></button>').appendTo('#socMenu');
        $('#wizCardBtn').show("fade", 1000);
    //creates Card Club dialog pop up----------------------
        $("<div id='wizCardDialog'>Wizard Card Club</div>").appendTo('#socMenu');
        $("#wizCardDialog").dialog({
            autoOpen: false
        });
        $( "#wizCardDialog" ).dialog({
            position: { my: "center", at: "bottom", of: "#wizCardBtn" }
        });
        $("#wizCardBtn").hover(
            function() {
                $("#wizCardDialog").dialog("open");
            },
            function() {
                $("#wizCardDialog").dialog("close");
            }
        );
        $("#wizCardBtn").click(
            function() {
                $("#wizCardDialog").dialog("close");
            });
    });
}


//     ******************************************
// --- *                MAP PAGE                * ---
//     ******************************************
function mapPage() {
    //change title to Hogwarts Map
    document.getElementById("title").textContent = "Hogwarts Map";
    setPageBG();
    //fade the menu out ------------------------------------
    $("#menu").hide("fade", 1000);
    //fade the smoke particles out -------------------------
    $("#particles-js").hide("fade", 2000);
    $("#scroll").show("slide", 1000, function() {
        //---- CREATE TEXT CONTENT --------------------------
        $('<div id="hogMap"></div>').appendTo("#scroll");
        $('<img src="images/CastleMap/Castle.png" id ="mapCastle"/>').appendTo("#scroll");
        $('<div id = "quidTouch"></div>').appendTo("#hogMap");
        $("#quidTouch").click(QuidVideo);
        $('<div id = "lakeTouch"></div>').appendTo("#hogMap");
        $("#lakeTouch").click(LakeVideo);
        $('<div id = "forestTouch"></div>').appendTo("#hogMap");
        $("#forestTouch").click(ForestVideo);
        $('<div id = "hallTouch"></div>').appendTo("#hogMap");
        $("#hallTouch").click(HallVideo);
    });


    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {
            direction: "up"
        }, 1000, function() {
            $("#backingImg").remove();
        });

        //hide/remove current content-------------------------
        if ($('#backingImg2').length) {
            $("#backingImg2").hide("drop", {
                direction: "up"
            }, 1000, function() {
                $("#backingImg2").remove();
            });
        }
        if ($('#classMenu').length) {
            $("#classMenu").hide("fade", 1000, function() {
                $("#classMenu").remove();
            });
        }
        if ($('#socMenu').length) {
            $("#socMenu").hide("fade", 1000, function() {
                $("#socMenu").remove();
            });
        }
    }
    //QUIDDITCH
    function QuidVideo() {
        $("<video id = 'presentVideo' autoplay muted><source src='videos/quidditch.mp4' type='video/mp4'></video>").appendTo('#hogMap');

        $('<div id="closeVideo"></div>').appendTo("#hogMap");
        $("#closeVideo").click(closeVideo);

    }
    //LAKE
    function LakeVideo() {
        $("<video id = 'presentVideo' autoplay muted><source src='videos/lake.mp4' type='video/mp4'></video>").appendTo('#hogMap');

        $('<div id="closeVideo"></div>').appendTo("#hogMap");
        $("#closeVideo").click(closeVideo);

    }
    //HALL
    function HallVideo() {
        $("<video id = 'presentVideo' autoplay muted><source src='videos/grandhall.mp4' type='video/mp4'></video>").appendTo('#hogMap');

        $('<div id="closeVideo"></div>').appendTo("#hogMap");
        $("#closeVideo").click(closeVideo);

    }
    //FOREST
    function ForestVideo() {
        $("<video id = 'presentVideo' autoplay muted><source src='videos/forest.mp4' type='video/mp4'></video>").appendTo('#hogMap');

        $('<div id="closeVideo"></div>').appendTo("#hogMap");
        $("#closeVideo").click(closeVideo);

    }
    //CLOSE VIDEO FUNCTION
    function closeVideo() {
        console.log("closing");
        $("#presentVideo").remove();
        $("#closeVideo").remove();
    }
}


//     ******************************************
// --- *             EVENTS PAGE            * ---
//     ******************************************

function eventsPage() {
    //change title ----------------------------------------
    document.getElementById("title").textContent = "Events Page";
    document.getElementById("title").style.color = "black";
    setPageBG();
    houseBg = localStorage.getItem("houseBG");
    document.getElementById("wrapper").style.background = houseBg;
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {
            direction: "up"
        }, 1000, function() {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {
            direction: "up"
        }, 1000, function() {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {
            direction: "up"
        }, 1000, function() {
            $("#classMenu").remove();
        });
    }
    if ($('#socMenu').length) {
        $("#socMenu").hide("fade", 1000, function() {
            $("#socMenu").remove();
        });
    }
    if ($('#playarea').length) {
        $("#playarea").hide("fade", 2000, function() {
            $("#playarea").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function() {
            $('#scroll').empty();
        });
    }
    $("#menu").hide("fade", 1000);
    //fade the smoke particles out -------------------------
    $("#particles-js").hide("fade", 2000);
    //create new content ------------------------------------
    $("#scroll").show("slide", 1000, function() {
        $("<div id='calendar'></div>").appendTo("#scroll");
        $("<img id='calendarImage'src='images/calendar/hpCalendar.gif'></img>").appendTo("#calendar");
    });

    //creates text content ------------------------------------
    $(function() {
        $("<div id='content'><div id='padout'><p>May 4th: Star Wars Day!<br><br>June 16th: Owl Invention Day!<br>June 19th: Bring Your Muggle to School Day!<br><br>July: Empty!<br><br>August 17th: Triwizard Entry Day!<br>August 28th: Triwizard Results Day!<br>August 29th: Let the Trials Begin!<br><br>September 10th: Skye's Birthday!<br>September 11th: Dumbledore Appreciation!<br>September 12th: Snape Aprreciation!<br><br>October 6th: Winter Solstice!<br>October 15th: Jack's Birthday<br>October 24th: O.W.L.S Revision<br>October 31st: Halloween!<br><br>November: Empty!<br><br>December 24th: Christmas Eve!<br>December 25th: Christmas!<br>December 26th: Boxing Day!<br>December 30th: Wand Day!<br>December 31st: New Years Eve<br><br>January 1st: New Years Day<br><br>February 14th: O.W.L.S Exam Week!<br><br>March 8th: Spring Break!<br><br>April 1st: April Fools Day!<br>April 22nd: Kek!<br>April 30th: Craig's Birthday</p></div>").appendTo("#scroll");
        $(".my-gallery").swipeshow();
        $dots: $("div.dots");
    });

}

//     ******************************************
// --- *                CURRENCY                * ---
//     ******************************************

function currencyPage(){
    document.getElementById("title").textContent = "Currency";
    document.getElementById("title").style.color = "black";
    document.getElementById("wrapper").style.background = houseBg;
//hide scroll if visible ------------------------------------
    if ($("#classBar").length) {
        $("#classBar").remove();
    }
//if backingImg exists, drop it out & remove it
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
//fade the menu out ------------------------------------
    $("#menu").hide("fade", 1000);
//fade the smoke particles out -------------------------
    $("#particles-js").hide("fade", 2000);
//create new content ----------------------------------
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
        $('<form name="Form" id="Form"><fieldset><legend id="formTitle">Currency Converter</legend><div id="galleonDiv"><label for="galleonInput" id="galleonLabel" class="label">Galleons:</label><input type="text" id="galleonInput" name="galleonInput" class="input"/></div><div id="sickleDiv"><label for="sickleInput" id="sickleLabel" class="label">Sickles:</label><input type="text" id="sickleInput" name="sickleInput" class="input" /></div><div id="knutDiv"><label for="knutInput" id="knutLabel" class="label">Knuts:</label><input type="text" id="knutInput" name="knutInput" class="input"/></div><div id="poundDiv"><label for="poundInput" id="poundLabel" class="label">Pounds:</label><input type="text" id="poundInput" name="poundInput" class="input"/></div><div id="penceDiv"><label for="penceInput" id="penceLabel" class="label">Pence:</label><input type="text" id="penceInput" name="penceInput"class="input"/></div></fieldset></form>').appendTo("#scroll");
        $('<button id="wizToMug">Wizard to Muggle Money</button><button id="mugToWiz">Muggle to Wizard Money</button><button id="clear">Clear</button>').appendTo('#scroll')
        $('<div id="converted"></div>').appendTo('#scroll');
        $('#wizToMug').click(wizardToMuggle);
        $('#mugToWiz').click(muggleToWizard);
        $('#clear').click(clearForm);
    }); 
}
 
function checkIfNumber(str) {
	// check we only have digits in the string
	for(var i=0; i<str.length; i++) {
		var s = str.substring(i, i+1);
		if (s<"0" || s>"9") {
			return false;
		}
	}
	if (str.length==0){
		return false;
    } else{
	   return true;
    }
}
    
function wizardToMuggle(){
    galleons = document.getElementById('galleonInput').value;
    sickles = document.getElementById('sickleInput').value;
    knuts = document.getElementById('knutInput').value;
    pounds = document.getElementById('poundInput');
    pence = document.getElementById('penceInput');
    // need to check galleons, sickles and knuts are numbers
	if (checkIfNumber(galleons)==true) {
		var g = parseInt(galleons);
	} else {
		var g = 0;
	}
	if (checkIfNumber(sickles)==true) {
		var s = parseInt(sickles);
	} else {
		var s = 0;
	}
	if (checkIfNumber(knuts)==true) {
		var k = parseInt(knuts);
	} else {
		var k = 0;
	}

	// convert this to number of pence there are
	var d = Math.floor((penceCurrency*((g*493)+(s*29)+k))/knutsCurrency);

	// display the result
	pounds = Math.floor(d/100);
	pence = d%100;
    //pounds.value = Math.floor(d/100);
	//pence.value = d%100;
    console.log(pounds);
    console.log(pence);
    var str = "£" + pounds + " , " + pence +"pence";
    $('#converted').text(str);
    
}

function muggleToWizard(){
    galleons = document.getElementById('galleonInput');
    sickles = document.getElementById('sickleInput');
    knuts = document.getElementById('knutInput');
    pounds = document.getElementById('poundInput').value;
    pence = document.getElementById('penceInput').value;
	// need to check pounds and pence are numbers
	if (checkIfNumber(pounds)==true) {
		var p = parseInt(pounds);
	} else {
		var p = 0;
	}
	if (checkIfNumber(pence)==true) {
		var d = parseInt(pence);
	} else {
		var d = 0;
	}

	// convert this to the number of knuts there are
	var k = Math.floor((((p*100)+d)*knutsCurrency)/penceCurrency);

	// display the result
	galleons = Math.floor(k/493);
	sickles = Math.floor((k%493)/29);
	knuts = k%29;
    
    console.log(galleons);
    console.log(sickles);
    console.log(knuts);
    var str = galleons + "galleon , " + sickles + "sickles , " + knuts + "knuts";
    $('#converted').text(str);
}

function clearForm(){
    galleons = document.getElementById('galleonInput');
    sickles = document.getElementById('sickleInput');
    knuts = document.getElementById('knutInput');
    pounds = document.getElementById('poundInput');
    pence = document.getElementById('penceInput');
    galleons.value = "";
    sickles.value = "";
    knuts.value = "";
    pounds.value = "";
    pence.value = "";
    $('#converted').empty();
}


//     ******************************************
// --- *               RECIPES                  * ---
//     ******************************************

//---- POTIONS LIST ---------------------------------
function potionsListPage(){
    document.getElementById("title").textContent = "Potion's Recipes";
    document.getElementById("title").style.color = "black";
    setPageBG();
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#socMenu').length) {
        $("#socMenu").hide("fade", 1000, function () {
            $("#socMenu").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#playarea').length) {
        $("#playarea").hide("fade", 2000, function () {
            $("#playarea").remove();
        });
    }
    if ($("#classBar").length) {
        $("#classBar").remove();
    }
    if ($("#houseBar").length) {
        $("#houseBar").remove();
    }
    $("#menu").hide("fade", 1000);
    $("#particles-js").hide("fade", 2000);
    $("#scroll").show("slide", 1000, function () {
//creates text content ------------------------------------
        $("<div id='List'><div id='padout'></div></div>").appendTo("#scroll");
        $("<p>New potions shall be released as you learn them.</p><ul><li><button id='boilsBtn'>Cure for Boils</button></li><li>Forgetfulness Potion</li><li>Antidote to Common Poisons</li><li>Herbicide Potion</li><li>Wideye Potion</li><li>Wiggenweld Potion</li></ul>").appendTo("#padout");
        $("#boilsBtn").click(boilsRecipe);
       });
}

//---- CREATES MAIN GAME FUNCTIONS ------------------
function boilsRecipe(){
//hide/remove current content-------------------------
    document.getElementById("title").textContent = "Cure For Boils";
    document.getElementById("title").style.color = "#e3c431";
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#socMenu').length) {
        $("#socMenu").hide("fade", 1000, function () {
            $("#socMenu").remove();
        });
    }
    $("#menu").hide("fade", 1000);
    $("#particles-js").hide("fade", 2000);
    $('<div id="playarea"><div id="recipeList"><h2>Ingredients</h2><p>3 Snake Fangs</p><p>2 Horned Slugs</p><p>1 Porcupine Quills</p><button id="resetBtn">reset</button></div><div id="cauldron"></div><div data-thing="snake" class="thing"></div><div data-thing="slugs" class="thing"></div><div data-thing="quills" class="thing"></div></div>').appendTo('#wrapper');
    $('<img id="checkPoint" src="images/tick.png">').appendTo("#playarea");
    $("#playarea").show("fade", 1000);
//start game ------------------------------------------
    resetRecipe();
    $("#resetBtn").click(resetRecipe);
    
    $(".thing").draggable({
        containment: "parent",
        opacity: 0.35,
        revert: true,
        revertDuration: 1
    });
    
    $("#cauldron").droppable({
        accept: ".thing",
        drop: function( event, ui ) {
            updateState(ui.draggable.attr("data-thing"));
            updateUI();
            if(win()){
                console.log("yay");
                $('<div id="win"><h3>Well Done<h3></div>').appendTo("#playarea");
                //pop up
            } else {
                // DO NOTHING
                console.log("not yet");
            }
        }
    });
}

//---- UPDATES THE GAME STATE -----------------------
function updateState(ingredient) {
    state[ingredients.indexOf(ingredient)] += 1;
    console.log(state);
}

//---- UPDATES THE GAME DISPLAY/CAULDRON COLOUR -----
function updateUI() {
    var subState = state;
    var stateString = subState.join("_");
    console.log(state);
    console.log(stateString);
    $("#checkPoint").show();
    $("#checkPoint").hide("puff");
    var i;
    for(i = 0; i < state.length; i++) {
        if(state[i] > quantities[i]) {
            document.getElementById('cauldron').style.background = "url(images/game/cauldronlose.png)";
            document.getElementById("checkPoint").src = "images/cross.png";
            $('<div><h3 id="lose">You Lose<h3></div>').appendTo("#playarea");
            return;
        }
    }
    
    if(stateString == "0_0_0"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldronstart.png)";
        return;
    } else if(stateString === "3_2_1"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldron1.png)";
        console.log("change");
        return;
    } else if(stateString === "3_0_0"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldron2.png)";
        console.log("change");
        return;
    } else if(stateString === "3_0_1"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldron3.png)";
        console.log("change");
        return;
    } else if(stateString === "3_2_0"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldron4.png)";
        console.log("change");
        return;
    } else if(stateString === "0_2_1"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldron5.png)";
        console.log("change");
        return;
    } else if(stateString === "0_2_0"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldron6.png)";
        console.log("change");
        return;
    } else if(stateString === "0_0_1"){
        document.getElementById('cauldron').style.background = "url(images/game/cauldron7.png)";
        console.log("change");
        return;
    }
}

//---- CHECKS WHETHER GAME'S WON --------------------
function win() {
    var i;
    for(i = 0; i < quantities.length; i++) {
        if(state[i] !== quantities[i]) {
            return false;
        }
    }
    return true;
}

//---- RESETS THE GAME ------------------------------
function resetRecipe() {
    state = [];
    var i;
    for(i = 0; i < quantities.length; i++) {
        state[i] = 0;
    }
    document.getElementById("checkPoint").src = "images/tick.png";
    document.getElementById('cauldron').style.background = "url(images/game/cauldronstart.png)";
    $("#win").hide("puff");
    $("#lose").hide("puff");
    //set original img
}


//     ******************************************
// --- *                SPELLS                  * ---
//     ******************************************

function spellsListPage(){
    document.getElementById("title").textContent = "Spells List";
    document.getElementById("title").style.color = "black";
    setPageBG();
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#socMenu').length) {
        $("#socMenu").hide("fade", 1000, function () {
            $("#socMenu").remove();
        });
    }
    if ($('#playarea').length) {
        $("#playarea").hide("fade", 2000, function () {
            $("#playarea").remove();
        });
    } 
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($("#classBar").length) {
        $("#classBar").remove();
    }
    if ($("#houseBar").length) {
        $("#houseBar").remove();
    }
    $("#menu").hide("fade", 1000);
    $("#particles-js").hide("fade", 2000);
    $("#scroll").show("slide", 1000, function () {
//creates text content ------------------------------------
        $("<div id='List'><div id='padout'></div></div>").appendTo("#scroll");
        $("<p>New spells shall be released as you learn them.</p><ul><li><button id='leviBtn'>Levitation Charm</button></li><li>Wand-Lighting Charm</li><li>Lumos Solem</li><li>Fire-Making Spell</li><li>Softening Charm</li><li>Severing Charm</li><li>Unlocking Charm</li><li>Locking Spell</li><li>Mending Charm</li><li>Make a pineapple dance across a desk</li></ul").appendTo("#padout");
        $("#leviBtn").click(levitationPage);
       });
}

function levitationPage() {
    //change title ----------------------------------------
    document.getElementById("title").textContent = "Levitation Charm";
    document.getElementById("title").style.color = "black";
    setPageBG();
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {
            direction: "up"
        }, 1000, function() {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {
            direction: "up"
        }, 1000, function() {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {
            direction: "up"
        }, 1000, function() {
            $("#classMenu").remove();
        });
    }
    if ($('#socMenu').length) {
        $("#socMenu").hide("fade", 1000, function() {
            $("#socMenu").remove();
        });
    }
    if ($('#playarea').length) {
        $("#playarea").hide("fade", 2000, function() {
            $("#playarea").remove();
        });
    }
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function() {
            $('#scroll').empty();
        });
    }
    $("#menu").hide("fade", 1000);
    $("#particles-js").hide("fade", 2000);
    //create new content ------------------------------------
    $("#scroll").show("slide", 1000, function() {


        function playSound() {
            $("<audio src='sounds/wing.mp3' autoplay='true' controls></audio>");
        }
        //creates slideshow -------------------------------------
        //creates text content ------------------------------------
        $("<div id='aboutCharm'><div id='padout'></div></div>").appendTo("#scroll");
        $("<div id='aboutText'><p class='dropcap'>The Levitation Charm is one of the first spells learnt by any young witch or wizard. With the charm a witch or wizard can make things fly with the flick of a wand. The charm is an excellent test of your magical skills, wand control and above all, patience.</p></div>").appendTo("#padout");
        $("<img id='featherCharm' src='images/charms/levFeather.gif'/>").appendTo("#padout");
        $("<div id='charmStats'></div>").appendTo("#scroll");
        $("<img id='levCharm' src='images/charms/levitate.gif'/>").appendTo("#charmStats");
        $("<h4 id='levTitle'>Wingardium Leviosa</h4>").appendTo("#charmStats");
        $("<div id='levStats'><p>Incantation:  Wingardium Leviosa</p><p>Pronounced:  wing-GAR-dee-um levi-O-sa</p><p>Light:  none</p><p>Effect:  Makes objects fly</p><p>Creator:  Jarleth Hobart (1544)</p></div>").appendTo("#charmStats");
        $("<button id='soundBtn'>Pronunciation</button>").appendTo("#charmStats");
        $("#soundBtn").click(playSound);
    });

}


//     ******************************************
// --- *               SETTINGS                 * ---
//     ******************************************

function settingsPage() {
//change title ----------------------------------------
    document.getElementById("title").textContent = "Settings";
    document.getElementById("title").style.color = "black";
    setPageBG();
    houseBg = localStorage.getItem("houseBG");
    document.getElementById("wrapper").style.background = houseBg;
    //hide current content
    if ($('#backingImg').length) {
        $("#backingImg").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg").remove();
        });
    }
    if ($('#backingImg2').length) {
        $("#backingImg2").hide("drop", {direction: "up"}, 1000, function () {
            $("#backingImg2").remove();
        });
    }
    if ($('#classMenu').length) {
        $("#classMenu").hide("fade", {direction: "up"}, 1000, function () {
            $("#classMenu").remove();
        });
    }
    if ($('#socMenu').length) {
        $("#socMenu").hide("fade", 1000, function () {
            $("#socMenu").remove();
        });
    }   
    if ($('#playarea').length) {
        $("#playarea").hide("fade", 2000, function () {
            $("#playarea").remove();
        });
    } 
    if ($('#scroll').length) {
        $("#scroll").hide("slide", 1000, function () {
            $('#scroll').empty();
        });
    }
    if ($("#classBar").length) {
        $("#classBar").remove();
    }
    if ($("#houseBar").length) {
        $("#houseBar").remove();
    }
    $("#menu").hide("fade", 1000);
//fade the smoke particles out -------------------------
    $("#particles-js").hide("fade", 2000);
//create new content ------------------------------------
    $("#scroll").show("slide", 1000, function () {
            $("<div id='bgChangeText'>Select A Background Colour</div>").appendTo("#scroll");
            $("<button id='gryffBg'></button>").appendTo("#scroll");
            $("<button id='huffBg'></button>").appendTo("#scroll");
            $("<button id='raveBg'></button>").appendTo("#scroll");
            $("<button id='slithBg'></button>").appendTo("#scroll");
            $("<div id='redBG'>Gryffindor</br>Red</div><div id='yellowBG'>Hufflepuff</br>Yellow</div><div id='greenBG'>Slytherin</br>Green</div><div id='blueBG'>Ravenclaw</br>Blue</div>").appendTo("#scroll");
            $("#gryffBg").click(setBGRed);
            $("#huffBg").click(setBGYellow);
            $("#slithBg").click(setBGGreen);
            $("#raveBg").click(setBGBlue);
    });
    
}

function setBGRed(){
    localStorage.setItem("houseBG", "#d22127");
    houseBg = localStorage.getItem("houseBG");
    document.getElementById("wrapper").style.background = houseBg;
    console.log(localStorage);
}

function setBGYellow(){
    localStorage.setItem("houseBG", "#e3c431");
    houseBg = localStorage.getItem("houseBG");
    document.getElementById("wrapper").style.background = houseBg;
    console.log(localStorage);
}

function setBGBlue(){
    localStorage.setItem("houseBG", "#087fa9");
    houseBg = localStorage.getItem("houseBG");
    document.getElementById("wrapper").style.background = houseBg;
    console.log(localStorage);
}

function setBGGreen(){
    localStorage.setItem("houseBG", "#4ab44a");
    houseBg = localStorage.getItem("houseBG");
    document.getElementById("wrapper").style.background = houseBg;
    console.log(localStorage);
}

function setPageBG(){
    houseBg = localStorage.getItem("houseBG");
    document.getElementById("wrapper").style.background = houseBg;
}