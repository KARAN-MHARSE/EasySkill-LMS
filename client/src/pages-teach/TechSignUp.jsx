import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function SignUp({ setSignUpPopUp, setSignInPopUp }) {
  console.log(setSignUpPopUp);

  const handlePopUp = () => {
    setSignUpPopUp(false);
    setSignInPopUp(true);
  };
  const closePopUp = () => {
    setSignInPopUp(false);
    setSignUpPopUp(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-10 rounded-5 shadow-xl">
      <div
        onClick={closePopUp}
        className="cursor-pointer absolute right-5 top-5 text-lg"
      >
        <IoMdClose />
      </div>
      <div className="xl:max-w-[400px]">
        <h1 className="text-xl font-bold">Become a easyskill instructor</h1>
        <p className="text-[13px] text-zinc-500 my-2">
          Discover a supportive community of online instructoes. Get instant
          access to all cources creation resources
        </p>
        <form className="flex flex-col gap-2">
          <input
            className="border-2 border-black p-3 text-black placeholder-black font-semibold"
            type="text"
            placeholder="Full name"
            id=""
          />
          <input
            className="border-2 border-black p-3 text-black placeholder-black font-semibold"
            type="email"
            placeholder="Email"
            id=""
          />
          <input
            className="border-2 border-black p-3 text-black placeholder-black font-semibold"
            type="password"
            placeholder="Password"
            id=""
          />
          <div className="flex items-center gap-2">
            <input className="size-[14px]" type="checkbox" name="" id="" />
            <p className="text-zinc-500 text-[14px]">I agreed all policies.</p>
          </div>
          <button className="bg-primaryBlue p-3 text-white font-bold my-2">
            Sign Up
          </button>
        </form>
        <p className="text-[14px] text-zinc-500">
          Already have an account?{" "}
          <Link
            onClick={handlePopUp}
            className="text-primaryBlue font-semibold text-center"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
