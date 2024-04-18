import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import NavigationBar from "./components/common/NavigationBar";
import AlertModal from "./components/common/AlertModal";

function App() {
  const [alertModal, setAlertModal] = useState<
    "success" | "error" | "warning" | ""
  >("");

  const navigation = useNavigate();

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
            title: "Alert",
            subChild: [
              {
                title: "Success",
                onClick: () => {
                  setAlertModal("success");
                },
              },
              {
                title: "Warning",
                onClick: () => {
                  setAlertModal("warning");
                },
              },
              {
                title: "Error",
                onClick: () => {
                  setAlertModal("error");
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
        bgColor="#5f61db"
      />
      <div className="main-content">
        <Routes>
          <Route path="/about-us" Component={AboutUs} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
      {/* 
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
      </CustomModal>*/}
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
