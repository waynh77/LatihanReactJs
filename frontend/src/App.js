
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListKaryawanComponent from './components/ListKaryawanComponent';
import CreateKaryawanComponent from './components/CreateKaryawanComponent';
import ViewKaryawanComponent from './components/ViewKaryawanComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent/>
        <div className='container'>
          <Switch>
            <Route path="/" exact component={ListKaryawanComponent}></Route>
            <Route path="/karyawan" component={ListKaryawanComponent}></Route>
            <Route path = "/add-Karyawan/:id" component = {CreateKaryawanComponent}></Route>
            <Route path = "/view-Karyawan/:id" component = {ViewKaryawanComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
