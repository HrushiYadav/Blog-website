import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { SignupInput } from "@hrushi.code/medium-common";
import { LabelledInput } from "./LabelledInput";
import axios from "axios";
import {BACKEND_URL} from "../config";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const[postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        password: "",
        username: ""
    })
    async function sendRequest () {
     try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`,postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
     }
     catch(e){

     }
    }


  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
      <div>
      <div className="px-10">
            <div className="text-3xl font-extrabold">
             Create an account
            </div>
            <div className="text-slate-400">
               {type === "signin" ? "Don't have an account?": "Already have an account?" }
                <Link to={type==="signin" ? "/signup" : "/signin"} className="pl-2 underline">
                {type === "signin" ? "Sign up" : "Sign in"}
                </Link>
            </div>
        </div>
        <div className="pt-8">
        {type === "signup" ? (<LabelledInput label="Name" placeholder="Hrushi.." onChange={(e)=>{
        setPostInputs(c=>({
            ...c,
            name: e.target.value,
        }))
        }}/>): null}
        <LabelledInput label="Username" placeholder="test@gmail.com" onChange={(e)=>{
        setPostInputs(c=>({
            ...c,
            username: e.target.value,
        }))
        }}/>
        <LabelledInput label="Password" type={"password"} placeholder="12345" onChange={(e)=>{
        setPostInputs(c=>({
            ...c,
            password: e.target.value,
        }))
        }}/>
        <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
         dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type ==="signup" ? "Sign up":"Sign in"}</button>
        </div>
      </div>
      </div>
    </div>
  );
};

