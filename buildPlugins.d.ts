import { Configuration } from "webpack";
import { BuildOptions } from "./config/types/types";

declare function buildPlugins({
  paths,
}: BuildOptions): Configuration["plugins"];
