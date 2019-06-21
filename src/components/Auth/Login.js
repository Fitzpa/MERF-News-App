import React from "react";

import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

function Login(props) {
  // this is our hook for managing login and register state and form validation
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateLogin);
  // setting variable 'login' to true
  const [login, setLogin] = React.useState(true);

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-column">
        {/* if login is false then the name input will not be displayed */}
        {!login && (
          <input
            onChange={handleChange}
            value={values.name}
            name="name"
            type="text"
            placeholder="John Doe"
            autoComplete="off"
          />
        )}
        <input
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          name="email"
          type="email"
          className={errors.email && "error-input"}
          placeholder="JohnDoe@gmail.com"
          autoComplete="off"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          name="password"
          type="password"
          className={errors.password && "error-input"}
          placeholder="Choose a secure password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div className="flex mt3">
          <button
            type="submit"
            className="button pointer mr2"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "orange" }}
          >
            Submit
          </button>
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? "Need to create an account?" : "Already have an account?"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
