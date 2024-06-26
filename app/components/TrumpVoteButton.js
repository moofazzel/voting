"use client";

import { useFormStatus } from "react-dom";

const TrumpVoteButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-center mt-5">
      <button
        disabled={pending}
        className="flex gap-2 w-full md:w-[300px] sm:w-[200px] justify-center items-center bg-blue-500 px-6 py-2.5 text-white font-semibold hover:bg-blue-600 group rounded-md tracking-wider text-base sm:text-xl disabled:bg-slate-400"
      >
        <span>{pending ? "Voting..." : "Vote"}</span>
        <svg
          className={`group-hover:-translate-y-[2px] transition-transform duration-300 ${
            pending && "animate-pulse"
          } `}
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"></path>
        </svg>
      </button>
    </div>
  );
};

export default TrumpVoteButton;
