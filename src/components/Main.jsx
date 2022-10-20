import React from 'react';
import videoBg from '../assets/banner.mp4';

const Main = () => {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted ></video>
      <div className='content'>
        <h1>Время открытий!</h1>
        <p>Каждый третий продукт в подарок! Найди своих новых любимчиков от Riche!</p>
        <button className='button'>
          Перейти к акции
        </button>
      </div>
    </div>
  )
}

export default Main