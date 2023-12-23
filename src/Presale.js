import React from "react";
import ETH from "./IMG/ethereum-eth-logo.png";
import { NavHashLink } from "react-router-hash-link";
import logo from "./IMG/logo.png";
import ethereum from "./IMG/ethereum.png";
import { ConnectWallet } from "@thirdweb-dev/react";

const Presale = () => {
  const handleClick = (e) => {
    if (document.getElementsByClassName("show")) {
      let a = document.getElementsByClassName("show")[0];
      a?.classList?.remove("show");
    }
  };

  return (
    <div id="tokenmain">
           <nav className="nav">
                <nav class="navbar bg-dark navbar-expand-lg fixed-top shadow" data-bs-theme="dark">
                    <div class="container">
                        <NavHashLink class="navbar-brand" to="/#"><img src={logo}
                                className='img-fluid logo'/></NavHashLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navb navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav mx-auto align-items-center">
                            <li class="nav-item">
                                    <NavHashLink class="nav-link" to="/#" onClick={handleClick}>Home</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="/#pool" onClick={handleClick}>IDO</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="/staking#staking"
                                    onClick={handleClick}>Staking</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" 
                                     onClick={handleClick} to="/#feature">Features</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" 
                                     onClick={handleClick} to="/#tokenomics">Tokenomics</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" 
                                     onClick={handleClick} to="/#roadmap">Roadmap</NavHashLink>
                                </li>
                            </ul>
                            <div className='btn-grp'>
                            <ConnectWallet className='btn wallet-connect btn-primary'>Connect Wallet</ConnectWallet>
                            <button className='btn chain btn-primary ms-lg-auto d-none d-lg-inline'><img className='img-fluid' src={ethereum} /></button>
                            </div>
                        </div>
                    </div>
                </nav>
      </nav>
      <div className="token-pg">
        <div className="container">
          <div className="token-content">
            <div className="t-box">
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <div className="head-dd d-flex  justify-content-between justify-content-lg-auto align-items-center">
                  <div className="img-wrapup">
                    <img src={ETH} className="img-fluid" />
                  </div>
                  <div className="ms-lg-5 ms-auto mt-3">
                    <h4>Ethereum</h4>
                    <p>ETH / USDT</p>
                  </div>
                </div>
                <div className="t-boxd2 d-flex flex-column flex-md-row justify-content-lg-around justify-content-between w-100 ms-lg-3 mt-3">
                  <div className="mt-3 mt-md-1">
                    <h4>Total Supply</h4>
                    <p>1,000,000 ETH</p>
                  </div>
                  <div className="mt-3 mt-md-1">
                    <h4>FDV</h4>
                    <p>30M USD</p>
                  </div>
                  <div className="mt-3 mt-md-1">
                    <h4>Initial Supply</h4>
                    <p>1,300,000 ETH</p>
                  </div>
                  <div className="mt-3 mt-md-1">
                    <h4>Initial Market Cap</h4>
                    <p>6.48M USD</p>
                  </div>
                </div>
              </div>
              <div className="do-box mt-4">
                <p>
                  Ethereum is a revolutionary project that aims to create a
                  decentralized platform for social media, content creation, and
                  monetization. By using blockchain technology, ethereum
                  empowers users to own their data, control their privacy, and
                  earn rewards for their contributions.
                </p>
                <div className="socials">
                    <a href="https://twitter.com/home"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="https://web.telegram.org/k/"><i class="fa-brands fa-telegram"></i></a>
                    <a href="https://discord.com/"><i class="fa-brands fa-discord"></i></a>
                    <a href="https://medium.com/"><i class="fa-brands fa-medium"></i></a>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row">
            <div className="inbo3 mt-5 me-lg-5">
              <h4>Project Details</h4>
              <table className="mt-4">
                <tr>
                  <td>Opens: </td>
                  <td className="ae">2021-12-23 09:00:00 UTC</td>
                </tr>
                <tr>
                  <td>FCFS Opens: </td>
                  <td className="ae">2021-12-23 13:05:00 UTC
</td>
                </tr>
                <tr>
                  <td>Closes: </td>
                  <td className="ae">2021-12-23 14:20:00 UTC
</td>
                </tr>
                <tr>
                  <td>Cap: </td>
                  <td className="ae">350000 USDT
</td>
                </tr>
                <tr>
                  <td>Total Users Participated	</td>
                  <td className="ae">1405</td>
                </tr>
                <tr>
                  <td>Total Funds Swapped</td>
                  <td className="ae">350026.6342 USDT</td>
                </tr>
              </table>
            </div>
            <div className="inbo3 mt-5">
              <label><h4>Enter Amount</h4></label><br />
              <input className="inputt" />
              <div className="d-flex">
                <button className="btn btn-per">10%</button>
                <button className="btn btn-per ms-2">25%</button>
                <button className="btn btn-per ms-2">50%</button>
                <button className="btn btn-per ms-2">100%</button>
              </div>
              <div className="d-flex">
              <button className="btn btn-ap">APPROVE</button>
              <button className="btn btn-st ms-2">STAKE</button>
              </div>
              <div className="mt-4">
                <p>Fee : 10USDT</p>
                <p>Min. Allocation : 100 USDT</p>
                <p>Max. Allocation : 1,000,000 USDT</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer text-center'>
        <div className='container'>
          <div className='d-flex flex-lg-row flex-column align-items-center justify-content-between'>
          <NavHashLink to='/#'><img src={logo} alt='' className='img-fluid flogo' /></NavHashLink>
            <p className='small mx-md-5 mx-sm-3 mx-2 my-4 my-lg-0'>BonkPad provides a platform for early-stage projects to raise capital and launch their tokens. We offer a variety of services to help projects succeed, including token genration, marketing, and community building. We are commited to providing a safe and secure platform for projects  to launch their tokens.</p>
            <div className='links d-flex justify-content-center'>
            <a><i className='bi bi-telegram'></i></a>
            <a><i className='bi bi-twitter'></i></a>
            <a><i className='bi bi-medium'></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Presale;
