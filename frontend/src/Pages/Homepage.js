import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'

const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/yourinfuraid`)

const Homepage = () => {

  const [dbTableLength, setDbTableLength] = useState();
  const [length, setLength] = useState();

  const [dataToStoreInDB, setDataToStoreInDB] = useState();

  let tempLength = 0;

  const getDbTableLength = () => {
    axios.get('/api/data-count').then((response) => {

      const fetchedData = JSON.parse(JSON.stringify(response.data));

      fetchedData.count.map((e) => {
        setDbTableLength(e.COUNT);
      })

    });
  }


  //Contract Address
  const address = "0x16Cee43576F7B0fcA85EF4Dd75d3c527DD281544";

  const ERC721_ABI = [
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ]

  const contract = new ethers.Contract(address, ERC721_ABI, provider);

  const readEvent = async () => {

    const transferEvents = await contract.queryFilter('Transfer');

    console.log(transferEvents);

    setLength(transferEvents.length);

    setDataToStoreInDB(transferEvents);

  }

  useEffect(() => {
    getDbTableLength();
    readEvent();

  }, [])

  useEffect(() => {
    if (length > dbTableLength) {

      dataToStoreInDB.map((e, i) => {
        if (tempLength += i && tempLength > dbTableLength) {
          let body = { blockNumber: e.blockNumber, transactionHash: e.transactionHash, address: e.address };

          axios.post('/api/add-data', body)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        }
      })

    }
  }, [dbTableLength, length])

  return (
    <Fragment>
      <Header />
      <div className='mt-48'>
        <h1 className="text-center mt-24 mb-6 font-bold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">Tracks Events of Test Contract of <a href='https://moments-nft.vercel.app' target="_blank" rel='noopener noreferrer'><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400">Moments.NFT</span></a></h1>
        <p className="text-center text-lg font-normal text-gray-500 dark:text-gray-400 mb-8">Contract Address on EtherScan : <a href="https://rinkeby.etherscan.io/address/0x16cee43576f7b0fca85ef4dd75d3c527dd281544" target="_blank" rel="noopener noreferrer" className='underline underline-offset-8'>0x16cee43576f7b0fca85ef4dd75d3c527dd281544</a></p>


        <div className='mt-2 flex items-center justify-center'>

          <a href="https://github.com/neeraj-22/push-assignment" target="_blank" rel='noopener noreferrer' class="text-white bg-[#24292F] hover:bg-[#24292F]/90 bg-gradient-to-r from-gray-800 to-black font-medium cursor:pointer rounded-md text-xl px-24 py-6 text-center mb-4 inline-flex items-center mr-2">
            <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            View in Github
          </a>
          
        </div>
        <div>
          <p className="text-center text-lg font-normal text-gray-500 dark:text-gray-400 mb-8">Count : {length}</p>
          </div>
      </div>

      <Footer/>
    </Fragment>
  )
}

export default Homepage
