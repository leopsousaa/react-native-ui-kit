import React from "react";

import { styled } from "nativewind";
import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./Button.types";

const ButtonWind = styled(TouchableOpacity);

export const Button = ({ title, variant, ...props }: ButtonProps) => {
  return (
    <ButtonWind
      className="text-black bg-red-500 "
      // className={clsx({
      //   "text-black": variant === "default",
      //   "text-red-500": variant === "danger",
      //   "text-yellow-500": variant === "warning",
      //   "text-green-500": variant === "success",
      //   "text-blue-500/50": variant === "secondary",
      //   "text-blue-500": variant === "primary",
      // })}
      {...props}
    >
      <Text>{title}</Text>
    </ButtonWind>
  );
};
