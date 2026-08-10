import { createContext, useContext } from "react";

export const themeContext = createContext(null);

//커스텀 훅 만들기 
export function useTheme(){
  const themeValue = useContext(themeContext);

  if(themeValue === null){
    throw new Error('useTheme 함수는 ThemeProvider 안에서 사용하세요')
  }

  return themeValue;
}