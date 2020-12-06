import React from "react";
import header1 from "./header1";
import header2 from "./header2";
import home from "./home";

class index extends React.Component {
  render() {
    return (
      <div>
        <header1 />
        <header2 />
        <home />
      </div>
    );
  }
}

export default index;
