import { createContext, useContext, useMemo, useState, useCallback } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState([]);

  const toggle = useCallback((hotel) => {
    setIds((prev) => {
      const exists = prev.includes(hotel.id);
      if (exists) {
        toast(`Removed ${hotel.name} from wishlist`, { icon: "✕" });
        return prev.filter((id) => id !== hotel.id);
      }
      toast.success(`Saved ${hotel.name} to wishlist`);
      return [...prev, hotel.id];
    });
  }, []);

  const isSaved = useCallback((id) => ids.includes(id), [ids]);

  const value = useMemo(() => ({ ids, toggle, isSaved }), [ids, toggle, isSaved]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}
