import { useMutation } from "@apollo/client";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { SEND_COMMENT } from "../../GraphQl/Mutation";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentPage({ slug }) {
  const [frm, setFrm] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name: frm.name,
      email: frm.email,
      text: frm.text,
      slug,
    },
  });
  console.log({ loading, data });

  const textField = [
    {
      id: 0,
      value: frm.name,
      label: "نام کاربری",
      variant: "outlined",
      name: "name",
      multiline: "multiline",
      minRows: 1,
      maxRows: 1,
    },
    {
      id: 1,
      value: frm.email,
      label: "ایمیل",
      variant: "outlined",
      name: "email",
      multiline: "multiline",
      minRows: 1,
      maxRows: 1,
    },
    {
      id: 2,
      value: frm.text,
      label: "متن کامنت",
      variant: "outlined",
      name: "text",
      multiline: "multiline",
      minRows: 4,
      maxRows: 10,
    },
  ];
  const changHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setFrm(() => ({ ...frm, [name]: val }));
  };
  const submitFrm = () => {
    if (frm.name && frm.email && frm.text) {
      sendComment();
      setFrm({ name: "", email: "", text: "" });
    } else {
      toast.warn("تمام فیلدها را وارد نمایید", { position: "top-center" });
    }
  };
  if (data) {
    toast.success(" کامنت با موفقیت ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
    });
  }
  console.log(frm);
  return (
    <Grid
      container
      sc={{
        boxShadow: "rgba(0 , 0 ,0 , 0.1)0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      {textField.map((item) => (
        <Grid key={item.id} item xs={12} m={2}>
          <TextField
            sx={{ width: "100%" }}
            label={item.label}
            variant={item.variant}
            onChange={changHandler}
            value={item.value}
            name={item.name}
            multiline={item.multiline}
            minRows={item.minRows}
            maxRows={item.maxRows}
          />
        </Grid>
      ))}
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            درحال ارسال
          </Button>
        ) : (
          <Button onClick={submitFrm} variant="contained">
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentPage;
