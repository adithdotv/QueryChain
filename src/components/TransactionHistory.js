import React from 'react';
import { Web3 } from 'web3';

const web3 = new Web3('https://eth.llamarpc.com'); 

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="w-full mx-auto mt-10 overflow-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Transaction History</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions found</p>
        ) : (
          <table className="w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Timestamp</th>
                <th className="py-2 px-4 border-b border-gray-200">Hash</th>
                <th className="py-2 px-4 border-b border-gray-200">Block Number</th>
                <th className="py-2 px-4 border-b border-gray-200">From</th>
                <th className="py-2 px-4 border-b border-gray-200">To</th>
                <th className="py-2 px-4 border-b border-gray-200">Value (ETH)</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.hash}>
                  <td className="py-2 px-4 border-b border-gray-200">{new Date(tx.timeStamp * 1000).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b border-gray-200 truncate">{tx.hash}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{tx.blockNumber}</td>
                  <td className="py-2 px-4 border-b border-gray-200 truncate">{tx.from}</td>
                  <td className="py-2 px-4 border-b border-gray-200 truncate">{tx.to}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{web3.utils.fromWei(tx.value, 'ether')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
