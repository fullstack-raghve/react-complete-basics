import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Header } from './component/Header';
import { Places } from './component/Places';
import { Slideshow } from './component/Slider/Slideshow';
import { Books } from './component/Books/Books';
import { Teachers } from './component/Teachers/Teachers';
import { Users } from './component/Users/Users';
import { Userdetails } from './component/Users/Userdetails';
import { UseStateHook } from './component/Hooks/UseStateHook';
import { UsePortals } from './component/Hooks/UsePortals';
import { UseRefHook } from './component/Hooks/UseRefHook';
import { Forwardrefparent } from './component/Hooks/Forwardrefparent';
import { UserForm } from './component/Hooks/Customhook/UserForm';
import { NoPage } from './shared/NoPage';
import { UseReducer } from './component/Hooks/UseReducer';
import { Usecontext } from './component/Hooks/Usecontext/Usecontext';
import { CompP } from './component/Hooks/Context/CompP';
import { MainComp } from './component/Hooks/UseCallback/MainComp';
import { Quiz } from './component/Quiz/Quiz';
//import { UserForm1 } from './component/Hooks/Customhook/UserForm1';



function App() {
  return (
    <Router>
      <div>

        <Header />
        <Switch>
          <Route exact path="/">
            <Slideshow />
            <Teachers />
            <Places />
          </Route>

          <Route path="/books">
            <Books />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/common">
            <UseStateHook />
          </Route>
          <Route path="/user/:id">
            <Userdetails />
          </Route>
          <Route path="/portals">
            <UsePortals />
          </Route>
          <Route path="/useref">
            <UseRefHook/>
          </Route>
          <Route path="/forwardref">
            <Forwardrefparent />
          </Route>
          <Route path="/usereducer">
            <UseReducer/>
          </Route>
          <Route path="/customhook">
            <UserForm/>
          </Route>
          <Route path="/usecontext">
            <Usecontext/>
          </Route>
          <Route path="/context">
            <CompP/>
          </Route>
          <Route path="/callback">
           <MainComp/>
          </Route>
          <Route path="/quiz">
           <Quiz/>
          </Route>

          <Route path="*">
            <NoPage/>
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
