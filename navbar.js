function NavBar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="nav-link active" href="#/" data-toggle="tooltip" title="Return to the bank home page">Bad Bank Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav nav-tabs nav-fill">
                    <li className="nav-item">
                    <a className="nav-link" href="#/createAccount" data-toggle="tooltip" title="Create a new bank account">Create Account</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/login" data-toggle="tooltip" title="Login to your account">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/logout" data-toggle="tooltip" title="Logout from your account">Logout</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/deposit" data-toggle="tooltip" title="Make a deposit into your account">Deposit</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/withdraw" data-toggle="tooltip" title="Make a withdrawl from your account">Withdraw</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/balance" data-toggle="tooltip" title="Check your balance">Balance</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/alldata" data-toggle="tooltip" title="Look at the data related to this bank">All Data</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    );
}


