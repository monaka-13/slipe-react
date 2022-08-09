import { useState } from 'react';
import styled from "styled-components";
import { ComponentPiece, Button, Select, PreviewSet, Modal, Half, MarginLR, Flex, SpaceAround, SpaceBetween, FlexCenter, H1, H2, H3, H4, } from './Styles/Styles';

import { clearClickedSquare } from './Game/Square';

import { resetGame, getSetting, getSettingLists, getDefaultSettingIndex } from './Util/Configs';
import { getPlayers, setPlayer, getDefaultPlayers, getListPlayerColors } from './Util/Players';
import { resetSquares, getConfigSquareType, configSquares } from './Util/Squares';
import { updatePieceColors, getSettingMark, getDefaultMark, updatePieceMark, getListMarks } from './Util/Pieces';

//設定イメージ用のピース
const ConfigImage = styled(ComponentPiece).attrs((props) => ({
    style: {
        background: `${props.color}`,
    }
}))`
  border-radius: 50%;
  `
const DesignChoice = styled(ComponentPiece).attrs((props) => ({
    style: {
        background: `${props.color}`
    }
}))`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`


export const Config = (props) => {
    //設定プレビューのcolorState
    const [previewColor, setPreviewColor] = useState(getPlayers());
    const [previewMark, setPreviewMark] = useState(getSettingMark());
    const [previewSet, setPreviewSet] = useState(getConfigSquareType());//type番号

    function submit() {
        //pieceの状態リセット・色変更
        updatePieceColors(previewColor);
        //playerの色を変更
        setPlayer(previewColor);

        //-----mark変更反映
        updatePieceMark(previewMark);

        //-----BoardSet
        configSquares(previewSet);

        //gameSetをfalseにする
        resetGame();
        //モーダルを閉じる
        props.setModal(false);

        //Squaresの配置を初期化
        resetSquares();
        //1クリック目が残っていたら削除
        clearClickedSquare();
        //playersの初期化
        props.setTurn(getPlayers()[0]);

        // 再描画
        props.toggleRender();
    }

    function setDefault() {
        //プレビューに反映
        setPreviewColor(getDefaultPlayers());
        setPreviewMark(getDefaultMark());
        setPreviewSet(getDefaultSettingIndex());

        //再描画
        props.toggleRender();
    }

    function close() {
        //プレビューをリセットする
        setPreviewColor(getPlayers());
        setPreviewMark(getSettingMark());
        //モーダルを戻す
        props.setModal(false);
    }

    //画像
    function renderImage(i) {
        return (<PreviewSet src={getSetting(i).src} alt="boardSetting" />);
    }

    return (
        <Modal>
            <SpaceBetween>
                <H1>Config</H1>
                <Button onClick={() => close()}>×</Button>
            </SpaceBetween>
            <Flex>
                <Half>
                    <MarginLR>
                        <H2>Setting</H2>
                        <FlexCenter>
                            {renderImage(previewSet)}
                        </FlexCenter>
                        <FlexCenter>
                            <Select
                                value={previewSet}
                                onChange={(e) => setPreviewSet(e.target.value)}>
                                {getSettingLists().map((data, index) => {
                                    return <option value={index}>{data.name}</option>;
                                })}
                            </Select>
                        </FlexCenter>
                    </MarginLR>
                </Half>
                <Half>
                    <H2>Piece</H2>
                    <SpaceAround>
                        <div>
                            <H4>1P</H4>
                            <ConfigImage
                                color={previewColor[0]}
                            >
                                {previewMark}
                            </ConfigImage>
                        </div>
                        <div>
                            <H4>2P</H4>
                            <ConfigImage
                                color={previewColor[1]}
                            >
                                {previewMark}
                            </ConfigImage>
                        </div>
                    </SpaceAround>
                    <H3>Color</H3>
                    <SpaceAround>
                        <div>
                            <H4>1P</H4>
                            <Flex>
                                {getListPlayerColors().map((data, index) => {
                                    if (index >= 0 && index < 3) {
                                        return <DesignChoice onClick={() => setPreviewColor([data, previewColor[1]])} color={data} />;
                                    }
                                    return "";
                                })}
                            </Flex>
                            <Flex>
                                {getListPlayerColors().map((data, index) => {
                                    if (index >= 3 && index < 6) {
                                        return <DesignChoice onClick={() => setPreviewColor([data, previewColor[1]])} color={data} />;
                                    }
                                    return "";
                                })}
                            </Flex>
                            <Flex>
                                {getListPlayerColors().map((data, index) => {
                                    if (index >= 6 && index < 9) {
                                        return <DesignChoice onClick={() => setPreviewColor([data, previewColor[1]])} color={data} />;
                                    }
                                    return "";
                                })}
                            </Flex>
                        </div>
                        <div>
                            <H4>2P</H4>
                            <div>
                                <Flex>
                                    {getListPlayerColors().map((data, index) => {
                                        if (index >= 0 && index < 3) {
                                            return <DesignChoice onClick={() => setPreviewColor([previewColor[0], data])} color={data} />;
                                        }
                                        return "";
                                    })}
                                </Flex>
                                <Flex>
                                    {getListPlayerColors().map((data, index) => {
                                        if (index >= 3 && index < 6) {
                                            return <DesignChoice onClick={() => setPreviewColor([previewColor[0], data])} color={data} />;
                                        }
                                        return "";
                                    })}
                                </Flex>
                                <Flex>
                                    {getListPlayerColors().map((data, index) => {
                                        if (index >= 6 && index < 9) {
                                            return <DesignChoice onClick={() => setPreviewColor([previewColor[0], data])} color={data} />;
                                        }
                                        return "";
                                    })}
                                </Flex>
                            </div>
                        </div>
                    </SpaceAround>
                    <H3>Mark</H3>
                    <div>
                        <SpaceAround>
                            <Flex>
                                {getListMarks().map((data) => {
                                    return <DesignChoice onClick={() => setPreviewMark(data)}>{data}</DesignChoice>;
                                })}
                            </Flex>
                        </SpaceAround>
                        <FlexCenter>
                            <label>other:&nbsp;</label>
                            <input type="text" size="1" onChange={(e) => setPreviewMark(e.target.value)} />
                        </FlexCenter>
                    </div>

                </Half>

            </Flex>
            <MarginLR>
                <SpaceAround>
                    <Button onClick={() => submit()}>OK</Button>
                    <Button onClick={() => setDefault()}>default</Button>
                </SpaceAround>
            </MarginLR>
        </Modal>
    );
}