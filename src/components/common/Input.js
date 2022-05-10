import React from "react";

const Input = ({ error, ...rest }) => {
  return (
    <div>
      {error ? (
        <input {...rest} error helperText={error} />
      ) : (
        <input {...rest} />
      )}
    </div>
  );
};

export default Input;
