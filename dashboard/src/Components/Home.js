import React from 'react'
// import '../style/Home.scss'
import vg from "../assets/home22.png"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
// import {AiiFillAmazonCircle} from "react-icons/ai"; 
// import {AiiFillYoutube} from "react-icons/ai"; 
// import {AiiFillInstagram} from "react-icons/ai"; 
// ,AiiFillAmazonCircle,AiiFillYoutube,AiiFillInstagram 

function Home() {
  return (
    <>
    
      <div className='home' id='home'>
        <main>
          <h1 className='Text'>TecFortify</h1>
          <p>Solution of all you code all</p>
        </main>
      </div>

       <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet maximus urna.
            Duis a arcu sit amet nunc vehicula vulputate vitae tempor lor  em. Sed laoreet,
            libero non tempus consequat, felis augue aliquam justo,
            non scelerisque nunc elit nec urna. Aliquam dapibus porttitor risus, sodales ultricies lorem lobortis in
          </p>
        </div>

      </div> 
      <div className='home3' id='about'>
        <div>
          <h1>Who are you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet maximus urna.
            Duis a arcu sit amet nunc vehicula vulputate vitae tempor lor  em. Sed laoreet,
            libero non tempus consequat, felis augue aliquam justo,
            non scelerisque nunc elit nec urna. Aliquam dapibus porttitor risus, sodales ultricies lorem lobortis in
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet maximus urna.
            Duis a arcu sit amet nunc vehicula vulputate vitae tempor lor  em. Sed laoreet,
            libero non tempus consequat, felis augue aliquam justo,
            non scelerisque nunc elit nec urna. Aliquam dapibus porttitor risus, sodales ultricies lorem lobortis in
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet maximus urna.
            Duis a arcu sit amet nunc vehicula vulputate vitae tempor lor  em. Sed laoreet,
            libero non tempus consequat, felis augue aliquam justo,
            non scelerisque nunc elit nec urna. Aliquam dapibus porttitor risus, sodales ultricies lorem lobortis in

          </p>
        </div>
      </div>
      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>

              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay: "0.5s",
            }}>

              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay: "0.7s",
            }}>

              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{
              animationDelay: "1s",
            }}>

              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>

      </div>

    </>

  )
}

export default Home