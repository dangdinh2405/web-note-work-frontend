import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen h-screen text-center bg-slate-50 m-0 p-0">
      <img
        src="/404_NotFound.png"
        alt="not found"
        className="mb-6 w-[600px] max-w-full h-auto"
      />

      <a
        href="/"
        className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark"
      >
        Quay về trang chủ
      </a>
    </div>
  );
};
export default NotFound;