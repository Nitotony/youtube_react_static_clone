import { SiYoutubegaming } from "react-icons/si";
import { SiYoutubeshorts } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";

import './vertical_menu.css';
const Vertical_menu = () => {
  return (
    <div className="vertical_menu">
      <div className="vertical_body">
        <ul>
          <li><SiYoutubegaming/></li>
          <li><SiYoutubeshorts/></li>
          <li><SiYoutubestudio/></li>
          <li><MdOutlineYoutubeSearchedFor/></li>
          <li><SiYoutubemusic/></li>
        </ul>
      </div>
    </div>
  );
};


export default Vertical_menu;