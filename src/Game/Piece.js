import styled from "styled-components";
import { ComponentPiece, MarkedPiece } from '../Styles/Styles';

import { getColorByPieceId,　getStarByPieceId, isSelectedByPieceId, getSettingMark, getFlag } from '../Util/Pieces';

//ピースの描画(Piece)
export const StyledPiece = styled(ComponentPiece)`
  background: ${props => getColorByPieceId(props.pieceId)};
  border-radius: ${props => getStarByPieceId(props.pieceId) ? "50%" : "10%"};
`

export const Piece = (props) => {
    return (
        <>
            <StyledPiece pieceId={props.pieceId}>
                {isSelectedByPieceId(props.pieceId)
                    ?
                    <MarkedPiece>
                        {getStarByPieceId(props.pieceId) ? getSettingMark() : ""}
                    </MarkedPiece>
                    : props.center ? getFlag()
                        : getStarByPieceId(props.pieceId) ? getSettingMark() : ""}
            </StyledPiece>
        </>
    );
}