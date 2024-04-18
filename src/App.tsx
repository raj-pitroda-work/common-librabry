import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import NavigationBar from "./components/common/NavigationBar";
import AlertModal from "./components/common/AlertModal";
import Footer from "./components/common/Footer";

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
      />
      <div className="main-content">
        <Routes>
          <Route path="/about-us" Component={AboutUs} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
      <Footer />
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
