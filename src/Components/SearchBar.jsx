import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from '../Redux/Image/Image';
import toast from 'react-hot-toast';



const SearchBar = () => {

    const url = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const detectChange = (e)=>{
        setInput(e.target.value);
    }

    const generate = async ()=>{
        
        dispatch(fetchImage(input));
        
        // return result;
        // setInput("");
    }

    const imageState = useSelector((state)=> state.image);

    return (
        <>
            <div className='items-center sm:mx-20'>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="px-4 py-2 bg-white rounded-t-lg">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows="4" className=" font-handwritten2 text-base outline-none w-full px-0 text-gray-900 bg-white border-0 focus:ring-0" placeholder="Create image of an astronaut riding a cycle............" required value={input} onChange={detectChange}></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t">
                        <button type="submit" className="outline-none inline-flex items-center py-2.5 px-4 text-sm font-Button text-center  text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 hover:scale-110 transition delay-150 " onClick={generate}>
                            {!imageState.loading?"Generate":"Loading"}
                        </button>
                        
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default SearchBar;
