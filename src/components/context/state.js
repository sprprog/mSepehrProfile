import { createContext } from "react";

const stateContext = createContext({
  handelBorderLi: () => {},
  a: 0,
  borderLiOne: 'none',
  borderLiTwo: 'none',
  borderLiThree: 'none',
  borderLiFour: 'none',
});

export default stateContext;