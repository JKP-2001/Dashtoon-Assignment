import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import showToast from "../../Utils/showToast";
import toast from "react-hot-toast";

const url = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

const initialState = {
    data:[],
    error:null,
    loading:false
}

const imageSlice = createSlice({
    name:"Image",
    initialState,
    reducers:{
        setdata(state,action){
            let newdata = [...state.data];
            newdata.push(action.payload);
            state.data = newdata;
        },
        setError(state,action){
            state.error = action.payload
        },
        setLoading(state,action){
            state.loading = action.payload
        }
    }
});

const { reducer, actions } = imageSlice;

const {setdata, setError, setLoading} = actions;

export default reducer;





export function fetchImage(data){
    return async function fetchProductThunk(dispatch,getState){
        try{
            dispatch(setLoading(true));
            console.log("start");
            
            toast.loading("Loding....");

            const response = await fetch(
                "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
                {
                    headers: { 
                        "Accept": "image/png",
                        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                        "Content-Type": "application/json" 
                    },
                    method: "POST",
                    body: JSON.stringify({inputs:data}),
                }
            );
            const result = await response.blob();

            const url = URL.createObjectURL(result);

            // console.log({url});
            
            dispatch(setdata(url));
            dispatch(setLoading(false));
            toast.dismiss();
            showToast({
                msg:"Image Fetched Successfully",
                type:"success",
                duration:2000
            })
            
        }catch(err){
            dispatch(setError(err.toString()));
        }
    }
}








