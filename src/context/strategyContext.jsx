import { createContext, useContext } from "react";

export const StrategyContext = createContext();

export const useStrategyContext = () => useContext(StrategyContext);

export const StrategyProvider = ({ children }) => {
  const strategyArray = [
    {
      logo: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71112277d9393554d8e86_Strategy%20Icon%2001.svg",
      head: "Client Onboarding and Strategy Development",
      star: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71111b566b4f91fb23cb6_Strategy%20List%20Shape.svg",
      text1:
        "Initial meeting to understand client goals, target audience, and brand identity.",
      text2:
        "Conduct a thorough analysis of the client's current online presence.",
      img: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f12851e3840dfa72389_Strategy%20Image%2001-p-500.webp",
    },
    {
      logo: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d711112708e5116b953dba_Strategy%20Icon%2002.svg",
      head: "Campaign Planning and Execution",
      star: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71111b566b4f91fb23cb6_Strategy%20List%20Shape.svg",
      text1:
        "Initial meeting to understand client goals, target audience, and brand identity.",
      text2:
        "Conduct a thorough analysis of the client's current online presence.",
      img: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f12bb53a5b87f34f533_Strategy%20Image%2002-p-500.webp",
    },
    {
      logo: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d711118aa426ac4af2a045_Strategy%20Icon%2003.svg",
      head: "Content Creation and Distribution",
      star: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71111b566b4f91fb23cb6_Strategy%20List%20Shape.svg",
      text1:
        "Initial meeting to understand client goals, target audience, and brand identity.",
      text2:
        "Conduct a thorough analysis of the client's current online presence.",
      img: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f1291140314a053b65d_Strategy%20Image%2003-p-500.webp",
    },
  ];
  return (
    <StrategyContext.Provider value={strategyArray}>
      {children}
    </StrategyContext.Provider>
  );
};
