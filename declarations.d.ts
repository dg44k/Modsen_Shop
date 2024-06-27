declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
  import React, { FC } from "react";
  const SVG: FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
