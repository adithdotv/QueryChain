import './App.css';
import BalanceCard from './components/BalanceCard';
import SearchBar from './components/SearchBar';
import { Web3 } from 'web3';
import { useState } from 'react'
import { ETHERSCAN_API_KEY } from './secrets';
import TransactionHistory from './components/TransactionHistory';

// public RPC endpoint
const web3 = new Web3('https://eth.llamarpc.com'); 



function App() {

  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [transCount, setTransCount] = useState('');
  const [transactions, setTransactions] = useState([])

  const handleSearch = async (inputAddress) => {
    try {
      const balanceInWei = await web3.eth.getBalance(inputAddress);
      const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
      const txCount = await web3.eth.getTransactionCount(inputAddress);
      setAddress(inputAddress);
      setBalance(balanceInEth);
      setTransCount(txCount)
      await fetchTransactionHistory(inputAddress)
    } catch (error) {
      console.error('Error fetching balance:', error);
      setAddress(inputAddress);
      setBalance('Error fetching balance');
      setTransCount('Error fetching transaction count')
    }
  };

  const fetchTransactionHistory = async(address) => {
    try{
      const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`) 
      console.log(response)
      const data = await response.json()
      setTransactions(data.result)
      console.log(transactions)
    }catch(error){
      console.error('Error fetching transaction history:', error);
      setTransactions([]);
    }
  }

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-white p-10 bg-indigo-900">QueryChain</h1>
      <SearchBar onSearch={handleSearch}/>
      {address && (
        <>
          <BalanceCard address={address} balance={balance} transCount={transCount} />
          <TransactionHistory transactions={transactions} />
        </>
      )}
    </div>
  );
}

export default App;
