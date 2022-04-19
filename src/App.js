import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import RoutePath from './func/Routes'
import './scss/App.scss';

function App() {
  return  <BrowserRouter><RoutePath/></BrowserRouter>
}
export default App;
