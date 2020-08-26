import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

// DEFAULT BTNS
export const Basic = () => <Button>Basic</Button>;
export const Outline = () => <Button variant="outline">Outline</Button>;
export const Text = () => <Button variant="text">Text</Button>;

// NO SHADOW
export const DisableShadow = () => (
  <Button color="primary" disableShadow>
    Disable Shadow
  </Button>
);

// DISABLED
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

// WITH ICONS
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
// SIZES
export const Small = () => (
  <Button color="primary" size="sm">
    Small
  </Button>
);
export const Medium = () => (
  <Button color="primary" size="md">
    Medium
  </Button>
);
export const Large = () => (
  <Button color="primary" size="lg">
    Large
  </Button>
);

// COLORS
export const Default = () => <Button color="default">Default</Button>;
export const Primary = () => <Button color="primary">Primary</Button>;
export const Secondary = () => <Button color="secondary">Secondary</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;
