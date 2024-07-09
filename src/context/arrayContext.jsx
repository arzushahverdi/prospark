import React, { createContext, useContext } from "react";

export const ArrayContext = createContext();

export const useArrayContext = () => useContext(ArrayContext);

export const ArrayProvider = ({ children }) => {
  const rowArray = [
    {
      num: "01",
      header: "Ads design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      num: "02",
      header: "Data Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      num: "03",
      header: "SEO Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      num: "04",
      header: "Email Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      num: "05",
      header: "Content Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      num: "06",
      header: "Social Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];
  return (
    <ArrayContext.Provider value={rowArray}>{children}</ArrayContext.Provider>
  );
};
