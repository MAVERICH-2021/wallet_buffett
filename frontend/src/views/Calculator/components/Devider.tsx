import { ReactNode } from "react";

interface DeviderProps {
  content: ReactNode;
}

const Devider = ({ content }: DeviderProps) => {
  return <p className=" text-xl inline-block m-4">{content}</p>;
};

export default Devider;
