import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "../config/types/types";

export function buildPlugins({ paths }: BuildOptions): Configuration["plugins"];
