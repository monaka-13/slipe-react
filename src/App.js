import { Header } from './Header';
import { Game } from './Game';
import { Rule } from './Rule';
import { Presentation } from './Presentation';
import { useState } from 'react';

export const App = () => {
    // tabState
    const [tab, setTab] = useState('Game');

    return (
        <div>
            <Header tab={tab} setTab={setTab} />
            <div>{
                tab === 'Game' ?
                    <Game />
                    : tab === 'Rule' ?
                        <Rule /> : <Presentation />}
            </div>
        </div>
    );
}