import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className='app'>
      <h1>
        Star Rating Component
      </h1>
      <StarRating totalStars={5}/>
    </div>
  )
}

export default App;
