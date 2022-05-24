import 'antd/dist/antd.css';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Dashboard/>
    </div>
  );
}

export default App;