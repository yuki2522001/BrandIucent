import Header from "@components/common/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const TemplateHeader: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);
export const Default = TemplateHeader.bind({});
