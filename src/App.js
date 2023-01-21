import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Place from "./pages/Place/Place";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/:placeId" element={<Place />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
