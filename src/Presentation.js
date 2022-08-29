import styled from 'styled-components';
import { PreviewSet, Flex, Half } from './Styles/Styles';
import components from './Resources/components.png';

const Image = styled(PreviewSet)`
    width: 75%;
`
export const Presentation = () => {
    return (
        <>
            <h1>Presentation</h1>
            <Flex>
                <Half>
                    <h2>Points</h2>
                    <ul>
                        <li>JS実装</li>
                        <li>コンポーネント毎のプログラミング</li>
                        <li>関数コンポーネント</li>
                        <ul>
                            <li><a href="https://tyotto-good.com/blog/reaseons-to-use-function-component">Reactでクラスコンポーネントより関数コンポーネントを使うべき理由5選</a></li>
                        </ul>
                        <li>props</li>
                        <ul>
                            <li>コンポーネント間のデータ受け渡し</li>
                        </ul>
                        <li>state</li>
                        <ul>
                            <li>タブ、クリックによる影響＆盤面の反映</li>
                        </ul>
                        <li>styled-components</li>
                        <ul>
                            <li><a href="https://www.fundely.co.jp/blog/tech/2020/09/16/180026/">styled-componentsのベーシックな使い方</a></li>
                        </ul>
                        <li>git</li>
                    </ul>
                    <h2>Links</h2>
                    <ul>
                        <li>ソース(Github)</li>
                        <ul>
                            <li><a href="https://github.com/monaka-13/slipe-react">ソース</a></li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Qiita</li>
                        <ul>
                            <li><a href="https://qiita.com/azuki-monaka/items/386fc26db7ce5c84d043">Reactでアナログゲームつくってみた【Slipe】</a></li>
                        </ul>
                    </ul>
                </Half>
                <Half>
                    <Image src={components} alt="components" />
                </Half>
            </Flex>
        </>
    );
}