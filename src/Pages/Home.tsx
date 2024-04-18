import { Box, Grid } from "@mui/material";
import React from "react";
import CustomBtn from "../components/common/CustomBtn";
import CustomCard from "../components/common/CustomCard";
import CustomTextfield from "../components/common/CustomTextfield";

const CardDetails = [
  {
    imgUrl:
      "https://www.clariwell.in/resources/uploads/Technical-Highlights-and-Roles-of-Mechanical-Design-Engineers.webp",
    title: "Title",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    imgUrl:
      "https://thumbs.dreamstime.com/b/technical-support-customer-service-business-technology-internet-concept-100232431.jpg",
    title: "Title",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbd1MWsfXg_fsYMMR_XIDfLM-nz8XsN2LlQ1zld4XKA&s",
    title: "Title",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    imgUrl:
      "https://www.mahindrauniversity.edu.in/wp-content/uploads/2023/04/Emerge_as_a_Forward_thinking_Mechanical_Engineer_with_B_1140x4601.jpg",
    title: "Title",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
];
const Home: React.FC = () => {
  return (
    <>
      <div className="home-page m-6">
        <Grid container className="mb-6 bg-white ">
          <Grid item md={6} className="flex justify-center items-center w-full">
            <Box className="content pr-0 text-center">
              <h4 className="font-extrabold text-gray-800 text-3xl cursive mt-2">
                React JS
              </h4>
              <h1 className="font-extrabold text-7xl cursive mt-1 p-dark-c">
                Common Library
              </h1>
              <h2 className="font-extrabold p-dark-c text-5xl cursive mt-2">
                with Typescript
              </h2>
            </Box>
          </Grid>
          <Grid item md={6} className="p-24 flex justify-center items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-700 mb-2">
                Welcome to Common Library
              </h1>
              <h4 className="text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut commodo erat. Sed ac magna eget odio consectetur lobortis.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Vivamus et ante eget turpis pretium
                iaculis sit amet vel neque. Nullam aliquet, turpis sit amet
                dignissim facilisis, lacus magna accumsan lacus, eu aliquam odio
                nisi non turpis
              </h4>
            </div>
            {/* <img src="img1.jpg" /> */}
          </Grid>
        </Grid>
        <Grid container className="mb-6" spacing={2}>
          {CardDetails.map((cardDetail, index) => (
            <Grid item sm={3} key={`card-${index}`}>
              <CustomCard
                cardTitle={cardDetail.title}
                imgUrl={cardDetail.imgUrl}
              >
                <p className="text-gray-600">{cardDetail.desc}</p>
              </CustomCard>
            </Grid>
          ))}
        </Grid>
        <Grid container className=" bg-white">
          <Grid item sm={6} className="flex justify-center items-center">
            <div className="content pr-0 text-center">
              <h1 className="font-extrabold text-7xl cursive mt-1 p-dark-c">
                Get In Touch
              </h1>
            </div>
          </Grid>
          <Grid item sm={6} sx={{ width: { xs: "100%", sm: "fit-content" } }}>
            <Box className="m-5 lg:mt-10 lg:ml-20 lg:mr-20 mb-2">
              <form>
                <CustomTextfield
                  name="inp1"
                  lbl="Full Name"
                  variant="outlined"
                />
                <br />
                <CustomTextfield
                  name="inp4"
                  lbl="Email"
                  type="email"
                  variant="outlined"
                />
                <br />
                <CustomTextfield
                  name="inp4"
                  lbl="Phone No"
                  type="text"
                  variant="outlined"
                />
                <br />
                <CustomTextfield
                  name="inp4"
                  lbl="Linked In"
                  type="text"
                  variant="outlined"
                />
                <div className="btn-grp mt-2">
                  <CustomBtn
                    lbl="Submit"
                    variant="contained"
                    size="large"
                    sx={{
                      width: { xs: "100%", sm: "fit-content" },
                    }}
                  />
                  <CustomBtn
                    lbl="Cancel"
                    variant="outlined"
                    size="large"
                    sx={{
                      width: { xs: "100%", sm: "fit-content" },
                      marginTop: { xs: "10px", sm: "0" },
                    }}
                  />
                </div>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
