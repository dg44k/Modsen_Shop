import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "../config/types/types";
import React, { FC } from "react";

declare function buildWebpack(options: BuildOptions): WebpackConfiguration;
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
  const SVG: FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
