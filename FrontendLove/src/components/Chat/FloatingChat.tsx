import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { ChatWindow } from "./ChatWindow";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
 
export function FloatingChat() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
 
  if (!user?.studentId) return null;
 
  return (
    <>
      {/* Janela do chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-[480px] glass-card shadow-2xl flex flex-col overflow-hidden"
          >
            <ChatWindow
              studentId={user.studentId}
              studentName="Personal Trainer"
              onClose={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Botão flutuante */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full gradient-primary shadow-lg shadow-primary/30 flex items-center justify-center text-primary-foreground"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}