/*
Konstanten
*/

// CSS Pfad, der existiert, wenn die Seite mit Inhalten gefüllt wurde
const load_end_check_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer';

// CSS Pfad, der die Position der Daumen beschreibt und dessen Objekt-Inhalt durch die Stempel ersetzt wird
const image_container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer button#button.style-scope.yt-icon-button yt-icon.style-scope.ytd-toggle-button-renderer';

// CSS Pfad, der das Objekt, das die Daumen beinhaltet, beschriebt, um den Bereicht, in dem sich die Grafiken für die Objekte ausbreiten können, zu vergößern
const container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer';

// Css Pfad, der beschreibt, von wo aus clicks zum ändern der Likes interprätiert werden sollen
const link_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer';

/*
Hilfsfunktionen
*/

// Logfunktion zum debuggen
function log(msg) {
  console.log("W!NW!: " + msg);
}

function getURL(path) {
  return chrome.runtime.getURL(path) || browser.runtime.getURL(path);
}

function onError(error) {
  log(`Error: ${error}`);
}

/*
Grafikfunktionen
*/

// Passt die Breite des übergegebenen Objekts an
function resize_container(container_object, width) {
  container_object.style.width = width;
}

// Leer den Inhalt des übergebenen Objekts und befüllt ihn mit einer Grafik
function inject_image(image_container_object, image_path) {
  var image = document.createElement('img');
  image.setAttribute('src', image_path);
  image.style.width = "100%";
  image_container_object.innerHTML = "";
  image_container_object.appendChild(image);
}

/*
Hauptfunktion
*/

// Ersetzt die Daumen durch Stempel
function inject(settings) {
  var container_object = document.querySelectorAll(container_path);
  resize_container(container_object[0], "100px");
  resize_container(container_object[1], "100px");
  log("Stempelfläche vergrößert.");
  var image_container_object = document.querySelectorAll(image_container_path);
  log("Packe Stempel aus...");

  // wenn Like aktiv, zeige aktive Grafik an
  if(container_object[0].classList.contains('style-default-active') || settings.light) {
    inject_image(image_container_object[0], getURL("media/stempel-witzig.png"));
  }
  else {
    inject_image(image_container_object[0], getURL("media/stempel-witzig-disabled.png"));
  }
  log("Witzig!");

  // wenn Dislike aktiv, zeige aktive Grafik an
  if(container_object[1].classList.contains('style-default-active') || settings.light) {
    inject_image(image_container_object[1], getURL("media/stempel-nicht-witzig.png"));
  }
  else {
    inject_image(image_container_object[1], getURL("media/stempel-nicht-witzig-disabled.png"));
  }
  log("Nicht Witzig!");
}

// Warte noch kurz vor dem einfügen
function inject_with_timeout() {
  setTimeout(function () {inject({light: false})}, 10);
}

/*
Ladefunktion
*/

// regelmäßig prüfen, ob sich die URL geändert hat und entsprechend den Like Status aktualisieren
var current_url = '';
var last_loaded_url = '';

var link_object = '';

function inject_loop () {
  current_url = window.location.href;
  if(current_url != last_loaded_url) {
    log("Neues");
    setTimeout(function () {inject({light: false})}, 500);
    last_loaded_url = current_url;
  }

  setTimeout(inject_loop, 500);
}

// Die YouTube Website läd die Inhalte durch ein externes JavaScript, wenn wir von vornherein unsere eigenen Inhalte einsetzen, werden diese später von YouTube wieder überschrieben. Wir schauen also, ob ein bestimmtes Objekt, dass durch JavaScript eingefügt wird, exstiert, dann erst bringen wir unsere eigenen Inhalte ein.
var loaded = false;

function loading(settings) {
  loaded = document.querySelector(load_end_check_path);
  if (loaded) {
    log("Stempelfläche gefunden.");

    if(!settings.light) {
      // initialisiere onclick events
      link_object = document.querySelectorAll(link_path);
      link_object[0].onclick = inject_with_timeout;
      link_object[1].onclick = inject_with_timeout;

      // starte Schleife, die nach aktualisierungen ausschau hält
      inject_loop();
    }
    else {
      inject(settings);
    }


  }
  else {
    setTimeout(function () {loading(settings)}, 500);
  }
}

// Starte das Add-on
log("Suche Stempelfläche...");
// lade Einstellungen
var getting = browser.storage.local.get("light");
getting.then(loading, onError);
