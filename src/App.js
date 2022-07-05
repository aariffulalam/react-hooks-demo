import './App.css';

import StateHookCounter from './component/useState/StateHookCounter';
import StateHookCounterTwo from './component/useState/StateHookCounterTwo';
import StateHookCounterThree from './component/useState/StateHookCounterThree';
import { StateHookCounterFour } from './component/useState/StateHookCounterFour';

import EffectHookCouterOne from "./component/useEffect/EffectHookCouterOne"
import EffectMouseEvent from './component/useEffect/EffectMouseEvent';
import MouseContainer from './component/useEffect/MouseContainer';
import EffectHoolInterval from './component/useEffect/EffectHookInterval';

function App() {
  return (
    <div className="App">
      {/* <StateHookCounter/> */}
      {/* <StateHookCounterTwo/> */}
      {/* <StateHookCounterThree/> */}
      {/* <StateHookCounterFour/> */}
      {/* <EffectHookCouterOne/> */}
      {/* <EffectMouseEvent/> */}
      {/* <MouseContainer/> */}
      <EffectHoolInterval/>
    </div>
  );
}

export default App;
