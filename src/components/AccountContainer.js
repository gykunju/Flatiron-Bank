import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(()=>fetch("http://localhost:8001/transactions")
  .then(resp=>resp.json())
  .then(data=>setTransactions(data))
  .catch(error=> console.error('Error:', error))
  ,[refresh, transactions])

  function handleAddTransaction(newTransaction){
    setTransactions([...transactions, newTransaction])
  }

  function handleDeletedTransaction(deleted){
    const remaining = transactions.filter(transaction=> transaction.id !== deleted.id)
    setTransactions(remaining)
  }
  return (
    <div>
      <Search setTransactions={setTransactions} transactions={transactions} setRefresh={setRefresh}/>
      <AddTransactionForm  handleAddTransaction={handleAddTransaction}/>
      <TransactionsList transactions={transactions} handleDeletedTransaction={handleDeletedTransaction}/>
    </div>
  );
}

export default AccountContainer;
