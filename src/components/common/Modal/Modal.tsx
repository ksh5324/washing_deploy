import React, {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { keyframes } from "styled-components";
import closePng from "../../../assets/close.png";

const Modal = ({
  close,
  seed,
}: {
  close: MouseEventHandler<HTMLDivElement>;
  seed: number;
}) => {
  const [time, setTime] = useState<number>(0);
  const ModalRef = useRef<HTMLImageElement>(null);

  function generateRandom(seed: number) {
    const timeStamp = Math.round(Date.now() / 10000);

    const value = seed ^ timeStamp;

    const digits = [];
    for (let i = 1; i <= 6; i++) {
      const source =
        timeStamp % 2 == 0
          ? i % 2 == 1
            ? value
            : value % timeStamp
          : i % 2 == 0
          ? value
          : value % timeStamp;
      digits.push(`${(Math.floor(source / i) % 9) + 1}`);
    }

    return digits.join("");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 25);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (time >= 1000) {
      ModalRef.current!.click();
    }
  }, [time]);

  return (
    <ModalBackground onClick={close}>
      <ModalInner onClick={(e: MouseEvent) => e.stopPropagation()}>
        <ModalHead>
          <ModalClose src={closePng} onClick={close} ref={ModalRef} />
        </ModalHead>
        <ModalBody>
          <ModalBodyTitle>OTP</ModalBodyTitle>
          <ModalOTP>{generateRandom(seed)}</ModalOTP>
          <ModalProgress current={time / 10}></ModalProgress>
          <ModalDec>세탁기에 다음 숫자를 입력하세요</ModalDec>
        </ModalBody>
      </ModalInner>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalAnimation = keyframes`
    0%{
        bottom: -100%;
    }
    100%{
        bottom: 0;
    }
`;

const ModalInner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;

  background-color: white;

  border-radius: 20px 20px 0px 0px;

  animation: ${ModalAnimation} 0.3s ease-out;
`;

const ModalHead = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;
const ModalClose = styled.img``;

const ModalBody = styled.div`
  text-align: center;
  color: #3784f7;
`;

const ModalBodyTitle = styled.h3`
  font-size: 30px;
  margin: 0;
`;

const ModalOTP = styled.div`
  font-weight: 700;
  font-size: 50px;
  margin-top: 30px;
`;

const ModalProgress = styled.div<{ current: number }>`
  background: #b4b4b4;
  border-radius: 30px;
  width: 205px;
  height: 6px;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    border-radius: 30px;
    left: 0;
    width: ${({ current }) => `${current}%`};
    height: 6px;
    background-color: #ff5555;
  }
`;

const ModalDec = styled.div`
  color: black;
  margin-top: 50px;
`;
