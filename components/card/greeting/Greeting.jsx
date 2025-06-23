import "./greeting.css";
export const Greeting = ({ isLoading, isContent }) => {
  const name = "Payal";
  return (
    <div className="greeting">
      {isLoading ? <p>Please wait</p> : isContent ?<p>You are about to login</p>:<p>Failed to login</p>}
      {/* <h3>Welcome {name}</h3> */}
    </div>
  );
};
