import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");
  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  });

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container>
      {<City onClick={() => setInputMode(true)}>{city}</City>}
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const FormElement = styled.form`
  display: flex;
  position: relative;
`;
const InputField = styled.input`
  padding: 5px;
  width: 80px;
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background: #46618b;
  border: none;
  color: white;
  &:focus {
    outline: 0;
  }
`;
const SearchButton = styled.button`
  padding: 5px;
  background: #394e70;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background-blend-mode: true;
`;
const CancelButton = styled.span`
  font-size: 0.8rem;
  position: absolute;
  color: black;
  background: #557fc2;
  display: flex;
  cursor: pointer;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  right: -12px;
  top: -10px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  text-align: center;
`;
const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.8rem;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -2px;
  }
`;
const Country = styled.h3`
  font-family: "Fira Sans" sans-serif;
  font-size: 1.1rem;
`;
