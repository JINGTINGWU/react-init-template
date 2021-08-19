import { atom, selector } from 'recoil';

export const sidebarStatus = atom({
    key: 'sidebarStatus',
    default: false,
});
