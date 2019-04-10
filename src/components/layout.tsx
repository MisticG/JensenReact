import React, { CSSProperties, useLayoutEffect } from 'react';
import Header from './header';
import { ViewContainer } from './viewContainer';
import { fullScreen } from '../css';

export type View = 'main' | 'forest' | 'sky' | 'desert'

/** React function component */
export default function Layout() {

        return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Header/>
                <ViewContainer/>
            </div>
        );
    }


const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
