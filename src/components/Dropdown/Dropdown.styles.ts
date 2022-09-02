import styled from "styled-components";

// ================Variables================== //

const darkTheme = "dark";
// const lightTheme = 'light'

const whiteBackgroundScreen = "#d2d4d2";
const blackBackgroundScreen = "#363636";

const whiteBackgroundHover = "white";
const blackBackgroundHover = "black";

const whiteBackgroundList = "#e6e6e6";
const blackBackgroundList = "#595959";

const whiteFont = "whitesmoke";
const blackFont = "#363636";

// ================Dropdown================== //

export const DropdownStyled = styled.section<{
  dropdownTheme: string | undefined;
  dropdownFont?: string | undefined;
}>`
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-width: 280px;
  width: inherit;

  color: ${(props) =>
    props.dropdownTheme === darkTheme ? whiteFont : blackFont};
  font-family: ${(props) =>
    props.dropdownFont === undefined ? "Trebuchet MS" : props.dropdownFont};
`;

export const DropdownScreenStyled = styled.section<{
  dropdownTheme: string | undefined;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: fit-content;
  min-width: 280px;
  margin: 0;
  padding: 0;

  background-color: ${(props) =>
    props.dropdownTheme === darkTheme
      ? blackBackgroundScreen
      : whiteBackgroundScreen};
  color: ${(props) =>
    props.dropdownTheme === darkTheme ? whiteFont : blackFont};
`;

export const DropdownSelectedItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding-right: 20px;

  & > p {
    padding-left: 10px;
  }
`;

export const DropdownScreenButtonStyled = styled.button<{
  dropdownTheme: string | undefined;
  dropdownOpen: boolean;
}>`
  border: none;
  width: 50px;
  height: 25px;
  border-radius: 50px;
  margin: 10px;

  background-color: ${(props) =>
    props.dropdownTheme === darkTheme
      ? whiteBackgroundScreen
      : blackBackgroundScreen};
  color: ${(props) =>
    props.dropdownTheme === darkTheme ? blackFont : whiteFont};

  &:hover {
    background-color: ${(props) =>
      props.dropdownTheme === darkTheme
        ? whiteBackgroundHover
        : blackBackgroundHover};
  }

  & > p {
    margin: 0;
    padding: 0;
    transition: 0.5s all ease-in-out;
    rotate: ${(props) => (props.dropdownOpen ? "180deg" : "0deg")};
  }
`;

export const DropdownOptionsStyled = styled.section<{
  dropdownTheme: string | undefined;
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: inherit;
  height: fit-content;
  min-width: 280px;

  border-top: ${(props) =>
    props.dropdownTheme === darkTheme
      ? `2px solid ${whiteFont}`
      : `2px solid ${blackFont}`};
  background-color: ${(props) =>
    props.dropdownTheme === darkTheme
      ? blackBackgroundList
      : whiteBackgroundList};
  color: ${(props) =>
    props.dropdownTheme === darkTheme ? whiteFont : blackFont};
`;

// ================DropdownSelectedItem================== //

export const DropdownSelectedItemStyled = styled.div<{
  dropdownTheme: string | undefined;
}>`
  cursor: context-menu;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 25px;
  border-radius: 50px;
  padding: 0 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.dropdownTheme === darkTheme
      ? whiteBackgroundScreen
      : blackBackgroundScreen};
  color: ${(props) =>
    props.dropdownTheme === darkTheme ? blackFont : whiteFont};

  &:hover {
    background-color: ${(props) =>
      props.dropdownTheme === darkTheme
        ? whiteBackgroundHover
        : blackBackgroundHover};
  }

  & > p {
    margin: 0;
    padding: 0;
  }
`;

export const DropdownSelectedItemButtonStyled = styled.button<{
  dropdownTheme: string | undefined;
}>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: 0 0 0 10px;
  padding: 0;

  color: ${(props) =>
    props.dropdownTheme === darkTheme ? blackFont : whiteFont};
`;

// ================DropdownUl================== //

export const DropdownUlStyled = styled.ul<{
  dropdownTheme: string | undefined;
}>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  min-width: 280px;
  width: inherit;
  list-style: none;

  border-bottom: ${(props) =>
    props.dropdownTheme === darkTheme
      ? `1px solid ${whiteFont}`
      : `1px solid ${blackFont}`};
`;

export const DropdownUlNameStyled = styled.h1`
  margin: 0;
  padding: 20px 0px 0px 10px;
  font-size: large;
  font-weight: bold;
  width: inherit;
`;

export const DropdownLiStyled = styled.li<{
  dropdownTheme: string | undefined;
  selected: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 60px;
  height: 40px;

  text-decoration: ${(props) => (props.selected ? "2px underline" : "none")};

  &:hover {
    background-color: ${(props) =>
      props.dropdownTheme === darkTheme
        ? blackBackgroundScreen
        : whiteBackgroundScreen};
  }
`;
