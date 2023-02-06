import React from 'react'
import icon_eq from './assets/icon-ethereum.svg'
import icon_clock from './assets/icon-clock.svg'
import icon_view from './assets/icon-view.svg'
import avatar from './assets/image-avatar.png'

export const App = () => (
  <div className='bg-darkbluecard rectangle p-6 rounded-lg'>
    <div className='rectangle-2 bg-center bg-origin-border bg-cover mb-6 rounded-sl' id='invisible-man'>
      <div className="w-full h-full grid place-items-center rounded-sl bg-cyan-transparent cursor-pointer"><img src={icon_view} alt="Icone de visualização da pagina" /></div>
    </div>

    <div className='font-Outfit font-semibold text-2xl mb-5 cursor-pointer hover:text-cyan'>Equilibrium #3429</div>

    <div className='text-soft-blue font-Outfit font-light text-lg mb-5'>Our Equilibrium collection promotes  balance and calm.</div>

    <div className="flex justify-between mb-5">
      <div className='flex gap-2 grid-rows-2 place-items-center'>
        <img className='max-h-18px' src={icon_eq} alt="Icone da moeda digital ethereum" /> 
        <span className='font-Outfit font-semibold font-lg text-cyan'>0.241 ETH</span>
      </div>

      <div className='flex gap-2 grid-rows-2 place-items-center'>
        <img className='max-h-18px' src={icon_clock} alt="Icone de um relogio" width='16px' height='16px' /> 
        <span className='font-Outfit font-light font-lg text-soft-blue'>3 days left</span>
      </div>
    </div>

    <hr className='text-soft-blue mb-3' />

    <div className="flex gap-2 grid-rows-2 place-items-center">
      <img className='rounded-full border border-white' width='35px' height='35px' src={avatar} alt="Foto de uma pessoa" />
      <span className='font-Outfit font-semibold font-lg'><span className="text-soft-blue">Creation of</span> <span className="text-white cursor-pointer hover:text-cyan">Jules Wyvern</span></span>
    </div>
  </div>

);

export default App

