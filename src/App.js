import { useState } from 'react';
import { Header } from './Header';
import { Game } from './Game';
import { Rule } from './Rule';
import { Presentation } from './Presentation';
import { Mutter } from './Mutter';

export const App = () => {
    // tabState
    const [tab, setTab] = useState('Game');

    return (
        <>
            <Header tab={tab} setTab={setTab} />
            <div>
                {tab === 'Game' ?
                    <Game />
                    : tab === 'Rule' ?
                        <Rule />
                        : tab === 'Presentation' ?
                            <Presentation /> : <Mutter />
                }
            </div>
        </>
    );
}