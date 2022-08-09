import { Row } from '../Styles/Styles';
import { Square } from './Square';
import { getSquare } from '../Util/Squares';

export const Board = (props) => {
    let arr = [0, 1, 2, 3, 4];
    // Squareを描画する
    function renderSquare(i, j) {
        return (
            <Square
                key={j}//付けないと怒られる
                value={getSquare(i, j)}
                turn={props.turn}//stateのバケツリレー
                toggleTurn={props.toggleTurn}//stateのバケツリレー
                toggleRender={props.toggleRender}//stateのバケツリレー
            />
        );
    }

    return (
        <>
            <Row>
                {arr.map((index) => {
                    return renderSquare(0, index)
                })}
            </Row>
            <Row>
                {arr.map((index) => {
                    return renderSquare(1, index)
                })}
            </Row>
            <Row>
                {arr.map((index) => {
                    return renderSquare(2, index)
                })}

            </Row>
            <Row>
                {arr.map((index) => {
                    return renderSquare(3, index)
                })}
            </Row>
            <Row>
                {arr.map((index) => {
                    return renderSquare(4, index)
                })}
            </Row>
        </>
    );
}
