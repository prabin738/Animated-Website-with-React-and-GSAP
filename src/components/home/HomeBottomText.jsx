import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-between gap-2 bg-red-500 ">
      <Link className="text-[6.5vw] leading-tight border-5 border-white rounded-full px-10 py-1 pt-1 p-0 uppercase">
        Progects
      </Link>
      <Link className="text-[6.5vw] leading-tight border-5 border-white rounded-full px-10 py-1 pt-1 p-0 uppercase">
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
