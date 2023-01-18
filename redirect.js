
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



