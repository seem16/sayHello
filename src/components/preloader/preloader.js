import './preloader.css'

let Preloader = () => {
  return (
    <div className='wrapper-preloader'>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader;