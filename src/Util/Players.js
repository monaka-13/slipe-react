// -----Player
export const LIST_PLAYER_COLORS = [
    "red", "blue", "green",
    "pink", "orange", "yellow",
    "skyblue", "purple", "white"
];
const DEFAULT_PLAYER_COLORS = [LIST_PLAYER_COLORS[0], LIST_PLAYER_COLORS[1]];
export const CONFIG_PLAYER_COLORS = [0, 1];
let SETTING_PLAYER_COLORS = [
    LIST_PLAYER_COLORS[CONFIG_PLAYER_COLORS[0]],
    LIST_PLAYER_COLORS[CONFIG_PLAYER_COLORS[1]]
];

export function getPlayers() {
    return SETTING_PLAYER_COLORS;
}
export function getListPlayerColors() {
    return LIST_PLAYER_COLORS;
}

export function setPlayer(players) {
    SETTING_PLAYER_COLORS = [players[0], players[1]];
}

export function getDefaultPlayers() {
    return DEFAULT_PLAYER_COLORS;
}

export function setDefaultPlayers() {
    SETTING_PLAYER_COLORS = DEFAULT_PLAYER_COLORS;
}