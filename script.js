// Get URL query info
const query_string = window.location.search;
const url_params = new URLSearchParams(query_string);
const yt = url_params.get('yt')

// Add event listener for the convert button
document.addEventListener("DOMContentLoaded", function() {
  const convert_button = document.getElementById("convert");
  convert_button.addEventListener("click", convert);
});

// move to converted page (URL/?yt=https://www.youtube.com/watch?v=oN6P3SueMkM)
async function convert() {
  const query = document.getElementById("convert-input").value;
  const new_url = '?yt=' + query
  window.location.replace(new_url);
};
// convert & display converted URL
document.addEventListener("DOMContentLoaded", function() {
  const new_text = yt.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/");
  const results_container = document.getElementById("results-container");
  results_container.innerHTML = new_text;
  document.getElementById("iframe-output").src = new_text;
  const iframe_code = '&#60;iframe src="' + new_text + '"&#x3E;&#60;/iframe&#x3E;';
  const iframe_code_container = document.getElementById("iframe-code");
  iframe_code_container.innerHTML = iframe_code;
});