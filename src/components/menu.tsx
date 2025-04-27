import Link from "next/link";

interface MenuProps {
  op1?: string;
  op2?: string;
  op3?: string;
  op4?: string;
}

export const Menu: React.FC<MenuProps> = ({ op1, op2, op3, op4 }) => {
  return (
    <header>
      <nav className="text-large bg-[white] text-[black] font-robFont font-thin gap-5 h-[50px] flex items-center justify-center">
        <Link className="font-black" href={"/"}>{op1}</Link>
        <Link className="font-black" href={"/hookPage"}>{op2}</Link>
        <Link className="font-black" href={"/axiosPage"}>{op3}</Link>
         <Link className="font-black" href={"/serverSidePage"}>
          {op4}
        </Link>
       
      </nav>
    </header>
  );
};