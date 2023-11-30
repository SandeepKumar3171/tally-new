import { FC, useEffect, useState } from "react";
import { Link } from "@components/Utils/Link";
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CustomImage } from "@components/Utils/CustomImage";
import icon from "@assets/icon.svg";
import { Button } from "@components/Utils/Button";
import Image from "next/dist/client/image";
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



export const Navbar: FC = () => {
  const router = useRouter();
  const [top, setTop] = useState(false);
  const [hash, setHash] = useState(false);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed (in milliseconds) as needed
  };

  const PAGES = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Company",
      link: "/#about",
    },
    {
      name: "Products",
      link: "/#services",
    },
    {
      name: "Services",
      link: "/#projects",
    },
    {
      name: "Solution",
      link: "/#contact",
    },
    {
      name: "Download",
      link: "/#contact",
    },
    {
      name: "Contact Us",
      link: "/#contact",
    },
  ];


  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(true);
      else setTop(false);
    };
  }, []);

  const onUp = () => {
    window.location.href = "#";
  };

  const onClose = () => {
    setHash(!hash);
  };

  

  let hoverlist=["list1","list2","list3","list4","list5"]
  const [currentlist,setCurrentlist]=useState()
  let mouseHover=()=>{
       alert("hover link")
      
  }
  

  

  return (
    <>
   

     <header id="site-header" className="header header-2">
      <div className="bg-yellow-400 p-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 justify-content-between">
              <a href="#" className="navbar-brand logo d-block h-100 d-flex justify-content-center">
                <CustomImage
                  style={{ height: 116, width: 116 }}
                  src={'https://www.tallysolution.net/assets/images/logo.gif'}
                  className="mr-3 h-6 sm:h-9 rounded-md"
                  alt="Navbar Logo"
                />
              </a>
            </div>

            <div className=" col-md-10">
              <div className="row  mobo-menu-item">
                <div className="col-md-7">
                  <div className="align-items-center text-center">
                    <span className="om-sai-ram text-center ">ॐ साईं राम</span>
                  </div>









                  <div className="row justify-content-center align-items-end">

                  <div className="w-1/2 h-fit m-2">
                  <Slider {...settings}>
              
      <div className="flex flex-row">
      <Image alt="" className='md:w-full w-1/2 h-fit p-2 boredr' src="/1.png" width="170" height="170"></Image>
      </div>
      <div>
      <Image alt="" className='md:w-full w-screen h-fit p-2' src="/2.png" width="170" height="170"></Image>
      </div>
      <div>
      <Image alt="" className='md:w-full w-screen h-fit p-2' src="/3.png" width="170" height="170"></Image>
      </div>
      <div>
      <Image alt="" className='md:w-full w-screen h-fit p-2' src="/4.png" width="170" height="170"></Image>
      </div>
      <div>
      <Image alt="" className='md:w-full w-screen h-fit p-2' src="/5.png" width="170" height="170"></Image>
      </div>
      {/* Add more slides as needed */}
    </Slider>

                    </div>
                  









                  
                    <div className="col-md-4">
                      <a href="#" target="_blank">
                        <img src="https://www.tallysolution.net/assets/images/tallyinternational.png" className="tally-international-shake" />

                      </a>
                    </div>
                  </div>

                </div>



                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-12"></div>
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div className="d-flex align-items-end me-3  ">
                           <a className=" pe-2" style={{ fontSize: 30 }}><span className="text-blue-600 text-4xl"><MdOutgoingMail /></span></a>
                          
                          <div className="flex flex-col text-blue-600">
                            <h6 >Email Us</h6>
                            <a href="mailto:tallyproducts@gmail.com"> tallyproducts@gmail.com</a>
                          </div>
                        </div>
                        <div className="d-none d-md-flex align-items-end me-3 text-blue-600">
                          <i className=" pe-2" style={{ fontSize: 30 }}><span><FaPhoneVolume /></span></i>
                          <div>
                            <h6>Call Us</h6>
                            <a href="tel:+919582927928">+91 9582927928</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              
              <div className="md:flex flex-row hidden" />

              <ul className="md:flex flex-row border p-2 hidden bg-white w-fit">
                            {/* {PAGES.map((nav, index) => (
                              <li key={index}  className="nav-item">
                                <button onMouseOver={mouseHover}><Link  href={nav.link} className="nav-link hover:text-blue-600">{nav.name}</Link></button>
                              </li>
                            ))} */}
                            <div className="flex flex-row gap-4 justify-center items-center text-white mr-5">
                              <a onMouseOver={mouseHover} className="bg-blue-600 p-2 hover:bg-red-500 font-medium hover:text-white rounded-md" href="">Home</a>
                              <li className="bg-green-500">{currentlist}</li>
                              <a className="bg-blue-600 p-2 hover:bg-red-500 font-medium hover:text-white rounded-md" href="">Company</a>
                              <a className="bg-blue-600 p-2 hover:bg-red-500 font-medium hover:text-white rounded-md" href="">Products</a>
                              <a className="bg-blue-600 p-2 hover:bg-red-500 font-medium hover:text-white rounded-md" href="">Services</a>
                              <a className="bg-blue-600 p-2 hover:bg-red-500 font-medium hover:text-white rounded-md" href="">Solution</a>
                              <a className="bg-blue-600 p-2 hover:bg-red-500 font-medium hover:text-white rounded-md" href="">Download</a>
                              <a className="bg-blue-600 p-2 hover:bg-red-500 font-medium hover:text-white rounded-md" href="">Contact Us</a>
                            </div>
                            <li className="nav-item-button">
                              <div className="d-flex" />
                              <div>
                                <a className="btn me-1 me-sm-3"><span>Rapid
                                  Response Center</span></a>
                                <a className="btn me-1 me-sm-3" href="buyoffline.php"><span>Buy Tally</span></a>
                              </div>
                            </li>
                          </ul>
              
            </div>
          </div>
        </div>


      </div>
    </header>
    
    </>
   
  );
};
