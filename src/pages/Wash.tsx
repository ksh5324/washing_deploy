import React from "react";
import {
  Label,
  Title,
  Ul,
  Write,
  ApplyButton,
} from "../components/common/common.style";
import { Layout } from "../components/common/layout/Layout";
import Modal from "../components/common/Modal/Modal";
import useModal from "../hooks/useModal";
import { useGetMe } from "../queries/washer/washer.query";

const Wash = () => {
  const { close, isOpened, open } = useModal();
  const { data } = useGetMe();

  return (
    <Layout>
      <Title>배정된 세탁기</Title>
      <Label>세탁기</Label>
      <Write>{data && data.washer.name}</Write>
      <Label>시간대</Label>
      <Write>{data && data.time}</Write>
      <Label>세탁 크루</Label>
      <Ul>{data && data.users.map((v: any) => <li>{v.name}</li>)}</Ul>
      <ApplyButton onClick={open}>세탁기 문 열기</ApplyButton>
      {isOpened && <Modal close={close} seed={data.seed} />}
    </Layout>
  );
};

export default Wash;
