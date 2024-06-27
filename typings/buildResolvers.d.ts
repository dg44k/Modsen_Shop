import { Configuration } from "webpack";
import { BuildOptions } from "../config/types/types";

declare function buildResolvers({
  paths,
}: BuildOptions): Configuration["resolve"];
