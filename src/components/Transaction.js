import React from "react";

function Transaction({ date, transaction, description, category, amount, handleDeletedTransaction}) {

  function handleDelete(){
    fetch(`http://localhost:8001/transactions/${transaction.id}`,{
      method:"DELETE",
    })
    .then(resp=>resp.json())
    .then(deleted=>handleDeletedTransaction(deleted))
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handleDelete}>DELETE</button></td>
    </tr>
  );
}

export default Transaction;
