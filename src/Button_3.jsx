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

  const handleClick = () => console.log("OUCH!");
  const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  return (
    <button onClick={() => handleClick2("Bro")} style={styles}>
      Click me
    </button>
  );
}

export default Button_3;
