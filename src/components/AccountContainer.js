import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])

  useEffect(()=>fetch("http://localhost:8001/transactions")
  .then(resp=>resp.json())
  .then(data=>setTransactions(data))
  .catch(error=> console.error('Error:', error))
  ,[])

  function handleAddTransaction(newTransaction){
    setTransactions([...transactions, newTransaction])
  }
  return (
    <div>
      <Search setTransactions={setTransactions} transactions={transactions}/>
      <AddTransactionForm handleSubmit={handleSubmit} handleAddTransaction={handleAddTransaction}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
