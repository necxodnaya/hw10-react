import React from "react";
import styled from "styled-components";

const Switch = ({ value, onChange }) => {
  return (
    <Div>
        <input
          className="checkbox"
          id={`new`}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label className="label" htmlFor={`new`}>
          <span className={`button`} />
        </label>
    </Div>
  );
};

export default Switch;

const Div = styled.div`
  .checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
    
  }
  .label {
    display: flex;
    width: 150px;
    height: 60px;
    background: #b3afaf;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
    margin: auto;
  
  }
  .label .button {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 55px;
    height: 55px;
    border-radius: 55px;
    transition: 0.2s;
    background: #ffffff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  .checkbox:checked + .label .button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    background: #46f246;
  }
  .label:active .button {
    width: 60px;
  }
`;
