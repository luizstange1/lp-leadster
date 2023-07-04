"use client";

import Ad from "@/components/Ad/Ad";
import * as S from "./styles";

import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Videos from "@/components/Videos/Videos";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <S.Main>
        <S.Section>
          <S.ButtonContainer>
            <S.NavButtons>
              <S.ListButtons>
                <S.Button>Agências</S.Button>
                <S.Button>Chatbot</S.Button>
                <S.Button>Marketing Digital</S.Button>
                <S.Button>Geração de Leads</S.Button>
                <S.Button>Mídia Paga</S.Button>
              </S.ListButtons>
            </S.NavButtons>

            <S.ContainerSortBy>
              <S.TextSortBy>
                Ordernar por
                <S.SelectSortBy>
                  <S.SelectOption>Data de Publicação</S.SelectOption>
                  <S.SelectOption>Ordem Alfabética</S.SelectOption>
                  <S.SelectOption>Prioridade</S.SelectOption>
                </S.SelectSortBy>
              </S.TextSortBy>
            </S.ContainerSortBy>
          </S.ButtonContainer>

          <Videos />
        </S.Section>

        <S.Section>
          <Ad />
        </S.Section>
      </S.Main>
    </>
  );
}
