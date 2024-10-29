import { Navbar } from "@/components/ui/navbar";

export default function Componentslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
