/*
Konstanten
*/

// CSS Pfad, der existiert, wenn die Seite mit Inhalten gefüllt wurde
const load_end_check_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer';

// CSS Pfad, der die Position der Daumen beschreibt und dessen Objekt-Inhalt durch die Stempel ersetzt wird
const image_container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer button#button.style-scope.yt-icon-button yt-icon.style-scope.ytd-toggle-button-renderer';

// CSS Pfad, der das Objekt, das die Daumen beinhaltet, beschriebt, um den Bereicht, in dem sich die Grafiken für die Objekte ausbreiten können, zu vergößern
const container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer';

/*
Hilfsfunktionen
*/

// Logfunktion zum debuggen
function log(msg) {
  console.log("W!NW!: " + msg);
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
function inject() {
  var container_object = document.querySelectorAll(container_path);
  resize_container(container_object[0], "100px");
  resize_container(container_object[1], "100px");
  log("Stempelfläche vergrößert.");
  var image_container_object = document.querySelectorAll(image_container_path);
  log("Packe Stempel aus...");
  inject_image(image_container_object[0], browser.extension.getURL("media/sticker-witzig.png"));
  log("Witzig!");
  inject_image(image_container_object[1], browser.extension.getURL("media/sticker-nicht-witzig.png"));
  log("Nicht Witzig!");
}

/*
Ladefunktion
*/

// Die YouTube Website läd die Inhalte durch ein externes JavaScript, wenn wir von vornherein unsere eigenen Inhalte einsetzen, werden diese später von YouTube wieder überschrieben. Wir schauen also, ob ein bestimmtes Objekt, dass durch JavaScript eingefügt wird, exstiert, dann erst bringen wir unsere eigenen Inhalte ein.
var loaded = false;

function loading() {
  loaded = document.querySelector(load_end_check_path);
  if (loaded) {
    log("Stempelfläche gefunden.");
    inject();
  }
  else {
    log("Hier nicht.");
    setTimeout(loading, 100);
  }
}

// Starte das Add-on
log("Suche Stempelfläche...");
loading();
