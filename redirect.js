// Récupère la valeur du cookie "piped_mode"
var pipedMode = getCookie("piped_mode");
  
// Vérifie si la valeur du cookie est "true"
if (pipedMode === "true") {
    var parser = document.createElement('a');
    parser.href = window.location.href;

    parser.protocol; // => "http:"
    parser.host;     // => "example.com:3000"
    parser.hostname; // => "example.com"
    parser.port;     // => "3000"
    let path = parser.pathname; // => "/pathname/"
    let search = parser.search;   // => "?search=test"
    let hash = parser.hash;     // => "#hash"
    let url = 'https://piped.video';

    let new_url = url.concat(path, search, hash);
    location.href = new_url;
  console.log("Le mode piped est activé");
} else {
  // Sinon, le mode "piped" est désactivé
  console.log("Le mode piped est désactivé");
}

// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

if (mode === true) {
    var parser = document.createElement('a');
    parser.href = window.location.href;

    parser.protocol; // => "http:"
    parser.host;     // => "example.com:3000"
    parser.hostname; // => "example.com"
    parser.port;     // => "3000"
    let path = parser.pathname; // => "/pathname/"
    let search = parser.search;   // => "?search=test"
    let hash = parser.hash;     // => "#hash"
    let url = 'https://piped.video';

    let new_url = url.concat(path, search, hash);
    location.href = new_url;
}


