import React, { useEffect , useRef, useState} from "react";
import {BsFillBagCheckFill , BsFillCreditCardFill} from "react-icons/bs";
import {FaHome , FaTwitterSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaShoppingCart , FaHeart} from "react-icons/fa";
import {AiTwotoneSetting, AiFillBank} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import {GiCutDiamond} from "react-icons/gi";
import {IoMdNotifications} from "react-icons/io";
import {AiTwotoneMail} from "react-icons/ai"

import people from "./data";
import people2 from "./data2";
import people3 from "./data3";

import Aos from "aos";
import "aos/dist/aos.css"

const Index3 = () => {
  const A = useRef(null)
  const B = useRef(null)
  const [z, setZ] = useState("box-1 ")
  const [c, setC] = useState(false)

     const Set1 = () => {
       setC(!c)

      if (c) {
        A.current.style.display = "none"
        B.current.style.width = "100%"
        B.current.style.transform = "translateX(0%)"
      }
      else {
        A.current.style.display = "block"
        B.current.style.width = "80%"
        B.current.style.transform = "translateX(22.5%)"
      }
     
     }

     const Set2 = () => {
    
     }

  


  useEffect(() => {
 
    Aos.init({duration:2000});
  })

 



  return(
    <main className="main">
      <section className="section">
         
         <div className="header">
               <section className="header__holder">
                 <div onClick={ Set1 } className="header__line"></div>
                 <h2 className="header__h2">market place</h2>
                 <div className="header__serch-holder">
                  <BiSearch className="header__search"></BiSearch>
                   <p className="header__p">search</p>
                 </div>

                 <div className="header__middle-holder">
               <GiCutDiamond className="header__noti-1"></GiCutDiamond> 
                   <p className="header__middle-p">34,0000 ETH</p>
                   <IoMdNotifications className="header__noti-2"></IoMdNotifications> 
                 </div>
                 
                 <div className="header__last-holder">
                   <div className="header__img-holder">
                        
                <img src={"./web-2/IMG_2892.JPG"} alt="" className="header__img" />
                
                <p className="header__img-p">P-S</p>

                   </div>
                 </div>
                 <div className="header__dot"></div>

               </section>
         </div>



         <div className="box">
           

             <div ref={A} className={z}>
                
               

                  <ul data-aos = "fade-right" className="box-1__ul">
                    <li className="box-1__li">    <FaHome className="box-1__icon"></FaHome>  <p className="box-1__p">home</p>  </li>
                    <li className="box-1__li">    <AiFillBank className="box-1__icon"></AiFillBank> <p className="box-1__p">section</p>   </li>
                    <li className="box-1__li">     <FaShoppingCart className="box-1__icon"></FaShoppingCart>  <p className="box-1__p">shop</p>  </li>
                    <li className="box-1__li">     <AiTwotoneSetting className="box-1__icon"></AiTwotoneSetting> <p className="box-1__p">setting</p>    </li>
                  </ul>

              

             </div>

             <div ref={B} className="box-2">
               
            
                  
                 <div className="box-2__box">
                 <section className="box-2__first">

                  

                  <div className="box-2__first-holder">
                    
                    <section className="set-1-head">
                       <div className="set-1-head__holder">

                       <div data-aos = "zoom-in" className="set-1-head__1">
                             <img src={"./web-2/IMG_2889.JPG"} alt="" className="set-1-head__1-img" />
                          </div>

                          <div data-aos = "zoom-in" className="set-1-head__2">

                            <section className="set-1-head__2-holder">
                              <div className="set-1-head__2-h2-holder">
                              <img src={"./web-2/IMG_2889.JPG"} alt="" className="header__img" />
                              <h2 className="set-1-head__2-h2">
                              Dude Perfect
                                </h2>
                              </div>
                                 

                                 <h2 className="set-1-head__2-h2-big">
                                 NTFs Are Oxygen
                                 </h2>
                                 <p className="set-1-head__2-p">
                                 Bids Placed
                                 </p>

                                 <div className="set-1-head__2-grid">
                                        
                                        <h2 className="set-1-head__2-num">8,99</h2>
                                        <p className="set-1-head__2-p1">Sale Ended</p>
                                        <h2 className="set-1-head__2-eth"> ETH </h2>
                                        <div className="set-1-head__2-time">
                                          <section className="set-1-head__2-time-1">
                                          <p className="set-1-head__2-time-hour-num"> 10  </p>
                                         <div className="set-1-head__2-time-dot"></div>
                                          <p className="set-1-head__2-time-min-num"> 23  </p>

                                          <div className="set-1-head__2-time-dot"></div>
                              
                                          <p className="set-1-head__2-time-sec-num"> 00  </p>

                                          </section>
                                       

                                       <section className="set-1-head__2-time-2">

                                       <p className="set-1-head__2-time-hour"> hours  </p>
          
                                      <p className="set-1-head__2-time-min"> mins  </p>

                                      <p className="set-1-head__2-time-sec"> secs  </p>



                                       </section>
                                          
                                          
                                        </div>
                                        <p className="set-1-head__2-usd"> 4,901 USD  </p>


                                 </div>


                            </section>

                            <section className="set-1-head__2-holder2">
                                
                                <div className="set-1-head__2-holder2-main">
                                       
                                  <FaHeart className="set-1-head__2-icon" ></FaHeart>
                                    <button className="set-1-head__2-button">
                                       open art
                                      </button>  

                                      <button className="set-1-head__2-button1">
                                       start bid
                                      </button> 
                                </div>

                            </section>
                            
                          </div>

                       </div>
                         


                    </section>


                    <section className="set-1-body">

<h2 className="set-1-body__head">

Trending Collections

</h2>

<div className="set-1-body__main">

{
  people.map((e) => {
      
    const {image, secondImg, name, header , bid , sale,eth , hour, min , sec } = e; 




      return (
       <div className="set-1-body__box">
        <img src={image} alt="" className="set-1-body__img" />
<div className="set-1-body__box-holder">
<img src={secondImg} alt=""    className="header__img" />
<p className="set-1-body__name">{name}</p>
</div>

<h2 className="set-1-body__box-h2">
{header}
</h2>

<div className="set-1-body__grid1">
<div className="set-1-body__bid">{bid}</div>
<div className="set-1-body__sales">{sale}</div>
<div className="set-1-body__eth">{eth}</div>
<div className="set-1-body__time">
<p className="set-1-body__hour">{hour}h</p>
<div  className="set-1-body__dot"></div>
<p className="set-1-body__min">{min}m</p>
<div  className="set-1-body__dot"></div>
<p className="set-1-body__sec">{sec}s</p>
</div>
</div>


       </div>
      )
    
   








  })
}

<button className="set-1-body__button">
  show more 
</button>



</div>





</section>

                   
                     


                  </div>
                  




                  </section>
                  

                  <section className="box-2__second">
                  <div className="box-2__second-holder">
                     
                      <section  className="header2">
                        <div data-aos = "fade-down" className="header2__head">
                          <h2 className="header2__h2">
                            recents
                          </h2>
                          <p className="header2__head-p">
                            today 
                          </p>
                         
                          < FaHeart className="header2__head-icon"> </ FaHeart>
                       
                        </div>

                       
                       <div data-aos = "fade-left" className="header2__body1">

                       {
                         people2.map((e) => {
                          const {image, name, time, bid, eth} = e;
                         return (
                          <div className="header2__body1-main">
                          <section className="header2__img-sec">
                              <img src={image} alt="" className="header2__img" />
                          </section>
                        

                          <section className="header2__os">
                            <div className="header2__os-top">
                               <p className="header2__os-top-name">{name}</p>
                               <p className="header2__os-top-time">{time}m ago</p>
                              </div>
                          
                            <div className="header2__os-bottom">

                              <p className="header2__os-bottom__bid">
                                {bid}
                              </p>
                              <p className="header2__os-bottom-eth">
                                {eth}
                              </p>
                                
                            </div>
                          </section>



                    </div>
                         )





                        })
                       }

                       </div>

                       <button  className="header2__button2" >show more</button>


                      
                      <div className="body2">
                        <section className="body2__holder">
                          <div data-aos = "fade-down" className="body2__head">
                          <h2 className="body2__h2">

                          Best Creators

                          </h2>
                          <p className="body2__head-p">
                          see all
                          </p>
                         
                          < FaHeart className="body2__head-icon"> </ FaHeart>
                       
                          </div>

                          <div data-aos = "fade-left" className="body2__main">
           

                            {
  people3.map((e) => {
    const {image , name, eth} = e;

return (

  <div className="body2__main-holder">

  <div className="body2__main-1">

    <img src={image} alt="" className="body2__main-img" />
    <div className="body2__main-1-set">
      <p className="body2__main-1-name">
        {name}
      </p>
      <p className="body2__main-1-eth">
        {eth} created
      </p>
    </div>

  </div>
  <div className="body2__main-2">
         
          <button className="body2__main-2-button">
                      follow
          </button>
    
  </div>



</div>

)
  

  })

                           


                            }



                          </div>


                        </section>
                      </div>


                     
                      </section>

                      
                      

                   </div>
                  </section>
                  
                 </div>


        <div className="box-2__footer">


                  <div className="footer">

                    <section className="footer__holder">

                    <div data-aos = "fade-right" className="footer__div">
                      <h2 className="footer__div-h2">
                        about us
                      </h2>
                      <p className="footer__p">
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eius Quis Nam Dicta Perspiciatis Sed In Porro Voluptas Minima, Labore Dolor Delectus Corporis Earum, Consequuntur Dolorum Adipisci Veritatis, Molestias Dignissimos Expedita.
                      </p>
                    </div>

                    <ul data-aos = "fade-up" className="footer__ul1">
                    <li className="footer__li2"> important1   </li>
                      <li className="footer__li3"> <AiTwotoneMail className="footer__icon2"> </AiTwotoneMail>  <p className="footer__ul-p">seyiakintan@yahoo.com</p>   </li>
                      <li className="footer__li4"> <AiTwotoneMail  className="footer__icon2"> </AiTwotoneMail>  <p className="footer__ul-p"> seyiakintan@yahoo.com </p>   </li>
                    </ul>

                    <ul data-aos = "fade-up" className="footer__ul3">
                      <li className="footer__li2"> important   </li>
                      <li className="footer__li"> Privacy Policies  </li>
                      <li className="footer__li">  Disclaimer  </li>
                      <li className="footer__li">  FAQ  </li>
                      <li className="footer__li">  Terms and Conditions  </li>
                    </ul>

                   <div data-aos = "fade-right" className="footer__div2">
                   <p className="footer__li2"> social   </p>
                    <ul className="footer__ul2">

                      <li className="footer__li"> <FaInstagramSquare  className="footer__icon"> </FaInstagramSquare>  </li>
                      <li className="footer__li"> <FaTwitterSquare  className="footer__icon"> </FaTwitterSquare>   </li>
                      <li className="footer__li"> <FaFacebookSquare  className="footer__icon"> </FaFacebookSquare>  </li>
                      <li className="footer__li"> < FaLinkedin className="footer__icon"> </ FaLinkedin>  </li>
                   
                    </ul>
                   </div>
                   

                    </section>

  
                    <div data-aos = "fade-up" className="ending"> made by <span className="ending-span"> Patricia-Son</span>   </div>



                  </div>
                

                 </div>

             

             </div>



       

         </div>



        







      </section>
    </main>
    
    )






}

export default  Index3;