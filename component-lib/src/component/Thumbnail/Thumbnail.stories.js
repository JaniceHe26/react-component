import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import "./Thumbnail.css";
import Picture from '../../image/product.png';
import HoverPicture from '../../image/product-1.png';



storiesOf("Thumbnails", module)
  .add("thumbnail", () => (
    <Thumbnail mainPicture={Picture} hoverPicture={HoverPicture} />
  ))