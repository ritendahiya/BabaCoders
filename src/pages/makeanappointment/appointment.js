// import {
//   TextField,
//   InputAdornment,
//   Icon,
//   IconButton,
//   Select,
//   InputLabel,
//   MenuItem,
//   FormHelperText,
//   FormControl,
// } from "@mui/material";
// import styled from "styled-components";
// import FieldWithLabel from "./FieldWithLabel";
// import Button1 from "./Button1";
// import PropTypes from "prop-types";

// const BookYourAppointment = styled.h1`
//   margin: 0;
//   position: relative;
//   font-size: inherit;
//   line-height: 40px;
//   font-weight: 700;
//   font-family: inherit;
//   @media screen and (max-width: 750px) {
//     font-size: 26px;
//     line-height: 32px;
//   }
//   @media screen and (max-width: 450px) {
//     font-size: 19px;
//     line-height: 24px;
//   }
// `;
// const SoOurTeam = styled.div`
//   position: relative;
//   font-size: 16px;
//   line-height: 22px;
//   font-weight: 500;
//   display: inline-block;
//   max-width: 100%;
// `;
// const BookYourAppointmentNowParent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 10px;
//   max-width: 100%;
// `;
// const FullName = styled.div`
//   position: relative;
//   letter-spacing: 0.02em;
//   line-height: 150%;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 92px;
// `;
// const ComponentFields1 = styled(TextField)`
//   border: none;
//   background-color: transparent;
//   align-self: stretch;
//   height: 51px;
//   font-family: Poppins;
//   font-weight: 500;
//   font-size: 17.7px;
//   color: #c8c8c8;
// `;
// const PleaseFillThe = styled.div`
//   width: 146px;
//   position: relative;
//   font-size: 16px;
//   line-height: 22px;
//   font-weight: 500;
//   color: #e46363;
//   display: none;
// `;
// const FieldWithLabel1 = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 10px;
// `;
// const FullName1 = styled.div`
//   position: relative;
//   letter-spacing: 0.02em;
//   line-height: 27px;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 51px;
// `;
// const FullName2 = styled.div`
//   position: relative;
//   letter-spacing: 0.02em;
//   line-height: 150%;
//   font-weight: 500;
// `;
// const Inputlabel1 = styled(InputLabel)``;
// const Menuitem1 = styled(MenuItem)``;
// const Select1 = styled(Select)``;
// const Formhelpertext1 = styled(FormHelperText)``;
// const ChevronElements = styled(FormControl)`
//   height: 27px;
//   width: 73.7px;
//   font-family: Poppins;
//   font-weight: 500;
//   font-size: 17.7px;
//   color: #111827;
// `;
// const ChevronPlaceholder = styled.div`
//   position: relative;
//   letter-spacing: 0.02em;
//   line-height: 27px;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 97px;
// `;
// const ChevronElementsParent = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: center;
//   gap: 9px;
// `;
// const ComponentFields2 = styled.div`
//   align-self: stretch;
//   border-radius: 5px;
//   background-color: #f7f9ff;
//   border: 1px solid #eef4ff;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 10px 12px;
//   color: #c8c8c8;
// `;
// const FullNameDropdown = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 20px;
//   min-width: 249px;
//   max-width: 100%;
// `;
// const Select2 = styled.div`
//   position: relative;
//   letter-spacing: 0.02em;
//   line-height: 27px;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 57px;
// `;
// const ChevronDownIcon = styled.img`
//   height: 22.7px;
//   width: 22.7px;
//   position: relative;
//   overflow: hidden;
//   flex-shrink: 0;
// `;
// const SelectParent = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 100%;
//   gap: 20px;
// `;
// const ComponentFields3 = styled.div`
//   align-self: stretch;
//   border-radius: 5px;
//   background-color: #f7f9ff;
//   border: 1px solid #eef4ff;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 10px 11px;
//   max-width: 100%;
// `;
// const FieldWithLabel2 = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 10px;
//   max-width: 100%;
// `;
// const FullNameField = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 20px;
//   max-width: 100%;
//   font-size: 17.7px;
// `;
// const ButtonWrapper = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   justify-content: flex-start;
// `;
// const FrameParent = styled.section`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 40px;
//   max-width: 100%;
//   text-align: left;
//   font-size: 32px;
//   color: #111827;
//   font-family: Poppins;
//   @media screen and (max-width: 450px) {
//     gap: 20px;
//   }
// `;
// const BookAppointmentRoot = styled.div`
//   width: 886px;
//   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
//   background-color: #fff;
//   max-width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 50px;
//   box-sizing: border-box;
//   line-height: normal;
//   letter-spacing: normal;
//   @media screen and (max-width: 450px) {
//     padding-left: 20px;
//     padding-right: 20px;
//     box-sizing: border-box;
//   }
// `;

