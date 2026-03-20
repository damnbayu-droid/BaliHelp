import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowRight, Leaf, Trees, Waves, Trash2, Globe, Heart, ShieldCheck, 
  MapPin, Calendar, Users, Award, Zap, Anchor, Droplets 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CSR Programs | Bali Help Sustainability & Conservation',
  description: 'Detailed programs lists encompassing forest revitalization, marine conservation & cleanups bridging professional setups triggers securely setups.',
  alternates: { canonical: 'https://balihelp.id/csr/programs' }
};

export default function CSRProgramsPage() {
  const sections = [
    {
      id: "introduction",
      badge: "Programs Overview",
      title: "Bridging Enterprise Growth with Ecological Regeneration",
      desc: "Our programs address directly Bali's current environmental stress matrices combining capital backing from PT Indonesian Visas with local coordination frames securely.",
      icon: <Globe className="w-12 h-12 text-green-600" />,
      image: "/csr-core-philosophy.png"
    },
    {
      id: "beach-cleanups",
      badge: "Cleanup Initiative",
      title: "Systematic Ocean Waste Extraction Matrices",
      desc: "Targeting Microplastics alongside bulky waste accumulation across 15+ coastal endpoints nodes deliverable setups securely setups.",
      icon: <Trash2 className="w-12 h-12 text-blue-600" />,
      image: "/beach-cleanup.png"
    },
    {
      id: "coral-nurseries",
      badge: "Marine Conservation",
      title: "Active Reef Structural Transplantation Subsystems",
      desc: "We anchor healthy fragments to modular structural sets restoring living biodiversity hubs successfully setups safely maps triggers.",
      icon: <Waves className="w-12 h-12 text-cyan-600" />,
      image: "/coral-restoration.png"
    },
    {
      id: "reforestation",
      badge: "Forest Revitalization",
      title: "Carbon Lock Absorption Watershed Reforestations",
      desc: "Planting native trees maintaining core watershed integrity nodes budgets triggers preventing soil erosion nodes setups standardly frames.",
      icon: <Trees className="w-12 h-12 text-emerald-600" />,
      image: "/forest-reforestation.png"
    }
  ];

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Short Hero */}
      <section className="relative py-24 bg-slate-900 text-white text-center">
         <div className="container px-4">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-4 px-4 py-1.5 rounded-full">Explore Comprehensive Data</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Detailed Sustainability Programs</h1>
            <p className="max-w-xl mx-auto text-slate-400 text-sm leading-relaxed">Detailed metrics encompassing cleanup yields, carbon re-absorption coordinates maps correctly safely.</p>
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-950 bottom-0 pointer-events-none h-20 top-auto" />
      </section>

      {/* Grid Iterative Maps Section */}
      <section className="py-20">
         <div className="container px-4 max-w-6xl space-y-24">
            {sections.map((sec, idx) => (
               <div key={sec.id} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                     <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-0">{sec.badge}</Badge>
                     <div className="flex items-center gap-3">
                        {sec.icon}
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{sec.title}</h2>
                     </div>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{sec.desc}</p>
                     
                     <Card className="bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 p-5 mt-4">
                        <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
                           <ShieldCheck className="w-4 h-4 text-green-600" /> Operational Metrics
                        </h4>
                        <ul className="text-xs space-y-1.5 text-slate-500 dark:text-slate-400">
                           <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-green-500" /> Continuous Audit validations mapping weekly datasets.</li>
                           <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-green-500" /> Direct funding coordinates mapped standard.</li>
                        </ul>
                     </Card>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                     <Image src={sec.image} alt={sec.title} fill className="object-cover" />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Summary Stat Frames */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
         <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">Consolidated Operational Footprints</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { label: "Ocean Waste sorting", value: "85%", icon: <Trash2 className="w-6 h-6" /> },
                  { label: "Community involvement", value: "4,500+", icon: <Users className="w-6 h-6" /> },
                  { label: "Carbon absorption (tons)", value: "500+", icon: <Trees className="w-6 h-6" /> },
                  { label: "Funding ratio setup", value: "100%", icon: <Award className="w-6 h-6" /> },
               ].map((stat, i) => (
                  <Card key={i} className="p-6 bg-white dark:bg-slate-800 text-center shadow-lg border-0 rounded-2xl">
                     <div className="text-green-600 mx-auto w-fit mb-3">{stat.icon}</div>
                     <div className="text-3xl font-black text-slate-800 dark:text-white mb-1">{stat.value}</div>
                     <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center">
         <div className="container px-4 max-w-md">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Coordinate Environmentals Now</h3>
            <p className="text-xs text-slate-500 mb-6">Coordinate directly with local execution partners securely setups.</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">Book Consultations</Button>
         </div>
      </section>
    </main>
  );
}
