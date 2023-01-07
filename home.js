function Home(){
    return (
        <Card
            bgcolor="info"
            txtcolor="white"
            header="Home"
            title="Welcome to Bad Bank"
            text="Create a new account and receive $50 gift!"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}