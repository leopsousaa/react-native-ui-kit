import React from "react";

import clsx from "clsx";
import { styled } from "nativewind";
import { Text, TouchableOpacity } from "react-native";
import type { ButtonProps } from "./types";

const ButtonWind = styled(TouchableOpacity);
const TextWind = styled(Text);

export const Button = ({ title, variant, ...props }: ButtonProps) => {
  return (
    <ButtonWind {...props}>
      <TextWind
        className={clsx("button", {
          "text-black": variant === "default",
          "text-red-500": variant === "danger",
          "text-yellow-500": variant === "warning",
          "text-green-500": variant === "success",
          "text-blue-500/50": variant === "secondary",
          "text-blue-500": variant === "primary",
        })}
      >
        {title}
      </TextWind>
    </ButtonWind>
  );
};
