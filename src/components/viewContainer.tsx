import React, { CSSProperties } from 'react';
import MainView from './mainView';
import DetailView from './detailView';
import { Route } from 'react-router';

/** React function component */
export function ViewContainer() {
    
    return (
        <div style={container}>
            <Route exact path="/" component={MainView}/> 
            <Route path="/forest" render={() => <DetailView view="forest"/>}/>
            <Route path="/sky" render={() => <DetailView view="sky"/>}/>
            <Route path="/desert" render={() => <DetailView view="desert"/>}/>
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