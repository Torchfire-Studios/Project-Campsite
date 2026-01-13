import Image from "next/image";

export default function Ethos() {
  return (
    <div className="relative flex items-center justify-center min-h-screen -mt-[145px] pt-[145px]">
      <Image
        src="/ethossnapshot.png"
        alt="Hero background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="relative z-10 text-center bg-black/40 backdrop-blur-sm rounded-xl px-24 py-12 w-[900px]">
        <h1 className="text-white mb-9 text-8xl font-bold">E T H O S</h1>
        <div className="h-32 flex items-center justify-center text-xl text-gray-200">
          Ethos is Lorem ipsum dolor sit amet consectetur adipiscing elit.
          Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
          cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu.
        </div>
      </div>
    </div>
  );
}
