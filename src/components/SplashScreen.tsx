import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#d2e6b5]">
      <motion.img
        src="/logo.png"
        alt="Mathdi Logo"
        className="w-32 mb-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <div className="w-48 h-2 bg-white/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        />
      </div>
    </div>
  );
}
