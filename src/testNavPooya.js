import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class NavPooya extends Component {
   
    render() { 
        return (
            <BrowserRouter>
            <div>
              
                <Switch>
                 <Route path="/Home" component={Home} exact/>
                 <Route path="/login" component={Login}/>
               </Switch>
            </div> 
          </BrowserRouter>
         );
    }
}
 
export default NavPooya;