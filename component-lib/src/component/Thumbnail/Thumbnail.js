import React from "react";

const Thumbnail = props => (
  <>
    <img className="mainImage" scr={props.mainPicture} />
    <img className="hoverImage" src={props.hoverPicture} />
  </>
);

export default Thumbnail;