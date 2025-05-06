import { Button } from "@/components/ui/button";
import Layouts from "@/components/Layouts";

export default function ButtonDemo() {
  return (
    <Layouts pageTitle=" | Button Demo">
      <section className="py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Neobrutalism Button Demo</h1>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Default Variant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4">
              <Button variant="default" size="default">Default</Button>
              <Button variant="default" size="sm">Small</Button>
              <Button variant="default" size="lg">Large</Button>
            </div>
            <div className="flex gap-4">
              <Button variant="default" size="default" className="bg-pink-500 text-white">Pink</Button>
              <Button variant="default" size="default" className="bg-blue-500 text-white">Blue</Button>
              <Button variant="default" size="default" className="bg-green-400 text-black">Green</Button>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">No Shadow Variant</h2>
          <div className="flex gap-4 mb-10">
            <Button variant="noShadow" size="default">No Shadow</Button>
            <Button variant="noShadow" size="default" className="bg-pink-500 text-white">Pink</Button>
            <Button variant="noShadow" size="default" className="bg-blue-500 text-white">Blue</Button>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Neutral Variant</h2>
          <div className="flex gap-4 mb-10">
            <Button variant="neutral" size="default">Neutral</Button>
            <Button variant="neutral" size="sm">Small</Button>
            <Button variant="neutral" size="lg">Large</Button>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Reverse Variant</h2>
          <div className="flex gap-4 mb-10">
            <Button variant="reverse" size="default">Reverse</Button>
            <Button variant="reverse" size="default" className="bg-pink-500 text-white">Pink</Button>
            <Button variant="reverse" size="default" className="bg-blue-500 text-white">Blue</Button>
          </div>
        </div>
      </section>
    </Layouts>
  );
} 