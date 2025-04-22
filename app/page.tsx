import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a> 
        <Image
          src="/profile.png"
          alt="me"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Hey there! 👋 Welcome to my page!
      </h1>
      <h2>
        <b>About me</b>
      </h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm Tommy, and I'm on a journey to grow my skills in tech and finance. I'm also excited to explore new opportunities along the way! 
        </p>
        <p>
          Previously, I had the incredible opportunity to be mentored by NASA scientists to develop a mission concept for a spacecraft.
          
          I ultimately earned a Bachelor's degree in Computer Science from the University of California, Berkeley (Go Bears!).
        </p>
        <p>
          I am passionate about building technologies that create social impact. I'm constantly expanding my knowledge in rapidly evolving areas like cybersecurity, system design, and cloud computing.
        </p>
        <p>
          In my free time, I love exploring the world around me—whether it's connecting with people and their cultures, diving into books (currently reading about finance and economics), or traveling and trying new cuisines. You name it!
        </p>
        <p>
          Feel free to reach out to me at <b>phangtommy at berkeley dot edu</b> — I'm eager to connect! 
        </p>
      </div>
    </section>
  );
}
