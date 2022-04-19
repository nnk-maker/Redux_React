
import './App.css';
import {connect} from 'react-redux';
import {IncAction} from './action'; 
import {DecAction} from './action';
function App({local_variable,IncAction,DecAction}) {
  return (
    <div className="App">
        <center>
          <p>{local_variable}</p>
          <button onClick={() => IncAction(5)}>Increment</button>
          <button onClick={DecAction}>Decrement</button>
        </center>
          
    </div>
  );
}
const mapStateToProps = state => ({
  local_variable : state
})
//const mapDispatchToProps = state => ({})
export default connect(mapStateToProps,{IncAction,DecAction})(App);
