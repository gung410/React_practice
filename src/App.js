import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/stores/store';
import BodyPage from './layout/body';
import HeaderPage from './layout/header';
import FooterPage from './layout/Footer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HeaderPage />
      <BodyPage />
      <FooterPage />
    </div>
    </Provider>

  );
}

export default App;
