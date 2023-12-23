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
import { NavHashLink } from 'react-router-hash-link';
import { ConnectWallet } from '@thirdweb-dev/react';


const Staking = () => {
    const handleClick = (e) => {
        if (document.getElementsByClassName('show')) {
          let a = document.getElementsByClassName('show')[0]
          a?.classList?.remove('show')
        }
      }
  return (
    <div>
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
                            <ul class="navbar-nav mx-auto align-items-center">
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="/#" onClick={handleClick}>Home</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="/#pool" onClick={handleClick}>IDO</NavHashLink>
                                </li>
                                <li class="nav-item">
                                    <NavHashLink class="nav-link" to="#staking"
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
      <section className='staking head-stake' id='staking'>
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
        <p className='mt-4'>Staking Period : 30 Days</p>


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
        <p className='mt-4'>Staking Period : 30 Days</p>



</div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-4">
    <h2 class="accordion-header">
      <button className="d-flex accordion-button collapsed staking-card" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
        <p className='mt-4'>Staking Period : 30 Days</p>



</div>
      </div>
    </div>
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
    </div>
  )
}

export default Staking
