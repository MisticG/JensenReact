import React, { CSSProperties } from 'react';
import Header from './header';
import ViewContainer from './viewContainer';
import { fullScreen } from '../css';

export type View = 'main' | 'forest' | 'sky' | 'desert'

interface State {
    view: View
}

/** React function component */
export default class Layout extends React.Component<{}, State> {

    state: State = {
        view: 'main'
    }

    handleOnHeaderTextClick = () => {
        this.setState({ view: 'main'}) 
    }

    handleOnSectionItemClicked = (view: View) => {
        this.setState({ view: view })
    }

    render() {
        return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Header onHeaderTextClick = {this.handleOnHeaderTextClick}/>
                <ViewContainer 
                    view={this.state.view} 
                    onSectionItemClicked = {this.handleOnSectionItemClicked}
                />
            </div>
        );
    }
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
