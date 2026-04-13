import React from 'react';
import { Shield, Mail, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Branding Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8"
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
          <Shield className="w-12 h-12 text-red-500 relative z-10" />
        </div>
        <h1 className="text-4xl tracking-widest text-white font-light">
          <span className="font-bold">OMNI</span>GUARD
        </h1>
        <p className="text-[10px] tracking-[0.3em] text-slate-500 mt-2 font-mono uppercase">
          Crisis Management System
        </p>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-md bg-brand-card/50 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden tactical-glow"
      >
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              Secure Authentication
            </h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            {/* Operator Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase ml-1">
                Operator Email
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  placeholder="operator@omniguard.io"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Access Code */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase ml-1">
                Access Code
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Authenticate Button */}
            <button 
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-brand-primary/20 transition-all active:scale-[0.98] uppercase"
            >
              Authenticate
            </button>
          </form>

          {/* Card Footer */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex justify-center items-center gap-4">
            <div className="flex items-center gap-2 text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Encrypted_Channel
            </div>
            <span className="text-slate-800 text-[8px]">•</span>
            <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              AES-256
            </div>
            <span className="text-slate-800 text-[8px]">•</span>
            <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              JWT_Auth
            </div>
          </div>
        </div>
      </motion.div>

      {/* Page Footer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-[10px] tracking-[0.1em] text-slate-600 font-mono uppercase"
      >
        OmniGuard v2.2 • Authorized Personnel Only
      </motion.p>
    </div>
  );
};

export default Login;
