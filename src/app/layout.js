import './globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'A simple todo app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto">
            <a href="/" className="text-2xl font-bold">Todo App</a>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
