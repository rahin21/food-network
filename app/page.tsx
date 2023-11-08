import Settings from "@/components/Settings";
import TabItem from "@/components/TabItem";
import MidDesc from "@/components/MidDesc";

export default function Home() {
  return (
    <main className="flex bg-[#EEF0F2] w-screen md:rounded-tl-3xl">
     <TabItem/>
     <MidDesc/>
     <Settings/>
    </main>
  );
}
