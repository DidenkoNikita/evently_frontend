import { ThunkAction } from "redux-thunk";
import { RooteState } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../counter/userSlice";
import { request } from "@/requests/requestParam";

export const uploadAvatar = (selectedFile: any): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<User>
> => async (dispatch): Promise<void | unknown> => {
try {
  const formData = new FormData();
  formData.append('file', selectedFile);

  console.log(formData);
  

  const data = await request('upload_avatar', formData, 'PUT')
  console.log(data);
  
  if (data !== null) {
    // dispatch(changeCity(data))
  }
} catch(e) {
  return console.log(e);
}
}