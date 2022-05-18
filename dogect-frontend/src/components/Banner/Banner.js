import React from 'react'
import './Banner.css'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return (
    <div className='banner'>
      <div className='banner_info'>
      <Button className='banner_changePhoto' color='warning' outline>
        <FontAwesomeIcon icon={faPen} />
      </Button>
      </div>
    </div>
  )
}

export default Banner
