const load_end_check_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer';

const image_container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer button#button.style-scope.yt-icon-button yt-icon.style-scope.ytd-toggle-button-renderer';

const container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer';


function resize_container(container_object, width) {
  container_object.style.width = width;
}

function inject_image(image_container_object, image_path) {
  var image = document.createElement('img');
  image.setAttribute('src', image_path);
  image.style.width = "100%";
  image_container_object.innerHTML = "";
  image_container_object.appendChild(image);
}


function inject() {
  var container_object = document.querySelectorAll(container_path);
  resize_container(container_object[0], "100px");
  resize_container(container_object[1], "100px");
  var image_container_object = document.querySelectorAll(image_container_path);
  inject_image(image_container_object[0], browser.extension.getURL("media/sticker-witzig.png"));
  inject_image(image_container_object[1], browser.extension.getURL("media/sticker-nicht-witzig.png"));
}


var loaded = false;

function loading() {
  loaded = document.querySelector(load_end_check_path);
  if (loaded) {
    inject();
  }
  else {
    setTimeout(loading, 100);
  }
}


loading();
