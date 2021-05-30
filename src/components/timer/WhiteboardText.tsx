import React from "react";
import { WhiteboardContainerItem } from "../../styles/styledComponents/timer/containers";
import {
  WhiteboardBody,
  WhiteboardTitle,
} from "../../styles/styledComponents/timer/titles";

interface WhiteboardTextProps {}

export const WhiteboardText: React.FC<WhiteboardTextProps> = ({}) => {
  return (
    <WhiteboardContainerItem>
      <WhiteboardTitle>Warmup</WhiteboardTitle>
      <WhiteboardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis facilis officiis, sint magnam cum possimus laboriosam
        provident autem optio suscipit accusantium quos excepturi perspiciatis
        esse doloribus officia accusamus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Culpa porro reiciendis facilis officiis, sint magnam
        cum possimus laboriosam provident autem optio suscipit accusantium quos
        excepturi perspiciatis esse doloribus officia accusamus.
      </WhiteboardBody>
    </WhiteboardContainerItem>
  );
};
