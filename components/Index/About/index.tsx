import { FC } from "react";
import { FiClock, FiDollarSign, FiUsers } from "react-icons/fi";
import Image from "next/image";

export const About: FC = () => {
  const About = [
    {
      title: "Bilgili Ekip",
      text: "Yaptıkları işlerin ehli olan kişilerden oluşan ekibimiz.",
      icon: FiUsers,
    },
    {
      title: "Hızlı Teslim",
      text: "Siparişlerinizi olabildiğince hızlı teslim etmeye çalışırız.",
      icon: FiClock,
    },
    {
      title: "Uygun Fiyatlı",
      text: "Piyasaya göre uygun fiyatlara işler yapmaktayız.",
      icon: FiDollarSign,
    },
  ];

  return (
    <>
        <p className='text-4xl text-center font-semibold mt-20'>About Us</p>
       <div className='flex flex-col gap-10 pb-10'>
       <div className='flex md:flex-row flex-col justify-between gap-5 w-full'>
            <div className='flex flex-col gap-10 border-2 border-blue-600 w-full md:w-1/2 text-lg'>
                <p className='text-2xl font-semibold bg-blue-600 text-white p-2 '>Tally Products</p>
                <div className='flex flex-col gap-10 m-4 text-lg'>
                    <a href=""><span> +</span> Tally ERP 9</a>
                    <a href=""><span> +</span> Tally ERP 9 - Auditors Edition</a>
                    <a href=""><span>+</span> Tally Shoper 9</a>
                    <a href=""><span>+</span> Tally Developer</a>
                    <a href=""><span>+</span> Tally ERP-9 Rental</a>
                    <a href=""> <span>+</span> Our Quotation</a>
                </div>
            </div>
            <div className='flex flex-col gap-10 p-2 text-justify items-center justify-center text-lg w-full'>
                <p>We are Professionals in Enterprise Consulting and Implementation service company catering to customers across the globe. We assist our customers in advancing their business processes by speeding up communication and information flow, thus enhancing productivity immensely, extending their enterprise to their clients and suppliers.</p>
                <p>GLOWIPS - with a rich experience in the implementation of Enterprise business solutions on Tally enterprise framework - offers a complete solution, which includes consultancy, design, development, implementation and training. We enhance value to our customers by bringing to the table an excellent understanding of business processes.</p>
            </div>
        </div>

        <div className='flex md:flex-row flex-col justify-between gap-5 w-full'>
            <div className='flex flex-col gap-10  border-2 border-blue-600 w-full md:w-1/2 text-lg'>
                <p className='text-2xl font-semibold bg-blue-600 text-white p-2 '>Tally Products</p>
                <div className='flex flex-col gap-10 m-4 text-lg'>
                    <a href=""><span> +</span> Tally ERP 9</a>
                    <a href=""><span> +</span> Tally ERP 9 - Auditors Edition</a>
                    <a href=""><span>+</span> Tally Shoper 9</a>
                    <a href=""><span>+</span> Tally Developer</a>
                    <a href=""><span>+</span> Tally ERP-9 Rental</a>
                    <a href=""> <span>+</span> Our Quotation</a>
                </div>
            </div>
            <div className='flex flex-col gap-10 items-center justify-center text-lg w-full text-justify p-2'>
                <p>We are Professionals in Enterprise Consulting and Implementation service company catering to customers across the globe. We assist our customers in advancing their business processes by speeding up communication and information flow, thus enhancing productivity immensely, extending their enterprise to their clients and suppliers.</p>
                <p>GLOWIPS - with a rich experience in the implementation of Enterprise business solutions on Tally enterprise framework - offers a complete solution, which includes consultancy, design, development, implementation and training. We enhance value to our customers by bringing to the table an excellent understanding of business processes.</p>
            </div>
        </div>

         <div className='flex md:flex-row  flex-col justify-between gap-5 w-full'>
            <div className='flex flex-col gap-10 border-2 border-blue-600 w-full md:w-1/2 text-lg'>
                <p className='text-2xl font-semibold bg-blue-600 text-white p-2 '>Useful Links</p>
                <div className='flex flex-col gap-10 m-4 text-lg'>
                    <a href=""><span> +</span> Tally Academy</a>
                    <a href=""><span> +</span> Corporate Management</a>
                    <a href=""><span>+</span> Vertical Solution For Tally</a>
                    <a href=""><span>+</span> Tally Integration</a>
                    <a href=""><span>+</span> Our Esteemed Clientage</a>
                    <a href=""> <span>+</span> Instant Support</a>
                </div>
            </div>
            <div className='flex flex-col gap-10 items-center justify-center text-lg w-full'>
                <div className='flex md:flex-row flex-col gap-5 items-center'>
                    <Image alt="" className='md:w-1/2 w-screen h-fit' src="/about_glowips_delhi.jpg" width="170" height="170"></Image>

                    
                    <p className=' w-full text-justify p-2'>Jewellery Industry
                        Manufacturing Industry
                        Electronic Showroom Management
                        Hotel & Restaurant
                        School And College
                        Training Institute
                        Chit Fund Module
                        Automobile Module
                        CRM Module
                        ERP Manufacturing Module
                        ERP BUS Module For Schools, College [Compatibility Mode]
                        Builders & Property
                        Tally ERP For Advertisement
                        Garment Industry Module
                        Vehicle Sales Module
                        Party Wise Outstanding Module
                        Standard Terms And Condition Module
                        Three Discount Coloum Module
                        Auto Physical Stock Verification
                        Godown Address In Print Module
                        Petrol Pump Module
                        Stock Group Wise Item Filter</p>

                   
                    
                   
                </div>
            </div>
        </div>

       
        <div className='flex md:flex-row flex-col justify-between gap-5 w-full'>
            <div className='flex flex-col gap-10  border-2 border-blue-600 w-full md:w-1/2 text-lg'>
                <p className='text-2xl font-semibold bg-blue-600 text-white p-2 '>Ask For A Service</p>
                <div className='flex text-sm flex-col gap-10 ml-4 font-semibold
                '>
                    <input className='border-b border-black pl-5 p-2 w-full hover:border-red-600 ' type="text" placeholder='First Name' />
                    <input className='border-b border-black pl-5 p-2 w-full hover:border-red-600' type="number" placeholder='Mobile No.' />
                    <input className='border-b border-black pl-5 p-2 w-full hover:border-red-600' type="email" placeholder='Email' />
                    <input className='border-b border-black pl-5 p-2 w-full hover:border-red-600' type="text" placeholder='City' />
                    <input className='border-b border-black pl-5 p-2 w-full hover:border-red-600' type="text" placeholder='Message' />
                    <div className="flex justify-center pr-5">
                    <button className='flex items-center justify-center bg-blue-600 text-white rounded-lg w-full h-4 p-4 m-2 text-center'>Send Messages</button>
                    </div>
                </div>
            </div>
            <div className='w-full'>

            </div>
            
        </div>
       </div>

        
    </>
   
    
  );
};

