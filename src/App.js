import { Outlet } from 'react-router-dom';
import './App.css';
import { AppBody } from './AppBody';
import {AppHeader} from './AppHeader';

function App() {
  return (
    <>
    <AppHeader />
    <Outlet />
    </>
  );
}

export default App;
