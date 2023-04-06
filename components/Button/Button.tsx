import React from "react";
import { Button as ButtonBase } from "react-native";

import { styled } from "nativewind";
import { ButtonProps } from "./Button.types";

const ButtonWind = styled(ButtonBase);

export const Button = ({ title, variant, ...props }: ButtonProps) => {
  return (
    <ButtonWind
      className="text-black"
      // className={clsx({
      //   "text-black": variant === "default",
      //   "text-red-500": variant === "danger",
      //   "text-yellow-500": variant === "warning",
      //   "text-green-500": variant === "success",
      //   "text-blue-500/50": variant === "secondary",
      //   "text-blue-500": variant === "primary",
      // })}
      {...props}
      title={title}
    />
  );
};
