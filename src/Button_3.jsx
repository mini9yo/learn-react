// Button - 3. CSS Inline Method
// Good for any small components with minimal styling

function Button_3() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const handleClick1 = () => console.log("OUCH!");
  const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  const handleClick4 = (e) => console.log(e); // e : object that describes the occured event
  const handleClick5 = (e) => (e.target.textContent = "OUCH!"); // e : object that describes the occured event

  return (
    <>
      {/* <button onClick={() => handleClick1()} style={styles}>
        1. Click me
      </button>
      <button onClick={() => handleClick2("Bro")} style={styles}>
        2. Click me
      </button>
      <button onClick={() => handleClick3("Bro")} style={styles}>
        3. Click me
      </button>
      <button onClick={(e) => handleClick4(e)} style={styles}>
        4. Click me
      </button> */}
      <button
        onClick={() => handleClick3("Bro")}
        onDoubleClick={(e) => handleClick5(e)}
        style={styles}
      >
        5. Click me
      </button>
    </>
  );
}

export default Button_3;
