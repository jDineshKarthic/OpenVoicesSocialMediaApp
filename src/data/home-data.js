import { v4 as uuid } from "uuid";
import { FilledHeartIcon, LatestIcon, GoBackIcon } from "assets";

export const HomeData = {
  menuOptions: [
    {
      _id: uuid(),
      color: "error",
      h1Text: "Most Liked Voices",
      item: (
        <>
          
          Check most Liked Voices
        </>
      ),
    },
    {
      _id: uuid(),
      color: "warning",
      h1Text: "Latest Voices",
      item: (
        <>
           Check latest voices 
        </>
      ),
    },
    {
      _id: uuid(),
      color: "normal",
      h1Text: "Home",
      item: (
        <>
           Go to Home
        </>
      ),
    },
  ],
};
