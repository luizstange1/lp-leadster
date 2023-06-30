import styled from "styled-components";

export const Banner = styled.div`
  background-color: ${(props) => props.theme.colors.bannerColor};
  height: 32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.buttonColor};
  font-size: ${(props) => props.theme.text.textXXXLG};
  border-bottom: 1px solid ${(props) => props.theme.colors["gray-300"]};
  position: relative;
  white-space: nowrap;
  background: ${(props) => props.theme.colors.titlecolor};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DetailImg = styled.img`
  position: absolute;
  left: calc(50% - (-275px));
  right: 30px;
  width: 50px;
  top: 330px;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors["gray-600"]};
  font-size: ${(props) => props.theme.text.textXXLG};
  font-weight: 500;
`;

export const Tag = styled.span`
  border: 3px solid;
  border-radius: 24px 24px 24px 8px;
  border-color: ${(props) => props.theme.colors["blue-300"]};
  color: ${(props) => props.theme.colors["blue-300"]};
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 1rem 0.25rem 1rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors["gray-800"]};
  font-weight: 500;
`;

export const Span = styled.b``;
