import React, { Component } from "react";

export class NewsIteamComponent extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <>
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>

          <img
            src={
              !imgUrl
                ? "https://www.mca.gov.in/content/dam/mca/images/press_release_image.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <span className="badge rounded-pill bg-info text-dark">new</span>
            <p className="card-text"> {description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {author} updated on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary bg-dark text-white"
            >
              Read more...
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsIteamComponent;
