// define YT api key
const ytapikey = process.env.YT_API;

// define interface(s)
interface YouTubeVideoData {
  title: string;
  thumbnailUrl?: string;
  uploaderId: string;
}
interface YouTubePosterData {
  username: string;
  pfp: string;
  handle?: string;
}
interface YouTubeData {
  Vtitle: string;
  VthumbnailUrl?: string;
  Uusername: string;
  Upfp: string;
  Uhandle?: string;
}

// call data functions and return formatted results
export async function getytdata(videoId: string): Promise<YouTubeData>  {
  const video = await getvideodata(videoId);
  const user = await getuserdata(video.uploaderId)
  const data: YouTubeData = {
    Vtitle: video.title,
    Uusername: user.username,
    Upfp:user.pfp,
  };
  if (user.handle) {
    data.Uhandle = user.handle;
  }
  if (video.thumbnailUrl) {
    data.VthumbnailUrl = video.thumbnailUrl;
  }
  return(data)
}

// get video data
async function getvideodata(videoid: string): Promise<YouTubeVideoData> {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoid}&key=${ytapikey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items.length === 0) {
      throw new Error('Video not found');
    }

    const video = data.items[0].snippet;

    const videoData: YouTubeVideoData = {
      title: video.title,
      uploaderId: video.channelId,
    };

    if (video.thumbnails.maxres.url) {
      videoData.thumbnailUrl = video.thumbnails.maxres.url;
    } else if (video.thumbnails.standard.url) {
      videoData.thumbnailUrl = video.thumbnails.standard.url;
    } else if (video.thumbnails.high.url) {
      videoData.thumbnailUrl = video.thumbnails.high.url;
    } else if (video.thumbnails.medium.url) {
      videoData.thumbnailUrl = video.thumbnails.medium.url;
    } else {
      videoData.thumbnailUrl = video.thumbnails.default.url;
    }

    return videoData;
  } catch (error) {
    throw new Error('Failed to fetch video data: ' + error.message);
  }
}

async function getuserdata(channelId: string): Promise<YouTubePosterData> {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${ytapikey}`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items.length === 0) {
          throw new Error('Channel not found');
      }

      const channel = data.items[0].snippet;

      const channelData: YouTubePosterData = {
          pfp: channel.thumbnails.high.url, // You can change 'default' to other sizes as needed
          username: channel.title,
      };

      // Check if the channel has a custom URL (handle)
      if (data.items[0].snippet.customUrl) {
          channelData.handle = data.items[0].snippet.customUrl;
      } else {
        channelData.handle = channelData.username;
      }

      return channelData;
  } catch (error) {
      throw new Error('Failed to fetch channel data: ' + error.message);
  }
}