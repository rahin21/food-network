import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./ui/button";
import { BiSearch } from "react-icons/bi";
import { fruits, vegs } from "@/app/data";

const TabItem = () => {
    return (
    <div className="bg-background flex justify-center w-[300px] m-4 rounded-xl">
      <Tabs defaultValue="fruits" className="w-[280px] p-2 py-4">
        <div className="border-2 border-[#e6542735] rounded-lg">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
            <TabsTrigger value="vegs">Vegetables</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="fruits">
          <div className="flex items-center py-2 ">
            <Input type="text" className=" h-10 w-[16.5rem] " />
            <Button cl="absolute ml-[14.2rem] text-[#ff6e3a] bg-[#e6542735] rounded-sm">
              <BiSearch />
            </Button>
          </div>
          <div className="h-[700px] overflow-auto">
            <Card >
              <Label>Fruit lists</Label>
              {fruits.map((fruit, i) => (
                <CardContent className="space-y-2 flex space-x-4 mt-3" key={i}>
                  <Image
                    src={`/${fruit.name}.svg`}
                    alt={`${fruit.name}`}
                    width={60}
                    height={60}
                  />
                  <div className="space-y-1">
                    <Label className="text-lg">
                      {fruit.name[0].toLocaleUpperCase() + fruit.name.slice(1)}
                    </Label>
                    <CardDescription className="text-sm">
                      {fruit.desc}
                    </CardDescription>
                  </div>
                </CardContent>
              ))}
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="vegs">
          <div className="flex items-center py-2 ">
            <Input type="text" className=" h-10 w-[16.5rem] " />
            <Button cl="absolute ml-[14.2rem] text-[#ff6e3a] bg-[#e6542735] rounded-sm">
              <BiSearch />
            </Button>
          </div>
          <div className="h-[700px] overflow-auto">
            <Card >
              <Label>Fruit lists</Label>
              {vegs.map((veg, i) => (
                <CardContent className="space-y-2 flex space-x-4 mt-3" key={i}>
                  <Image
                    src={`/${veg.name}.png`}
                    alt={`${veg.name}`}
                    width={60}
                    height={50}
                  />
                  <div className="space-y-1">
                    <Label className="text-lg">
                      {veg.name[0].toLocaleUpperCase() + veg.name.slice(1)}
                    </Label>
                    <CardDescription className="text-sm">
                      {veg.desc}
                    </CardDescription>
                  </div>
                </CardContent>
              ))}
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabItem;
