import React from "react";

const Thumbnail = props => (
  <>
  <div>
    <img className="mainImage" src={props.mainPicture} alt="main" />
    <img className="hoverImage" src={props.hoverPicture} alt="hover" />
  </div>
  </>
);

export default Thumbnail;