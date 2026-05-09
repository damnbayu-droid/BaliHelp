'use client';

import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Mail, 
  History, 
  Cpu, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'orders', name: 'Orders', icon: ShoppingBag },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'email-master', name: 'Email Master', icon: Mail },
    { id: 'logs', name: 'Logs', icon: History },
    { id: 'ai-master', name: 'AI Master', icon: Cpu, badge: 'Dummy' },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col fixed h-full z-50`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">BaliHelp Admin</span>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
              {isSidebarOpen && item.badge && (
                <span className="ml-auto text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded uppercase font-bold opacity-70">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search across orders and logs..." 
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 relative text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold">Bayu Damopolii</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="p-8">
          {activeTab === 'overview' && <OverviewPanel />}
          {activeTab === 'email-master' && <EmailMasterPanel />}
          {activeTab === 'ai-master' && <AIMasterPanel />}
          {/* Add more panels here */}
        </div>
      </main>
    </div>
  );
}

// Sub-components (Placeholders for now)
function OverviewPanel() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Sales', val: 'IDR 45.2M', change: '+12%' },
          { label: 'Active Orders', val: '24', change: '+3' },
          { label: 'Inquiries', val: '156', change: '+24' },
          { label: 'Emails Sent', val: '1,420', change: '+89' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.val}</p>
            <p className="text-xs text-green-500 font-bold mt-2">{stat.change} <span className="text-slate-400 font-normal">this month</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailMasterPanel() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchLogs() {
      const { data } = await supabase.from('email_logs').select('*').order('sent_at', { ascending: false });
      if (data) setLogs(data);
    }
    fetchLogs();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Email Master</h2>
        <Button className="bg-purple-600 hover:bg-purple-700">Refresh Logs</Button>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-bold uppercase text-[10px]">
            <tr>
              <th className="px-6 py-4">Recipient</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-medium">{log.recipient}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold">
                    {log.type.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">{log.subject}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${log.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {log.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">{new Date(log.sent_at).toLocaleString()}</td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic">No emails recorded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AIMasterPanel() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 animate-pulse">
        <Cpu size={40} />
      </div>
      <h2 className="text-2xl font-bold">AI Master Console</h2>
      <p className="text-slate-500 max-w-md text-center">The AI Engine for BaliHelp is currently in dummy mode. Future updates will allow automated response generation and service mapping.</p>
      <Button variant="outline" className="border-purple-600 text-purple-600">Simulate AI Training</Button>
    </div>
  );
}
