/* You import the containers into this file */
import React from 'react';
import { Router, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
// eslint-disable-next-line import/imports-first
import { Button, Columns, Column } from 'bloomer';
import AppHeader from './components/AppHeader.jsx';
import DirectoryPage from './components/DirectoryPage.jsx';
import TeamBuilderPage from './components/TeamBuilderPage.jsx';
import history from './modules/history';

const App = () => {
  // for router follow stackover flow answer https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Router history={history}>
          <Columns isCentered isVCentered>
            <Column isSize={{ mobile: 1 / 2, default: 12 }}>
              <Button href="/directory" isColor="danger" isSize="large" isOutlined>
                Directory
              </Button>
              <Button href="/teambuilder" isColor="danger" isSize="large" isOutlined>
                Team Builder
              </Button>
            </Column>
            <Route path="/directory" component={DirectoryPage} />
            <Route path="/teambuilder" component={TeamBuilderPage} />
          </Columns>
        </Router>
      </main>
    </div>
  );
};

export default App;
