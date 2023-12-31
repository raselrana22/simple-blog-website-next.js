import Link from "next/link";

export default async function Home() {

  return (
    <div className="flex justify-center hover:scale-105">
      <Link href={"/home"}>
        <p className='text-3xl font-bold pt-10'>
          <span class='text-pink-500'>Welcome to my</span>
          <span class='text-green-900'>&nbsp;Blog</span>
        </p>
      </Link>
    </div>
  );
}