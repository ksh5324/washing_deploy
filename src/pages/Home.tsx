import React, {
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useState,
} from "react";
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
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Layout } from "../components/common/layout/Layout";

const Home = () => {
  const [fill, setFill] = useState<number>(0);
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
  const location = useLocation();
  const authUrl = `https://dauth.b1nd.com/login?client_id=4cc81ba00f174bc09340a1d6d75927665b7f7c0ca5a844a98af774648043a857&redirect_uri=http://localhost:3000`;
  const [dauthCode, setDauthCode] = useState<string | null>();

  useEffect(() => {
    setDauthCode(location.search.split("&")[0].split("=")[1]);
  }, []);

  useEffect(() => {
    getToken();
  }, [dauthCode]);

  const getToken = async () => {
    if (!dauthCode) {
      return;
    }
    const data = await axios.post(
      `http://server.fastwash.kro.kr:8080/auth/sign-in?code=${dauthCode}`
    );
    console.log(data);
  };
  return (
    <Layout>
      <Title>세탁기 예약</Title>
      <Label>세탁기</Label>
      <SelectBox>
        <option>[3층] 좌측 세면실 1번</option>
        <option>[3층] 좌측 세면실 2번</option>
        <option>[3층] 좌측 세면실 3번</option>
        <option>[3층] 우측 세면실 1번</option>
        <option>[3층] 우측 세면실 2번</option>
        <option>[3층] 우측 세면실 3번</option>

        <option>[4층] 좌측 세면실 1번</option>
        <option>[4층] 좌측 세면실 2번</option>
        <option>[4층] 좌측 세면실 3번</option>
        <option>[4층] 우측 세면실 1번</option>
        <option>[4층] 우측 세면실 2번</option>
        <option>[4층] 우측 세면실 3번</option>

        <option>[5층] 좌측 세면실 1번</option>
        <option>[5층] 좌측 세면실 2번</option>
        <option>[5층] 좌측 세면실 3번</option>
        <option>[5층] 우측 세면실 1번</option>
        <option>[5층] 우측 세면실 2번</option>
        <option>[5층] 우측 세면실 3번</option>
      </SelectBox>
      <Label>희망 시간</Label>
      <SelectBox>
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
      <ApplyButton>배정 신청</ApplyButton>
    </Layout>
  );
};

export default Home;
