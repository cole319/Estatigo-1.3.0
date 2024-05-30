import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-[500px] lg:min-h-[720px] ">
      <div className="bg-[url('/estatigo4.jpg')] lg:w-[50%] bg-no-repeat bg-cover bg-center hidden lg:flex md:justify-center lg:items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-neutral-50 text-5xl font-bold">
            Welcome to <span className="text-rose-500">Estatigo</span>
          </h1>
          <br />
          <p className="text-neutral-50 text-2xl font-normal">
            The quest for your dream home ends here
          </p>
          <br />
          <br />
          <p className="text-neutral-50 font-normal">
            Please <span className="text-rose-500">sign in</span> to continue
          </p>
        </div>
      </div>
      <div className="w-full mt-40 lg:mt-0 lg:w-[50%] flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}
