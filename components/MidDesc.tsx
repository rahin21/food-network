"use client";
import Image from "next/image";
import { Rating } from "@material-tailwind/react";
import { PiStarFill, PiStarLight } from "react-icons/pi";

const MidDesc = () => {
  const socials = ["facebook", "linkedIn", "twitter", "more"];
  return (
    <div className="bg-background xl:w-[74rem] my-4 lg:p-10 p-5 xl:mx-0 mx-4 rounded-xl">
      {/* top section */}
      <div className="block xl:flex justify-between items-start">
        <div className="hidden xl:block w-[28px] mt-16 space-y-6">
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
        <div className="xl:w-[492px] space-y-6 pl-2">
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
        <div className="md:flex md:justify-center">
          <Image
            src={`/avocadoDesc.svg`}
            alt={`avocadoDesc`}
            width={520}
            height={520}
          />
        </div>
      </div>
      {/* mid section */}
      <div className="mt-10 xl:ml-[4.2rem]">
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
        <div className="block xl:flex mt-10 gap-x-11 items-center">
          <div className="xl:w-[280rem] md:flex md:justify-center">
            <Image
              src={`/appleDesc.svg`}
              alt={`avocadoDesc`}
              width={520}
              height={520}
            />
          </div>
          <div className="space-y-2 xl:mt-0 mt-10">
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
      <div className="mt-10 space-y-3 xl:ml-[4.2rem]">
        <h5 className="text-lg font-black">Was This Helpful?</h5>

        <Rating
          ratedColor="red"
          unratedColor="red"
          value={4}
          ratedIcon={<PiStarFill className="w-8 h-8 mr-2" />}
          unratedIcon={<PiStarLight className="w-8 h-8 mr-2" />}
        />
        <div className="xl:hidden flex mt-16 space-x-6">
          {socials.map((social, i) => (
            <Image
              key={i}
              src={`/social/${social}.svg`}
              alt={`${social}`}
              width={40}
              height={40}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidDesc;
