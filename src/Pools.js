import { ConnectWallet } from '@thirdweb-dev/react';
import logo from './IMG/logo.png';
import './App.css';
import ethereum from './IMG/ethereum.png'
import polygon from './IMG/polygon.png'
import near from './IMG//near.png'
import fantom from './IMG/fantom.png'
import solana from './IMG/Solana2.png'
import eth from './IMG/eth.png'
import arbitrum from './IMG/arbitrum.png'
import bnb from './IMG/bnb.png'
import aave from './IMG/aave.png'
import ETH from './IMG/ethereum-eth-logo.png'
import telegram from './IMG/telegram.png'
import twitter from './IMG/twitter.png'
import medium from './IMG/medium.png'
import web from './IMG/web.png'
import swd from './IMG/ethereum-eth-logo.png'
import multichain from './IMG/multichain.png'
import handPicked from './IMG/hand-picked.png'
import reputationSystem from './IMG/reputation-system.png'
import fairness from './IMG/fairness.png'
import integratedVest from './IMG/inegrated-vesting.png'
import advanceFeatures from './IMG/advance-features.png'
import bglogo from './IMG/Logo2.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Pools = () => {
    const handleClick = (e) => {
        if (document.getElementsByClassName('show')) {
          let a = document.getElementsByClassName('show')[0]
          a?.classList?.remove('show')
        }
      }
      const handleCarousel = (e)=>{
        let a = document.getElementsByClassName('bn')
        for (let i = 0; i < a.length; i++) {
           if (e.target == a[i]) {
            a[i].classList.add('active')
          }else{
            a[i].classList.remove('active')
      
          }
        }
      }
  return (
    <div>
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
      <section className='pools pools2' id='pool'>
      <div className='container'>
        <div className='pools-heading'>
          <h3 className='mb-4 text-center'>POOLS</h3>
          <div className='row align-items-center row-cols-1 row-cols-lg-2 justify-content-start'>
          <div className='col col-xl-5'>
          <div className='btn-group'>
            <button onClick={handleCarousel} className='btn active bn'  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">Running</button>
            <button onClick={handleCarousel} className='btn bn' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" >Upcoming</button>
            <button onClick={handleCarousel} className='btn bn' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" >Ended</button>
          </div>
          </div>
          <div className='col'>
          <div className='row row-cols-1 row-cols-lg-2 align-items-center'>
            <div className='col col-lg-4 col-xl-3'>
            <div class="page">
  <div class="select-dropdown">
    <select>
      <option value="Solana">Solana</option>"
      <option value="Ethereum">Ethereum</option>
      <option value="Polygon">Polygon</option>
      <option value="BNB">BNB</option>
    </select>
  </div>
</div>
            </div>
            <div className='col'>
          <input type='search' placeholder='Search by NAME, TICKER' />
          </div>
          </div>
          </div>
          </div>
          
          
        </div>
        <div className='pools-content mt-4 text-start'>
          {/* <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4'>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
          </div> */}
          <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <h4 className='mb-4'>Running IDO<span className='fs-6'>s</span></h4>
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4'>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
          </div>
    </div>
    <div class="carousel-item">
    <h4 className='mb-4'>Upcoming IDO<span className='fs-6'>s</span></h4>

    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4'>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
          </div>
    </div>
    <div class="carousel-item">
    <h4 className='mb-4'>Ended IDO<span className='fs-6'>s</span></h4>
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4'>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={ETH} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between  mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 01, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>01 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
            <div className='col d-none d-md-inline'>
               <div className='pool-box'>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h4>Ethereum</h4>
                  <p className='small m-0'>ETH / USDT</p>
                </div>
                <div>
                    <div className='img-wrap2'>
                      <img src={swd} className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className='my-2'>
                  <img src={telegram} className='img-fluid p-links'/>
                  <img src={twitter} className='img-fluid p-links'/>
                  <img src={medium} className='img-fluid p-links'/>
                  <img src={web} className='img-fluid p-links'/>
                </div>
                <div className='d-flex justify-content-between mt-4 pt-xl-3'>
                  <p className='small'>Total raise:</p>
                  <p className='small'>$193006</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Starts:</p>
                  <p className='small'>Jan 05, 14:00 UTC</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>Price:</p>
                  <p className='small'>1 ETH = 2142.05 USDT</p>
                </div>
                <div>
                <p className='small mb-0'>0%</p>
                <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='small'>0 USDT</p>
                  <p className='small'>0 / 1 000 000 ETH</p>
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='small my-0'>Lisiting Time</p>
                  <p className='small my-0'>05 JAN</p>
                </div>
                <div>
                  <NavHashLink to="/token-presale#tokenmain"><button className='btn' type="submit">Enter Presale</button></NavHashLink>
                </div>
                </div>
               </div>
            </div>
          </div>
    </div>
  </div>
</div>
          <div className='row mt-5'>
            <div className='col d-flex justify-content-center'>
              <NavHashLink className='btn btn-v' to="/allpools#">View All <i class="bi bi-caret-right-fill"></i></NavHashLink>
            </div>
          </div>
        </div>
      </div>
      </section>
      <footer className='footer text-center'>
        <div className='container'>
          <div className='d-flex flex-lg-row flex-column align-items-center justify-content-between'>
            <NavHashLink to='/#'><img src={logo} alt='' className='img-fluid flogo' /></NavHashLink>
            <p className='small mx-md-5 mx-sm-3 mx-2 my-4 my-lg-0'>BonkPad provides a platform for early-stage projects to raise capital and launch their tokens. We offer a variety of services to help projects succeed, including token genration, marketing, and community building. We are commited to providing a safe and secure platform for projects  to launch their tokens.</p>
            <div className='links d-flex'>
            <a><i className='bi bi-telegram'></i></a>
            <a><i className='bi bi-twitter'></i></a>
            <a><i className='bi bi-medium'></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Pools
