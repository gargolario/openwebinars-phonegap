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
        console.log("Aplicación iniciada");
        checkConnection();
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

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
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

function showAlert() {
    navigator.notification.alert(
        'Esto es una alerta nativa!',  // message
        function() {
            
        },         // callback
        'Titulo',            // title
        'Ok'                  // buttonName
    );
}

function showNoNative() {
    alert("Esta es una alerta desde JavaScript");
}

function showGPS() {
    navigator.geolocation.getCurrentPosition(function(position ) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    }, function() {
        
    });
}


function takePhoto() {
    console.log("Entramos en la función de tomar foto");
    navigator.camera.getPicture(function(imageData) {
        alert(imageData);
        document.getElementById("imagen").src = imageData;
    }, function(message) {
        alert('Failed because: ' + message);
    }, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });
}
// funciones para los botones
function showInfo() {
    alert("Esta es un botón de la primera página");
};


/*function showInfo2() {
    alert("Esta es un botón de la batería");
}; */


/*var options = {
  date: new Date(),
  mode: 'date'
};

datepicker.show(options, function(date){
  alert("date result " + date);  
});
*/
//incorporamos esta función del plugin datePicker

  function dateTest() {
      var myNewDate = new Date();

      window.plugins.datePicker.show({
          date : myNewDate,
          mode : 'date', // fecha, hora o en blanco
          allowOldDates : true
      }, function(returnDate) {
        var newDate = new Date(returnDate);
            currentField.val(newDate.toString("dd/MMM/yyyy"));
            currentField.blur();
      });
  };
