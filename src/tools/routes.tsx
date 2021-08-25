import React from 'react';

const MyInfo = React.lazy(() => import('../pages/MyInfo'));
const SetBct1Parameter = React.lazy(() => import('../pages/SetBct1Parameter'));
const SetBct2Parameter = React.lazy(() => import('../pages/SetBct2Parameter'));

const routes = [
  {
    path: "my-info",
    name: 'my-info',
    isLeftMenu: false,
    main: () => <MyInfo />
  },
  {
    name: 'parameter.set-parameter',
    isLeftMenu: true,
    icon: () => <i className="bi bi-card-list text-2xl"></i>,
    children: [
      {
        path: "set-bct1-parameter",
        name: 'parameter.bct1',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-1 text-2xl"></i>,
        main: () => <SetBct1Parameter />
      },
      {
        path: "set-bct2-parameter",
        name: 'parameter.bct2',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-2 text-2xl"></i>,
        main: () => <SetBct2Parameter />
      },
      {
        path: "set-bct2-parameter",
        name: 'parameter.gti-mini',
        isLeftMenu: true,
        icon: () => <i className="bi bi-brush text-2xl"></i>,
        main: () => <SetBct2Parameter />
      },
      {
        path: "set-bct2-parameter",
        name: 'parameter.gti-mini-batch',
        isLeftMenu: true,
        icon: () => <i className="bi bi-file-earmark-plus text-2xl"></i>,
        main: () => <SetBct2Parameter />
      },
      {
        path: "set-bct2-parameter",
        name: 'parameter.spectrum',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-5 text-2xl"></i>,
        main: () => <SetBct2Parameter />
      },
      {
        path: "set-bct2-parameter",
        name: 'parameter.spectrumAndValve',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-6 text-2xl"></i>,
        main: () => <SetBct2Parameter />
      }
    ]
  },
  {
    name: 'firmware.firmware-upgrade',
    isLeftMenu: true,
    icon: () => <i className="bi bi-cloud-arrow-up text-2xl"></i>,
    children: [
      {
        path: "set-bct1-parameter",
        name: 'firmware.upgrade_firmware',
        isLeftMenu: true,
        icon: () => <i className="bi bi-file-arrow-down text-2xl"></i>,
        main: () => <SetBct1Parameter />
      },
      {
        path: "set-bct2-parameter",
        name: 'firmware.upload_firmware_file',
        isLeftMenu: true,
        icon: () => <i className="bi bi-file-arrow-up-fill text-2xl"></i>,
        main: () => <SetBct2Parameter />
      }
    ]
  },
  {
    path: "set-bct1-parameter",
    name: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    isLeftMenu: true,
    icon: () => <i className="bi bi-cloud-arrow-up text-2xl"></i>,
    main: () => <SetBct1Parameter />
  },
  {
    path: "set-bct2-parameter",
    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    isLeftMenu: true,
    icon: () => <i className="bi bi-card-list text-2xl"></i>,
    main: () => <SetBct2Parameter />
  }
];

export default routes;
