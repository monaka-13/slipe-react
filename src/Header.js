import styled from 'styled-components';
import { Container,HeaderUl} from './Styles/Styles';

//ヘッダ用li(Header)
const HeaderLi = styled.li`
  list-style: none;
  padding:4px 12px;
  cursor:pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

export const Header = ({ tab, setTab }) => {
    return (
        <Container>
            <div>
                <h1>SLIPE</h1>
            </div>
            <HeaderUl>
                <HeaderLi focused={tab === 'Game'} onClick={() => setTab('Game')}>Game</HeaderLi>
                <HeaderLi focused={tab === 'Rule'} onClick={() => setTab('Rule')}>Rule</HeaderLi>
                <HeaderLi focused={tab === 'Presentation'} onClick={() => setTab('Presentation')}>Presentation</HeaderLi>
            </HeaderUl>
        </Container>

    )
}