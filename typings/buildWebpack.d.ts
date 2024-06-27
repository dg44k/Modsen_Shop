import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "../config/types/types";

declare function buildWebpack(options: BuildOptions): WebpackConfiguration;
