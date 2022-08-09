import { useState } from 'react';
import { Button, StyledGame, SpaceBetween, FlexCenter, H1, H2 } from './Styles/Styles';

import { Board } from './Game/Board';
import { clearClickedSquare } from './Game/Square';
import { Config } from './Config';

import { resetGame, isGameSet } from './Util/Configs';
import { getPlayers } from './Util/Players';
import { resetSquares } from './Util/Squares';


export const Game = () => {
    //再描画用state
    const [render, setRender] = useState(false);
    // renderStateを動かす
    function toggleRender() {
        setRender(render ? false : true);
    }

    //turnState
    const [turn, setTurn] = useState(getPlayers()[0]);
    //turnチェンジ
    function toggleTurn() {
        const players = getPlayers();
        setTurn(turn === players[0] ? players[1] : players[0]);
    }

    //ModalState
    const [modal, setModal] = useState(false);
    //モーダル開く
    function configModal() {
        setModal(true);
    }

    // 手番・勝者の表示
    function showGameStatus() {
        const players = getPlayers();
        if (isGameSet()) {
            // 勝負あり
            return 'Winner: ' + (turn === players[0] ? players[1] : players[0]);
        }
        //勝負中
        return 'next: ' + turn;
    }

    //リセット
    function reset() {
        //gameSetをfalseにする
        resetGame();

        //Squaresの配置を初期化
        resetSquares();

        //1クリック目が残っていたら削除
        clearClickedSquare();

        //playersの初期化(turnをplayer[0]にする)
        setTurn(getPlayers()[0]);

        //強制再描画
        toggleRender()
    }

    return (
        <>
            <StyledGame>
                <SpaceBetween>
                    <H1>Game</H1>
                    <Button
                        onClick={() => configModal()}
                        modal={modal}
                    >
                        config
                    </Button>
                </SpaceBetween>
                <FlexCenter><H2>{showGameStatus()}</H2></FlexCenter>
                <Board
                    turn={turn}
                    toggleTurn={toggleTurn}
                    toggleRender={toggleRender}
                />
                <FlexCenter>
                    <Button onClick={() => reset()}>reset</Button>
                </FlexCenter>
            </StyledGame>
            {modal
                ? <Config
                    setModal={setModal}
                    setTurn={setTurn}
                    toggleRender={toggleRender}
                />
                : ""}
        </>
    );
}
