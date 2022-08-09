import styled from 'styled-components';
import { PreviewSet, Flex, Half } from './Styles/Styles';
import components from './Resources/components.png';

const Image = styled(PreviewSet)`
    width: 75%;
    height: 100%;
`
export const Presentation = () => {
    return (
        <>
            <h1>Point</h1>
            <Flex>
                <Half>
                    <ul>
                        <li>JS実装</li>
                        <li>コンポーネント毎のプログラミング</li>
                        <li>関数コンポーネント</li>
                        <ul>
                            <li>https://tyotto-good.com/blog/reaseons-to-use-function-component</li>
                        </ul>
                        <li>コンポーネント間のデータ受け渡し</li>
                        <ul>
                            <li>props</li>
                            <li>state</li>
                        </ul>
                        <br />タブ、クリックによる影響＆盤面の反映
                        <li>StyledComponent</li>
                        <li>git</li>
                    </ul>
                </Half>
                <Half>
                    <Image src={components} alt="components" />
                </Half>
            </Flex>
        </>
    );
}