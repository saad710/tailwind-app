import React from "react";
import imagePic from "../images/social-media-header.png";
const Card = (props) => {
  const { androids } = props;
  return (
    <div class="p-2 scrollbar-hide overflow-y-auto h-5/6">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {androids?.map((android) => (
          <div className="flex justify-center p-6 rounded-lg shadow-sm shadow-gray-300 p-2 mt-3">
            <div>
              <img src={android.img} alt="/" className="p-2" />
            </div>
            <div>
              <h6 className="text-slate-900 font-semibold pl-1">{android.name}</h6>
              <h6 className="text-slate-900 font-semibold pl-1">
                price: {android.wholePrice}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
