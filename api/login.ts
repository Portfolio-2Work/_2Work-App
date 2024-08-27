import { LoginProps } from "@/utils/types/user";
import api from "./api-base/setup";
import { ObjectResponse } from "@/utils/types/ObjectResponse";

export function login(values: { email: string; password: string }) {
  return api.post<ObjectResponse<LoginProps>>("User/login", values);
}
