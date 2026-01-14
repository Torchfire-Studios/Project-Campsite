import Image from "next/image";

export default function Soulbound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen -mt-[115px] pt-[145px]">
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
