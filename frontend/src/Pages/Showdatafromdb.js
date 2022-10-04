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

  console.log(dbData)
  return (
    <Fragment>
      <Header />

      {/* Table */}
      <div className="overflow-x-auto relative mt-28">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-gray-200 to-gray-300 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Block Height
              </th>
              <th scope="col" className="py-3 px-6">
                Txn Hash
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
            </tr>
          </thead>

          {dbData ?
            (
              <tbody>
                {dbData.map((e, i) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {e.BlockHeight}
                    </th>
                    <td className="py-4 px-6">
                      <a href={`https://rinkeby.etherscan.io/tx/${e.TxnHash}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{e.TxnHash}</a>
                    </td>
                    <td className="py-4 px-6">
                      {e.Address}
                    </td>
                  </tr>
                ))}
              </tbody>
            )
            :
            "Loading.."
          }
        </table>
      </div>


<Footer/>
    </Fragment>
  );
};

export default Showdatafromdb;
