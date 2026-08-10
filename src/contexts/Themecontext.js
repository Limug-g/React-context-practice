import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

//커스텀 훅 만들기 
export function useTheme(){
  const themeValue = useContext(ThemeContext);

  if(themeValue === null){
    throw new Error('useTheme 함수는 ThemeProvider 안에서 사용하세요')
  }

  return themeValue;
}