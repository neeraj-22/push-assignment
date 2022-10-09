<h2 align="center">
    <a href="https://moments-nft.vercel.app" target="blank_">
        <img height="100" alt="DAI Logo" src="https://cdn3d.iconscout.com/3d/premium/thumb/dai-5655814-4713527.png" />
    </a>
    <br>
    Push assignment - Solidity event tracker for DAI Token 
</h2>

The solidity event tracker currently listens to events emitted by the contract of DAI Token to the frontend using reactjs

## Features

- Events can be used to log transaction details to off-chain web-apps
- This can be used to make the UI interactive
- The emitted details are saved to MySql database and can be fetched via REST API route
- Infura is used as the node provider

## Screenshots

<p><i><b>Contract on Etherscan</b></i></p>

![Etherscan](https://user-images.githubusercontent.com/64327599/194762861-1bf62ce1-27f7-4d3f-89ac-c180d9e751b8.png)

<p><i><b>UseEffect Hook listens for all previous events and if the event count is greater than the rows of table then SQL insertion query is called for remaining unsaved event</b></i></p>

![Homepage](https://user-images.githubusercontent.com/64327599/194762671-97b72091-3e1a-4c6c-8920-37019252cd71.png)

<p><i><b>All the events stored in MySQL database are fetched to this route</b></i></p>

![FetchedData](https://user-images.githubusercontent.com/64327599/194762676-310bc339-d453-4694-ba6b-43db71857603.png)



## Future Updates

- Pulling this to the main contract
- Integrating PUSH protocol to notify when an event is emitted 
- Taking the RDBMS to cloud to make this webapp live

## Also Check

- [Demo Video →](https://drive.google.com/drive/folders/1IXHZ4SxS04WPz8ajWVx2q1A1rC4M0vx_?usp=sharing)
- [Notion Site →](https://proud-sunspot-cee.notion.site/PUSH-Assignment-f11b9d50aa1945c582bdfbf30d92a3f7)
