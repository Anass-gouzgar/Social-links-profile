import Image from "next/image";
import avatar from "../assets/images/avatar-jessica.jpeg";

export default function Home() {
  return (
    <main className="bg-my_Off_Black min-h-screen min-w-full flex flex-col items-center justify-center ">
      <section className=" bg-my_Dark_Grey min-w-[300px] h-[600px] rounded-xl flex flex-col items-center justify-center p-4 pb-0  pt-0">
        <Image
          src={avatar}
          alt={"Jessica Avatar"}
          width={100}
          height={100}
          className="rounded-full mb-6"
        />
        <h1 className="text-my_White text-3xl mb-3 ">Jessica Randall</h1>
        <h3 className="text-my_Green mb-6">London, United Kingdom</h3>
        <p className="text-my_White text-sm mb-5">
          "Front-end developer and avid reader."
        </p>
        <button className="text-my_White bg-my_Grey w-full mb-4 p-2 text-sm rounded-md font-bold cursor-pointer hover:bg-my_Green hover:text-my_Off_Black">
          GitHub
        </button>
        <button className="text-my_White bg-my_Grey w-full mb-4 p-2 text-sm rounded-md font-bold cursor-pointer hover:bg-my_Green hover:text-my_Off_Black">
          Frontend Mentor
        </button>
        <button className="text-my_White bg-my_Grey w-full mb-4 p-2 text-sm rounded-md font-bold cursor-pointer hover:bg-my_Green hover:text-my_Off_Black">
          Linkedin
        </button>
        <button className="text-my_White bg-my_Grey w-full mb-4 p-2 text-sm rounded-md font-bold cursor-pointer hover:bg-my_Green hover:text-my_Off_Black">
          Twitter
        </button>
        <button className="text-my_White bg-my_Grey w-full p-2 mb-0 text-sm rounded-md font-bold cursor-pointer hover:bg-my_Green hover:text-my_Off_Black">
          Instagram
        </button>
      </section>
    </main>
  );
}


