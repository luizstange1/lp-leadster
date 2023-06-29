import * as S from "./styles";

import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Header() {
  return (
    <S.Header>
      <Image src={logo} alt="Logo da empresa" />
    </S.Header>
  );
}
