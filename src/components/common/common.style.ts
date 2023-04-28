import styled from "styled-components";

export const Title = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 44px;
  color: #000000;
  margin-top: 71px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 6px;
`;

export const SelectBox = styled.select`
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  width: 276px;
  height: 40px;

  padding: 10px;
  outline: none;

  display: block;

  margin-bottom: 30px;
`;

export const ApplyButton = styled.button`
  width: 305px;
  height: 44px;
  background: #4ce2be;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  margin-top: 101px;
`;

export const P = styled(Label)`
  margin-bottom: 19px;
`;

export const Status = styled.div<{ status: number }>`
  color: ${({ status }) =>
    status < 50 ? "green" : status < 75 ? "rgba(249, 119, 46, 1)" : "red"};

  font-weight: 700;
`;

export const Flex = styled.div`
  display: flex;
  gap: 107px;
`;
