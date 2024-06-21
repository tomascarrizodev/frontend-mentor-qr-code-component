import './Card.css'
import Title from '../Title'
import Description from '../Description'
import QR from '../../assets/images/image-qr-code.png'

const Card = () => {
  return (
    <>
      <div className="card">
        <img src={QR} alt='QR code to Frontend Mentor' className='img' />
        <div className='info'>
          <Title />
          <Description />
        </div>
      </div>
    </>
  )
}

export default Card