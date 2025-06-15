import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import VideoBg from '../assets/video.mp4';
import './Main.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Main() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dz1ibse',
        'template_buzkbye',
        form.current,
        'bCItOcrgU4D06Sp1u'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Error sending message.');
        }
      );
  };

  return (
    <div>
      <section className='page'>
        <div className="overlay"></div>
        <video src={VideoBg} autoPlay loop muted></video>
        <div className="page_content">
          <h1>Launching Soon</h1>
          <h3>Leave your email and we&apos;ll let you know once the site goes live.</h3>

          <FlipClockCountdown
            className='flip-clock'
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
            labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
            digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
            dividerStyle={{ color: 'white', height: 1 }}
            separatorStyle={{ color: 'red', size: '6px' }}
            duration={0.5}
          />

          <form ref={form} onSubmit={sendEmail}>
            <input type='email' name='user_email' className='send_email' placeholder='Your Email' required />
            <button type='submit'>Notify Me</button>
          </form>

        </div>
      </section>
    </div>
  );
}

export default Main;
