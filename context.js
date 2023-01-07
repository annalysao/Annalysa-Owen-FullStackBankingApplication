const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);

const EMPTY_STATUS = { type: "", message: "" };

const getAmount = () => {
  return document.getElementById("number-input").value;
};

const setAmount = (amount) => {
  document.getElementById("number-input").value = amount;
};

// components

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : "";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-black";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "25rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h2 className="card-title">{props.title}</h2>}
        {props.text && <p className="card-text-center">{props.text}</p>}
        {props.body}
        {props.status && (
          <div
            className={`${
              props.status.type === "success"
                ? "success-message"
                : "error-message"
            }`}
          >
            {props.status.message}
          </div>
        )}
      </div>
    </div>
  );
}