import { motion } from "framer-motion";

export const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large blue circle */}
    <div 
      className="absolute -right-1/4 -top-1/4 w-[600px] h-[600px] rounded-full bg-blue-100/50 mix-blend-multiply"
      style={{ transform: 'translate(0, 0)' }}
    />
    
    {/* Small purple circle */}
    <div 
      className="absolute left-1/4 top-1/3 w-[300px] h-[300px] rounded-full bg-indigo-100/50 mix-blend-multiply"
      style={{ transform: 'translate(0, 0)' }}
    />
    
    {/* Teal accent */}
    <div 
      className="absolute right-1/3 -bottom-1/4 w-[400px] h-[400px] rounded-full bg-teal-100/50 mix-blend-multiply"
      style={{ transform: 'translate(0, 0)' }}
    />
    
    {/* Optional: subtle texture overlay */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA9B4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </div>
); 