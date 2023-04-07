import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
  args: { variant: "danger" },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Warning = Template.bind({});

export const Danger = Template.bind({});

export const Success = Template.bind({});

Default.args = { title: "Default", variant: "default" };

Primary.args = { title: "Primary", variant: "primary" };

Secondary.args = { title: "Secondary", variant: "secondary" };

Warning.args = { title: "Warning", variant: "warning" };

Danger.args = { title: "Danger", variant: "danger" };

Success.args = { title: "Success", variant: "success" };
