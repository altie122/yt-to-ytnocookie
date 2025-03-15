import axios from "axios";
import { env } from "~/env";

export async function SendDiscordWebhook(message: string) {
  try {
    const webhookURL = String(env.DISCORD_WEBHOOK);
    const payload = {
      content: message,
    };

    const response = await axios.post(webhookURL, payload);

    if (response.status !== 200 && response.status !== 204) {
      throw new Error(
        `Failed to send message: ${response.status} ${response.statusText}`,
      );
    }

    console.log("Message sent to Discord webhook successfully!");
  } catch (error) {
    console.error("Error sending message to Discord webhook:", error);
  }
}
