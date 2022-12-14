import { HeaderContainer } from "./styles";

import logoImg from "../../assets/logo.svg";

import Image from "next/future/image";
import Link from "next/link";
import { Cart } from "../Cart";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src={logoImg} alt="logo" />
        </a>
      </Link>

      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
