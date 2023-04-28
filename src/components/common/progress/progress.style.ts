import styled from "styled-components";
import scrollImg from "../../../assets/scroll.png";

export const ProgressContainer = styled.div`
  width: 134px;
  height: 163px;
  background: #faf8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  position: relative;
`;

export const ProgressCard1 = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;

  width: 85px;
  height: 13px;
  background: #636363;
  border-radius: 2px;
`;
export const ProgressCard2 = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;

  width: 22px;
  height: 25px;
  background: #636363;
  border-radius: 2px;
`;
export const Progress = styled.div<{ fill: number }>`
  position: absolute;
  bottom: 18px;
  left: 18px;

  width: 100px;
  height: 100px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  overflow: hidden;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: ${({ fill }) => `${fill}%`};
    background: #27e1c0;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${scrollImg});
    background-size: auto;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  cursor: ns-resize;
`;
