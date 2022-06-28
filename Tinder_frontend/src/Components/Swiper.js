import React from 'react';
import '../Style/Swiper.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';

import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function Swiper() {
  return (
    <div className='swiperbutton'> 
        <IconButton  className='swipeButton_repeat  A' ><ReplayIcon  className='B'  fontSize='large'/></IconButton>
        <IconButton  className='swipeButton_left  A'><CloseIcon  className='B' fontSize='large'/></IconButton>

        <IconButton  className='swipeButton_star  A'><StarRateIcon  className='B' fontSize='large'/></IconButton>

        <IconButton className='swipeButton_right A ' ><FavoriteIcon className='B' fontSize='large' /></IconButton>

        <IconButton  className='swipeButton_lightning  A'><FlashOnIcon className='B' fontSize='large' /></IconButton>

        

      
    </div>
  )
}

export default Swiper
