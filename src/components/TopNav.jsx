import React from 'react'
import { Bell, Search, ShieldCheck, Wifi, Clock } from 'lucide-react'

export default function TopNav() {
  return (
    <header className="h-20 bg-brand-bg/80 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-8 z-10 sticky top-0">
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-xl">
          <Search size={16} className="text-slate-500" />
          <input 
            type="text" 
            placeholder="Search tactical database..." 
            className="bg-transparent border-none text-xs focus:outline-none text-slate-300 placeholder:text-slate-600 w-48"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Status Indicators */}
        <div className="hidden lg:flex items-center gap-6 mr-6 border-r border-slate-800 pr-6">
          <div className="flex items-center gap-2">
            <Wifi size={14} className="text-emerald-500" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Network_Stable</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-primary" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">T-UTC 22:16</span>
          </div>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors group">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-bg group-hover:animate-ping"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-800 ml-2">
          <div className="text-right flex flex-col items-end">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Cmdr. Shashwat</p>
            <p className="text-[9px] text-brand-primary font-mono uppercase">Level 5 Access</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-blue-800 p-[1px]">
            <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center overflow-hidden">
               <ShieldCheck className="w-6 h-6 text-brand-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
