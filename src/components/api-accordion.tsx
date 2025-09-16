import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import { Separator } from "~/components/ui/separator";

export default function ApiAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Full</AccordionTrigger>
        <AccordionContent>
        Description: Returns the Response of all API paths
        <Separator />
        Path: https://yt-to-ytnocookie.altie122.xyz/api/full
        <br />
        Usage: https://yt-to-ytnocookie.altie122.xyz/api/full?url={'{Youtube URL}'}
        <br />
        Response:{'{"IsYT":true,"URL":"{Youtube Nocookie URL}","ID":"{Youtube ID}"}'} OR a 400 error will be served
        <Separator />
        Example: https://yt-to-ytnocookie.altie122.xyz/api/full?url=https://www.youtube.com/watch?v=87TdQAGmeOA
        <br />
        Example output: {'{"IsYT":true,"URL":"https://www.youtube-nocookie.com/embed/87TdQAGmeOA","ID":"87TdQAGmeOA"}'}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is Youtube?</AccordionTrigger>
        <AccordionContent>
        Description: Returns if the URL is a Youtube URL as a boolen
        <Separator />
        Path: https://yt-to-ytnocookie.altie122.xyz/api/isyt
        <br />
        Usage: https://yt-to-ytnocookie.altie122.xyz/api/isyt?url={'{Youtube URL}'}
        <br />
        Response:{'{"IsYT":{true/false}}'}
        <Separator />
        Example: https://yt-to-ytnocookie.altie122.xyz/api/isyt?url=https://www.youtube.com/watch?v=87TdQAGmeOA
        <br />
        Example output: {'{"IsYT":true}'}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Youtube ID</AccordionTrigger>
        <AccordionContent>
        Description: Returns the ID of the given Youtube URL
        <Separator />
        Path: https://yt-to-ytnocookie.altie122.xyz/api/ytid
        <br />
        Usage: https://yt-to-ytnocookie.altie122.xyz/api/ytid?url={'{Youtube URL}'}
        <br />
        Response:{'{"ID":"{Youtube ID}"}'} OR a 400 error will be served
        <Separator />
        Example: https://yt-to-ytnocookie.altie122.xyz/api/ytid?url=https://www.youtube.com/watch?v=87TdQAGmeOA
        <br />
        Example output: {'{"ID":"{87TdQAGmeOA}"}'}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>YT to YT No Cookie</AccordionTrigger>
        <AccordionContent>
        Description: Returns the youtube-nocookie.com version of the given Youtube URL/ID
        <Separator />
        Path: https://yt-to-ytnocookie.altie122.xyz/api/yttoytnocookie
        <br />
        Usage: https://yt-to-ytnocookie.altie122.xyz/api/yttoytnocookie?url={'{Youtube URL}'}
        <br />
        Response:{'{"URL":"{Youtube Nocookie URL}"}'} OR a 400 error will be served
        <Separator />
        Example: https://yt-to-ytnocookie.altie122.xyz/api/yttoytnocookie?url=https://www.youtube.com/watch?v=87TdQAGmeOA
        <br />
        Example output: {'{"URL":"https://www.youtube-nocookie.com/embed/87TdQAGmeOA"}'}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}