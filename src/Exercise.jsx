import { ThemeProvider } from "./providers/ThemeProvider";
//provider 파일에 있는거
import { useTheme } from "./contexts/Themecontext";
//context 파일에 있는거

function Header() {
  const {theme} = useTheme();
  //useTheme이라는 커스텀 훅(함수)에서 context를 꺼내는 작업 

  return (
    <header
      className={`app-header ${theme === "dark" ? "dark" : "light"}`}
    >
      <h1>내 쇼핑몰</h1>
      <p>현재 테마: {theme === "dark" ? "다크 모드" : "라이트 모드"}</p>
    </header>
  );
}

function ThemeToggleButton() {
  const {theme, toggleTheme} = useTheme();
  //useTheme이라는 커스텀 훅(함수)에서 context(필요한 것들)를 꺼내는 작업 

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "dark" ? "☀️ 라이트 모드로" : "🌙 다크 모드로"}
    </button>
  );
}

export default function Exercise() {
  return (
    // TODO 11: ThemeProvider로 아래 컴포넌트들을 감싸세요.
    <ThemeProvider>
      <div className="exercise-card">
        <Header />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}
