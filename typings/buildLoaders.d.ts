import { ModuleOptions } from "webpack";
import { BuildOptions } from "../config/types/types";

declare function buildLoaders(options: BuildOptions): ModuleOptions["rules"];
