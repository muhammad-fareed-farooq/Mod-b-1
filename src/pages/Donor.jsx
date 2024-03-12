import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Custom_Input_Field } from "../components/Custom_Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { useDispatch } from "react-redux";
import { child, push, ref, set } from "firebase/database";
import { database } from "../config/firebase";
import { set_Donater_Reciver, set_user_auth } from "../store/slices/user_auth_slice";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";
// import { write_Donater_data } from "../config/firebase/firebase_methods";
// import { set_user_auth } from "../store/slices/user_auth_slice";

export const Donator = () => {
  const [data, setData] = useState({});

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    // console.log(data);

    // const id = Math.floor(Math.random() * 999999999999999)

    const uidd = uid()
    const massage_key = push(child(ref(database), "donater")).key;
    set(ref(database, `donater/${massage_key}`),
        {
            ...data,
            uidd:uidd

        })



    
    // console.log(refer);

    dispatch(set_Donater_Reciver({ ...data, Donate:uidd}))
    navigate("/dashboard")
    

  };

  // useEffect(() => {
  //   setData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     blood_group: "",
  //     donate_frequency: "",
  //   });
  // }, []);
  // };

  return (
    <div  className="bg-red-500 h-[100dvh] grid place-items-center mt-16">
      <Box
        className="max-w-md w-[100%] space-y-5 bg-white py-5 px-4 rounded"
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Donator/Reciver
        </Typography>
        <form
          onSubmit={submit_handle}>
          <div className="space-y-5">
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Custom_Input_Field
                required={true}
                id="Name"
                label="Name"
                onChange={change_handle}
                placeholder="Enter Your name"
                type="text"
              />
              <Custom_Input_Field
                required={true}
                id="FatherName"
                label="Father Name"
                onChange={change_handle}
                placeholder="Enter Your father Name"
                type="text"
              />
            </div>
            <div style={{ display: "flex" }}>
              <Custom_Input_Field
                required={true}
                id="age"
                label="Age"
                onChange={change_handle}
                placeholder="Enter Your age"
                type="number"
              />
              <Custom_Input_Field
                required={true}
                id="CNIC"
                label="CNIC"
                onChange={change_handle}
                placeholder="Enter Your CNIC Number"
                type="number"
              />
            </div>
            <div style={{ display: "flex" }}>
              <Custom_Input_Field
                required={true}
                id="email"
                label="Email"
                onChange={change_handle}
                placeholder="Enter email"
                type="email"
              />
              <Custom_Input_Field
                required={true}
                id="password"
                label="Password"
                onChange={change_handle}
                placeholder="Enter password"
                type="password"
              />
            </div>
            <div style={{ display: "flex" }}>
              <Custom_Input_Field
                required={true}
                id="Gander"
                label="Gander"
                onChange={change_handle}
                placeholder="Enter Gander"
                type="text"
              />
              <Custom_Input_Field
                required={true}
                id="BloodGroup"
                label="Blood Group"
                onChange={change_handle}
                placeholder="Enter Blood Group"
                type="text"
              />
            </div>
            <div style={{ display: "flex" }}>
              <Custom_Input_Field
                required={true}
                id="Number"
                label="Number"
                onChange={change_handle}
                placeholder="Enter Contact Number"
                type="Number"
              />
              <Custom_Input_Field
                required={true}
                id="YourAddress"
                label="address"
                onChange={change_handle}
                placeholder="Enter Your Address"
                type="text"
              />
            </div>
            <div style={{ display: "flex" }}>
              <Custom_Input_Field
                required={true}
                id="Donate_Revive"
                label="Donate_Recive"
                onChange={change_handle}
                placeholder="Donate_Recive"
                type="text"
              />
              </div>
            <div>
              <TextField
              style={{marginBottom:"15px"}}
                id="standard-multiline-static"
                label="Your massege"
                multiline
                rows={4}
                variant="standard"
              />
            </div>
            {/* <FormControlLabel control={<Checkbox />} label="Donater" /> */}
            

          </div>



          <Custom_Button type="submit">Donator</Custom_Button>
        </form>
      </Box>
    </div>
  );
};
