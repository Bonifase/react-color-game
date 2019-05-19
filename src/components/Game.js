import React from "react";

export default function Game(props) {
  let codes = props.props;
  return (
    <div>
      {codes.map((code, index) => {
        return (
          <div>
            <li key={index}>{code}</li>
          </div>
        );
      })}
    </div>
  );
}
