import React from "react";

const StreetView = ({ streetViewUrl }) => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        title="Google Street View"
        width="100%"
        height="100%"
        src={streetViewUrl}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default StreetView;
