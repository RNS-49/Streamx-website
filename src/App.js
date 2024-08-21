import LatestRow from './Components/Categories/LatestRow';
import SeriesRow from './Components/Categories/SeriesRow';
import TopRatedRow from './Components/Categories/TopRatedRow';
import Navbar from './Components/Navbar/Navbar';
import AnimeShows from './Components/Categories/AnimeShows';
import ActionRow from './Components/Categories/ActionRow';
import RomanticRow from './Components/Categories/RomanticRow';
import HorrorRow from './Components/Categories/HorrorRow';
import GenreList from './Components/Categories/GenreList';
import BottomBar from './Components/BottomBar/BottomBar';
import { Route, Routes} from 'react-router-dom'
import Subscription from './Components/OtherPages/Subscription'
import LoginPage from './Components/OtherPages/LoginPage';



function App() {
  return (

    <div>


      <Routes>
        <Route path='/Subscription' element={<Subscription />} />
         <Route path='/LoginPage' element={<LoginPage/>} />
        <Route path='/' element={
          <>
            <Navbar />
            <SeriesRow />
            <LatestRow />
            <TopRatedRow />
            <ActionRow />
            <AnimeShows />
            <RomanticRow />
            <HorrorRow />
            <GenreList />
            <BottomBar />
          </>
        } />

      </Routes>





    </div>
  );
}

export default App;
