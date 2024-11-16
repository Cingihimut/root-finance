import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface StyleProps {
  ul: string;
  link: string;
  icon: string;
}

interface NavbarItemsProps {
  style: StyleProps;
  itemsIndex: number;
}

export const items = [
  [
    { name: "Get USDe", path: "/get-usde" },
    { name: "Liquidity", path: "/get-usde" },
    { name: "Defi Vault", path: "/get-usde" },
    { name: "Portofolio", path: "/get-usde" },
  ],
  [{ name: "Claim APY", path: "/claim" }],
];

const NavbarItems: FC<NavbarItemsProps> = ({ style, itemsIndex }) => {
  const selectedItems = items[itemsIndex] || []; // Default ke array kosong jika index tidak valid

  return (
    <div>
      <ul className={style.ul}>
        {selectedItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className={style.link}>
              <span>{item.name}</span>
              <ArrowUpRight className={style.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarItems;
