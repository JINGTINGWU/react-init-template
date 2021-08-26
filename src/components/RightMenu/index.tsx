import React, { Fragment } from "react";
import { withTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react'
import { Link, useRouteMatch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { sidebarStatus } from '../../tools/recoil/sidebarStatus';
import './index.css';

interface Props {
    t?: any;
    i18n?: any;
    onClick?: () => void;
}

const RightMenu: React.FC<Props> = ({
    t, i18n,
    onClick
}) => {
    const [isOpenSidebar, setOpenSidebar] = useRecoilState(sidebarStatus);
    let { path, url } = useRouteMatch();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <i className={`bi bi-person text-4xl text-green-500 hover:text-green-800 cursor-pointer`}></i>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-2 ">
                        <Menu.Item>
                            {({ active }) => (
                                <Link className={`text-2xl ${active ? 'bg-purple-400 text-white' : 'text-gray-900'}
                                    group flex rounded-md items-center w-full px-1 py-1 text-sm`} 
                                    to={`${url}/my-info`}>
                                    <div className="mr-4 w-8">
                                        <i className={`bi bi-info-circle`}></i>
                                    </div>
                                    
                                    {t('my-info')}
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="p-2 ">
                        <i className={`bi bi-translate text-2xl ml-1`}></i>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-purple-400 text-white' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-1 py-1 text-sm`}
                                    onClick={e => i18n.changeLanguage('en-US')}
                                >
                                    <div className="mr-4 w-8">
                                        <i className="bi bi-check-lg" hidden={'en-US' !== i18n.language}></i>
                                    </div>
                                    
                                    {t('en-US')}
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-purple-400 text-white' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-1 py-1 text-sm`}
                                    onClick={e => i18n.changeLanguage('zh-TW')}
                                >
                                    <div className="mr-4 w-8">
                                        <i className="bi bi-check-lg mr-4" hidden={'zh-TW' !== i18n.language}></i>
                                    </div>
                                    
                                    {t('zh-TW')}
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="p-2">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`text-2xl ${active ? 'bg-purple-400 text-white' : 'text-red-900'
                                        } group flex rounded-md items-center w-full px-1 py-1 text-sm`}
                                >
                                    <div className="mr-4 w-8">
                                        <i className={`bi bi-x-circle-fill`}></i>
                                    </div>
                                    
                                    {t('logout')}
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default withTranslation('common')(RightMenu);