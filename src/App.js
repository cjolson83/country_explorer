import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import Loading from "./Components/Loading";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { selectLoading } from "./redux/slices/loadingSlice";

function App() {
  let potentials = useSelector(selectPotentials);
  console.log(potentials);
  let currentDisplay = useSelector(selectDisplay);
  console.log("DISPLAY", currentDisplay);
  let loading = useSelector(selectLoading);
  return (
    <div className="App font-link">
      {loading && <Loading />}
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
