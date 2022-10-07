//Importing Modules
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

//Importing Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Showdatafromdb = () => {

  const [dbData, setDbData] = useState();

  useEffect(() => {
    axios.get(`/api/fetch-data`).then((response) => {

      // const testData = response.json();

      const fetchedData = JSON.parse(JSON.stringify(response.data));

      console.log(fetchedData)
      // setDbData(fetchedData.json())

      setDbData(fetchedData.data);

    });
    // eslint-disable-next-line
  }, [])

  // console.log(dbData)
  return (
    <Fragment>
      <Header />

      {/* Table */}
      <div className="overflow-x-auto relative mt-28">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-yellow-100 to-yellow-200 dark:text-gray-400">
            
            <tr>
              <th scope="col" className="py-3 px-6">
                Block Height
              </th>
              <th scope="col" className="py-3 px-6">
                Data Hash
              </th>
              <th scope="col" className="py-3 px-6">
                Time
              </th>
            </tr>
            
          </thead>

          {/* eslint-disable-next-line */}
          {dbData ?
            (
              <tbody>
                {dbData.map((e, i) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {e.BlockHeight}
                    </th>
                    <td className="py-4 px-6">
                      <span className="underline underline-offset-2">{e.Data}</span>
                    </td>
                    <td className="py-4 px-6">
                      {e.Time}
                    </td>
                  </tr>
                ))}
              </tbody>
            )
            :
            <tbody>
            "Loading.."
            </tbody>

          }
        </table>
      </div>


<Footer/>
    </Fragment>
  );
};

export default Showdatafromdb;
