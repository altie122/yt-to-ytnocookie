// Get URL query info
const query_string = window.location.search;
const url_params = new URLSearchParams(query_string);
const yt = url_params.get("yt");
const yts = url_params.get("yts");

// Add event listener for the convert button
document.addEventListener("DOMContentLoaded", function () {
  const convert_button = document.getElementById("convert");
  convert_button.addEventListener("click", convert);
});

// figure out what link this is from (youtube, youtube share, ect) currently just a pass through to youtube
async function convert() {
  const query = document.getElementById("convert-input").value;

  // Check if it's a YouTube link
  if (query.includes("https://www.youtube.com/watch?v=")) {
    yt_convert();
  } else if (query.includes("https://youtu.be/") & query.includes("?si=")) {
    yts_convert();
  } else {
    const results_container = document.getElementById("results-container");
    results_container.innerHTML =
      "please use one of the following link types: <br /> https://www.youtube.com/watch?v=______";
  }
}

// youtube URL convert page
async function yt_convert() {
  const query = document.getElementById("convert-input").value;
  const new_url = "?yt=" + query;
  window.location.replace(new_url);
}

// youtube share convert page
async function yts_convert() {
  const query = document.getElementById("convert-input").value;
  const new_url = "?yts=" + query;
  window.location.replace(new_url);
}

document.addEventListener("DOMContentLoaded", function () {
  if (url_params.has("yt")) {
    const new_text = yt.replace(
      "https://www.youtube.com/watch?v=",
      "https://www.youtube-nocookie.com/embed/",
    );
    const results_container = document.getElementById("results-container");
    results_container.innerHTML = new_text;
    document.getElementById("iframe-output").src = new_text;
    const iframe_code =
      '&#60;iframe src="' + new_text + '"&#x3E;&#60;/iframe&#x3E;';
    const iframe_code_container = document.getElementById("iframe-code");
    iframe_code_container.innerHTML = iframe_code;
  } else if (url_params.has("yts")) {
    const part_new_text = yts.replace(
      "https://youtu.be/",
      "https://www.youtube-nocookie.com/embed/",
    );
    const new_text_buffer = part_new_text.split("?");
    const new_text = new_text_buffer[0];
    const results_container = document.getElementById("results-container");
    results_container.innerHTML = new_text;
    document.getElementById("iframe-output").src = new_text;
    const iframe_code =
      '&#60;iframe src="' + new_text + '"&#x3E;&#60;/iframe&#x3E;';
    const iframe_code_container = document.getElementById("iframe-code");
    iframe_code_container.innerHTML = iframe_code;
  } else {
    document.getElementById("iframe-output").src = "/start";
  }
});
