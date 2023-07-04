import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.adBackgroundColor};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  column-gap: 6rem;
  padding: 4rem;
`;

export const Graphic = styled.div``;

export const TextContainer = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

export const SupportingTexts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors["gray-300"]};
`;

export const Title = styled.p`
  font-size: ${(props) => props.theme.text.textLG};
  font-weight: 500;
  color: ${(props) => props.theme.colors["gray-600"]};
`;

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.text.textNormal};
  font-weight: 500;
  color: ${(props) => props.theme.colors["gray-600"]};
  margin-bottom: 1rem;
`;

export const SeeDemo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const DemoButton = styled.a`
  background-color: ${(props) => props.theme.colors["blue-300"]};
  color: #fff;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors["blue-100"]};
    transition: 0.3s;
  }
`;

export const CardInfo = styled.span`
  display: flex;
  align-items: center;
`;

export const SeeRating = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Rating = styled.span`
  font-weight: 500;
`;
