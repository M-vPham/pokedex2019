/* You import the containers into this file */
import React from 'react';
import { Router, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
// eslint-disable-next-line import/imports-first
import { Button, Columns, Column, Container, Section } from 'bloomer';
import './index.css';
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
          <Section>
            <Container>
              <Columns isCentered isVCentered>
                <Column
                  className="App-Nav-Container"
                  isSize={{ mobile: '3/4', tablet: 4, desktop: 3, widescreen: 3, default: 6 }}
                >
                  <Button
                    className="App-Nav-Button"
                    href="/directory"
                    isColor="danger"
                    isSize="large"
                    isOutlined
                  >
                    Pokedex
                  </Button>
                </Column>
              </Columns>
              <Columns isCentered isVCentered>
                <Column
                  className="App-Nav-Container"
                  isSize={{ mobile: '3/4', tablet: 4, desktop: 3, widescreen: 3, default: 6 }}
                >
                  <Button
                    className="App-Nav-Button"
                    href="/teambuilder"
                    isColor="danger"
                    isSize="large"
                    isOutlined
                  >
                    Team Builder
                  </Button>
                </Column>
                <Route path="/directory" component={DirectoryPage} />
                <Route path="/teambuilder" component={TeamBuilderPage} />
              </Columns>
            </Container>
          </Section>
        </Router>
      </main>
    </div>
  );
};

export default App;
