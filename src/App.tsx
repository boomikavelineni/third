import React, { useState } from 'react';
import { RouterProvider, useRouter } from './components/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Works } from './components/Works';
import { Contact } from './components/Contact';
import { ContactForm } from './components/ContactForm';
import { motion, AnimatePresence } from 'motion/react';

function MainLayout() {
  const { pathname } = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const renderContent = () => {
    if (pathname === '/') {
      return <Home />;
    }
    if (pathname === '/about') {
      return <Contact />;
    }
    if (pathname.startsWith('/works') || pathname === '/multimedia' || pathname === '/writing' || pathname === '/film') {
      return <Works />;
    }
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl font-black text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for does not exist.</p>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#181513] text-[#FAF9F5] font-sans selection:bg-[#E8A2A2]/30 selection:text-[#FAF9F5]">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />

      {/* CONTACT Pop Up / Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ContactForm onClose={() => setIsContactOpen(false)} title="SEND MESSAGE" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}
