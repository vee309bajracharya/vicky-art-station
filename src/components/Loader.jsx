import logo from '../assets/logo/vicky-art-station.svg'

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-white'>
        <img 
            src={logo} 
            alt="Vicky Art Station loader logo"
            className='w-52 h-52 animate-pulse' />
    </div>
  )
}

export default Loader