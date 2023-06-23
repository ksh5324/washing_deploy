import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import {
  ApplyButton,
  Flex,
  Label,
  P,
  SelectBox,
  Status,
  Title,
} from "../components/common/common.style";
import {
  Progress,
  ProgressCard1,
  ProgressCard2,
  ProgressContainer,
} from "../components/common/progress/progress.style";
import { Layout } from "../components/common/layout/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  useApplyWasherMutation,
  useGetWasher,
} from "../queries/washer/washer.query";

const Home = () => {
  const { data } = useGetWasher();
  const { mutate } = useApplyWasherMutation();
  const [fill, setFill] = useState<number>(0);
  const [washerNumber, setWasherNumber] = useState<number>(1);
  const [time, setTime] = useState<string>();
  const [isClicked, setIsClicked] = useState(false);
  const click: MouseEventHandler = (e) => {
    setIsClicked(true);
    setFill(100 - e.nativeEvent.offsetY);
  };
  const move: MouseEventHandler = (e) => {
    if (isClicked) {
      setFill(100 - e.nativeEvent.offsetY);
    }
  };
  const changeWasherNumber: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setWasherNumber(
      data?.washers.find(
        (v) => v.name === (e.target as HTMLSelectElement).value
      )?.id!
    );
  };
  const changeTime: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const beforeTime = (e.target as HTMLSelectElement).value;
    const timeArray = beforeTime.split(" ");
    const t = timeArray[0] === "오후" ? 12 : 0;
    const afterArray = `${
      Number(timeArray[1].slice(0, timeArray[1].length - 1)) + t
    }:${timeArray[2].slice(0, timeArray[2].length - 1)}`;
    console.log(afterArray);
    setTime(afterArray);
  };
  const request = () => {
    mutate({ quantity: fill, time: time!, washerId: washerNumber! });
  };

  return (
    <Layout>
      <Title>세탁기 예약</Title>
      <Label>세탁기</Label>
      <SelectBox onChange={changeWasherNumber}>
        {data && data.washers.map((v: any) => <option>{v.name}</option>)}
      </SelectBox>
      <Label>희망 시간</Label>
      <SelectBox onChange={changeTime}>
        <option>오전 8시 00분</option>
        <option>오전 10시 00분</option>
        <option>오후 12시 00분</option>
        <option>오후 2시 30분</option>
        <option>오후 4시 00분</option>
        <option>오후 5시 30분</option>
        <option>오후 7시 00분</option>
        <option>오후 9시 20분</option>
        <option>오후 11시 00분</option>
      </SelectBox>
      <P>세탁물 양</P>
      <Flex>
        <Status status={fill}>중간 정도</Status>
        <ProgressContainer>
          <ProgressCard1 />
          <ProgressCard2 />
          <Progress
            fill={fill}
            onMouseDown={click}
            onMouseMove={move}
            onMouseUp={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
          ></Progress>
        </ProgressContainer>
      </Flex>
      <ApplyButton onClick={request}>배정 신청</ApplyButton>
      <LinkDiv>
        <Link to="/wash" style={{ color: "black", textDecoration: "none" }}>
          세탁하러 가기
        </Link>
      </LinkDiv>
    </Layout>
  );
};

export default Home;

const LinkDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 85%;
  margin-top: 20px;

  font-weight: 700;
`;
