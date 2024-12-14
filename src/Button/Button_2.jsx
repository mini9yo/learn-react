// Button - 2. CSS Modules Method
// Good for individual componets with unique styles

import styles from "./Button_2.module.css";

function Button_2() {
  return <button className={styles.button_2}>Click me</button>;
}

export default Button_2;
