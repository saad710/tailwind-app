import React from "react";
import imagePic from "../images/social-media-header.png";
const Card = (props) => {
  const { androids } = props;
  return (
    // <div className='w-80 shadow-md mx-2 my-2'>
    //     <h1 className='px-2 py-2'>hello world</h1>

    // </div>
    //     <div class="grid grid-cols-3 gap-4">
    //    {
    //     androids?.map(android => (
    //         <div className='w-full aspect-video rounded-lg shadow-lg shadow-gray-400 p-2'>
    //             <img src={android.img} alt="/" className='w-25' />
    //             <h6 className="text-slate-900 font-semibold">
    //                     {android.name}
    //             </h6>
    //             <h6 className="text-slate-900 font-semibold">
    //                     price: {android.wholePrice}
    //             </h6>
    //         </div>
    //     ))
    //    }
    //     </div>

    <div class="p-4">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {/* <div class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
          1
        </div>
        <div class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
          2
        </div>
        <div class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
          3
        </div>
        <div class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
          4
        </div> */}
        {
        androids?.map(android => (
            <div className='flex justify-center p-6 rounded-lg shadow-lg shadow-gray-400 p-2 mt-3'>
                <img src={android.img} alt="/"  />
                <h6 className="text-slate-900 font-semibold">
                        {android.name}
                </h6>
                <h6 className="text-slate-900 font-semibold">
                        price: {android.wholePrice}
                </h6>
            </div>
        ))
       }
      </div>
    </div>
  );
};

export default Card;
