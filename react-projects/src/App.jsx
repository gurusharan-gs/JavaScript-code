import "./App.css";
import Password from "./components/Password";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ModelText from "./components/custom-model-popup/ModelText";
import GithubProfile from "./components/githubProfile/GithubProfile";
import SearchAutocomplete from "./components/search-autocomplete-with-api/SearchAutocomplete";
import TicTacToe from "./components/tic-tack-toe/TicTacToe";
import Count from "./components/counter/Count";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/ScrollToTopAndBottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/ScrollToSection";
import BgChanger from "./components/bgChanger/BgChanger";
import PasswordGenerator from "./components/passwordGenerator/PasswordGenerator";

function App() {
  return (
    <>
      <div>
        {/* Count */}
        {/* <Count /> */}

        {/* password */}
        {/* <Password /> */}

        {/* Random Color */}
        {/* <RandomColor /> */}

        {/* Star Rating */}
        {/* <StarRating /> */}

        {/* custom model popup */}
        {/* <ModelText /> */}

        {/* Github Profile */}
        {/* <GithubProfile /> */}

        {/* Search Autocomplete */}
        {/* <SearchAutocomplete /> */}

        {/* Tic Tac Toe */}
        {/* <TicTacToe /> */}

        {/* Scroll To Top And Bottom */}
        {/* <ScrollToTopAndBottom /> */}

        {/* Scroll To particular Section */}
        {/* <ScrollToSection /> */}

        {/* BgChanger */}
        {/* <BgChanger /> */}

        {/* Password Generator  */}
        <PasswordGenerator />
      </div>
    </>
  );
}

export default App;