// const mainstyle = {};
// const mainmain = {
//   width: "800px",
//   marginTop: "150px",
//   marginLeft: "auto",
//   marginRight: "auto",
//   height: "100%",
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-center",
//   alignItems: "center",
// };
// const BookAppointment = ({ className = "" }) => {

//   const [userinfo, seruserinfo] = useState({
//     Name: "",
//     Age: 0,
//     email: "",
//     phone: 0,
//     medicalHistory:""
//   });

//   const {Name, Age, email,phone,medicalHistory}=userinfo
//   return (
//     <div style={mainmain}>
//       <BookAppointmentRoot className={className} style={mainstyle}>
//         <FrameParent>
//           <BookYourAppointmentNowParent>
//             <BookYourAppointment>Book your appointment now</BookYourAppointment>
//             <SoOurTeam>So our team can reach out to you on time</SoOurTeam>
//           </BookYourAppointmentNowParent>
//           <FullNameField>
//             <FullNameDropdown>
//               <FieldWithLabel1>
//                 <FullName>Full Name</FullName>
//                 <ComponentFields1
//                   placeholder="eg: John Doe"
//                   variant="outlined"
//                   value={Name}
//                   onChange={(e)=>{}}
//                   sx={{
//                     "& fieldset": { borderColor: "#eef4ff" },
//                     "& .MuiInputBase-root": {
//                       height: "51px",
//                       backgroundColor: "#f7f9ff",
//                       borderRadius: "5px",
//                       fontSize: "17.7px",
//                     },
//                     "& .MuiInputBase-input": { color: "#c8c8c8" },
//                   }}
//                 />
//                 <PleaseFillThe>please fill the field</PleaseFillThe>
//               </FieldWithLabel1>
//               <FieldWithLabel1>
//                 <FullName1>Email</FullName1>
//                 <ComponentFields1
//                   placeholder="eg: john@email.com "
//                   variant="outlined"
//                   sx={{
//                     "& fieldset": { borderColor: "#eef4ff" },
//                     "& .MuiInputBase-root": {
//                       height: "51px",
//                       backgroundColor: "#f7f9ff",
//                       borderRadius: "5px",
//                       fontSize: "17.7px",
//                     },
//                     "& .MuiInputBase-input": { color: "#c8c8c8" },
//                   }}
//                 />
//                 <PleaseFillThe>please fill the field</PleaseFillThe>
//               </FieldWithLabel1>
//               <FieldWithLabel1>
//                 <FullName2>Phone Number</FullName2>
//                 <ComponentFields2>
//                   <ChevronElementsParent>
//                     <ChevronElements
//                       variant="standard"
//                       sx={{
//                         borderTopWidth: "1px",
//                         borderRightWidth: "1px",
//                         borderBottomWidth: "1px",
//                         borderLeftWidth: "1px",
//                         borderRadius: "0px 0px 0px 0px",
//                         width: "73.7px",
//                         height: "27px",
//                         m: 0,
//                         p: 0,
//                         "& .MuiInputBase-root": {
//                           m: 0,
//                           p: 0,
//                           minHeight: "27px",
//                           justifyContent: "center",
//                           display: "inline-flex",
//                         },
//                         "& .MuiInputLabel-root": {
//                           m: 0,
//                           p: 0,
//                           minHeight: "27px",
//                           display: "inline-flex",
//                         },
//                         "& .MuiMenuItem-root": {
//                           m: 0,
//                           p: 0,
//                           height: "27px",
//                           display: "inline-flex",
//                         },
//                         "& .MuiSelect-select": {
//                           m: 0,
//                           p: 0,
//                           height: "27px",
//                           alignItems: "center",
//                           display: "inline-flex",
//                         },
//                         "& .MuiInput-input": { m: 0, p: 0 },
//                         "& .MuiInputBase-input": {
//                           color: "#111827",
//                           fontSize: 17.7,
//                           fontWeight: "Medium",
//                           fontFamily: "Poppins",
//                           textAlign: "left",
//                           p: "0 !important",
//                         },
//                       }}
//                     >
//                       <Inputlabel1 color="primary" />

