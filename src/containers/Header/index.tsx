import React, { Fragment } from "react";
import { withTranslation } from 'react-i18next';
import { Dropdown, Row, Col } from 'react-bootstrap';
import MenuIconButton from '../../components/MenuIconButton';

import './index.css';

interface Props {
  t?: any;
  i18n?: any
}

const Header: React.FC<Props> = ({t, i18n}) => { 
console.log(i18n);
  return (
    <header className="header">
      <MenuIconButton color={'green'} />
      <div className="header-right">
        
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-user" style={{ border: 0, backgroundColor: 'transparent'  }}>
            <i className="bi bi-person"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ zIndex: 100 }}>
            <Dropdown.Header ><i className="bi bi-translate"></i></Dropdown.Header>
            <Dropdown.Item onClick={e => i18n.changeLanguage('en-US')}>
              <Row>
                <Col xs="4" className="text-right">
                  <i className="bi bi-check-lg" hidden={'en-US' !== i18n.language}></i>
                </Col>
                <Col xs="8">{t('en-US')}</Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Item onClick={e => i18n.changeLanguage('zh-TW')}>
              <Row>
                <Col xs="4" className="text-right">
                  <i className="bi bi-check-lg" hidden={'zh-TW' !== i18n.language}></i>
                </Col>
                <Col xs="8">{t('zh-TW')}</Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">
              <Row>
                <Col xs="4" className="text-right">
                  <i className="bi bi-info-circle"></i>
                </Col>
                <Col xs="8">{t('my-info')}</Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">
              <Row>
                <Col xs="4" className="text-right">
                  <i className="bi bi-x-circle-fill"></i>
                </Col>
                <Col xs="8">{t('logout')}</Col>
              </Row>
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>

      </div>
    </header>
  );
};

export default withTranslation('common')(Header);