// -----dataset
const LIST_SQUARES = [
    [//type0(default)
        [
            { grid: [0, 0], pieceId: 1, hint: false, center: false },
            { grid: [0, 1], pieceId: 2, hint: false, center: false },
            { grid: [0, 2], pieceId: 0, hint: false, center: false },
            { grid: [0, 3], pieceId: 3, hint: false, center: false },
            { grid: [0, 4], pieceId: 4, hint: false, center: false },
        ],
        [
            { grid: [1, 0], pieceId: -1, hint: false, center: false },
            { grid: [1, 1], pieceId: -1, hint: false, center: false },
            { grid: [1, 2], pieceId: -1, hint: false, center: false },
            { grid: [1, 3], pieceId: -1, hint: false, center: false },
            { grid: [1, 4], pieceId: -1, hint: false, center: false },
        ],
        [
            { grid: [2, 0], pieceId: -1, hint: false, center: false },
            { grid: [2, 1], pieceId: -1, hint: false, center: false },
            { grid: [2, 2], pieceId: -1, hint: false, center: true },
            { grid: [2, 3], pieceId: -1, hint: false, center: false },
            { grid: [2, 4], pieceId: -1, hint: false, center: false },
        ],
        [
            { grid: [3, 0], pieceId: -1, hint: false, center: false },
            { grid: [3, 1], pieceId: -1, hint: false, center: false },
            { grid: [3, 2], pieceId: -1, hint: false, center: false },
            { grid: [3, 3], pieceId: -1, hint: false, center: false },
            { grid: [3, 4], pieceId: -1, hint: false, center: false },
        ],
        [
            { grid: [4, 0], pieceId: 6, hint: false, center: false },
            { grid: [4, 1], pieceId: 7, hint: false, center: false },
            { grid: [4, 2], pieceId: 5, hint: false, center: false },
            { grid: [4, 3], pieceId: 8, hint: false, center: false },
            { grid: [4, 4], pieceId: 9, hint: false, center: false },
        ]
    ],
    [//type1
        [
            { grid: [0, 0], pieceId: 1, hint: false },
            { grid: [0, 1], pieceId: -1, hint: false },
            { grid: [0, 2], pieceId: 0, hint: false },
            { grid: [0, 3], pieceId: -1, hint: false },
            { grid: [0, 4], pieceId: 2, hint: false },
        ],
        [
            { grid: [1, 0], pieceId: -1, hint: false },
            { grid: [1, 1], pieceId: -1, hint: false },
            { grid: [1, 2], pieceId: -1, hint: false },
            { grid: [1, 3], pieceId: -1, hint: false },
            { grid: [1, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [2, 0], pieceId: 6, hint: false },
            { grid: [2, 1], pieceId: 3, hint: false },
            { grid: [2, 2], pieceId: -1, hint: false, center: true },
            { grid: [2, 3], pieceId: 7, hint: false },
            { grid: [2, 4], pieceId: 4, hint: false },
        ],
        [
            { grid: [3, 0], pieceId: -1, hint: false },
            { grid: [3, 1], pieceId: -1, hint: false },
            { grid: [3, 2], pieceId: -1, hint: false },
            { grid: [3, 3], pieceId: -1, hint: false },
            { grid: [3, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [4, 0], pieceId: 8, hint: false },
            { grid: [4, 1], pieceId: -1, hint: false },
            { grid: [4, 2], pieceId: 5, hint: false },
            { grid: [4, 3], pieceId: -1, hint: false },
            { grid: [4, 4], pieceId: 9, hint: false },
        ]
    ],
    [//type2
        [
            { grid: [0, 0], pieceId: 1, hint: false },
            { grid: [0, 1], pieceId: 0, hint: false },
            { grid: [0, 2], pieceId: -1, hint: false },
            { grid: [0, 3], pieceId: -1, hint: false },
            { grid: [0, 4], pieceId: 6, hint: false },
        ],
        [
            { grid: [1, 0], pieceId: 2, hint: false },
            { grid: [1, 1], pieceId: -1, hint: false },
            { grid: [1, 2], pieceId: -1, hint: false },
            { grid: [1, 3], pieceId: -1, hint: false },
            { grid: [1, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [2, 0], pieceId: 7, hint: false },
            { grid: [2, 1], pieceId: -1, hint: false },
            { grid: [2, 2], pieceId: -1, hint: false, center: true },
            { grid: [2, 3], pieceId: -1, hint: false },
            { grid: [2, 4], pieceId: 3, hint: false },
        ],
        [
            { grid: [3, 0], pieceId: -1, hint: false },
            { grid: [3, 1], pieceId: -1, hint: false },
            { grid: [3, 2], pieceId: -1, hint: false },
            { grid: [3, 3], pieceId: -1, hint: false },
            { grid: [3, 4], pieceId: 8, hint: false },
        ],
        [
            { grid: [4, 0], pieceId: 4, hint: false },
            { grid: [4, 1], pieceId: -1, hint: false },
            { grid: [4, 2], pieceId: -1, hint: false },
            { grid: [4, 3], pieceId: 5, hint: false },
            { grid: [4, 4], pieceId: 9, hint: false },
        ]
    ],
    [//type3
        [
            { grid: [0, 0], pieceId: 6, hint: false },
            { grid: [0, 1], pieceId: -1, hint: false },
            { grid: [0, 2], pieceId: -1, hint: false },
            { grid: [0, 3], pieceId: -1, hint: false },
            { grid: [0, 4], pieceId: 0, hint: false },
        ],
        [
            { grid: [1, 0], pieceId: -1, hint: false },
            { grid: [1, 1], pieceId: -1, hint: false },
            { grid: [1, 2], pieceId: 1, hint: false },
            { grid: [1, 3], pieceId: 2, hint: false },
            { grid: [1, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [2, 0], pieceId: -1, hint: false },
            { grid: [2, 1], pieceId: 7, hint: false },
            { grid: [2, 2], pieceId: -1, hint: false, center: true },
            { grid: [2, 3], pieceId: 3, hint: false },
            { grid: [2, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [3, 0], pieceId: -1, hint: false },
            { grid: [3, 1], pieceId: 8, hint: false },
            { grid: [3, 2], pieceId: 9, hint: false },
            { grid: [3, 3], pieceId: -1, hint: false },
            { grid: [3, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [4, 0], pieceId: 5, hint: false },
            { grid: [4, 1], pieceId: -1, hint: false },
            { grid: [4, 2], pieceId: -1, hint: false },
            { grid: [4, 3], pieceId: -1, hint: false },
            { grid: [4, 4], pieceId: 4, hint: false },
        ]
    ],
    [//type4
        [
            { grid: [0, 0], pieceId: 6, hint: false },
            { grid: [0, 1], pieceId: -1, hint: false },
            { grid: [0, 2], pieceId: 1, hint: false },
            { grid: [0, 3], pieceId: -1, hint: false },
            { grid: [0, 4], pieceId: 7, hint: false },
        ],
        [
            { grid: [1, 0], pieceId: -1, hint: false },
            { grid: [1, 1], pieceId: 0, hint: false },
            { grid: [1, 2], pieceId: -1, hint: false },
            { grid: [1, 3], pieceId: -1, hint: false },
            { grid: [1, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [2, 0], pieceId: 8, hint: false },
            { grid: [2, 1], pieceId: -1, hint: false },
            { grid: [2, 2], pieceId: -1, hint: false, center: true },
            { grid: [2, 3], pieceId: -1, hint: false },
            { grid: [2, 4], pieceId: 2, hint: false },
        ],
        [
            { grid: [3, 0], pieceId: -1, hint: false },
            { grid: [3, 1], pieceId: -1, hint: false },
            { grid: [3, 2], pieceId: -1, hint: false },
            { grid: [3, 3], pieceId: 5, hint: false },
            { grid: [3, 4], pieceId: -1, hint: false },
        ],
        [
            { grid: [4, 0], pieceId: 3, hint: false },
            { grid: [4, 1], pieceId: -1, hint: false },
            { grid: [4, 2], pieceId: 9, hint: false },
            { grid: [4, 3], pieceId: -1, hint: false },
            { grid: [4, 4], pieceId: 4, hint: false },
        ]
    ]
];
let CONFIG_SQUARES_TYPE = 0;

let SETTING_SQUARES = JSON.parse(JSON.stringify(LIST_SQUARES[CONFIG_SQUARES_TYPE]));

// -----function
export function getSquares() {
    return SETTING_SQUARES;
}
export function getConfigSquareType() {
    return CONFIG_SQUARES_TYPE;
}

//grid→Square
export function getSquare(i, j) {
    return SETTING_SQUARES[i][j];
}

//初期配置リストを取ってくる
export function getListSquares() {
    return LIST_SQUARES;
}

//todo
export function getDefaultSquares() {
    return LIST_SQUARES[0];
}

//LISTから初期配置をセットする。ゲームセットでデフォルトに戻すときはデフォを指定する
export function setSquares(squaresType) {
    SETTING_SQUARES = JSON.parse(JSON.stringify(LIST_SQUARES[squaresType]));
}
export function configSquares(squaresType) {
    CONFIG_SQUARES_TYPE = squaresType;
    setSquares(squaresType);
}

export function resetSquares() {
    setSquares(CONFIG_SQUARES_TYPE);
}


//Square→pieceId
export function getPieceId(square) {
    return SETTING_SQUARES[square.grid[0]][square.grid[1]].pieceId;
}
//ヒント点灯
export function markOnSquare(square) {
    square.hint = true;
}
//ヒント消灯
export function markOffSquare(square) {
    square.hint = false;
}
