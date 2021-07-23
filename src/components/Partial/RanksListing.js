import React, { useState, useEffect } from "react";

import IconItem from "./IconItem";
import Select from "./Select";
import { getRanks } from "../../api/ranks";
import { SortBy } from "../../constants/enums";
import { getGrades, getMajors } from "../../api/BasicInfo";

function RanksListing({
  ItemComponent,
  title,
  fixSort,
  fixMajor,
  fixGrade,
  ListWrapper = React.Fragment,
  ItemBetween = React.Fragment,
  Allwrapper = React.Fragment,
  count = 10,
}) {
  const [ranks, setRanks] = useState([]);
  const [sortBy, setSortBy] = useState(fixSort ? fixSort : SortBy.score);
  const [Grade, setGrade] = useState(fixGrade ? fixGrade : undefined);
  const [Major, setMajor] = useState(fixMajor ? fixMajor : undefined);

  const [grades, setGrades] = useState([]);
  const [majors, setMajors] = useState([]);

  useEffect(() => {
    getGrades().then((g) => setGrades(g));
    getMajors().then((m) => setMajors(m));
  }, []);

  useEffect(() => {
    getRanks(Grade, Major, sortBy, count).then((r) => setRanks(r));
  }, [Grade, sortBy, Major, count]);

  return (
    <>
      <IconItem icon={"users"}>
        <h5>{title}</h5>
        {!fixSort && (
          <Select
            name="sortBy"
            values={SortBy}
            onChange={(sortBy) => setSortBy(sortBy)}
          />
        )}
        {!fixGrade && (
          <Select
            name="Grade"
            values={grades}
            onChange={(Grade) => setGrade(Grade)}
          />
        )}
        {!fixMajor && (
          <Select
            name="Major"
            values={majors}
            onChange={(Major) => setMajor(Major)}
          />
        )}
      </IconItem>
      <Allwrapper>
        <ItemBetween />
        <ListWrapper>
          {ranks.map((rank, index) => (
            <ItemComponent key={index} item={rank} index={index} />
          ))}
        </ListWrapper>
      </Allwrapper>
    </>
  );
}

export default RanksListing;
