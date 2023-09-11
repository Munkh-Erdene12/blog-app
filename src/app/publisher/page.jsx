"use client";
import React from "react";
import Image from "next/image";
import PublisherList from "../../components/PublisherList";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Page() {
  const [state, setState] = React.useState([]);
  const [id, setid] = React.useState(Number);
  const [refresh, setRefresh] = React.useState(Number);
  React.useEffect(() => {
    fetch("/api/admin/category")
      .then((data) => data.json())
      .then((response) => {
        setState(response.categories);
      });
  }, [refresh]);
  return (
    <div
      className="main_1"
      onClick={() => {
        setRefresh(1);
      }}
    >
      <div className="left">
        <ul>
          <PublisherList
            value="Content"
            style={{
              borderBottom: "1px solid #3F4349",
              width: "100%",
              borderRadius: "0",
              paddingLeft: "38px",
            }}
          ></PublisherList>
          {state.map((el) => (
            <PublisherList
              key={el.id}
              value={el.name}
              onClick={() => setid(el.categoryID)}
              icon={<MdOutlineKeyboardArrowRight />}
            />
          ))}
        </ul>
      </div>
      <div className="right">{id > 0 && <div className="write"></div>}</div>
    </div>
  );
}
