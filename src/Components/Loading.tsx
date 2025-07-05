import React from "react";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loading-overlay">
      <img src="/store.svg" alt="Store" />
    </div>
  );
}

export default Loading;
