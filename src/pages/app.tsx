import { useTheme } from "@/providers/theme-provider";

const App = () => {
  const { theme } = useTheme();
  return <div>App {theme}</div>;
};

export default App;
