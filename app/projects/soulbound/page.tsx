import Image from "next/image";

export default function Soulbound() {
  return (
    <div className="relative flex items-center justify- min-h-screen">
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        className="object-cover -z-10"
        priority
      />
    </div>
  );
}
