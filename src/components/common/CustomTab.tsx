import React from "react";
import { Box, Tab, Tabs, TabsProps } from "@mui/material";
import styled from "styled-components";

type IProp = {
  heading: { title: string; disabled?: boolean }[];
  renderContent: (val: number) => JSX.Element;
  selectedTab: number;
  handleChange: (val: number) => void;
  isVertical?: boolean;
  verticalBoxHeight?: number;
  tabBg?: string;
  selectedTabColor?: string;
  headFontColor?: string;
};

type TCTabs = TabsProps & {
  tabbg?: string;
  selectedtabcolor?: string;
  headfontcolor?: string;
};
const CTabs = styled(({ className, ...props }: TCTabs) => (
  <Tabs {...props} classes={{ root: className }} />
))`
  &.MuiTabs-root {
    background-color: ${(props) => (props.tabbg ? props.tabbg : "#fff")};
    font-size: 23px;
    border: 1px solid lightgrey;
  }
  .MuiTabs-indicator {
    background-color: ${(props) => props.selectedtabcolor};
  }
  /* Target the Tab components */
  .MuiTab-root {
    color: ${(props) => props.headfontcolor};
  }
  .Mui-selected {
    color: ${(props) => props.selectedtabcolor} !important;
    font-weight: bold;
  }
`;

const CustomTab: React.FC<IProp> = ({
  heading,
  renderContent,
  selectedTab,
  handleChange,
  isVertical,
  verticalBoxHeight,
  tabBg,
  selectedTabColor,
  headFontColor,
}) => {
  return (
    <>
      <Box
        sx={
          isVertical
            ? {
                flexGrow: 1,
                display: "flex",
                height: verticalBoxHeight ? verticalBoxHeight : 250,
                border: "1px solid lightGray",
              }
            : { borderBottom: 1, borderColor: "divider" }
        }
      >
        <CTabs
          value={selectedTab}
          onChange={(_: any, val: any) => handleChange(val)}
          aria-label="basic tabs example"
          variant="scrollable"
          orientation={isVertical ? "vertical" : "horizontal"}
          scrollButtons="auto"
          tabbg={tabBg}
          selectedtabcolor={selectedTabColor}
          headfontcolor={headFontColor}
        >
          {heading.map((x, i) => (
            <Tab
              wrapped
              key={`tab-head-${i}`}
              label={x.title}
              id={`simple-tab-${i}`}
              aria-controls={`simple-tabpanel-${i}`}
              disabled={x.disabled}
            />
          ))}
        </CTabs>
        {renderContent(selectedTab)}
      </Box>
    </>
  );
};

export default CustomTab;
