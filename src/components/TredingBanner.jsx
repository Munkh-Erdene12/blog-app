import Image from "next/image";
import Link from "next/link";
export default function TredingBanner({ img, title, date, isActive }) {
  return (
    <div className="shortContent active ">
      <div className="content"></div>
      <div className="text">
        <Link href="" className="title">
          Best Day
        </Link>
        <p className="desc">Nov 17,2023</p>
      </div>
    </div>
  );
}
