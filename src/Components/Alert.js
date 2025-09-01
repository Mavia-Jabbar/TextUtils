import React from "react";
import "./../css Files/Alert.css";

export default function Alert(props) {
  return (
    <div className="alert-container">
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show alert-box`}
          role="alert"
        >
          <strong>{props.alert.type.toUpperCase()}</strong>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
