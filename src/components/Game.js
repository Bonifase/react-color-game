import React from "react";

export default function Game(props) {
  let codes = props.props;
  return (
    <div>
      {codes.map((code, index) => {
        return (
          <div>
            <div className="row">
              <div className="col s12 m7">
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
