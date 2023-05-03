import React from "react";
import {
  Label,
  Title,
  Ul,
  Write,
  ApplyButton,
} from "../components/common/common.style";
import { Layout } from "../components/common/layout/Layout";

const Wash = () => {
  return (
    <Layout>
      <Title>배정된 세탁기</Title>
      <Label>세탁기</Label>
      <Write>[5층] 좌측 세면실 1번</Write>
      <Label>시간대</Label>
      <Write>오후 9시 20분~9시 30분</Write>
      <Label>세탁 크루</Label>
      <Ul>
        <li>이승민</li>
        <li>강성훈</li>
        <li>한상빈</li>
        <li>최민재</li>
      </Ul>
      <ApplyButton>세탁기 문 열기</ApplyButton>
    </Layout>
  );
};

export default Wash;
