import React, { useState } from "react";

function Search({setTransactions, transactions, setRefresh}) {
  const [search, setSearch] = useState()
  function handleChange(e){
    const keyword = e.target.value
    setSearch(keyword)

    if(keyword.length>0){
      const filteredTransactions = transactions.filter(transaction=>transaction.description.includes(keyword))
      setTransactions(filteredTransactions)
    }else{
      setRefresh(true)
      setTransactions(transactions)
    }}

    function handleClick(){
      setTransactions(transactions)
    }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={search}
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i><br/>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}

export default Search;
