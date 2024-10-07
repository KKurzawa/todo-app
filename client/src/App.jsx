import './App.css'
import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <Home />
    </div>
  )
}

export default App