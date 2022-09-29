import './App.css';
import Header from './Component/Header'
import Balance from './Component/Balance'
import IncomeExpense from './Component/IncomeExpense'
import TransationList from './Component/TransationList'
import AddTransation from './Component/AddTransation'


import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider className="App">
    <Header/>

    <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TransationList/>
      <AddTransation/>
    </div>
    </GlobalProvider>
  );
}

export default App;
