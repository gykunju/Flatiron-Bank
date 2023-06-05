import React, { useState } from "react";

function Search({setTransactions, transactions}) {
  const [search, setSearch] = useState()
  function handleChange(e){
    setSearch(e.target.value)
    const filteredTransactions = transactions.filter(transaction=>transaction.description === search)
    setTransactions(filteredTransactions)
    }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={search}
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
