import { motion } from "framer-motion";

export const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Primary color blob (blue) */}
    <motion.div 
      className="absolute -right-1/4 -top-1/4 w-[600px] h-[600px] rounded-full bg-primary-200/60 mix-blend-multiply"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    
    {/* Secondary color blob (orange) */}
    <motion.div 
      className="absolute left-1/4 top-1/3 w-[300px] h-[300px] rounded-full bg-secondary-200/40 mix-blend-multiply"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
    />
    
    {/* Accent color blob (green) */}
    <motion.div 
      className="absolute right-1/3 -bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent-200/40 mix-blend-multiply"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
    />
    
    {/* Subtle texture overlay */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235A8AD3' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

export const SecondaryBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Secondary color blob (orange) */}
    <motion.div 
      className="absolute -left-1/4 -top-1/4 w-[500px] h-[500px] rounded-full bg-secondary-200/50 mix-blend-multiply"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    
    {/* Primary color blob (blue) */}
    <motion.div 
      className="absolute right-1/4 bottom-1/3 w-[250px] h-[250px] rounded-full bg-primary-200/40 mix-blend-multiply"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
    />
    
    {/* Accent color blob (green) */}
    <motion.div 
      className="absolute -right-1/3 -bottom-1/4 w-[350px] h-[350px] rounded-full bg-accent-200/40 mix-blend-multiply"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
    />
  </div>
);

export const AccentBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Accent color blob (green) */}
    <motion.div 
      className="absolute -right-1/4 -top-1/4 w-[500px] h-[500px] rounded-full bg-accent-200/50 mix-blend-multiply"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    
    {/* Primary color blob (blue) */}
    <motion.div 
      className="absolute left-1/4 bottom-1/3 w-[250px] h-[250px] rounded-full bg-primary-200/40 mix-blend-multiply"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
    />
    
    {/* Secondary color blob (orange) */}
    <motion.div 
      className="absolute -left-1/3 -bottom-1/4 w-[350px] h-[350px] rounded-full bg-secondary-200/40 mix-blend-multiply"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
    />
  </div>
);