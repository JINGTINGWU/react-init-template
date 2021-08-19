import React, { Fragment  } from "react";

import { Dropdown } from 'react-bootstrap';
import { FaLanguage, FaUser } from 'react-icons/fa';


import MenuIconButton from '../../components/MenuIconButton';

import './index.css';

const Header = () => {

  return (
    <header className="header">
      <MenuIconButton color={'green'}/>
      <div className="header-right">
      <Dropdown>
        <Dropdown.Toggle variant="outline-primary" id="dropdown-language"  style={{border: 0}}>
          <FaLanguage />
        </Dropdown.Toggle>

        <Dropdown.Menu style={{zIndex: 100}}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="outline-primary" id="dropdown-user-info"  style={{border: 0}}>
          <FaUser />
        </Dropdown.Toggle>

        <Dropdown.Menu style={{zIndex: 200}}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </header>
  );
};
export default Header;