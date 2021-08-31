import React from 'react';

const routes = [
  {
    path: "x",
    name: 'parameter.set-parameter',
    isLeftMenu: true,
    icon: () => <i className="bi bi-card-list text-2xl"></i>,
    children: [
      {
        path: "/set-bct1-parameter",
        name: 'parameter.bct1',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-1 text-2xl"></i>
      },
      {
        path: "/set-bct2-parameter",
        name: 'parameter.bct2',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-2 text-2xl"></i>
      },
      {
        path: "/gti-mini-parameters-setting",
        name: 'parameter.gti-mini',
        isLeftMenu: true,
        icon: () => <i className="bi bi-brush text-2xl"></i>
      },
      {
        path: "/gti-mini-parameters-setting-batch",
        name: 'parameter.gti-mini-batch',
        isLeftMenu: true,
        icon: () => <i className="bi bi-file-earmark-plus text-2xl"></i>
      },
      {
        path: "/gti5-spectrum",
        name: 'parameter.spectrum',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-5 text-2xl"></i>
      },
      {
        path: "/gti6-spectrum-valve",
        name: 'parameter.spectrumAndValve',
        isLeftMenu: true,
        icon: () => <i className="bi bi-dice-6 text-2xl"></i>
      }
    ]
  },
  {
    path: "x",
    name: 'firmware.firmware-upgrade',
    isLeftMenu: true,
    icon: () => <i className="bi bi-cloud-arrow-up text-2xl"></i>,
    children: [
      {
        path: "/upgrade-firmware",
        name: 'firmware.upgrade_firmware',
        isLeftMenu: true,
        icon: () => <i className="bi bi-file-arrow-down text-2xl"></i>
      },
      {
        path: "/upload-firmware-file",
        name: 'firmware.upload_firmware_file',
        isLeftMenu: true,
        icon: () => <i className="bi bi-file-arrow-up-fill text-2xl"></i>
      }
    ]
  }
];

export default routes;
