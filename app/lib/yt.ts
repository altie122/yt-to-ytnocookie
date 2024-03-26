export function IsYT(URL:string) {
  const input_URL = URL;
  if (input_URL.includes("https://www.youtube.com/watch?v=")) {
    return(true)
  } else if (input_URL.includes("https://youtu.be/")) {
    return(true)
  } else if (input_URL.includes("https://www.youtube.com/embed/")) {
    return(true)
  } else {
    return(false)
  }
}

export function GetID(URL:string) {
  const input_URL = URL;
  if (input_URL.includes("https://www.youtube.com/watch?v=")) {
    const part_new_text = input_URL.replace(
      "https://www.youtube.com/watch?v=",
      "",
    );
    const new_text_buffer = part_new_text.split("&");
    const new_URL = new_text_buffer[0];
    return(new_URL);
  } else if (input_URL.includes("https://youtu.be/") && input_URL.includes("?si=")) {
    const part_new_text = input_URL.replace(
      "https://youtu.be/",
      "",
    );
    const new_text_buffer = part_new_text.split("?");
    const new_URL = new_text_buffer[0];
    return(new_URL);
  } else if (input_URL.includes("https://www.youtube.com/embed/") && input_URL.includes("?si=")) {
    const part_new_text = input_URL.replace(
      "https://www.youtube.com/embed/",
      "",
    );
    const new_text_buffer = part_new_text.split("?");
    const new_URL = new_text_buffer[0];
    return(new_URL);
  }
}

export function GetNoCookie(ID:string) {
  return("https://www.youtube-nocookie.com/embed/" + ID)
}

export function Full(URL:string) {
  const isYT = IsYT(URL)
  if (isYT == true) {
    const id = String(GetID(URL))
    return(GetNoCookie(id))
  } else {
    return(400)
  }
}