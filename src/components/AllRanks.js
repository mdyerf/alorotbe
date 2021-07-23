import React from "react";

import RanksListing from "./Partial/RanksListing";

function AllRanks(props) {
  return (
    <div className="partial-container w-90">
      <RanksListing
        Allwrapper={({ children }) => (
          <table className="table table-striped">{children}</table>
        )}
        ItemComponent={({ item, index }) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.time}</td>
            <td>{item.test}</td>
            <td>{item.score}</td>
          </tr>
        )}
        ItemBetween={() => (
          <tr>
            <th>رتبه</th>
            <th>نام و نام خانوادگی</th>
            <th>ساعت مطالعه</th>
            <th>تعداد تست</th>
            <th>امتیاز</th>
          </tr>
        )}
        ListWrapper={({ children }) => <tbody>{children}</tbody>}
        count={100}
      />
    </div>
  );
}

export default AllRanks;
