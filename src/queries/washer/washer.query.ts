import { useMutation, useQuery } from "@tanstack/react-query";
import {
  applyWasher,
  getAllWasher,
  getMeWasher,
} from "../../repository/washer/washer.repository";

export const useGetWasher = () => useQuery(["get/washer"], getAllWasher);

export const useApplyWasherMutation = () => useMutation(applyWasher);

export const useGetMe = () => useQuery(["get/me"], getMeWasher);
