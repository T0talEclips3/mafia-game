import InputField from "./InputField";

import { Story } from "@storybook/react";
import { ComponentProps } from "react";

export default {
  title: "InputField",
  component: InputField,
};

const Template: Story<ComponentProps<typeof InputField>> = (args) => (
  <InputField {...args}></InputField>
);

export const FirstStory = Template.bind({});
