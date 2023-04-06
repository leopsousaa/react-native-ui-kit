import {
  TextInputIOSProps,
  TextProps,
  TextPropsAndroid,
} from "react-native/types";

export type TypographyBaseProps = TextProps &
  TextInputIOSProps &
  TextPropsAndroid;

export interface TypographyProps extends TypographyBaseProps {}
