import React from "react";
import { Link } from "react-router-dom";

function TabReview({ comments }) {
  return (
    <div>
      <div className="row">
        {/* Rating */}
        <div className="col-md-3">
          <div id="rating">
            <div className="rating-avg">
              <span>4.5</span>
              <div className="rating-stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
            </div>
            <ul className="rating">
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="rating-progress">
                  <div style={{ width: "80%" }} />
                </div>
                <span className="sum">3</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <div className="rating-progress">
                  <div style={{ width: "60%" }} />
                </div>
                <span className="sum">2</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <div className="rating-progress">
                  <div />
                </div>
                <span className="sum">0</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <div className="rating-progress">
                  <div />
                </div>
                <span className="sum">0</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <div className="rating-progress">
                  <div />
                </div>
                <span className="sum">0</span>
              </li>
            </ul>
          </div>
        </div>
        {/* /Rating */}
        {/* Reviews */}
        <div className="col-md-6">
          <div id="reviews">
            <ul className="reviews">
              {comments &&
                comments.map((comment) => (
                  <li key={comment.id}>
                    <div className="review-heading">
                      <h5 className="name">ID: {comment.user_id}</h5>
                      <p className="date">
                        {new Date(comment.updated_at).toLocaleDateString()}
                      </p>
                      <div className="review-rating">
                        {Array(comment.rating)
                          .fill(0)
                          .map((_, idx) => (
                            <i className="fa fa-star" key={idx} />
                          ))}
                      </div>
                    </div>
                    <div className="review-body">
                      <p>{comment.content}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* /Reviews */}
        {/* Review Form */}
        <div className="col-md-3">
          <div id="review-form">
            <form className="review-form">
              <input className="input" type="text" placeholder="Your Name" />
              <input className="input" type="email" placeholder="Your Email" />
              <textarea
                className="input"
                placeholder="Your Review"
                defaultValue={""}
              />
              <div className="input-rating">
                <span>Your Rating: </span>
                <div className="stars">
                  <input
                    id="star5"
                    name="rating"
                    defaultValue={5}
                    type="radio"
                  />
                  <label htmlFor="star5" />
                  <input
                    id="star4"
                    name="rating"
                    defaultValue={4}
                    type="radio"
                  />
                  <label htmlFor="star4" />
                  <input
                    id="star3"
                    name="rating"
                    defaultValue={3}
                    type="radio"
                  />
                  <label htmlFor="star3" />
                  <input
                    id="star2"
                    name="rating"
                    defaultValue={2}
                    type="radio"
                  />
                  <label htmlFor="star2" />
                  <input
                    id="star1"
                    name="rating"
                    defaultValue={1}
                    type="radio"
                  />
                  <label htmlFor="star1" />
                </div>
              </div>
              <button className="primary-btn">Submit</button>
            </form>
          </div>
        </div>
        {/* /Review Form */}
      </div>
    </div>
  );
}

export default TabReview;
