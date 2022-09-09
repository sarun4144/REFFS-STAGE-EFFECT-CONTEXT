import Eventdata2 from './event-data';
import RefsArray from './refs-array';
import MessageBox from './state-func';
import './App.css';
import Banner from './banner';
function App() {
  return (
    <div className="App">
      <Banner/>
      <br/>
      <Eventdata2/>
      <br/>
      <RefsArray/>
      <br/>
      <MessageBox/>
    </div>
  );
}

export default App;
