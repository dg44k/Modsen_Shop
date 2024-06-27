import { ModuleOptions } from "webpack";
import { BuildOptions } from "../config/types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"];
