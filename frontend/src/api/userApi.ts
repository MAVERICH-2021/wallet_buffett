
import api from "./api";

const URLS = {
  signupUrl: "api/auth/signup",
  loginUrl: "api/auth/login",
  logoutUrl: "api/auth/logout",
};

export type SignupUser = {
  //create attrs base on this json data     "name":"mave",    "email":"1141423570@gmail.com",    "password":"123456"
  name: string;
  email: string;
  password: string;
//   status: "success" | "error";
};

export const signup = (user: SignupUser) => {
  return api.post<SignupUser>(URLS.signupUrl, user);
};

export type LoginUser = {
   email: string;
   password: string;
 };
export const login= (user:LoginUser)=>{
   return api.post<LoginUser>(URLS.loginUrl,user,{
   })
}