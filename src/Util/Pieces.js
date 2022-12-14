import { getPlayers } from './Players';

// -----dataset
export const DEFAULT_PIECES = [
    { color: getPlayers()[0], star: true, selected: false },
    { color: getPlayers()[0], star: false, selected: false },
    { color: getPlayers()[0], star: false, selected: false },
    { color: getPlayers()[0], star: false, selected: false },
    { color: getPlayers()[0], star: false, selected: false },

    { color: getPlayers()[1], star: true, selected: false },
    { color: getPlayers()[1], star: false, selected: false },
    { color: getPlayers()[1], star: false, selected: false },
    { color: getPlayers()[1], star: false, selected: false },
    { color: getPlayers()[1], star: false, selected: false }
];
let SETTING_PIECES = JSON.parse(JSON.stringify(DEFAULT_PIECES));

const LIST_MARKS = ['â', 'â', 'ð'];
const DEFAULT_MARKS = LIST_MARKS[0];
let SETTING_MARKS = DEFAULT_MARKS;

const FLAG = "ð´";

//-----function
// ----pieceç³»
//pieceIdâPiece
export function getPiece(pieceId) {
    return SETTING_PIECES[pieceId];
}
// ã³ãã®ç¶æãããã©ã«ãã«æ»ã
export function resetPieces() {
    SETTING_PIECES = JSON.parse(JSON.stringify(DEFAULT_PIECES));
}
//pieceIdâã¹ã¿ã¼æç¡
export function getStarByPieceId(pieceId) {
    return getPiece(pieceId).star;
}


// ----markç³»
//ãã¼ã¯ä¸è¦§åå¾
export function getListMarks() {
    return LIST_MARKS;
}
//ãã¼ã¯ç²å¾
export function getSettingMark() {
    return SETTING_MARKS;
}
//ããã©ã«ããã¼ã¯ç²å¾
export function getDefaultMark() {
    return DEFAULT_MARKS;
}
//ãã¼ã¯è¨­å®ã®åæ 
export function updatePieceMark(mark) {
    SETTING_MARKS = mark;
}
//LISTãããã¼ã¯ãã»ãããããã²ã¼ã ã»ããã§ããã©ã«ãã«æ»ãã¨ãã¯ããã©ãæå®ãã
export function setMarks(mark) {
    SETTING_MARKS = mark;
}

// ----colorç³»
//è²è¨­å®ã®åæ 
export function updatePieceColors(color) {
    resetPieces();
    for (let i = 0; i <= 4; i++) {
        SETTING_PIECES[i].color = color[0]
    }
    for (let j = 5; j <= 9; j++) {
        SETTING_PIECES[j].color = color[1]
    }
}
//pieceIdâã³ãã®è²
export function getColorByPieceId(pieceId) {
    return getPiece(pieceId).color;
}
//ã»ã¬ã¯ããã¼ã¯ç¢ºèª
export function isSelectedByPieceId(pieceId) {
    return getPiece(pieceId).selected;
}
//ãã¼ã¯ç¹ç¯
export function markOnPiece(pieceId) {
    getPiece(pieceId).selected = true;
}
//ãã¼ã¯æ¶ç¯
export function markOffPiece(pieceId) {
    getPiece(pieceId).selected = false;
}

// ----flagç³»
export function getFlag() {
    return FLAG;
}