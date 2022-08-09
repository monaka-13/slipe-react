import type0 from '../Resources/type0.png';
import type1 from '../Resources/type1.png';
import type2 from '../Resources/type2.png';
import type3 from '../Resources/type3.png';
import type4 from '../Resources/type4.png';


// -----GameSet
let gameSet = false;// ゲーム中はfalse


export function setGameSet() {
    gameSet = true;
}
export function resetGame() {
    gameSet = false;
}
export function isGameSet() {
    return gameSet;
}

// -----setting in Config
const SETTING_IMAGE_LIST = [
    { name: "Type0", src: type0 },
    { name: "Type1", src: type1 },
    { name: "Type2", src: type2 },
    { name: "Type3", src: type3 },
    { name: "Type4", src: type4 },
];
const DEFAULT_SETTING_IMAGE_INDEX = 0;

export function getSettingLists() {
    return SETTING_IMAGE_LIST;
}
export function getSetting(type) {
    return SETTING_IMAGE_LIST[type];
}
export function getDefaultSettingIndex() {
    return DEFAULT_SETTING_IMAGE_INDEX;
}
