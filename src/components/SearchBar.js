import React, {useState} from 'react'

const SearchBar = ({ onSearch }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(inputValue);
    };

  return (
    <div className="relative mx-auto max-w-md mt-20 ">
      <input
        type="text"
        placeholder="Enter address..."
        value={inputValue}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
      <button 
        onClick={handleSearchClick}
        className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
        Search
      </button>
    </div>
  )
}

export default SearchBar
