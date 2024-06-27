import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "../config/types/types";

export declare function buildWebpack(
  options: BuildOptions,
): WebpackConfiguration;
