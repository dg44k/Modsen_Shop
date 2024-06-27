import { Configuration, ModuleOptions } from "webpack";
import { BuildOptions } from "../config/types/types";
import React, { FC } from "react";
import { WebpackConfiguration } from "webpack-dev-server";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration;

export declare function buildWebpack(
  options: BuildOptions,
): WebpackConfiguration;

export function buildPlugins({ paths }: BuildOptions): Configuration["plugins"];

export function buildResolvers({
  paths,
}: BuildOptions): Configuration["resolve"];

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"];

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
  const SVG: FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
