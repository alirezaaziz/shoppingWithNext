import React from "react";
import { jsx, css } from '@emotion/react';

const Button = ({ children }) => {
  return (
    <button
      css={css`
        margin: 100px;
        background-color: brown;
      `}
    >
      {children}
    </button>
  );
};

export default Button;
