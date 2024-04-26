import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';
import { ThemeProvider } from './ThemeContext';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import FeedbackForm from './FeedbackForm'; // Добавлено

const store = createStore(rootReducer);

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Menu />
            <Switch>
              <Route path="/lab/:id" component={Content} />
              <Route path="/feedback" component={FeedbackForm} /> {/* Добавлено */}
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

const Home = () => {
  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать!</p>
    </div>
  );
}

export default App;