import React from "react";

function UserCard({ item, index }) {
  return (
    <div className="box-container user">
      <img
        alt="user-avatar"
        className="tiny-pic"
        width="80px"
        height="80px"
        src={item.picUri}
      />
      <h6>{index + 1}</h6>
      <h6>{item.name}</h6>
      <h6>{item.time}</h6>
      <h6>{item.test}</h6>
      <h6>{item.score}</h6>
    </div>
  );
}

export default UserCard;
