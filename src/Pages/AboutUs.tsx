import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CustomAccordion from "../components/common/CustomAccordion";
import CustomSwitch from "../components/common/CustomSwitch";
import CustomTab from "../components/common/CustomTab";
import { grey } from "@mui/material/colors";

const AboutUsDetail = [
  {
    header: "Title 1",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
  commodo erat. Sed ac magna eget odio consectetur lobortis. Vestibulum
  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Vivamus et ante eget turpis pretium iaculis sit amet vel neque.
  Nullam aliquet, turpis sit amet dignissim facilisis, lacus magna
  accumsan lacus, eu aliquam odio nisi non turpis.`,
  },
  {
    header: "Title 2",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
  commodo erat. Sed ac magna eget odio consectetur lobortis. Vestibulum
  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Vivamus et ante eget turpis pretium iaculis sit amet vel neque.
  Nullam aliquet, turpis sit amet dignissim facilisis, lacus magna
  accumsan lacus, eu aliquam odio nisi non turpis.`,
  },
  {
    header: "Title 3",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
  commodo erat. Sed ac magna eget odio consectetur lobortis. Vestibulum
  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Vivamus et ante eget turpis pretium iaculis sit amet vel neque.
  Nullam aliquet, turpis sit amet dignissim facilisis, lacus magna
  accumsan lacus, eu aliquam odio nisi non turpis.`,
  },
  {
    header: "Title 4",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
  commodo erat. Sed ac magna eget odio consectetur lobortis. Vestibulum
  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Vivamus et ante eget turpis pretium iaculis sit amet vel neque.
  Nullam aliquet, turpis sit amet dignissim facilisis, lacus magna
  accumsan lacus, eu aliquam odio nisi non turpis.`,
  },
  {
    header: "Title 5",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
  commodo erat. Sed ac magna eget odio consectetur lobortis. Vestibulum
  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Vivamus et ante eget turpis pretium iaculis sit amet vel neque.
  Nullam aliquet, turpis sit amet dignissim facilisis, lacus magna
  accumsan lacus, eu aliquam odio nisi non turpis.`,
  },
  {
    header: "Title 6",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
  commodo erat. Sed ac magna eget odio consectetur lobortis. Vestibulum
  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Vivamus et ante eget turpis pretium iaculis sit amet vel neque.
  Nullam aliquet, turpis sit amet dignissim facilisis, lacus magna
  accumsan lacus, eu aliquam odio nisi non turpis.`,
  },
  {
    header: "Title 7",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
  commodo erat. Sed ac magna eget odio consectetur lobortis. Vestibulum
  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Vivamus et ante eget turpis pretium iaculis sit amet vel neque.
  Nullam aliquet, turpis sit amet dignissim facilisis, lacus magna
  accumsan lacus, eu aliquam odio nisi non turpis.`,
  },
];
const AboutUs = () => {
  const [showAs, setShowAs] = useState<"" | "tab" | "accordion">("");
  const [currentTab, setCurrentTab] = useState<number>(0);

  const renderTabContent = (value: number) => {
    return (
      <div
        role="tabpanel"
        // hidden={value !== index}
        id={`simple-tabpanel-${value}`}
        aria-labelledby={`simple-tab-${value}`}
      >
        <Box sx={{ p: 3 }}>
          <Typography>
            {value + 1}: {AboutUsDetail[value]?.content}
          </Typography>
        </Box>
      </div>
    );
  };

  const handleSwitch = (val: "tab" | "accordion") => {
    if (showAs === val) {
      setShowAs("");
    } else {
      setShowAs(val);
    }
  };
  return (
    <div className="m-6 p-2 bg-white">
      <div className="flex justify-between mt-2">
        <h1 className=" text-center text-4xl  font-bold p-dark-c">
          Welcome Common Library
        </h1>
        <div>
          <CustomSwitch
            leftLbl="As Accordion"
            isChecked={showAs === "accordion"}
            handleSwitchToggle={() => handleSwitch("accordion")}
            size="medium"
          />
          <CustomSwitch
            leftLbl="As Tabs"
            isChecked={showAs === "tab"}
            handleSwitchToggle={() => {
              setCurrentTab(0);
              handleSwitch("tab");
            }}
            size="medium"
          />
        </div>
      </div>

      {showAs === "accordion" ? (
        <div className="mt-4">
          <CustomAccordion contentDetail={AboutUsDetail} />
        </div>
      ) : showAs === "tab" ? (
        <div className="mt-4">
          <CustomTab
            heading={AboutUsDetail.map((x) => ({ title: x.header }))}
            renderContent={renderTabContent}
            handleChange={(val) => setCurrentTab(val)}
            selectedTab={currentTab}
            tabBg={grey[100]}
          />
        </div>
      ) : (
        AboutUsDetail.map((x, i) => (
          <div className="item-content" key={`detail-${i}`}>
            <h3 className="item-title text-xl mt-4 font-bold">{x.header}</h3>
            <p className="item-description text-gray-500 ">{x.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AboutUs;
