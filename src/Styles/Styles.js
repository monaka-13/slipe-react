import styled from 'styled-components';

// -----部品
//pieceのテンプレート
export const ComponentPiece =styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid #999;
  margin: 10px;
  padding: 0;

  background: white;
  border-radius: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
//squareのテンプレート
export const TemplateSquare = styled.button`
  border: 1px solid #999;
  height: 84px;
  width: 84px;

  float: left;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;

  text-align: center;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

`;
export const StyledSquare = styled(TemplateSquare)`
  background: linear-gradient(
    135deg,
    #00AEEF 0%,
    #D3EDFB 20%,
    #90D7EC 50%,
    #D3EDFB 75%,
    #00AEEF 99% 100%
  );
  box-shadow:  0 0 0 2px #00AEEF inset,0 0 0 3px #D3EDFB inset;
  border: none;
  border-radius: 5%;
`
//基本的なボタン
export const Button = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background: #3a86ff;
  box-shadow: 0 5px #4433ff;
  &:hover {
    box-shadow: 0 3px #4433ff;
    top: 1px;
  }
  &:active {
    box-shadow: 0 0 #4433ff;
    top: 5px;
  }
`;
// セレクトボックス
export const Select = styled.select`
  margin: 10px 0px;
`
export const PreviewSet = styled.img`
  width: 320px;
  height: 320px;
`
//ヒント(Square)
export const Guide = styled.div`
  height: 20px;
  width: 20px;
  background: black;
  opacity: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HintSquare = styled(Guide)`
  border-radius: 50%;
  background: orange;
`;
//選択マークの描画(Piece)
export const MarkedPiece = styled(Guide)`
    background: white;
`;

// -----デザイン系
//ゲーム背景デザイン
export const StyledGame = styled.div`
  background: #00AEEF;
  height: 100%;
  padding:3%;
`
//画面
export const Modal = styled.div`
  width: 93%;
  height: 93%;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  overflow-y: scroll;
  border: solid 4px #999;
  padding: 2%;

  background: #FFF;
`
// -----整地系
//コンテナ(Header)
export const Container = styled.header`
  justify-content:space-between;
  border-bottom:1px solid #E0E0E0;
`
//横並びul(Header)
export const HeaderUl = styled.ul`
  display: flex;
  margin:0;
  padding:0;
`
//行(Board)
export const Row = styled.div`
  clear: both;
  content: "";
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  margin:0;
  padding:0;
`
//子要素を横並びにするdiv(Config)
export const Flex = styled.div`
  display: flex;
  margin:0;
  padding:0;
`
export const SpaceAround = styled(Flex)`
  justify-content: space-around;
  margin: 5px auto;
`
export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
  margin: 5px auto;
`
export const FlexCenter = styled(Flex)`
  justify-content: center;
  margin: 5px auto;
`
// 画面2分割のdiv(Config)
export const Half = styled.div`
    width: 50%;
`
export const MarginLR = styled.div`
  margin-left: 15%;
  margin-right: 15%;
`

// -----h系
export const H1 =styled.h1`
    margin: 0px;
`
export const H2 =styled.h2`
    margin: 0px;
`
export const H3 =styled.h3`
    margin: 0px;
`
export const H4 =styled.h4`
    margin: 0px;
`










