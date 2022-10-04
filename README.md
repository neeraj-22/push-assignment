<h2 align="center">
    <a href="https://moments-nft.vercel.app" target="blank_">
        <img height="100" alt="Moments.NFT" src="https://user-images.githubusercontent.com/64327599/193782755-a2b2b122-678d-420d-8044-3d3e95acf6cc.png" />
    </a>
    <br>
    Push assignment - Solidity event tracker for moments.NFT 
</h2>

The solidity event tracker currently listens to events emitted by an alt contract of moments.nft to the frontend using reactjs. This is further to be implemented on the main contract.

## Features

- Events can be used to log transaction details to off-chain web-apps
- This can be used to make the UI interactive
- The emitted details are saved to MySql database and can be fetched via REST API route
- Infura is used as the node provider

## Screenshots

<p><i><b>Contract on Etherscan</b></i></p>

![Etherscan](https://user-images.githubusercontent.com/64327599/193789859-df216b22-0d80-468a-a835-4f68dd46f45d.png)

<p><i><b>UseEffect Hook listens for all previous events and if the event count is greater than the rows of table then SQL insertion query is called for remaining unsaved event</b></i></p>

![Homepage](https://user-images.githubusercontent.com/64327599/193789830-a958534d-98ad-4116-a982-84a126b357af.png)

<p><i><b>All the events stored in MySQL database are fetched to this route</b></i></p>

![FetchedData](https://user-images.githubusercontent.com/64327599/193789848-5c667db0-7ff9-49e2-9b2b-50a837aa323a.png)



## Future Updates

- Pulling this to the main contract
- Integrating PUSH protocol to notify when an event is emitted 
- Taking the RDBMS to cloud to make this webapp live

## Also Check

- [Demo Video →](https://drive.google.com/drive/folders/1IXHZ4SxS04WPz8ajWVx2q1A1rC4M0vx_?usp=sharing)
- [Notion Site →](https://proud-sunspot-cee.notion.site/PUSH-Assignment-f11b9d50aa1945c582bdfbf30d92a3f7)
