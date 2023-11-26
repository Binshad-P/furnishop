import React from "react";
import { BiSolidStar, BiSolidStarHalf, BiMenuAltLeft } from "react-icons/bi";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { productData } from "../../../components/Products/Product-data";
import { useState } from "react";
import img6 from "../../../assets/img6.png";
import "./Rating_review.css";
const Rating_review = () => {
  const [items, setItems] = useState(productData.slice(4));
  return (
    <div className="Rating_review">
      <h3>Rating & Reviews</h3>
      <div className="above-section">
        <div className="left">
          <div className="rating">
            <h2>4.2</h2>
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStarHalf />
            <p>156 Ratings</p>
          </div>
          <div className="bars">
            <div className="bar1">
              <p>Good</p>
              <div className="all-line">
                <div className="lines">
                  <div className="line1"></div>
                </div>
              </div>
              <span>75%</span>
            </div>
            <div className="bar1">
              <p> very Good</p>
              <div className="all-line">
                <div className="lines">
                  <div className="line1"></div>
                </div>
              </div>
              <span>75%</span>
            </div>
            <div className="bar1">
              <p>Exllent</p>
              <div className="all-line">
                <div className="lines">
                  <div className="line1"></div>
                </div>
              </div>
              <span>75%</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="images">
            {items.map((item) => (
              <img src={require(`../../../assets/${item.image}.png`)}></img>
            ))}
          </div>
        </div>
      </div>
      <div className="center">
        <div className="center_line"></div>
      </div>
      <div className="below-section">
        <div className="left">
          <input type="text" placeholder="find the user"></input>
        </div>
        <div className="right">
          <div className="reviews">
            <div className="Total-review">
                <div className="l-review">
                    <h4>124 Reviews</h4>
                </div>
                <div className="r-review d-flex">
                    < BiMenuAltLeft size={25}/>
                    <h5>Sorted By</h5>
                </div>
            </div>
            <div className="review1">
              <div className="profile1">
                <img src={img6} />
                <div className="user">
                  <p className="u-name">josh Smith</p>
                  <div className="rating">
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStarHalf />
                  </div>
                  <p>june-09-23</p>
                </div>
              </div>

              <div className="user-review">
                <h6>Good Product</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus velit asperiores laborum distinctio libero magnam ad
                  officiis necessitatibus ullam illo a, consequuntur quidem
                  iusto dolorum iure? Enim pariatur maxime veritatis.
                </p>
                <div className="likes">
                  <div className="like">
                    <AiFillLike />
                    <p>5</p>
                  </div>
                  <div className="dislike">
                    <AiFillDislike />
                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review1">
            <div className="profile1">
              <img src={img6} />
              <div className="user">
                <p className="u-name">josh Smith</p>
                <div className="rating">
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStarHalf />
                </div>
                <p>june-09-23</p>
              </div>
            </div>
            <div className="user-review">
              <h6>Good Product</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus velit asperiores laborum distinctio libero magnam ad
                officiis necessitatibus ullam illo a, consequuntur quidem iusto
                dolorum iure? Enim pariatur maxime veritatis.
              </p>
              <div className="likes">
                <div className="like">
                  <AiFillLike />
                  <p>5</p>
                </div>
                <div className="dislike">
                  <AiFillDislike />
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating_review;
