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

const LIST_MARKS = ['★', '◎', '👑'];
const DEFAULT_MARKS = LIST_MARKS[0];
let SETTING_MARKS = DEFAULT_MARKS;

const FLAG = "🏴";

//-----function
// ----piece系
//pieceId→Piece
export function getPiece(pieceId) {
    return SETTING_PIECES[pieceId];
}
// コマの状態をデフォルトに戻す
export function resetPieces() {
    SETTING_PIECES = JSON.parse(JSON.stringify(DEFAULT_PIECES));
}
//pieceId→スター有無
export function getStarByPieceId(pieceId) {
    return getPiece(pieceId).star;
}


// ----mark系
//マーク一覧取得
export function getListMarks() {
    return LIST_MARKS;
}
//マーク獲得
export function getSettingMark() {
    return SETTING_MARKS;
}
//デフォルトマーク獲得
export function getDefaultMark() {
    return DEFAULT_MARKS;
}
//マーク設定の反映
export function updatePieceMark(mark) {
    SETTING_MARKS = mark;
}
//LISTからマークをセットする。ゲームセットでデフォルトに戻すときはデフォを指定する
export function setMarks(mark) {
    SETTING_MARKS = mark;
}

// ----color系
//色設定の反映
export function updatePieceColors(color) {
    resetPieces();
    for (let i = 0; i <= 4; i++) {
        SETTING_PIECES[i].color = color[0]
    }
    for (let j = 5; j <= 9; j++) {
        SETTING_PIECES[j].color = color[1]
    }
}
//pieceId→コマの色
export function getColorByPieceId(pieceId) {
    return getPiece(pieceId).color;
}
//セレクトマーク確認
export function isSelectedByPieceId(pieceId) {
    return getPiece(pieceId).selected;
}
//マーク点灯
export function markOnPiece(pieceId) {
    getPiece(pieceId).selected = true;
}
//マーク消灯
export function markOffPiece(pieceId) {
    getPiece(pieceId).selected = false;
}

// ----flag系
export function getFlag() {
    return FLAG;
}