import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AlertModal from "./components/common/AlertModal";
import CustomAccordion from "./components/common/CustomAccordion";
import CustomBtn from "./components/common/CustomBtn";
import CustomCard from "./components/common/CustomCard";
import CustomModal from "./components/common/CustomModal";
import CustomSwitch from "./components/common/CustomSwitch";
import CustomTab from "./components/common/CustomTab";
import CustomTextfield from "./components/common/CustomTextfield";
import CustomTooltip from "./components/common/CustomTooltip";
import NavigationBar from "./components/common/NavigationBar";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";

function App() {
  const [isSwitchOn, setSwitchOn] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [alertModal, setAlertModal] = useState<
    "success" | "error" | "warning" | ""
  >("");

  const navigation = useNavigate();

  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  const toggleAlert = (type: "success" | "error" | "warning") => {
    setAlertModal(type);
  };

  const renderTabContent = (value: number) => {
    return (
      <div
        role="tabpanel"
        // hidden={value !== index}
        id={`simple-tabpanel-${value}`}
        aria-labelledby={`simple-tab-${value}`}
      >
        <Box sx={{ p: 3 }}>
          <Typography>Content of {value}</Typography>
        </Box>
      </div>
    );
  };

  return (
    <>
      <NavigationBar
        links={[
          {
            title: "Home",
            onClick: () => {
              navigation("/");
            },
          },
          {
            title: "About US",
            onClick: () => {
              navigation("/about-us");
            },
          },
          {
            title: "Contact Us",
            onClick: () => {
              navigation("/contact-us");
            },
          },
          {
            title: "Privacy Policy",
            onClick: () => {
              window.open(`https://google.com`);
            },
          },
          {
            title: "Dropdown",
            subChild: [
              {
                title: "sub child 1",
                onClick: () => {
                  navigation("/1");
                },
              },
              {
                title: "sub child 2",
                onClick: () => {
                  navigation("/2");
                },
              },
              {
                title: "sub child 3",
                onClick: () => {
                  navigation("/3");
                },
              },
            ],
          },
          {
            title: "Dropdown2",
            subChild: [
              {
                title: "sub child 4",
                onClick: () => {
                  navigation("/4");
                },
              },
              {
                title: "sub child 5",
                onClick: () => {
                  navigation("/5");
                },
              },
            ],
          },
        ]}
      />
      <div className="main-content">
        <Routes>
          <Route path="/contact-us" Component={ContactUs} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
      <br />
      <br />
      <br />
      <CustomTooltip content="Top CustomTooltip" bgColor="red" position="top">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Top CustomTooltip
        </button>
      </CustomTooltip>

      <CustomSwitch
        leftLbl="Legt Lbl"
        rightLbl="Right Lbl"
        handleSwitchToggle={setSwitchOn}
        isChecked={isSwitchOn}
      />
      <br />
      <CustomBtn
        lbl="Toggle Modal"
        variant="contained"
        color="success"
        handleBtnClick={toggleSwitch}
      />
      <br />
      <CustomModal
        title="Modal Title"
        handleClose={toggleSwitch}
        handleSave={toggleSwitch}
        isOpen={isSwitchOn}
      >
        <CustomAccordion
          contentDetail={[
            {
              content: `content 1`,
              header: "header 1",
              isDefaultOpen: false,
            },
            {
              content: `content 2`,
              header: "header 2",
              isDefaultOpen: false,
            },
          ]}
        />
      </CustomModal>
      <br />
      <CustomTextfield name="inp1" lbl="Text Input" />
      <br />
      <CustomTextfield name="inp2" lbl="Number Input" type="number" />
      <br />
      <CustomTextfield name="inp3" lbl="Password Input" type="password" />
      <br />
      <CustomTextfield name="inp4" lbl="Email Input" type="email" />
      <br />
      <CustomBtn
        lbl="Success Alert"
        variant="contained"
        // color="success"
        handleBtnClick={() => toggleAlert("success")}
      />
      <br />
      <br />
      <CustomBtn
        lbl="Warning Alert"
        variant="contained"
        color="warning"
        handleBtnClick={() => toggleAlert("warning")}
      />
      <br />
      <br />
      <CustomBtn
        lbl="Error Alert"
        variant="contained"
        color="error"
        handleBtnClick={() => toggleAlert("error")}
      />
      <br />
      <br />
      <div className="ml-4">
        <CustomCard
          cardMaxWidth={400}
          cardTitle="Title"
          imgUrl={
            "https://www.shutterstock.com/image-photo/chameleon-close-up-multicolor-beautiful-260nw-1346563901.jpg"
          }
        >
          <div>Raj</div>
          <div>Raj</div>
        </CustomCard>
      </div>
      <br />
      <br />
      <CustomTab
        heading={[
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
          { title: "head 1" },
          { title: "head 2" },
          { title: "head 3" },
          { title: "head 4" },
        ]}
        renderContent={renderTabContent}
        handleChange={(val) => setCurrentTab(val)}
        selectedTab={currentTab}
      />
      <br />
      {alertModal && (
        <AlertModal
          handleClose={() => setAlertModal("")}
          isOpen={true}
          type={alertModal}
        >
          <>This Is Content or msg to user</>
        </AlertModal>
      )}
    </>
  );
}

export default App;
