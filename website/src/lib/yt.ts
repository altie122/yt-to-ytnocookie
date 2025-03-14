const youtubeVideoIdCharacters: string[] = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', '-', '_'
];


export function IsYT(URL:string) {
  const input_URL: string = URL;
  let temp_input_URL: string = input_URL.replace(
    "https://",
    "",
  );
  temp_input_URL = temp_input_URL.replace(
    "http://",
    "",
  );
  temp_input_URL = temp_input_URL.replace(
    "www.",
    "",
  );
  if (temp_input_URL.includes("youtube.com/watch?v=")) {
    return true;
  } else if (temp_input_URL.includes("youtu.be/")) {
    return true;
  } else if (temp_input_URL.includes("youtube.com/embed/")) {
    return true;
  } else if (temp_input_URL.length == 11) {
    for (let i = 0; i < temp_input_URL.length; i++) {
      const currentChar = temp_input_URL[i];
      // @ts-expect-error old code stull works, ts just doesn't like it
      if (!youtubeVideoIdCharacters.includes(currentChar)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

export function GetID(URL:string) {
  const input_URL: string = URL;
  let temp_input_URL: string = input_URL.replace(
    "https://",
    "",
  );
  temp_input_URL = temp_input_URL.replace(
    "http://",
    "",
  );
  temp_input_URL = temp_input_URL.replace(
    "www.",
    "",
  );

  if (temp_input_URL.includes("youtube.com/watch?v=")) {
    const part_new_text = temp_input_URL.replace(
      "youtube.com/watch?v=",
      "",
    );
    const new_text_buffer = part_new_text.split("&");
    // @ts-expect-error old code stull works, ts just doesn't like it
    const new_URL: string = new_text_buffer[0];
    return(new_URL);
  } else if (temp_input_URL.includes("youtu.be/")) {
    const part_new_text: string = temp_input_URL.replace(
      "youtu.be/",
      "",
    );
    const new_text_buffer = part_new_text.split("?");
    // @ts-expect-error old code stull works, ts just doesn't like it
    const new_URL: string = new_text_buffer[0];
    return(new_URL);
  } else if (temp_input_URL.includes("youtube.com/embed/")) {
    const part_new_text = temp_input_URL.replace(
      "youtube.com/embed/",
      "",
    );
    const new_text_buffer = part_new_text.split("?");
    // @ts-expect-error old code stull works, ts just doesn't like it
    const new_URL: string = new_text_buffer[0];
    return(new_URL);
  } else if (temp_input_URL.length == 11) {
    return(temp_input_URL)
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