//                       <Menuitem1>+91</Menuitem1>
//                     </ChevronElements>
//                     <ChevronPlaceholder>
//                       <input type="tel" />
//                     </ChevronPlaceholder>
//                   </ChevronElementsParent>
//                 </ComponentFields2>
//                 <PleaseFillThe>please fill the field</PleaseFillThe>
//               </FieldWithLabel1>
//             </FullNameDropdown>
//             <FullNameDropdown>
//               <FieldWithLabel2>
//                 <FullName2>Available Date</FullName2>
//                 <ComponentFields3>
//                   <DatePicker isoWeek style={{ width: 200 }} />
//                   {/* <SelectParent>
//                   <Select2>Select</Select2>
//                   <ChevronDownIcon alt="" src="/chevrondown-1.svg" />
//                 </SelectParent> */}
//                 </ComponentFields3>
//                 <PleaseFillThe>please fill the field</PleaseFillThe>
//               </FieldWithLabel2>
//               <FieldWithLabel
//                 label="Enter Past Medical history"
//                 error="please fill the field"
//                 showError={false}
//               />

//               <FieldWithLabel
//                 label="Share Your Message"
//                 error="please fill the field"
//                 showError={false}
//               />
//             </FullNameDropdown>
//           </FullNameField>
//           <ButtonWrapper>
//             <Button1 />

//               <FieldWithLabel
//                 label="Share Your Message"
//                 error="please fill the field"
//                 showError={false}
//               />
//             </FullNameDropdown>
//           </FullNameField>
//           <ButtonWrapper>
//             <Button1/>
//           </ButtonWrapper>
//         </FrameParent>
//       </BookAppointmentRoot>
//     </div>
//   );
// };

// BookAppointment.propTypes = {
//   className: PropTypes.string,
// };

// export default BookAppointment;

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import styled from "styled-components";
import FieldWithLabel from "./FieldWithLabel";
import Button1 from "./Button1";
import PropTypes from "prop-types";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookYourAppointment = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 40px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 750px) {
    font-size: 26px;
    line-height: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: 19px;
    line-height: 24px;
  }
`;
const SoOurTeam = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
`;
const BookYourAppointmentNowParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
`;
const FullName = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  line-height: 150%;
  font-weight: 500;
  display: inline-block;
  min-width: 92px;
`;
const ComponentFields1 = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 51px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 17.7px;
  color: #c8c8c8;
`;
const PleaseFillThe = styled.div`
  width: 146px;
  position: relative;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: #e46363;
  display: none;
`;
const FieldWithLabel1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const FullName1 = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  line-height: 27px;
  font-weight: 500;
  display: inline-block;
  min-width: 51px;
`;
const FullName2 = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  line-height: 150%;
  font-weight: 500;
`;
const Inputlabel1 = styled(InputLabel)``;
const Menuitem1 = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const ChevronElements = styled(FormControl)`
  height: 27px;
  width: 73.7px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 17.7px;
  color: #111827;
`;
const ChevronPlaceholder = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  line-height: 27px;
  font-weight: 500;
  display: inline-block;
  min-width: 97px;
`;
const ChevronElementsParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 9px;
`;
const ComponentFields2 = styled.div`
  align-self: stretch;
  border-radius: 5px;
  background-color: #f7f9ff;
  border: 1px solid #eef4ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  color: #c8c8c8;
`;
const FullNameDropdown = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  min-width: 249px;
  max-width: 100%;
`;
const Select2 = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  line-height: 27px;
  font-weight: 500;
  display: inline-block;
  min-width: 57px;
`;
const ChevronDownIcon = styled.img`
  height: 22.7px;
  width: 22.7px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const SelectParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
`;
const ComponentFields3 = styled.div`
  align-self: stretch;
  border-radius: 5px;
  background-color: #f7f9ff;
  border: 1px solid #eef4ff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 11px;
  max-width: 100%;
`;
const FieldWithLabel2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
`;
const FullNameField = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  max-width: 100%;
  font-size: 17.7px;
