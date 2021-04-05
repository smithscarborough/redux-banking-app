import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeposit, createWithdrawal } from "../redux/actions";

function Account(props) {
  const account = useSelector((state) => state[props.account]);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const withdraw = () => {
    dispatch(createWithdrawal(amount, props.account));
  };

  const deposit = () => {
    dispatch(createDeposit(amount, props.account));
  };

  const handleChange = (e) => {
    setAmount(Number(e.target.value) || 0);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <h3>${account.toFixed(2)}</h3>

      <div>
        <button onClick={withdraw}>-</button>
        <input type="number" onChange={handleChange} value={amount.toFixed(2)} />
        <button onClick={deposit}>+</button>
      </div>
    </div>
  );
}

export default Account;
