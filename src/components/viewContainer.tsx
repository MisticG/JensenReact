import React, { CSSProperties } from 'react';
import { View } from './layout';
import MainView from './mainView';
import DetailView from './detailView';

interface Props {
    onSectionItemClicked: (view: View) => void
    view: View
}

/** React function component */
export default function ViewContainer(props: Props) {
    
    return (
        <div style={container}>
            {props.view === 'main' ? 
                <MainView onSectionItemClicked={props.onSectionItemClicked}/> : 
                <DetailView view={props.view} />
            }
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
}