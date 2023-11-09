import Image from "next/image";
import React from "react";

const EmptyPage = () => {
  return (
    <div className="bg-[#EEF0F2] w-full lg:rounded-tl-3xl">
      <div className="flex flex-col items-center justify-center gap-10 bg-background m-4 lg:h-[90vh] h-[80vh] rounded-lg">
        <Image src={"/empty.svg"} alt="empty page" width={500} height={500} />
        <h2 className="text-3xl font-bold"> This Page Is Empty</h2>
      </div>
    </div>
  );
};

export default EmptyPage;
