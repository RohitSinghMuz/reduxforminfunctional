import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { formdataone } from "./redux/actions/formaction";

const Formonedata = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const getdata = useSelector((state) => state.formreducer.formdata);

  console.log("getdata", getdata);
  const dispatch = useDispatch();

  const submittform1data = () => {
    if (email === "") {
      alert("please fill the form ");
    } else {
      dispatch(formdataone({ email, password, conpassword }));
    }
  };

  return (
    <>
      <div style={{ width: "30%", margin: "10px auto", textAlign: "center" }}>
        <h3>Signup Info</h3>

        <input
          style={{ width: "90%", margin: "10px auto", padding: "10px 15px" }}
          type="email"
          placeholder="Email ID"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <input
          style={{ width: "90%", margin: "10px auto", padding: "10px 15px" }}
          type="password"
          placeholder="PassWord"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />

        <input
          style={{ width: "90%", margin: "10px auto", padding: "10px 15px" }}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setconpassword(e.target.value)}
          value={conpassword}
        />

        <button onClick={submittform1data}>Submittdata</button>
      </div>
    </>
  );
};

export default Formonedata;
