import * as S from "./styles";

import { MdOutlineCreditCardOff } from "react-icons/md";

import Image from "next/image";
import adImage from "../../../public/comparativo_img_CTA.png";
import ratingImage from "../../../public/rating.png";
import seloRdImage from "../../../public/selo_RD.png";

export default function Ad() {
  return (
    <S.Container>
      <S.Graphic>
        <Image src={adImage} alt="Grafico para captura de clientes" />
      </S.Graphic>

      <S.TextContainer>
        <S.SupportingTexts>
          <S.Title>
            Pronto para triplicar sua <br />
            <strong>Geração de Leads?</strong>
          </S.Title>

          <S.Subtitle>
            Criação e ativação em <strong>4 minutos.</strong>
          </S.Subtitle>
        </S.SupportingTexts>

        <S.Wrapper>
          <S.SeeDemo>
            <S.DemoButton>Ver demonstração</S.DemoButton>
            <S.CardInfo>
              <MdOutlineCreditCardOff /> &nbsp;
              <strong>Não &nbsp; </strong> é necessário Cartão de Crédito |
            </S.CardInfo>
          </S.SeeDemo>

          <S.SeeRating>
            <Image src={seloRdImage} alt="selo da rd station" width={150} />
            <S.Rating>
              <Image src={ratingImage} alt="nota de satisfação" /> &nbsp; 4.9/5
              média de satisfação
            </S.Rating>
          </S.SeeRating>
        </S.Wrapper>
      </S.TextContainer>
    </S.Container>
  );
}
