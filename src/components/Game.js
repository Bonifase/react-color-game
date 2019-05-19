import React from "react";

export default function Game(props) {
  let codes = props.props;
  return (
    <div className="some-page-wrapper">
      {codes.map((code, index) => {
        return (
          <div>
            <div className="rows">
              <div className="column">
                <div className="card" key={index} style={{ backgroundColor: `${code}` }}>
                  <div className="card-content">
                    <p>{code}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
