import React from "react";
import { FaList } from 'react-icons/fa';
import './index.css';
import Button from '../../components/Button';

const Footer = () => {
    return (
        <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Enable
      </button>
      <Button  textColor="white" bgColor="blue-500" >Enable</Button>
      </div>
    );
};
export default Footer;