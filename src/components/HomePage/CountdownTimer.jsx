
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import upArrow from '../../assets/Vector.png';
import downArrow from '../../assets/Vector (1).png';
import sneeze from '../../assets/sneeze.mp3'
const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timer, setTimer] = useState(0);
  const [ isPlay, setIsPlay ] = useState(false);
  const [playTune, setPlayTune] = useState(false);

  useEffect(() => {
    if (playTune) {
      playAudio();
      setPlayTune(false);
      setIsPlay(false);
    }
  }, [playTune, isPlay]);

  const handleTimer = () => {
    if (isPlay) {
      resetTimer();
    } else {
      const totaltime = seconds + hours * 3600 + minutes * 60;
      setTimer(totaltime);
      setIsPlay(true);
    }
  }
  const formatTime = (time) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs < 10 ? '0' + hrs : hrs}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
  };
  
  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setTimer(0);
    setIsPlay(false);
  };

  const playAudio = () => {
    const audio = new Audio(sneeze);
    audio.play();
  };

  return (
    <div className='timer_inner_container'>
    <div className='countdown_boundry'>
<CountdownCircleTimer
    isPlaying={isPlay && true}
    duration={timer}
    initialRemainingTime={timer}
    colors="#FF6868"
    strokeWidth={5}
    isSmoothColorTransition={true}
    trailColor="#191E39"
    >
      {({ remainingTime }) =>    {if (remainingTime === 0 && isPlay) {
              setPlayTune(true);
            }
            return <div className='countdown-text'>{timer === 0 ? '00:00:00' : formatTime(remainingTime)}</div>;
          }}
     

    </CountdownCircleTimer>
  

    </div>
<div className='set_timer_container'>

  <div className="set_timer"> 
  <div className="hours">
  <p className='hr'>Hours</p>
  <img src={upArrow} alt="arrow" onClick={()=> setHours(prev => prev <60 ?prev+1 : prev)}/>
  <p className='hour_text'>{hours < 10 ? `0`+hours : hours}</p>
  <img src={downArrow} alt="arrow" onClick={()=> setHours(prev => prev > 0 ? prev-1 : prev)}/>

  </div>
<div className="div_colon">:</div>
  <div className="minutes">
  <p className='mt'>Minutes</p>
  <img src={upArrow} alt="" onClick={()=> setMinutes(prev => prev <60 ?prev+1 : prev)} />
  <p className='mint_text'>{minutes < 10 ? `0`+minutes : minutes}</p>

  <img src={downArrow} alt="" onClick={()=> setMinutes(prev => prev > 0 ? prev-1 : prev)}/>

  </div>
  <div className="div_colon">:</div>

  <div className="seconds">
    <p className='sc'>Seconds</p>
  <img src={upArrow} alt="" onClick={()=> setSeconds(prev => prev <60 ?prev+1 : prev)}/>
  <p className='sec_text'>{seconds < 10 ? `0`+seconds : seconds}</p>
  <img src={downArrow} alt=""onClick={()=> setSeconds(prev => prev > 0 ? prev-1 : prev)} />

  </div>
  </div>
  <button onClick={()=> handleTimer()}>{isPlay && timer ? 'RESET' : 'START'}</button>
</div>
  

</div>
  )
}

export default CountdownTimer