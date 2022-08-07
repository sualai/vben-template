import { RouteMeta } from "vue-router";

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  account: string;
  password: string;
}

export interface RoleInfo {
  id: string;
  code: string;
  name: string;
}
export interface Menus {
  component: string;
  hidden: boolean;
  id: string;
  meta: RouteMeta;
  name: string;
  path: string;
  pid: string;
  redirect: string;
}

/**
 * @description: Login interface return value
 */

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
  menus: Menus[]
}