`;
const ButtonWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  max-width: 100%;
  text-align: left;
  font-size: 32px;
  color: #111827;
  font-family: Poppins;
  @media screen and (max-width: 450px) {
    gap: 20px;
  }
`;
const BookAppointmentRoot = styled.div`
  width: 886px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 450px) {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const main = {
  marginTop: "150px",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "rgb(37, 150, 190)",
  height: "700px",
};

const BookAppointment = ({ className = "" }) => {
  const location = useLocation();
  const data = location.state;
  const navigator = useNavigate();
  const ddd = new Date();
  const [userinfo, setuserinfo] = useState({
    Name: "",
    Age: 22,
    email: data.email,
    phone: 0,
    medicalHistory: "",
    date: ddd,
    Gender: "Male",
  });

  const { Name, Age, email, phone, medicalHistory, date, Gender } = userinfo;
  const [da, setda] = useState(Date());
  const handleer = (e) => {
    setuserinfo((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  // const main = {
  //   width: "100%",
  //   backgroundColor: "rgb(37, 150, 190)",

  // };
  const handleSelect = (eventKey) => {
    setuserinfo((prevData) => ({
      ...prevData,
      date: eventKey,
    }));
  };

  const submitform = () => {
    // console.log(userinfo);
    setuserinfo((prevData) => ({
      ...prevData,
      email: data.email,
    }));
    navigator("/payment", { state: JSON.stringify(userinfo) });
  };
  return (
    <div style={main}>
      <BookAppointmentRoot className={className}>
        <FrameParent>
          <BookYourAppointmentNowParent>
            <BookYourAppointment>Book your appointment now</BookYourAppointment>
            <SoOurTeam>So our team can reach out to you on time</SoOurTeam>
          </BookYourAppointmentNowParent>
          <FullNameField>
            <FullNameDropdown>
              <FieldWithLabel1>
                <FullName>Full Name</FullName>
                <ComponentFields1
                  placeholder="eg: John Doe"
                  variant="outlined"
                  value={Name}
                  name="Name"
                  onChange={handleer}
                  sx={{
                    "& fieldset": { borderColor: "#eef4ff" },
                    "& .MuiInputBase-root": {
                      height: "51px",
                      backgroundColor: "#f7f9ff",
                      borderRadius: "5px",
                      fontSize: "17.7px",
                    },
                    "& .MuiInputBase-input": { color: "#c8c8c8" },
                  }}
                />
                <PleaseFillThe>please fill the field</PleaseFillThe>
              </FieldWithLabel1>
              <FieldWithLabel1>
                <FullName1>Email</FullName1>
                <ComponentFields1
                  placeholder="eg: john@email.com "
                  variant="outlined"
                  value={data.email}
                  name="email"
                  onChange={handleer}
                  sx={{
                    "& fieldset": { borderColor: "#eef4ff" },
                    "& .MuiInputBase-root": {
                      height: "51px",
                      backgroundColor: "#f7f9ff",
                      borderRadius: "5px",
                      fontSize: "17.7px",
                    },
                    "& .MuiInputBase-input": { color: "#c8c8c8" },
                  }}
                />
                <PleaseFillThe>please fill the field</PleaseFillThe>
              </FieldWithLabel1>
              <FieldWithLabel1>
                <FullName2>Phone Number</FullName2>
                <ComponentFields2>
                  <ChevronElementsParent>
                    <ChevronElements
                      variant="standard"
                      name="phone"
                      value={phone}
                      onChange={handleer}
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "73.7px",
                        height: "27px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "27px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "27px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "27px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "27px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#111827",
                          fontSize: 17.7,
                          fontWeight: "Medium",
                          fontFamily: "Poppins",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <Inputlabel1 color="primary" />
                      <Select1 color="primary" disableUnderline displayEmpty>
                        <Menuitem1>+91</Menuitem1>
                      </Select1>
                      <Formhelpertext1 />
                    </ChevronElements>
                    <input type="tel" />
                  </ChevronElementsParent>
                </ComponentFields2>

                <PleaseFillThe>please fill the field</PleaseFillThe>
              </FieldWithLabel1>
            </FullNameDropdown>
            <FullNameDropdown>
              <FieldWithLabel2>
                <FullName2>Available Date</FullName2>
                <DatePicker
                  onChange={(e) => {
                    handleSelect(e);
                  }}
                  isoWeek
                  style={{ width: 200 }}
                />
                <PleaseFillThe>please fill the field</PleaseFillThe>
              </FieldWithLabel2>
              <FieldWithLabel
                error="please fill the field"
                showError={false}
                label="Past History"
              >
                <ComponentFields1
                  placeholder="Medical History"
                  variant="outlined"
                  value={medicalHistory}
                  name="medicalHistory"
                  onChange={handleer}
                  sx={{
                    "& fieldset": { borderColor: "#eef4ff" },
                    "& .MuiInputBase-root": {
                      height: "51px",
                      backgroundColor: "#f7f9ff",
                      borderRadius: "5px",
                      fontSize: "17.7px",
                    },
                    "& .MuiInputBase-input": { color: "#c8c8c8" },
                  }}
                />
              </FieldWithLabel>
            </FullNameDropdown>
          </FullNameField>
          <ButtonWrapper>
            <div onClick={submitform}>
              <Button1 />
            </div>
          </ButtonWrapper>
        </FrameParent>
      </BookAppointmentRoot>
    </div>
  );
};

BookAppointment.propTypes = {
  className: PropTypes.string,
};

export default BookAppointment;
