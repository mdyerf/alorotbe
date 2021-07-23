import React, { useState } from "react";

import RanksListing from "./Partial/RanksListing";
import { getUser } from "../api/auth";
import UserCard from "./Partial/UserCard";
import { getGrades, getMajors } from "../api/BasicInfo";

function Ranks(props) {
  let user = getUser();

  const [grade, setGrade]= useState(0);
  const [major, setMajor]= useState(0);

  getMajors().then(m => setMajor(m.find(e => e.id === user.major).value));
  getGrades().then(g => setGrade(g.find(e => e.id === user.grade).value));

  return (
    <div className="partial-container w-90">
      <RanksListing
        ItemComponent={({ item, index }) => <UserCard key={index} index={index} item={item} />}
        fixGrade={grade}
        fixMajor={major}
        title={`نفرات برتر ${grade} ${major} | `}
        ListWrapper={({ children }) => (
          <div className="user-container">{children}</div>
        )}
      />
    </div>
  );
}

export default Ranks;
