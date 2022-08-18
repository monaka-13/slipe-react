import { StyledSquare, HintSquare } from '../Styles/Styles';

import { Piece } from './Piece';

import { setGameSet, isGameSet } from '../Util/Configs';
import { getSquare, getPieceId, markOnSquare, markOffSquare } from '../Util/Squares';
import { markOnPiece, markOffPiece, getColorByPieceId, getFlag } from '../Util/Pieces';

//選択したマスを格納(square)
let clickedSquare = [];

//配置可能なマスgridを格納(square)
let moveableSquare = [];

export function clearClickedSquare() {
  clickedSquare = [];
}

export const Square = (props) => {

  // コマクリック関連統括
  function handleClick(square) {
    // 試合終了してたらコマを動かせない
    if (isGameSet()) {
      return;
    }

    //選択リストに追加
    clickedSquare.push(square);

    //1回目と2回目の分岐
    if (clickedSquare.length === 1) {
      firstClick(square);
    } else if (clickedSquare.length === 2) {
      secondClick();
    }
  }

  // クリック1回目
  function firstClick(square) {

    // 正しいコマをクリックしているかどうか
    if (!validate1stMove(square)) {

      //配置可能マスをゲットする(端に行くまで)
      moveableSquare = getDirection(square);

      //動けないコマを選択していないか
      if (moveableSquare.length !== 0) {
        //選択コマの色塗る
        markOnPiece(getPieceId(square));

        //移動可能マスも色塗る
        moveableSquare.map((sq) => {
          return markOnSquare(sq);
        });
      } else {
        clearClickedSquare();
      }
    } else {
      clearClickedSquare();
    }

    // 汎用的な再描画
    props.toggleRender();
  }
  //1回目。クリックのバリデーション
  function validate1stMove(square) {
    //マスにコマがない || クリックしたコマの色≠ターンの色
    if (square.pieceId === -1 || getColorByPieceId(square.pieceId) !== props.turn) {
      return true;
    }
    return false;
  }
  //1回目。ヒント獲得
  function getDirection(square) {
    let moveableSquare = []
    //-----down
    let cur = 999;//Integer
    //隣のマスにコマがあるかどうか
    for (let d = square.grid[0] + 1; d < 5; d++) {
      const pieceIdD = getSquare(d, square.grid[1]).pieceId;
      // 突き当りがコマ
      if (pieceIdD !== -1) {
        // 突き当りが普通のコマ
        if (pieceIdD === 0 || pieceIdD === 5) {
          //突き当りがスター
          //スターの4方向マスの空白マスがない
          if (countBlankFourDirection(d, square.grid[1]) === 0) {
            cur = 999;
          }
        }
        break;
      }
      cur = d;
    }
    //currentが存在しない
    if (cur !== 999) {
      //配置可能マスにcurrentを追加
      moveableSquare.push(getSquare(cur, square.grid[1]));
    }

    //-----up
    cur = 999;
    //隣のマスにコマがないかどうか
    for (let u = square.grid[0] - 1; u >= 0; u--) {
      const pieceIdU = getSquare(u, square.grid[1]).pieceId;
      // 突き当りがコマ
      if (pieceIdU !== -1) {
        // 突き当りが普通のコマ
        if (pieceIdU === 0 || pieceIdU === 5) {
          //突き当りがスター
          //スターの4方向マスの空白マスがない
          if (countBlankFourDirection(u, square.grid[1]) === 0) {
            cur = 999;
          }
        }
        break;
      }
      cur = u;
    }
    //currentが元のマスと違うマス
    if (cur !== 999) {
      //配置可能マスにcurrentを追加
      moveableSquare.push(getSquare(cur, square.grid[1]));
    }

    //-----right
    cur = 999;
    //隣のマスにコマがないかどうか
    for (let r = square.grid[1] + 1; r < 5; r++) {
      const pieceIdR = getSquare(square.grid[0], r).pieceId;
      // 突き当りがコマ
      if (pieceIdR !== -1) {
        // 突き当りが普通のコマ
        if (pieceIdR === 0 || pieceIdR === 5) {
          //突き当りがスター
          //スターの4方向マスの空白マスがない
          if (countBlankFourDirection(square.grid[0], r) === 0) {
            cur = 999;
          }
        }
        break;
      }
      cur = r;
    }
    //currentが元のマスと違うマス,currentが存在しない
    if (cur !== 999) {
      //配置可能マスにcurrentを追加
      moveableSquare.push(getSquare(square.grid[0], cur));
    }

    //-----left
    cur = 999;
    //隣のマスにコマがないかどうか
    for (let l = square.grid[1] - 1; l >= 0; l--) {
      const pieceIdL = getSquare(square.grid[0], l).pieceId;
      // 突き当りがコマ
      if (pieceIdL !== -1) {
        // 突き当りが普通のコマ
        if (pieceIdL === 0 || pieceIdL === 5) {
          //突き当りがスター
          //スターの4方向マスの空白マスがない
          if (countBlankFourDirection(square.grid[0], l) === 0) {
            cur = 999;
          }
        }
        break;
      }
      cur = l;
    }
    //currentが元のマスと違うマス
    if (cur !== 999) {
      //配置可能マスにcurrentを追加
      moveableSquare.push(getSquare(square.grid[0], cur));
    }
    return moveableSquare;
  }
  //スターが囲まれているかどうか
  function countBlankFourDirection(x, y) {
    let count = -1;
    if (x !== 4 && getSquare(x + 1, y).pieceId === -1) {
      count++;
    }
    if (x !== 0 && getSquare(x - 1, y).pieceId === -1) {
      count++;
    }
    if (y !== 4 && getSquare(x, y + 1).pieceId === -1) {
      count++;
    }
    if (y !== 0 && getSquare(x, y - 1).pieceId === -1) {
      count++;
    }

    return count;
  }

  // クリック2回目
  function secondClick() {

    //2回目。バリデーション
    if (validate2ndMove()) {
      //失敗
      //選択解除
      cancelHint();

      //クリック履歴のリセット
      clearClickedSquare();

      // 汎用的な再描画
      props.toggleRender();

      return;
    }
    //成功
    //選択解除
    cancelHint();

    // コマ移動
    movePiece(clickedSquare[0], clickedSquare[1]);

    // 勝敗判定
    if (clickedSquare[1].center && (getPieceId(clickedSquare[1]) === 0 || getPieceId(clickedSquare[1]) === 5)) {
      setGameSet();
    }

    //クリック履歴のリセット
    clearClickedSquare();

    //ターン交代・エンド
    props.toggleTurn();
  }
  //2回目。選択解除
  function cancelHint() {
    // 選択削除
    markOffPiece(getPieceId(clickedSquare[0]));

    //移動可能ヒントマス削除
    moveableSquare.map((sq) => {
      return markOffSquare(sq);
    });
    moveableSquare = [];
  }
  //2回目。クリックのバリデーション
  function validate2ndMove() {
    //ありえない動き(ヒント以外の動きをした場合)
    return !clickedSquare[1].hint
  }

  //コマを動かす
  function movePiece(before, after) {
    const piece = before.pieceId;
    after.pieceId = piece;
    before.pieceId = -1;
  }

  // Squareの情報を基にPieceを描画する
  function renderPiece(square) {
    const center = square.center; // center
    const pieceId = square.pieceId; // piece
    const hint = square.hint; // hint

    if (pieceId >= 0) {
      if (center) {
        //[center:○, piece:○, hint:×]
        return <Piece pieceId={pieceId} center={center} />;
      } else {
        //[center:×, piece:○, hint:×]
        return <Piece pieceId={props.value.pieceId} />;
      }

    } else {
      if (hint) {
        if (center) {
          //[center:○, piece:×, hint:○]
          return <HintSquare>{getFlag()}</HintSquare>;
        } else {
          //[center:×, piece:×, hint:○]
          return <HintSquare />;
        }
      } else {
        if (center) {
          // [center:○, piece:×, hint:×]
          return getFlag();
        } else {
          //[center:×, piece:×, hint:×]
          return "";
        }
      }
    }
  }

  return (
    <>
      <StyledSquare
        center={props.value.center}
        onClick={() => handleClick(props.value)}
      >
        {renderPiece(props.value)}
      </StyledSquare>
    </>
  );
}
