import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { TypeFlow } from './components/TypeFlow';
import './styles.css';

const App = () => {
  const [text, setText] = useState('');
  const fullText = 'Welcome to TypeFlow! This text is being streamed...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-400">TypeFlow Demo</h1>
        <div className="p-6 border border-gray-800 rounded-lg bg-gray-900 min-h-[200px]">
          <TypeFlow text={text} className="text-2xl text-green-400" />
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
