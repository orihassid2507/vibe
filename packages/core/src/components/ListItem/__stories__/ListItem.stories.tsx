import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import ListItem from "../../ListItem/ListItem";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import ListItemAvatar from "../../ListItemAvatar/ListItemAvatar";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { person1 } from "../../Avatar/__stories__/assets";
import { Send } from "@vibe/icons";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ListItem
});

export default {
  title: "Components/List/ListItem",
  component: ListItem,
  subcomponents: {
    ListItemIcon,
    ListItemAvatar
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const listItemTemplate = createComponentTemplate(ListItem);

export const Overview = {
  render: listItemTemplate.bind({}),
  name: "Overview",
  args: { children: "List item" }
};

export const States = {
  render: () => (
    <>
      <ListItem>Default state</ListItem>
      <ListItem disabled>Disabled state</ListItem>
      <ListItem selected>Selected state</ListItem>
    </>
  ),

  name: "States"
};

export const Sizes = {
  render: () => (
    <>
      <ListItem size="small">Small item</ListItem>
      <ListItem size="medium">Medium item</ListItem>
      <ListItem size="large">Large item</ListItem>
    </>
  ),

  name: "Sizes"
};

export const WithIcon = {
  render: () => (
    <>
      <ListItem>
        <ListItemIcon icon={Send} />
        Productivity
      </ListItem>
    </>
  ),

  name: "List item with an icon"
};

export const WithAvatar = {
  render: () => (
    <ListItem>
      <ListItemAvatar src={person1} />
      Sophia Johnson
    </ListItem>
  ),

  name: "List item with an avatar"
};
