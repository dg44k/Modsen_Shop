import { Configuration } from "webpack";
import { BuildOptions } from "../config/types/types";

export function buildResolvers({
  paths,
}: BuildOptions): Configuration["resolve"];
