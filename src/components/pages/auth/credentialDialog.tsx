import Link from "next/link";

function CredentialDialog() {
  return (
    <div className="flex md:w-fit w-full items-center justify-center gap-5 fixed bg-primary z-40 top-0 left-2/4 -translate-x-2/4 p-5 rounded-lg">
      <div className="flex flex-col justify-center">
        <span className="text-xl text-white">Your data is too sort</span>
        <span className="text-sm text-white">
          Please add your extra information
        </span>
        <span className="text-xs text-yellow-400 underline">
          password and email/phone
        </span>
      </div>
      <div>
        <Link
          href="/account"
          className="bg-white text-black  px-10 py-1 hover:bg-gray-300 rounded"
        >
          Go
        </Link>
      </div>
    </div>
  );
}

export default CredentialDialog;
