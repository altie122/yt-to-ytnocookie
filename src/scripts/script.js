// Get URL query info
const query_string = window.location.search;
const url_params = new URLSearchParams(query_string);
const yt = url_params.get("yt");
const yts = url_params.get("yts");
const yte = url_params.get("yte");
const copy = url_params.get("copy");

// Add event listener for the convert button
document.addEventListener("DOMContentLoaded", function () {
  const convert_button = document.getElementById("convert");
  const convert_and_copy_button = document.getElementById("convert_and_copy");
  convert_button.addEventListener("click", convert);
  convert_and_copy_button.addEventListener("click", convert_and_copy);
});

// figure out what link this is from (youtube, youtube share, ect) currently just a pass through to youtube
async function convert() {
  const query = document.getElementById("convert-input").value;

  // Check if it's a YouTube link
  if (query.includes("https://www.youtube.com/watch?v=")) {
    yt_convert();
  } else if (query.includes("https://youtu.be/") & query.includes("?si=")) {
    yts_convert();
  } else if (query.includes("https://www.youtube.com/embed/") & query.includes("?si=")) {
    yte_convert();
  } else {
    const results_container = document.getElementById("results-container");
    results_container.innerHTML =
      "please use one of the following link types: <br /> https://www.youtube.com/watch?v=______";
  }
}


async function convert_and_copy() {
  const query = document.getElementById("convert-input").value;

  // Check if it's a YouTube link
  if (query.includes("https://www.youtube.com/watch?v=")) {
    yt_convert_and_copy();
  } else if (query.includes("https://youtu.be/") & query.includes("?si=")) {
    yts_convert_and_copy();
  } else if (query.includes("https://www.youtube.com/embed/") & query.includes("?si=")) {
    yte_convert_and_copy();
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

// youtube share convert page
async function yte_convert() {
  const query = document.getElementById("convert-input").value;
  const new_url = "?yte=" + query;
  window.location.replace(new_url);
}

// youtube URL convert and copy page
async function yt_convert_and_copy() {
  const query = document.getElementById("convert-input").value;
  const new_url = "?yt=" + query + "&copy=true";
  window.location.replace(new_url);
}

// youtube share convert and copy page
async function yts_convert_and_copy() {
  const query = document.getElementById("convert-input").value;
  const new_url = "?yts=" + query + "&copy=true";
  window.location.replace(new_url);
}

// youtube embed convert and copy page
async function yte_convert_and_copy() {
  const query = document.getElementById("convert-input").value;
  const new_url = "?yte=" + query + "&copy=true";
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
    if (url_params.has("copy")) {
      if (copy == "true") {
        try {
          navigator.clipboard.writeText(new_text);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Unable to copy text to clipboard', err);
        }
      }
    }
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
    if (url_params.has("copy")) {
      if (copy == "true") {
        try {
          navigator.clipboard.writeText(new_text);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Unable to copy text to clipboard', err);
        }
      }
    }
  } else if (url_params.has("yte")) {
    const part_new_text = yte.replace(
      "https://www.youtube.com/",
      "https://www.youtube-nocookie.com/",
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
    if (url_params.has("copy")) {
      if (copy == "true") {
        try {
          navigator.clipboard.writeText(new_text);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Unable to copy text to clipboard', err);
        }
      }
    }
  } else {
    document.getElementById("iframe-output").src = "/start";
  }
});

//https://www.youtube.com/watch?v=GGZ7Gik5By4

//https://www.youtube-nocookie.com/embed/GGZ7Gik5By4

//https://www.youtube.com/embed/GGZ7Gik5By4?si=ViDwQ8F6U0XFCP0E