import { FC, useEffect, useState } from "react";
import { Link } from "@components/Utils/Link";
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CustomImage } from "@components/Utils/CustomImage";
import classNames from "classnames";
import icon from "@assets/icon.svg";
import { Button } from "@components/Utils/Button";
import Image from "next/dist/client/image";
import Swiper from "swiper";


export const Navbar: FC = () => {
  const router = useRouter();
  const [top, setTop] = useState(false);
  const [hash, setHash] = useState(false);

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

  const imgs=[
    {url:"1.png"},
    {url:"2.png"},
    {url:"3.png"},
    {url:"4.png"},
    {url:"5.png"}
  ]


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

  return (
    <>
     <div>

       


     </div>
  


     <header id="site-header" className="header header-2">
      <div className="header-top">
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
                  <div className="flex flex-row w-fit">
                    <Image alt="" className='md:w-full w-screen h-fit p-2' src="/1.png" width="170" height="170"></Image>
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
                            {PAGES.map((nav, index) => (
                              <li key={index} className="nav-item">
                                <Link href={nav.link} className="nav-link hover:text-blue-600">{nav.name}</Link>
                              </li>
                            ))}
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
