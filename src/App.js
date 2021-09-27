import {Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Contactpage from './components/Contactpage';

function App(){
  return(<>
    <Route path="/" exact component={Homepage}/>
    <Route path="/Contact" exact component={Contactpage}/>
  </>  
  );
}
export default App;
