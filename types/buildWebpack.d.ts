type WebpackConfiguration = import("webpack").Configuration;
import { BuildOptions } from "../config/types/types";

export declare function buildWebpack(
  options: BuildOptions,
): WebpackConfiguration;
