import { FC } from "react";
import { FaLaptopCode, FaDiscord } from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import { Link } from "@components/Utils/Link";

export const Services: FC = () => {
  const Service = [
    {
      name: "Web Tabanlı Sistemler",
      text: "İstediğiniz bir websitesini tasarlar ve kodlarız ayrıca web tabanlı oyunlar, uygulamalar ve programlar kodlamaktayız.",
      icon: AiOutlineGlobal,
    },
    {
      name: "Gömülü Sistemler",
      text: "Platformu fark etmeksizin her türlü masaüstü ve mobil uygulama geliştirmekteyiz.",
      icon: FaLaptopCode,
    },
    {
      name: "Discord Uygulamaları",
      text: "Discord için uygulama ve botlar geliştirmekteyiz.",
      icon: FaDiscord,
    },
    {
      name: "Photoshop Hizmeti",
      text: "İstediğiniz fotoğrafları veya tasarımları istediğiniz şekillerde düzenleyebiliriz.",
      icon: SiAdobephotoshop,
    },
    {
      name: "Tasarım Hizmeti",
      text: "İstediğiniz bir logoyu, banneri, veya herhangi bir tasarımı sizin için tasarlayabiliriz.",
      icon: SiAdobeillustrator,
    },
    {
      name: "After Effects Hizmeti",
      text: "İstediğiniz bir gifi tasarlayabiliriz veya istediğiniz bir videoya efekt eklemesi ve düzenlemesi yapabiliriz.",
      icon: SiAdobeaftereffects,
    },
  ];

  return (
    <div className="page-content">
      <marquee behavior direction class="theme-bg marqueeData">
        <h1>
        Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon - Noida - Faridabad - NCR | Tally
            Software Dealers and Solution Provides - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </marquee>
    <section className="services theme-bg" style={{ backgroundColor: '#3143ef' }}>
      <div className="container ">
       <div className="row">
        <div className="col-md-12 col-lg-12 service-item">
          <div className="section-title textAlign:center">
            <h5 className="text-rgba">
            India’s Top Tally Solution Providers - Our Brand provides Complete Tally
                            Solutions across Delhi - NCR - India. 
                        
            </h5>
            <div className="d-flex justify-content-center flex-flow-wrap">
              <div className="featured-item style-3 product-item m-3 p-3">
                <div className="featured-title">
                  <h5> Tally Customizations</h5>
                </div>
              </div>
          
              <div className="featured-item style-3 product-item m-3 p-3">
                <div className="featured-title">
                  <h5>Tally Software Sales & Support</h5>
                </div>
              </div>
          
           
              <div className="featured-item style-3 product-item m-3 p-3">
                <div className="featured-title">
                  <h5> Tally Integration & Synchronizations</h5>
                </div>
              </div>
           
            
              <div className="featured-item style-3 product-item m-3 p-3">
                <div className="featured-title">
                  <h5> Tally On Cloud Services</h5>
                </div>
              </div>
           
              <div className="featured-item style-3 product-item m-3 p-3">
                <div className="featured-title">
                  <h5>Tally Development Support </h5>
                </div>
              </div>
           
              <div className="featured-item style-3 product-item m-3 p-3">
                <div className="featured-title">
                  <h5>Tally AMC</h5>
                </div>
              </div>
           
              <div className="featured-item style-3 product-item m-3 p-3">
                <div className="featured-title">
                  <h5>Tally Corporate-Trainings</h5>
                </div>
              </div>
              


          </div>


        </div>
       </div>
      </div>
      </div>
      
    </section>

    <div className="section-title">
                    <h1 className="title text-center">Our Services</h1>
                </div>

                <div className="col-md-3 col-lg-3 service-item">
                
                </div>
    </div>
  );
};
