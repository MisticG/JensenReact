import React, { CSSProperties, Suspense } from 'react';
//mport MainView from './mainView';
//import DetailView from './detailView';
import { Route, Switch } from 'react-router';
import Spinner from './spinner';
import { lazy } from 'react';

const MainView = lazy(() => import('./mainView'));
const DetailView = lazy(() => import('./detailView'));

/** React function component */
export function ViewContainer() {
    
    return (
        <Suspense fallback={<Spinner/>}>
            <Switch>
            <div style={container}>
                <Route exact path="/" render={() => <MainView view="main"/>}/>
                <Route path="/forest" render={() => <DetailView view="forest"/>}/>
                <Route path="/sky" render={() => <DetailView view="sky"/>}/>
                <Route path="/desert" render={() => <DetailView view="desert"/>}/>
            </div>
            </Switch>
        </Suspense>
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