import React from "react";

export default function Game(props) {
  let codes = props.props;
  return (
    <div>
      {codes.map((code, index) => {
        return (
          <div className="some-page-wrapper">
            <div className="rows">
              <div className="column">
                <div className="card" key={index} style={{ backgroundColor: `${code}` }}>
                  <div className="card-content">
                    <h6>{code}</h6>
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
