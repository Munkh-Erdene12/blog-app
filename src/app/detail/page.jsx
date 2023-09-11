"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineHeart,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
  BsArrowRightShort,
  BsFillSendFill,
} from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import ShareIcon from "../../components/ShareIcon";
import ShareBox from "../../components/ShareBox";
import tredingData from "../database/treding";
import SmallTitle from "../../components/SmallTitle";
import CustomImage from "../../components/CustomImage";
import LargeTitle from "../../components/LargeTitle";
import footer from "../../components/Footer";
import Content__1 from "../../components/Content__1";
export default function Page() {
  const router = useSearchParams();
  const [state, setState] = React.useState(null);
  const [category, setCategory] = React.useState([]);
  const id = router.get("id");
  React.useEffect(() => {
    const trendingItem = tredingData.filter((item) => item.id === parseInt(id));
    if (trendingItem) {
      setState(trendingItem);
    }
  }, [id]);
  React.useEffect(() => {
    fetch("api/admin/category")
      .then((data) => data.json())
      .then((result) => setCategory(result.categories));
  }, []);
  const small = () => {
    let arr = [];
    for (let i = 1; i <= 4; i++) {
      arr.push(i);
    }
    return (
      <div className="small-img">
        <div className="small-img-img">
          {arr.map((el, index) => (
            <img
              key={index}
              src={`https://picsum.photos/200/300?random=${index}`}
              alt="small"
              className="small"
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    // <div>detail</div>
    <>
      <div className="detail">
        {state && (
          <SmallTitle value={state[0].smallTitle} style={{ margin: "0" }} />
        )}
        {state && <LargeTitle value={state[0].title} style={{ margin: 0 }} />}
        <p>{state && state[0].date ? state[0].date : ""}</p>
        <div className="img-container">
          <div className="large-img">
            <img
              src={state && state[0].url ? state[0].url : ""}
              alt=""
              className="large-img-img"
            />
          </div>
          {small()}
        </div>
        <span>{state && state[0].decs ? state[0].decs : ""}</span>
        <div className="category">
          {category.map((el) => (
            <div className="child-item" key={el.id}>
              {el.name}
            </div>
          ))}
        </div>
        <div className="action" style={{ marginTop: "40px" }}>
          <div className="action">
            <div className="meta">
              <div className="post-like">
                <div className="item-like">
                  <Link href="#">
                    <AiOutlineHeart />
                  </Link>
                  <span>176</span> Likes
                </div>
              </div>
              <div className="post-view">417 views</div>
            </div>
            <div className="post-more">
              <BsArrowRightShort />
              <Link href="#">Read more</Link>
            </div>
            <ShareBox style="shareBox">
              <ShareIcon icon={<FaFacebookF />} />
              <ShareIcon icon={<AiOutlineTwitter />} />
              <ShareIcon icon={<FaInstagram />} />
            </ShareBox>
          </div>
        </div>
        <LargeTitle
          value="more from me"
          custom={{ fontFamily: "Sacramento", textTransform: "capitalize" }}
        />
        {/* <SmallTitle
          value="My biggest life changes, latest minds, and my family life."
          custom={{
            fontFamily: "Open Sans",
            fontSize: "13px",
            letterSpacing: "2px",
          }}
        /> */}
        <div className="comment">
          <div className="comment-title">Comments</div>
          <div className="m">
            <div className="_1">
              <div className="_2">
                <div className="avatar">
                  <Image
                    src="/profile.png"
                    alt="pro"
                    width={100}
                    height={100}
                    className="img_2"
                  />
                </div>
                <div className="comment_1">
                  <div className="_w1">
                    <h4 className="w_5">John Mars</h4>
                    <div className="action_2">
                      <div className="date_w">Sep 10, 2023</div>
                      <p className="comment_t">reply</p>
                    </div>
                  </div>
                  <div className="_w4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s,
                  </div>
                  <div className="border"></div>
                </div>
              </div>
              <div className="_2">
                <div className="avatar">
                  <Image
                    src="/profile.png"
                    alt="pro"
                    width={100}
                    height={100}
                    className="img_2"
                  />
                </div>
                <div className="comment_1">
                  <div className="_w1">
                    <h4 className="w_5">John Mars</h4>
                    <div className="action_2">
                      <div className="date_w">Sep 10, 2023</div>
                      <p className="comment_t">reply</p>
                    </div>
                  </div>
                  <div className="_w4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s,
                  </div>
                  <div className="border"></div>
                </div>
              </div>
              <div className="_2">
                <div className="avatar">
                  <Image
                    src="/profile.png"
                    alt="pro"
                    width={100}
                    height={100}
                    className="img_2"
                  />
                </div>
                <div className="comment_1">
                  <div className="_w1">
                    <h4 className="w_5">John Mars</h4>
                    <div className="action_2">
                      <div className="date_w">Sep 10, 2023</div>
                      <p className="comment_t">reply</p>
                    </div>
                  </div>
                  <div className="_w4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s,
                  </div>
                  <div className="border"></div>
                </div>
              </div>
              <div className="_2">
                <div className="avatar">
                  <Image
                    src="/profile.png"
                    alt="pro"
                    width={100}
                    height={100}
                    className="img_2"
                  />
                </div>
                <div className="comment_1">
                  <div className="_w1">
                    <h4 className="w_5">John Mars</h4>
                    <div className="action_2">
                      <div className="date_w">Sep 10, 2023</div>
                      <p className="comment_t">reply</p>
                    </div>
                  </div>
                  <div className="_w4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s,
                  </div>
                  <div className="border"></div>
                </div>
              </div>
              <div className="write_comment">
                <input type="text" placeholder="write comment..." />
                <button>
                  <BsFillSendFill />
                  Send
                </button>
              </div>
            </div>
            <div className="r">
              <figure>
                <CustomImage
                  img="/banner.jpeg"
                  alt="banner"
                  name="banner"
                  style={{ marginTop: "0" }}
                />
              </figure>
              <div className="save">
                <Content__1
                  img="/1-1.jpeg"
                  value="Scandinavian"
                  date="JUN 13, 2023"
                />
                <Content__1
                  img="/2-2.jpeg"
                  value="Favorite Sneakers"
                  date="JUN 13, 2023"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="lm">
          <span>Blog app</span>
          <p></p>
        </div>
        <div className="lm">
          <span className="ml">Customers</span>
          <ul>
            <li>buyer</li>
            <li>Supplier </li>
          </ul>
        </div>
        <div className="lm">
          <span className="ml">Company</span>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>careers</li>
          </ul>
        </div>
        <div className="lm">
          <span className="ml">Further Information</span>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="lm">
          <span className="ml">Social Media</span>
        </div>
      </div>
    </>
  );
}
