import Flexbox from "../../components/Flexbox";
import React, { useState } from "react";
import Flag from "react-world-flags";
import styled from "styled-components";

const LanguageSwitch = () => {
  const [currLanguage, setCurrLanguage] = useState<string>(defaultLanguage);

  return (
    <Flexbox
      margin={["0 0 20px auto", "0 0 0 auto"]}
      width="40px"
      alignItems="center"
      order={[-1, "initial"]}
    >
      {languages.map((language) => {
        return (
          <Button
            key={language}
            onClick={() => {
              // setCurrLanguage(
              //   languages.filter((language) => language !== currLanguage)[0]
              // );
            }}
            visible={language === currLanguage}
          >
            <Flexbox width="100%" alignItems="flex-end" paddingBottom="5px">
              <Flag code={language} />
            </Flexbox>
          </Button>
        );
      })}
    </Flexbox>
  );
};

type ButtonProps = {
  visible?: boolean;
};

const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  display: ${({ visible }) => !visible && "none"};
`;

const defaultLanguage = "POL";
const languages = ["GBR", "POL"];

export default LanguageSwitch;
