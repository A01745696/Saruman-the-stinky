import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard';
import Question from './components/Question';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quizpage' element={<QuizPage/>}>
        <Route path=':question' element={<Question/>}/>
      </Route>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
    </Routes>
  );
}

export default App;
