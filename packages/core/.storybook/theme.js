import { create } from "@storybook/theming/create";
import logo from "./logo.svg";

export default create({
  base: "light",
  brandImage: logo,
  brandUrl: "https://vibe.monday.com",
  barSelectedColor: "#5034ff",
  brandTitle: "Vibe Design System",
  background: {
    hoverable: "rgba(80, 52, 255, 0.1)"
  },
  hoverable: "rgba(80, 52, 255, 0.1)"
});
