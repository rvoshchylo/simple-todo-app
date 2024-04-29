import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header'
import TodoRoutes from './TodoRoutes';

function App() {
  return (
    <div className='container'>
      <Header />
      <TodoRoutes />
    </div>
  )
}

export default App
