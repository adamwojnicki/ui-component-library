import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button>Default</Button>;
export const Outline = () => <Button variant="outline">Outline</Button>;
export const Text = () => <Button variant="text">Text</Button>;
export const DisableShadow = () => (
  <Button color="primary" disableShadow>
    Disable Shadow
  </Button>
);
export const Disabled = () => <Button disabled={true}>Disabled</Button>;
export const TextDisabled = () => (
  <Button variant="text" disabled={true}>
    Text Disabled
  </Button>
);
