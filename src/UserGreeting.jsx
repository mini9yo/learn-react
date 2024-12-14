import PropTypes from "prop-types";

function UserGreeting(props) {
  // Method 1 - use if/else
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.username}</h2>;
  //   } else {
  //     return <h2>Please Log In to Continue</h2>;
  //   }

  // Method 2 - use ?: (preferred over 1)
  //   return props.isLoggedIn ? (
  //     <h2 className="welcome-message">Welcome {props.username}</h2>
  //   ) : (
  //     <h2 className="login-promt">Please Log In to Continue</h2>
  //   );

  // Method 3 - use separate consts for messages
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPromt = <h2 className="login-promt">Please Log In to Continue</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPromt;
}

UserGreeting.PropTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = { isLoggedIn: false, username: "Guest" };

export default UserGreeting;
