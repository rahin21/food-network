"use client";
import Image from "next/image";
import { Rating } from "@material-tailwind/react";
import { PiStarFill, PiStarLight } from "react-icons/pi";

const MidDesc = () => {
  const socials = ["facebook", "linkedIn", "twitter", "more"];
  return (
    <div className="bg-background w-[74rem] my-4 lg:p-10 p-5 lg:mx-0 mx-4 rounded-xl">
      {/* top section */}
      <div className="flex justify-between items-start">
        <div className="w-[28px] mt-16 space-y-6">
          {socials.map((social, i) => (
            <Image
              key={i}
              src={`/social/${social}.svg`}
              alt={`${social}`}
              width={30}
              height={30}
            />
          ))}
        </div>
        <div className="w-[492px] space-y-6 pl-2">
          <h1 className="text-[38px] font-black leading-[49px]">
            Health Benefits Of An Avocado
          </h1>
          <div className="space-y-2">
            <h5 className="text-lg font-bold">Supports eye health:</h5>
            <p className=" text-[15px]">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="text-lg font-bold">Supports eye health:</h5>
            <p className=" text-[15px]">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>
        </div>
        <Image
          src={`/avocadoDesc.svg`}
          alt={`avocadoDesc`}
          width={520}
          height={520}
        />
      </div>
      {/* mid section */}
      <div className="mt-10 ml-[4.2rem]">
        <div className="space-y-2 ">
          <h5 className="text-lg font-bold">Supports eye health:</h5>
          <p className=" text-[15px]">
            Spinach contains high levels of vitamin A and other antioxidants
            that help maintain healthy vision and protect against age-related
            macular degeneration.. Spinach contains high levels of vitamin A and
            other antioxidants that help maintain healthy vision and protect
            against age-related macular degeneration.. Spinach contains high
            levels of vitamin A and other antioxidants that help maintain
            healthy vision and protect against age-related macular
            degeneration.. Spinach contains high levels of vitamin A and other
            antioxidants that help maintain healthy vision and protect against
            age-related macular degeneration.. Spinach contains high levels of
            vitamin A and other antioxidants that help maintain healthy vision
            and protect against age-related macular degeneration.. Spinach
            contains high levels of vitamin A and other antioxidants that help
            maintain healthy vision and protect against age-related macular
            degeneration.. Spinach contains high levels of vitamin A and other
            antioxidants that help maintain healthy vision and protect against
            age-related macular degeneration..
          </p>
        </div>
        <div className="flex mt-10 gap-x-11 items-center">
          <Image
            src={`/appleDesc.svg`}
            alt={`avocadoDesc`}
            width={520}
            height={520}
          />
          <div className="space-y-2">
            <h5 className="text-lg font-bold">Supports eye health:</h5>
            <p className="text-[15px]">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.. Spinach contains high levels of vitamin A
              and other antioxidants that help maintain healthy vision and
              protect against age-related macular degeneration.. Spinach
              contains high levels of vitamin A and other antioxidants that help
              maintain healthy vision and protect against age-related macular
              degeneration.. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy
            </p>
          </div>
        </div>
      </div>
      {/* rating */}
      <div className="mt-10 space-y-3 ml-[4.2rem]">
        <h5 className="text-lg font-black">Was This Helpful?</h5>

        <Rating
          ratedColor="red"
          unratedColor="red"
          value={4}
          ratedIcon={<PiStarFill className="w-8 h-8 mr-2" />}
          unratedIcon={<PiStarLight className="w-8 h-8 mr-2" />}
          
        />
      </div>
    </div>
  );
};

export default MidDesc;
