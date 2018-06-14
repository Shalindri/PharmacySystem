import React from "react";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy;{" "}
      {new Date().getFullYear() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getDate()}{" "}
      HIS Pharmacy System
    </footer>
  );
};
