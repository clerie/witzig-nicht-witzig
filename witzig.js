const load_end_check_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer';

const thumb_up_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.style-default-active.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer.style-default-active button#button.style-scope.yt-icon-button yt-icon.style-scope.ytd-toggle-button-renderer';
const thumb_down_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.style-text.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer.style-text button#button.style-scope.yt-icon-button yt-icon.style-scope.ytd-toggle-button-renderer';

const thumb_up_container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.style-default-active.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer.style-default-active';
const thumb_down_container_path = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch.style-scope.ytd-page-manager.hide-skeleton div#top.style-scope.ytd-watch div#container.style-scope.ytd-watch div#main.style-scope.ytd-watch div#info.style-scope.ytd-watch div#info-contents.style-scope.ytd-watch ytd-video-primary-info-renderer.style-scope.ytd-watch div#container.style-scope.ytd-video-primary-info-renderer div#info.style-scope.ytd-video-primary-info-renderer div#menu-container.style-scope.ytd-video-primary-info-renderer div#menu.style-scope.ytd-video-primary-info-renderer ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer div#top-level-buttons.style-scope.ytd-menu-renderer ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.style-text.force-icon-button a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer yt-icon-button#button.style-scope.ytd-toggle-button-renderer.style-text';


function resize_container(css_path, width) {
  document.querySelector(css_path).style.width = width;
}

function inject_image(css_path, image_path) {
  var space = document.querySelector(css_path);
  var image = document.createElement('img');
  image.setAttribute('src', image_path);
  image.style.width = "100%";
  space.innerHTML = "";
  space.appendChild(image);
}


function inject() {
  resize_container(thumb_up_container_path, "100px");
  resize_container(thumb_down_container_path, "100px");

  inject_image(thumb_up_path, browser.extension.getURL("media/sticker-witzig.png"));
  inject_image(thumb_down_path, browser.extension.getURL("media/sticker-nicht-witzig.png"));
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
