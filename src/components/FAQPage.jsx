import React, { useState } from "react";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { list } from "../store/FAQlist";
const FAQPage = () => {
  return (
    <div className="flex flex-col bg-black">
      <p className="text-3xl md:text-5xl font-semibold text-white text-center my-8">
        Frequently Asked Questions
      </p>
      <div className="flex flex-col text-white m-auto w-[75%] my-6">
        {list.map((item,index)=><SingleQuestion question={item.question} answer={item.answer} key={index}/>)}
        
      </div>
    </div>
  );
};

const SingleQuestion = ({question,answer,key}) => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="bg-gray-800 text-xl md:text-3xl rounded-md w-full my-4" key={key}>
      <p className="flex items-center justify-between p-3 sm:p-6 my-2 cursor-pointer" onClick={()=>setIsOpen(pre=>!pre)}>
        {question}? {isOpen?<AiOutlineMinus/>:<AiOutlinePlus />}
      </p>
      {isOpen && <p className=" flex p-3 sm:p-6 bg-gray-700">
       {answer}
      </p>}
    </div>
  );
};

export default FAQPage;
