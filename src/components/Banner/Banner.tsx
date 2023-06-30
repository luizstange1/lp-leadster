import * as S from "./styles";

import bannerDetail from "../../../public/asset-header.png";
import Image from "next/image";

export default function Banner() {
  return (
    <S.Banner>
      <S.Tag>Webinars Exclusivos</S.Tag>

      <S.TitleWrapper>
        <S.Subtitle>Menos Conversinha,</S.Subtitle>

        <S.Title>
          Mais Conversão
          <S.DetailImg src="/asset-header.png" />
        </S.Title>
      </S.TitleWrapper>

      <S.Description>
        Conheça as estratégias que <S.Span>mudaram o jogo</S.Span> e como
        aplicá-las no seu negócio
      </S.Description>
    </S.Banner>
  );
}
