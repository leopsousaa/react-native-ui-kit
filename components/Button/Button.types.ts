import { ButtonProps as ButtonPropsBase } from "react-native/types";
import { VariantProps } from "../Theme";

export interface ButtonProps extends ButtonPropsBase {
  title: string;
  variant?: VariantProps;
}
