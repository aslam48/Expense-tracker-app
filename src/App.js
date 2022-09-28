import './App.css';
import Header from './Component/Header'
import Balance from './Component/Balance'
import IncomeExpense from './Component/IncomeExpense'
import TransationList from './Component/TransationList'
import AddTransation from './Component/AddTransation'

function App() {
  return (
    <div className="App">
    <Header/>

    <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TransationList/>
      <AddTransation/>
    </div>
    </div>
  );
}

export default App;
