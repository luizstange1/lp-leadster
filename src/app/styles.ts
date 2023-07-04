import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  flex-direction: column;
`;

export const Section = styled.section`
  /* width: 1280px; */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${(props) => props.theme.colors["gray-300"]};
`;

export const NavButtons = styled.ul``;

export const ListButtons = styled.li`
  display: flex;
  column-gap: 1rem;
`;

export const Button = styled.a`
  border: 1px solid ${(props) => props.theme.colors["gray-600"]};
  border-radius: 16px;
  color: ${(props) => props.theme.colors["gray-600"]};
  font-weight: 500;
  padding: 0.25rem 1rem 0.25rem 1rem;

  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors["blue-300"]};
    color: ${(props) => props.theme.colors["blue-300"]};
  }
`;

export const ContainerSortBy = styled.div`
  display: flex;
  align-items: center;
`;

export const TextSortBy = styled.span`
  display: flex;
  column-gap: 0.5rem;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const SelectSortBy = styled.select`
  padding: 0.5rem;
  border-radius: 8px;
  color: ${(props) => props.theme.colors["gray-600"]};
  cursor: pointer;
  font-weight: bold;
`;

export const SelectOption = styled.option``;
