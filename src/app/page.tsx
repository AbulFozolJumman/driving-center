import imgd from "@/assets/de964b06-e1de-42a8-8442-d571e44feb6b.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Driving Center</h1>
      <Image
        height={1000}
        width={500}
        src={imgd}
        alt="Drive"
        className="mx-auto mt-10"
      />
    </div>
  );
};

export default HomePage;
