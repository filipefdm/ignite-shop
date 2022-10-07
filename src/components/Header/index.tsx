import { HeaderContainer } from "./styles";

import logoImg from "../../assets/logo.svg";

import Image from "next/future/image";
import Link from "next/link";
import { Cart } from "../Cart";


export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src={logoImg} alt="logo" />
        </a>
      </Link>

      <Cart />
    </HeaderContainer>
  );
}
