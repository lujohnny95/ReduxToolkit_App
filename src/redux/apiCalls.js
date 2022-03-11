import { Axios } from "axios";
import { updateStart, updateSuccess, updateError } from "./userSlice";

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await Axios.post("")
        dispatch(updateSuccess(res.data))
    } catch (error) {
        dispatch(updateError());
    }
};