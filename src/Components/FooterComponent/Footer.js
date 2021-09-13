import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="text-center bg-dark text-white mt-5">
          <div className="container p-4"></div>

          <div className="text-center p-3 bg-dark text-white">
            © 2022 Copyright:
            <a className="text-white link-info" href="/">
              News-log.com
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
