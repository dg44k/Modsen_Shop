import webpack from "webpack";
// import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/types/types";
import path from "path";

import { WebpackConfiguration } from "webpack-dev-server";
import { plugin } from "typescript-eslint";
import { current } from "@reduxjs/toolkit";
import { buildDevServer } from "./config/build/buildDevServer";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildResolvers } from "./config/build/buildResolvers";
import { BuildOptions } from "./config/types/types";

export function buildWebpack(options: BuildOptions): WebpackConfiguration {
  const isDev = options.mode === "development";

  return {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
      publicPath: "/",
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

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
