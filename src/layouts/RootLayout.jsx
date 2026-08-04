import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/common/ScrollProgress";
import BackToTop from "../components/common/BackToTop";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function RootLayout() {
  const location = useLocation();
  useScrollToTop();

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="page-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
