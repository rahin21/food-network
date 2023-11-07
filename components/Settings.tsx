import React from "react";
import { PiTextTBold } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import VitaminChoice from "./VitaminChoice";
import { Switch } from "@/components/ui/switch";

type SliderProps = React.ComponentProps<typeof Slider>;

const Settings = ({ className, ...props }: SliderProps) => {
  return (
    <div className="bg-background justify-center font-semibold h-[286px] w-[300px] m-4 p-4 rounded-xl">
      <div className="border-input border-2 rounded-xl p-3">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-[#ff6e3a] border-2 border-[#ff6e3a] rounded-md">
              <PiTextTBold />
            </div>
            <h1 className="text-[#ff6e3a]">Settings</h1>
          </div>
          <IoIosArrowUp className="text-[#ff6e3a] text-xl cursor-pointer" />
        </div>
        <div className="flex justify-between items-center py-4">
          <h1>Paragraph font size</h1>
          <h1 className="text-[#ff6e3a]">19</h1>
        </div>
        <div>
          <Slider
            defaultValue={[19]}
            max={42}
            step={1}
            className={cn("w-[100%]", className)}
            {...props}
          />
        </div>
        <VitaminChoice />
        <div className="flex justify-between pt-3">
          <h1>Turn Off Subtitle</h1>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Settings;
