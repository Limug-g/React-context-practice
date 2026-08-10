import { ThemeProvider } from "./providers/ThemeProvider";
import { useTheme } from "./contexts/Themecontext";

function Header() {
  const themeValue = useTheme();

  return (
    <header
      className={`app-header ${themeValue === "dark" ? "dark" : "light"}`}
    >
      <h1>내 쇼핑몰</h1>
      <p>현재 테마: {themeValue === "dark" ? "다크 모드" : "라이트 모드"}</p>
    </header>
  );
}

function ThemeToggleButton() {
  const [theme, toggleTheme] = useTheme;

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
