import Settings from "@/components/Settings";
import TabItem from "@/components/TabItem";

export default function Home() {
  return (
    <main className="flex bg-[#EEF0F2] w-screen h-[93.6vh] md:rounded-tl-3xl">
     <TabItem/>
     <Settings/>
    </main>
  );
}
