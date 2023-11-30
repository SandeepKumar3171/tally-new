import { FC } from "react";

export const Hero: FC = () => {
  return (
    <>
      <section className="mx-auto bg-yellow-400  h-fit " id="home" >
       <div className="inline-block w-full h-full">
        {  <div
          className="w-full min-h-fit -z-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500"
         >
        </div> }
      </div>
     </section>
    </>
    
  );
};