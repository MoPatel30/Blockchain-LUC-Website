import React from 'react';
import '../education.css'


export class Education extends React.Component{
    render(){
        return(
            <div>
            
                <div id = "blockchain-section">
                    <h1 style = {{color: "#434343", fontSize:"2.5rem", textAlign: "center"}}> What is Blockchain? </h1>
                   
                    <p id = "text-style"> <strong>Blockchain is a distributed ledger that maintains a growing list of ordered records called blocks. A block is simply a record of a new transaction that is added to the blockchain if it has been verified.</strong></p>
                    <p id = "text-style"> Blockchain Technology has <strong>five</strong> key components:</p>
                    <p id = "text-style"> <strong>1.) Decentralized </strong>meaning there is no single authority in control of the blockchain. </p>
                    <p id = "text-style"> 2.)<strong> Public</strong> meaning anyone can access the blockchain.</p>
                    <p id = "text-style"> 3.) <strong>Secure</strong> meaning no single authority could exploit the blockchain.</p>
                    <p id = "text-style"> 4.) <strong>Consensus-model</strong> meaning transactions are legitimized by all participants of the blockchain.</p>
                    <p id = "text-style"> 5.) <strong>Instantaneous</strong> meaning all transactions on the blockchain are carried out rather quickly relative to traditional systems. </p>
                </div>


                <div id = "bitcoin-section">
                    <h1 style = {{color: "#434343", fontSize:"2.5rem", textAlign: "center"}}> What is Bitcoin? </h1>
                    
                    <p id = "text-style">  <strong>Bitcoin is a peer-to-peer electronic cash payments system with five key components:</strong> </p>
                    <p id = "text-style"> 1.) <strong>Decentralized</strong> meaning there is no single authority in control of the bitcoin network. </p> 
                    <p id = "text-style"> 2.) <strong>Pseudonymous</strong> meaning all transactions are done without giving up true identity/confidential information. </p>
                    <p id = "text-style"> 3.) <strong>Immutable</strong> meaning no transactions can be reversed. </p>
                    <p id = "text-style"> 4.) <strong>Limited supply</strong> meaning there will only ever be 21 million bitcoin. </p>
                    <p id = "text-style"> 5.) <strong>Public</strong> meaning every single transaction done on the bitcoin network is posted on a public ledger called the <strong>Blockchain</strong> which anyone can <a href="https://blockstream.info/" rel="noopener noreferrer" target = "_blank"> access</a>. </p>
                </div>

                <div id="more-information-resources-section">
                    <h1 style = {{color: "#434343", fontSize:"2.5rem", textAlign: "center", fontFamily: 'Open Sans Condensed'}}> Additional Resources </h1>

                    <h2 style = {{color: "#434343", fontSize:"2rem", textIndent: '20px', fontFamily: 'Open Sans Condensed'}}> Articles </h2>


                    <p><a href="https://blog.lopp.net/bitcoin-timestamp-security/" style = {{position: "relative", left: "25px"}} id="article-link-style">Bitcoin Timestamp Security </a></p>
                    <p><a href="https://nakamoto.com/what-are-the-key-properties-of-bitcoin/" style = {{position: "relative", left: "25px"}} id="article-link-style"> What are the Key Properties of Bitcoin? </a></p>
                    <p><a href="https://blog.lopp.net/who-controls-bitcoin-core-/" style = {{position: "relative", left: "25px"}} id="article-link-style"> Who Controls Bitcoin Core? </a></p>


                    <h2 style = {{color: "#434343", fontSize:"2rem", textIndent: '20px', fontFamily: 'Open Sans Condensed'}}> Videos </h2>
              

                    <iframe title = "btc video" id = "btc-video" src = "https://www.youtube.com/embed/SSo_EIwHSd4" style = {{ frameborder:"0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, allowfullscreen"}}></iframe>
                    <iframe title = "blockchain video" id = "blockchain-video" src = "https://www.youtube.com/embed/L-Qhv8kLESY" style = {{ frameborder:"0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, allowfullscreen"}}></iframe>
                </div>


            
            </div>


            
        )
    }
}


export default Education