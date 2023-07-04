import * as S from "./styles";

import Image from "next/image";

import thumbnail from "../../../public/thumbnail.png";

export default function Videos() {
  return (
    <S.Wrapper>
      <S.VideoContainer>
        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />

          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />

          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />

          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />
          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />
          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />
          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />
          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />
          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>

        <S.Video>
          <Image
            src={thumbnail}
            alt="thumbnail do video"
            className="video-thumbnail"
          />
          <S.VideoTitle>
            Como aumentar sua Geração de <br />
            Leads feat. Traktor
          </S.VideoTitle>
        </S.Video>
      </S.VideoContainer>

      <S.SelectPage>
        <S.PageText>Página</S.PageText>
        <S.PageNumber>1</S.PageNumber>
        <S.PageNumber>2</S.PageNumber>
        <S.PageNumber>3</S.PageNumber>
        <S.PageNumber>4</S.PageNumber>
      </S.SelectPage>
    </S.Wrapper>
  );
}
