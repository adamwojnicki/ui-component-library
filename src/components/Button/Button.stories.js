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
  <Button variant="primary" disableShadow>
    Disable Shadow
  </Button>
);
