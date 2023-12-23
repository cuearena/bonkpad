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
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';

function App() {

  const navigate = useNavigate()

  const handleClick = (e) => {
    if (document.getElementsByClassName('show')) {
      let a = document.getElementsByClassName('show')[0]
      a?.classList?.remove('show')
    }
  }

  const handlePresale = () => {
    navigate('/token-presale#tokenmain')
  }

  const handleCarousel = (e)=>{
    let a = document.getElementsByClassName('bn')
    for (let i = 0; i < a.length; i++) {
      const element = a[i];   
      if (e.target == a[i]) {
        a[i].classList.add('active')
      }else{
        a[i].classList.remove('active')
  
      }
    }
  }

  
  return (
    <div className="App">
      <nav className="nav">
                <nav class="navbar bg-dark navbar-expand-lg fixed-top shadow" data-bs-theme="dark">
                    <div class="container">
                    <NavHashLink class="navbar-brand" to="/#"><img src={logo}
                                className='img-fluid logo'/></NavHashLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navb navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                    <NavHashLink class="nav-link" to="/#" onClick={handleClick}>Home</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="#pool" 
                                    onClick={handleClick}>IDO</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="/staking/#staking"
                                    onClick={handleClick}>Staking</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="#feature"
                                     onClick={handleClick}>Features</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="#tokenomics"
                                     onClick={handleClick}>Tokenomics</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="#roadmap"
                                     onClick={handleClick}>Roadmap</NavHashLink>
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
      <section className='hero'>
        <div className='container'>
          <div className='hero-content text-center text-lg-start'>
          <div className='row row-cols-1 row-cols-lg-2 align-items-center'>
            <div className='col order-2 order-lg-1'>
            <h1>Safest Launchpad.</h1>
          <h1>Multi Chain.</h1>
          <h1>Promising Projects.</h1>
          <p>First Community Driven Memepad on Solana. Inspired by Bonk Inu.</p>
            <button className='btn btn-dark buy-btn'>Chart</button>
            <button className='btn btn-dark buy-btn'>WhitePaper</button>

            </div>
            <div className='col order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end'>
              <img src={bglogo} className='img-fluid bglogo' />
            </div>
          </div>

          <div className='extras d-flex flex-column flex-sm-row align-items-center align-items-sm-start mt-4'>
            <div className='d-none'>
            <a><i className='bi bi-telegram'></i></a>
            <a><i className='bi bi-twitter'></i></a>
            <a><i className='bi bi-medium'></i></a>
            </div>
          </div>
          </div>
          <div className='stats'>
            <div className='row row-cols-md-3 row-cols-sm-2 row-cols-1'>
              <div className='col'>
                <div className='stat-box'>
                  <h2>$ 23.07M</h2>
                  <p>RAISED CAPITAL</p>
                </div>
              </div>
              <div className='col'>
                <div className='stat-box mt-4 mt-sm-0'>
                  <h2>123+</h2>
                  <p>LAUNCHED PROJECTS</p>
                </div>
              </div>
              <div className='col mx-auto mt-4 mt-md-0'>
                <div className='stat-box'>
                  <h2>$ 181.63M</h2>
                  <p>PROJECT VOLUME (1M)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='supported-chain'>
        <div className="container">
          <div className='supported-heading'>
            <h5>SUPPORTED BLOCKCHAINS</h5>
          </div>
          <div className='supported-content'>
            <div className='img-wrap'>
              <img src={polygon} className='img-fluid'/>
            </div>
            <div className='img-wrap'>
              <img src={aave} className='img-fluid'/>
            </div>
            <div className='img-wrap'>
              <img src={fantom} className='img-fluid'/>
            </div>
            <div className='img-wrap'>
              <img src={near} className='img-fluid'/>
            </div>
            <div className='img-wrap'>
              <img src={arbitrum} className='img-fluid'/>
            </div>
            <div className='img-wrap'>
              <img src={solana} className='img-fluid'/>
            </div>
            <div className='img-wrap'>
              <img src={bnb} className='img-fluid'/>
            </div>
            <div className='img-wrap'>
              <img src={eth} className='img-fluid'/>
            </div>
          </div>
        </div>
      </section>
      <section className='token-sale text-center'>
      <div className='container'>
        <div className='token-heading'>
          <h3>Token Sale Launchpad</h3>
          <p className='my-4'>Community can select the project they want to invest. Community is the king</p>
          <button className='btn btn-dark join-btn'>
            Join Now
          </button>
        </div>
      </div>
      </section>
      <section className='pools' id='pool'>
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
      {/* <section className='staking' id='staking'>
        <div className='container'>
          <div className='staking-heading text-center'>
            <h3>Staking</h3>
          </div>
          <div className='staking-content mt-4 mx-1'>
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="d-flex accordion-button collapsed staking-card" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <div className='d-flex w-100'>

      <div className='img-wrap3 me-4'>
                <img src={ETH} className='img-fluid' />
              </div>
              <div className='w-75'>
                <div className='d-flex justify-content-between'>
                <div>
                <h5>ETH STAKING</h5>
                <p className='small'>ETH-BNB / ETH</p>
                </div>
                </div>
                <div className='d-flex justify-content-between flex-column flex-sm-row mt-3 align-items-start align-items-sm-center'>
                <div className='my-2'>
                  <h5>0 lp</h5>
                  <p className='small'>Staked</p>
                </div>
                <div className='my-2'>
                  <h5>0.00 lty</h5>
                  <p className='small'>Earned</p>
                </div>
                <div className='my-2'>
                  <h5>133%</h5>
                  <p className='small'>APR</p>
                </div>
                <div className='my-2'>
                  <h5>$0.0261</h5>
                  <p className='small'>LP Price</p>
                </div>
                <div className='my-2'>
                  <h5>$4300.82</h5>
                  <p className='small'>Total value locked</p>
                </div>
                </div>
                </div> 
      </div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className='row'>

        <div className='col-sm'>
          <h5>DEPOSIT</h5>
          <div className='position-relative d-inline'>
          <input type='number' placeholder='0' className='deposit' />
          <button className='btn approve-btn'>Approve</button>
          </div>
        </div>
        <div className='col-sm ms-lg-4 mt-4 mt-sm-0'>
          <h5>WITHDRAW</h5>
          <div className='position-relative d-inline'>
          <input type='number' placeholder='0' className='deposit' />
          <button className='btn approve-btn'>Withdraw</button>
          </div>
        </div>
        <div className='col my-auto'>

        <div className='d-flex align-items-center justify-content-between mt-4 mt-lg-0 ms-lg-4'>
        <div className='text-start'>
          <h5>pending rewards</h5>
          <span className='sp1'>0.00 ETH</span><br/>
        </div>
        <div>
          <button className='btn btn-claim me-xl-5 me-lg-3 me-md-5'>Claim</button>
        </div>
        </div>
        </div>


      </div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-4">
    <h2 class="accordion-header">
      <button className="d-flex accordion-button collapsed staking-card" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className='d-flex w-100'>
              <div className='img-wrap3 me-4'>
                <img src={swd} className='img-fluid' />
              </div>
              <div className='w-75'>
                <div className='d-flex justify-content-between'>
                <div>
                <h5>ETH STAKING</h5>
                <p className='small'>ETH-BNB / ETH</p>
                </div>
                </div>
                <div className='d-flex justify-content-between flex-column flex-sm-row mt-3 align-items-start align-items-sm-center'>
                <div className='my-2'>
                  <h5>0 lp</h5>
                  <p className='small'>Staked</p>
                </div>
                <div className='my-2'>
                  <h5>0.00 lty</h5>
                  <p className='small'>Earned</p>
                </div>
                <div className='my-2'>
                  <h5>173%</h5>
                  <p className='small'>APR</p>
                </div>
                <div className='my-2'>
                  <h5>$1.4574</h5>
                  <p className='small'>LP Price</p>
                </div>
                <div className='my-2'>
                  <h5>$9302.61</h5>
                  <p className='small'>Total value locked</p>
                </div>
                </div>
                </div>  
                </div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className='row'>

<div className='col-sm'>
  <h5>DEPOSIT</h5>
  <div className='position-relative d-inline'>
  <input type='number' placeholder='0' className='deposit' />
  <button className='btn approve-btn'>Approve</button>
  </div>
</div>
<div className='col-sm ms-lg-4 mt-4 mt-sm-0'>
  <h5>WITHDRAW</h5>
  <div className='position-relative d-inline'>
  <input type='number' placeholder='0' className='deposit' />
  <button className='btn approve-btn'>Withdraw</button>
  </div>
</div>
<div className='col my-auto'>

<div className='d-flex align-items-center justify-content-between mt-4 mt-lg-0 ms-lg-4'>
<div className='text-start' >
  <h5>pending rewards</h5>
  <span className='sp1'>0.00 ETH</span><br/>
</div>
<div>
  <button className='btn btn-claim me-xl-5 me-lg-3 me-md-5'>Claim</button>
</div>
</div>
</div>


</div>
      </div>
    </div>
  </div>
</div>
          </div>
          <div className='row mt-4'>
            <div className='col d-flex justify-content-center'>
              <button className='btn'>View All <i class="bi bi-caret-right-fill"></i></button>
            </div>
          </div>
        </div>
      </section> */}
      <section className='features' id='feature'>
      <div className='container'>
        <div className='features-heading text-center'>
        <h3>Features</h3>
          <p className='my-4'>Smart Launchpad with AI implementation and DeFi focus.</p>
        </div>
        <div className='features-content'>
          <div className='row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3'>
            <div className='col'>
              <div className='feature-box text-center'>
                <div className='img-wrap5'>
                  <img src={multichain} />
                </div>
                <h5 className='my-md-4 my-3'>Multi-chain, flexible options</h5>
                <p className='small'>BonkPad offers one of the most diverse forms of blockchain support, aiming to create a one-stop location for both invetors and startups. We currently supports the following chains: Solana, Ethereum, BSC, Polygon, Avalanche, and all EVM compatible chains.</p>
              </div>
            </div>
            <div className='col'>
              <div className='feature-box text-center'>
                <div className='img-wrap5'>
                  <img src={handPicked} />
                </div>
                <h5 className='my-md-4 my-3'>Hand-Picked Projects</h5>
                <p className='small'>We hand-pick projects cautiously, scrutinize and verify the project team’s origin and legitimacy, innovation of idea, and their capacity to execute their vision.</p>
              </div>
            </div>
            <div className='col'>
              <div className='feature-box text-center'>
                <div className='img-wrap5'>
                  <img src={reputationSystem} />
                </div>
                <h5 className='my-md-4 my-3'>Reputation System</h5>
                <p className='small'>Our loyal members can earn incentives in the form of BonkPad points from our Reputation system for every BonkPad placed in addition to the benefits of participating in profitable token sales and earning APY from the staking mechanism.</p>
              </div>
            </div>
            <div className='col'>
              <div className='feature-box text-center'>
                <div className='img-wrap5'>
                  <img src={fairness} />
                </div>
                <h5 className='my-md-4 my-3'>fairness</h5>
                <p className='small'>We understand that opportunities should be delivered fairly and efficiently. BonkPad lane-based swap system ensures everybody has a chance to join accordingly based on their tier without having to resort to gas war.</p>
              </div>
            </div>
            <div className='col'>
              <div className='feature-box text-center'>
                <div className='img-wrap5'>
                  <img src={integratedVest} />
                </div>
                <h5 className='my-md-4 my-3'>Integrated-vesting schedule</h5>
                <p className='small'>BonkPad goes with a Distribution Portal for projects to vest their sold tokens. This feature can also be used for pre-sale or post-sale secondary offerings.</p>
              </div>
            </div>
            <div className='col'>
              <div className='feature-box text-center'>
                <div className='img-wrap5'>
                  <img src={advanceFeatures} />
                </div>
                <h5 className='my-md-4 my-3'>advanced features</h5>
                <p className='small'>BonkPad constantly places a high priority on safeguarding and preserving the benefits of users with an appropriate refund policy. In the future, BonkPad will continuously develop top-notch features like project incubation, DAO model application, AI technologies, and many more to deliver robust user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className='Tokenomics' id='tokenomics'>
      <div className='container'>
        <div className='tokenomics-heading text-center'>
        <h3>Tokenomics</h3>
        </div>
        <div className='toeknomics-content'>
        <div className='row row-cols-1 row-cols-xl-2 mt-5'>
          <div className='col'>
          <div className='inbo'>
          <h4>Token Details</h4>
          <table className='mt-4'>
          <tr>
            <td>Token Supply:</td>
            <td className='ae'>600M</td>
          </tr>
          <br/>
          <tr>
            <td>Token Sale:</td>
            <td className='ae'>40%</td>
          </tr>
          <br/>

          <tr>
            <td>Treasury:</td>
            <td className='ae'>10%</td>
          </tr>
          <br/>

          <tr>
            <td>Marketing:</td>
            <td className='ae'>10%</td>
          </tr>
          <br/>

          <tr>
            <td>Team:</td>
            <td className='ae'>10%</td>
          </tr>
          <br/>

          <tr>
            <td>Liquidity:</td>
            <td className='ae'>30%</td>
          </tr>
        </table>
          </div>
          </div>
          <div className='col mt-5 mt-xl-0'>
          <div className='inbo'>
          <h4>Allocation Distribution</h4>
          <table className='mt-4'>
          <tr>
          <td><h4>Bonk Voyagers</h4></td>
          </tr>
          <tr>
            <td>BPAD Required Tokens:</td>
            <td className="ae">10000</td>
          </tr>
          <tr>
            <td>Pool Weight:</td>
            <td className="ae">100</td>
          </tr>
          <tr>
            <td>Guaranteed Allocation:</td>
            <td className="ae">Yes</td>
          </tr>
          <br />
          <tr>
          <td><h4>Bonk Elites</h4></td>
          </tr>
          <tr>
            <td>Tokens:</td>
            <td className="ae">69000</td>
          </tr>
          <tr >
            <td>Pool Weight:</td>
            <td className="ae">100</td>
          </tr>
          <tr>
            <td>Guaranteed Allocation:</td>
            <td className="ae">Yes</td>
          </tr>
          <br />
          <tr>
          <td><h4>Bonk Royalty</h4></td>
          </tr>
          <tr>
            <td>Tokens:</td>
            <td className="ae">420000</td>
          </tr>
          <tr>
            <td>Pool Weight:</td>
            <td className="ae">100</td>
          </tr>
          <tr>
            <td>Guaranteed Allocation:</td>
            <td className="ae">Yes</td>
          </tr>
          <br />
          <tr>
            <td>Fcds Round:</td>
            <td className="ae">Remained tokens no staking.</td>
          </tr>
        </table>
        </div>
          </div>
        </div>
        </div>
      </div>
      </section>
      <section className='roadmap' id='roadmap'>
      <div className='container'>
        <div className='roadmap-heading text-center'>
        <h3>Roadmap</h3>
        </div>
        <div className='roadmap-content'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-xl-4 mt-5'>
          <div className='col'>
          <div className='inbo2'>
          <h4>Phase 1</h4>
          <table className='mt-4'>
          <tr>
            <td>1. ⁠Building a collaborative team and forming strategic partnerships</td>
          </tr>
          <tr>
            <td>2. Detailed documentation</td>
          </tr>
          <tr>
            <td>3. A comprehensive roadmap</td>
          </tr>
          <tr>
            <td>4. An equitable token distribution plan</td>
          </tr>
          <tr>
            <td>5. ⁠Launchpad Live</td>
          </tr>
          <tr>
            <td>6. TGE event and Exchange listing</td>
          </tr>
        </table>
          </div>
          </div>
          <div className='col mt-4 mt-md-0'>
          <div className='inbo2'>
          <h4>Phase 2</h4>
          <table className='mt-4'>
          <tr>
            <td>1. Implementing staking for BonkPad tokens</td>
          </tr>
          <tr>
            <td>2. Listing on CoinMarketCap (CMC) and CoinGecko (CG)</td>
          </tr>
          <tr>
            <td>3. Launching unique and impactful marketing initiatives</td>
          </tr>
        </table>
          </div>
          </div>
          <div className='col mt-4 mt-xl-0'>
          <div className='inbo2'>
          <h4>Phase 3</h4>
          <table className='mt-4'>
          <tr>
            <td>1. Releasing a limited series of exclusive Non-Fungible Tokens (NFTs)</td>
          </tr>
          <tr>
            <td>2. Conducting the inaugural token sale on the BonkPad platform</td>
          </tr>
        </table>
          </div>
          </div>
          <div className='col mt-4 mt-xl-0'>
          <div className='inbo2'>
          <h4>Phase 4</h4>
          <table className='mt-4'>
          <tr>
            <td>1. Broadening the network of partnerships</td>
          </tr>
          <tr>
            <td>2. Updating the project roadmap</td>
          </tr>
        </table>
          </div>
          </div>
        </div>
        </div>
      </div>
      </section>
      <section className='faq' id='faq'>
        <div className='container'>
          <div className='faq-heading text-center'>
            <h3>FAQ<span className='fs-6'>s</span></h3>
          </div>
          <div className='faq-content mt-4'>
          <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        HOW DO I PARTICIPATE IN IDO ?</button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Step 1. Go to "IDO Staking" page
Step 2. Connect your wallet
Step 3. Stake enough Bonkpad to get one of the levels. You can see the required amount to stake in the list of levels
Step 4. Register for an IDO you want to participate in. When IDO registration period starts (usually 24h before the IDO start), you need to open the Pools page and click the "Register" button in an IDO pool card.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        WHAT ARE THE STEPS OF AN IDO ?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p> 1. IDO registration opens 48 hours before the IDO sale start
2. Registration closes 4 hours before the sale start
3. Lottery levels winners and whitelist winners are picked. They can be seen on the pool page.
4. Base allocation is calculated. It depends on the number of participants and ensures that there are enough tokens for guaranteed allocation.
5. IDO sale starts, registered participants with guaranteed allocation, lottery and whitelist winners are allowed to fund their allocations in the pool.
6. FCFS round starts 20 minutes before the sale end
7. Once the sale is finished, we collect the allocations data. The token distribution and listing information can be found on the BonkPad Announcements Telegram channel or in project's socials.</p>
      
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        DO I NEED TO UNSTAKE / RESTAKE FOR EACH IDO ?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>No. You are eligible for any IDOs as long as your BonkPad remain staked. The amount staked will be matched to the current level system.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        CAN I UNSTAKE AFTER EACH IDO ?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Once you stake your tokens, they are locked. The lock period depends on the specific pool you staked in: There are pools from 7 to 1095 days.

Pool "7 days" are re-locked every time you register for a sale.

You can still unstake early, but with a 40% fee.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        DO I HAVE TO REGISTER FOR EACH IDO ?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Yes. This way we can ensure only stakers who want to participate are considered for base allocation calculation. This gives a better, bigger allocation for participants.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
       WHEN WILL I FIND OUT ABOUT MY ALLOCATION ?
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Allocations will only be calculated and released shortly after the registration period end. The amount you will receive depends on the number of participants and the amount raised by the pool originator.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
       HOW LONG DO I HAVE TO FUND MY IDO ALLOCATION ?
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>The time depends on pool originators, you can see the timeline for registration start/end, sale start/end and FCFS period start on the pool page.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
       WHAT CAN I FUND MY ALLOCATION WITH ?
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Most of the time it's USDT. You can see the pair (for example "BonkPad / USDT") under the pool title.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
       HOW CAN I FIND THE TOKEN ADDRESS FOR THE PROJECT I JUST INVESTED IN ?
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Generally, the official address will be shared by the respective projects. Also, you can see it on the pool page (you might need to refresh the page), as soon as BonkPad team receives this information.</p></div>
    </div>
  </div>
  
</div>
          </div>
        </div>
      </section>
      <section className='launch-project text-center'>
      <div className='container'>
        <div className='launch-heading'>
          <h3>WANT TO LAUNCH YOUR PROJECT ON BONKPAD ?</h3>
          <button className='btn btn-dark apply-btn mt-4'>
            APPLY FOR LAUNCH
          </button>
        </div>
      </div>
      </section>
      <footer className='footer text-center'>
        <div className='container'>
          <div className='d-flex flex-lg-row flex-column align-items-center justify-content-between'>
            <a href='#'><img src={logo} alt='' className='img-fluid flogo' /></a>
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
  );
}

export default App;
