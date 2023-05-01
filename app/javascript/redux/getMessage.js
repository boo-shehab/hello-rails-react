import { createAsyncThunk } from "@reduxjs/toolkit";

const getMessage = createAsyncThunk("greeting", async () => {
  try {
    const text = await fetch("api/greeting");
    const data = await text.json();
    if (data.text) {
      return {
        success: true,
        data:data.text,
      };
    }
  } catch (err) {
    return { sucess: false, err: err.response.data.text };
  }
});

export default getMessage;