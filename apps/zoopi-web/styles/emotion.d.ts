import "@emotion/react";
import {Theme as CustomizedTheme} from "./theme";

declare module "@emotion/react" {
  export interface Theme extends CustomizedTheme{}
}
