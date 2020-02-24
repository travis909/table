import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "./components/table.js";
import "./App.css";

let App = () => {
  const columns = useMemo(
    () => /*const new2 = (x) => { return [{Header: x}, {accessor: 'item.'+x}] }*/
    // let i = ['header1', 'header2', ...]
    //let j = i.map(new2)
    //columns j
    [
      {
        Header: "Name",
        accessor: "show.name"
      },
      {
        Header: "Type",
        accessor: "show.type"
      },
      {
        Header: "Language",
        accessor: "show.language"
      },
      {
        Header: "Status",
        accessor: "show.status"
      }
    ],[]
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <TableComponent columns={columns} data={data} />
    </div>
  );
}

export default App;
