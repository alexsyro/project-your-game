import { Provider } from 'react-redux';
import store from '../../redux/store';
import Themes from '../Themes/Themes'
import Nav from '../Nav/Nav'

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Themes />   
    </Provider>
  );
}

export default App;
