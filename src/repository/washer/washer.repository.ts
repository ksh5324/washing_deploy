import { customAxios } from "../../util/customAxios";

export const getAllWasher = async (): Promise<{
  pages: number;
  washers: { id: number; name: string }[];
}> => {
  const { data } = await customAxios.get("/washers?page=0");
  return data;
};

export const applyWasher = async ({
  quantity,
  time,
  washerId,
}: {
  quantity: number;
  time: string;
  washerId: number;
}) =>
  await customAxios.post("/assignments/me", {
    quantity,
    time,
    washerId,
  });

export const getMeWasher = async () => {
  const { data } = await customAxios.get("/assignments/me");
  return data;
};
