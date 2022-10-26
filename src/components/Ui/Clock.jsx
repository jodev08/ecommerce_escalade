import React, {useEffect,useState, useRef} from 'react'

const Clock = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

   let interval = useRef();

   const startTimer = () => {
      const countdownDate = new Date('November 5 2022 00:00:00').getTime();

      interval = setInterval(() =>{
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(distance < 0){
          //stop our timer:: clearInterval(interval.current);
          

        } else {
          //update timer
          setTimerDays(days)
          setTimerHours(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
        }

      }, 1000)
   }

   //componentsDidMount
   useEffect(() => {
      startTimer();
      return() => {
        clearInterval(interval.current);
      }
   })









    
  
  
  
  
  
  
    return (
    <div className='clock__wrapper d-flex align-items-center gap-3'>
      <div className='clock__data d-flex align-items-center gap-3'>
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{timerDays}</h1>
            <h5 className='text-white fs-6'>Days</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>

      <div className='clock__data d-flex align-items-center gap-3'>
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{timerHours}</h1>
            <h5 className='text-white fs-6'>HOURS</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>

      <div className='clock__data d-flex align-items-center gap-3'>
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{timerMinutes}</h1>
            <h5 className='text-white fs-6'>MINUTES</h5>
        </div>
        <span className='text-white fs-3'>:</span>
        
      </div>

      <div className='clock__data d-flex align-items-center gap-3'>
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{timerSeconds}</h1>
            <h5 className='text-white fs-6'>SECONDES</h5>
        </div>
        
      </div>

    </div>
  )
}

export default Clock
