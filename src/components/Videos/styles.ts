import styled from "styled-components";

export const Wrapper = styled.div``;

export const VideoContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const Video = styled.a`
  background-color: white;
  box-shadow: 10px 10px 5px 0px rgba(222, 222, 222, 1);
  border-radius: 16px;
  padding-bottom: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;

  .video-thumbnail {
    width: 100%;
    border-radius: 16px 16px 0 0;
  }
`;

export const VideoTitle = styled.h2`
  font-size: ${(props) => props.theme.text.textNormal};
  color: ${(props) => props.theme.colors["gray-600"]};
  font-weight: 600;
`;

export const SelectPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  border-top: 2px solid ${(props) => props.theme.colors["gray-300"]};
  margin-top: 3rem;
`;

export const PageText = styled.span`
  font-size: ${(props) => props.theme.text.textNormal};
  color: ${(props) => props.theme.colors["gray-600"]};
  font-weight: bold;
  margin-top: 3rem;
`;

export const PageNumber = styled.a`
  cursor: pointer;
  margin-top: 3rem;
  font-weight: 500;
`;
