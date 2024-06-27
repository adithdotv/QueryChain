import React from 'react';

const BalanceCard = ({ address, balance, transCount}) => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        <div className="font-bold text-xl mb-2 text-gray-700">Account Information</div>
        <p className="text-gray-500 text-base">Address:</p>
        <p className="text-gray-900 text-sm mb-4 break-words">{address}</p>
        <p className="text-gray-500 text-base">Balance:</p>
        <p className="text-gray-900 text-xl font-semibold">{balance} ETH</p>
        <p className="text-gray-500 text-base">Transaction Count:</p>
        <p className="text-gray-900 text-xl font-semibold">{transCount.toString()}</p>
        
      </div>
    </div>
  );
};

export default BalanceCard;
