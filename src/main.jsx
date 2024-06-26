
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { LanguageProvider } from './helpers/useLanguage.jsx';
const queryClient = new QueryClient();
ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <QueryClientProvider client={ queryClient }>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </QueryClientProvider>
);
