import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./config/types/types";

declare function buildDevServer(options: BuildOptions): DevServerConfiguration;
