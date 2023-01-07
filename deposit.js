function Deposit() {
    const ctx = React.useContext(UserContext);
    // for now, assume we are working on the first user's account
    const user = ctx.users[0];
    const [status, setStatus] = React.useState(EMPTY_STATUS);
    const [balance, setBalance] = React.useState(user.balance);
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    const flashStatus = (type, message) => {
      setStatus({ type, message });
      setTimeout(() => setStatus(EMPTY_STATUS), 3000);
      return false;
    };
  
    const isDepositValid = (amount) => {
      return amount > 0;
    };
  
    const resetForm = () => {
      setAmount("");
      setValidTransaction(false);
    };
  
    const updateBalance = (amount) => {
      user.balance = user.balance + amount;
      setBalance(user.balance);
    };
  
    const handleSuccess = (amount) => {
      updateBalance(amount);
      flashStatus("success", "Success: Deposited $ " + amount);
      resetForm();
      return true;
    };
  
    const handleError = (message) => {
      flashStatus("error", "Error: " + message);
      setValidTransaction(false);
      return false;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const amount = Number(getAmount());
      if (isDepositValid(amount)) {
        handleSuccess(amount);
      } else {
        handleError("Please enter a valid amount/number to deposit.");
      }
    };
  
    const handleChange = (event) => {
      event.preventDefault();
      const amount = Number(getAmount());
      if (isDepositValid(amount)) {
        setValidTransaction(true);
      } else {
        handleError("Please enter a valid amount/number to deposit.");
      }
    };
  
    return (
      <Card
        bgcolor="info"
        header="Deposit"
        status={status}
        body={
          <>
            {/* Balance */}
            <div className="card bg-light mb-3">
              <div className="card text-white bg-dark mb-3">Balance</div>
              <div className="bd-highlight">$ {balance}</div>
            </div>
            {/* Deposit Amount */}
            <label className="atm-controls label huge">
              <div className="card-label">Deposit Amount</div>
              <input
                id="number-input"
                className="number-input"
                width="200"
                onChange={handleChange}
              ></input>
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
                disabled={!validTransaction}
              >
                Deposit
              </button>
            </label>
          </>
        }
      />
    );
  }