import Image from "next/image";
import Link from "next/link";
export default function TredingBanner({ img, title, date, isActive }) {
  return (
    <div className="shortContent active ">
      <div className="content">
        <img
          src={img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="text">
        <Link href="" className="title">
          Best Day
        </Link>
        <p className="desc" style={{ marginTop: "5px" }}>
          Nov 17,2023
        </p>
      </div>
    </div>
  );
}
