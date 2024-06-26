import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { plugin } from "typescript-eslint";
import { current } from "@reduxjs/toolkit";
import { BuildMode, BuildPaths } from "./config/types/types";
import path from "path";

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "main.tsx"),
    output: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
  });

  return config;
};
