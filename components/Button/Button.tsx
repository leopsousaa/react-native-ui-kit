import React from "react";
import { Button as ButtonBase } from "react-native";

import { ButtonProps } from "./Button.types";

export const Button = ({ title, ...props }: ButtonProps) => {
  return <ButtonBase {...props} title={title} />;
};
