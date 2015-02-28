var menuIsOpen = false;
var pages = null;
var currentPage = "page1";

loadPages = function() {
    pages = {
        page1: document.getElementById("Page-1"),
        page2: document.getElementById("Page-2"),
        page3: document.getElementById("Page-3"),
	page4: document.getElementById("Page-4"),
        page5: document.getElementById("Page-5"),
    }
}

var events = {
    /*
    Eventos de una app en PhoneGap
    --------------------------------
    deviceready
    pause
    resume
    backbutton
    menubutton
    searchbutton
    startcallbutton
    endcallbutton
    volumedownbutton
    volumeupbutton
*/
    deviceReady: function() {
        // console.log("Aplicación iniciada");
       // checkConnection();
    },
    // evento disparado cuando todo el HTML ha sido cargado
    contentLoaded: function() {
        loadPages();
        FastClick.attach(document.body);
    },
    backButton: function() {
        // navigator.app.exitApp();
    },
    
    batteryStatus: function(info) {
        document.getElementById("p-battery").innerHTML = info.level;
    }
}

// listener evento de dispositivo listo
document.addEventListener('deviceready', events.deviceReady, false);
// listener de contenido DOM listo
document.addEventListener('DOMContentLoaded', events.contentLoaded, false);

window.addEventListener("batterystatus", events.batteryStatus, false);


// función click en menú
function menuButtonClick() {    
    if(menuIsOpen) {
        pages[currentPage].className = "body transition center";
        menuIsOpen = false;
    } else {
        pages[currentPage].className = "body transition right";
        menuIsOpen = true;
    }
}

// función cambiar página
function changePage(pageSelected) {
    console.log(pageSelected);
    pages[currentPage].className = "hide";
    
    pages[pageSelected].className = "body right";
    setTimeout(function() {
        pages[pageSelected].className = "body visible transition center";
        currentPage = pageSelected;
        menuIsOpen = false;
    },0);
}

// funciones para los botones
function showInfo() {
    alert("Esta es un botón de la primera página");
};


function showInfo2() {
    alert("Esta es un botón de la batería");
};

function showInfo3() {
    alert("Esta es un botón de la cámara");
};


function showInfo4() {
    alert("Esta es un botón del calendario");
};



