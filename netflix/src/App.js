import "./App.css";
import Body from "./components/Body";
// import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Body></Body>
      </Provider>
    </div>
  );
}

export default App;
