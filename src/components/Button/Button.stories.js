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
export const Disabled = () => (
  <Button disabled={true} disableShadow>
    Disabled
  </Button>
);
export const TextDisabled = () => (
  <Button variant="text" disabled={true}>
    Text Disabled
  </Button>
);

export const StartIcon = () => (
  <Button color="primary" startIcon="alarm_on">
    Start Icon
  </Button>
);
export const EndIcon = () => (
  <Button color="primary" endIcon="alarm_on">
    End Icon
  </Button>
);
