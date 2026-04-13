/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Calendar, 
  User, 
  Star, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  X,
  MapPin
} from 'lucide-react';

// --- Constants ---
const EXPERT = {
  name: "Daniel Ferreira",
  profession: "Especialista em laminados e protocolos cerâmicos",
  city: "Goiás",
  whatsapp: "https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5562993730928%26text%3DVim%2Bdo%2BInstagram%2B%25F0%259F%258E%2589%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnGZ29RotIw0wgVFA2iWJ5SPDFznp4jtVNOBjK-dTwams9O0KYsFNVKxJ_WnQ_aem_Gf9lLYgMt5YMw0VHmWLpZQ&e=AT65bizC57qJtGp9kfv1qyjNuVAwvyiaMhw_-sSb2SWDbbsZWWcoCwa62xXfx2Jpmq5o0vYVEhCfr0R2htUfxQf-4escOjUqodDb4Vo2QQ",
  instagram: "https://www.instagram.com/danielferreiramartins_/",
};

const IMAGES = {
  hero: "https://i.imgur.com/6TUU2pg.png",
  expert: "https://i.imgur.com/d8MzlF3.png",
  results: [
    "https://i.imgur.com/09oSiOl.jpeg",
    "https://i.imgur.com/ot1r0F8.jpeg",
    "https://i.imgur.com/CYgRjfl.jpeg",
    "https://i.imgur.com/q2MPw36.jpeg",
    "https://i.imgur.com/JWpCf1J.jpeg",
    "https://i.imgur.com/0KkXwR8.jpeg",
    "https://i.imgur.com/yA3ykeY.jpeg",
    "https://i.imgur.com/N6UR0OK.jpeg",
    "https://i.imgur.com/mRl1CLn.jpeg",
    "https://i.imgur.com/YcVwk47.jpeg",
  ]
};

const DIFFERENTIALS = [
  {
    title: "Avaliação Honesta",
    description: "Diagnóstico preciso focado no que você realmente precisa para um sorriso perfeito.",
    icon: <ShieldCheck className="w-6 h-6 text-premium-accent" />
  },
  {
    title: "Atendimento Direto",
    description: "Sem burocracia. Você fala diretamente com quem vai cuidar do seu tratamento.",
    icon: <MessageCircle className="w-6 h-6 text-premium-accent" />
  },
  {
    title: "Foco no Resultado",
    description: "Protocolos cerâmicos de alta performance para resultados naturais e duradouros.",
    icon: <Sparkles className="w-6 h-6 text-premium-accent" />
  },
  {
    title: "Tecnologia de Ponta",
    description: "Equipamentos e materiais de última geração para sua total segurança.",
    icon: <CheckCircle2 className="w-6 h-6 text-premium-accent" />
  }
];

const STEPS = [
  {
    id: "01",
    title: "WhatsApp",
    description: "Clique no botão e envie uma mensagem para iniciarmos sua conversa."
  },
  {
    id: "02",
    title: "Agendamento",
    description: "Escolhemos juntos o melhor horário para sua visita ao meu consultório."
  },
  {
    id: "03",
    title: "Avaliação",
    description: "Realizamos sua primeira avaliação gratuita e definimos seu plano de tratamento."
  }
];

// --- Components ---

const WhatsAppButton = ({ text = "Agendar primeira Avaliação gratuita no WhatsApp", className = "" }) => (
  <motion.a
    href={EXPERT.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-whatsapp ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <MessageCircle className="w-6 h-6" />
    <span className="text-center leading-tight">{text}</span>
  </motion.a>
);

const Lightbox = ({ images, selectedIndex, onClose }) => {
  if (selectedIndex === null) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <motion.img 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src={images[selectedIndex]} 
        alt="Resultado"
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        referrerPolicy="no-referrer"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

export default function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen selection:bg-premium-accent selection:text-white">
      {/* --- Lightbox --- */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <Lightbox 
            images={IMAGES.results} 
            selectedIndex={selectedImageIndex} 
            onClose={() => setSelectedImageIndex(null)} 
          />
        )}
      </AnimatePresence>

      {/* --- Section 1: Hero --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT.name}
            className="w-full h-full object-cover object-top opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-16 pt-32 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase text-premium-accent border border-premium-accent/30 rounded-full bg-premium-accent/10">
              Especialista em Sorrisos
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-[1.1]">
              Eu sou <span className="text-premium-accent">{EXPERT.name}</span>, <br />
              {EXPERT.profession} em {EXPERT.city}.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Transformo vidas através da estética dental avançada, unindo técnica de precisão e naturalidade absoluta.
            </p>
            
            <div className="flex flex-col gap-3">
              <WhatsAppButton />
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-premium-accent" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Quem Sou Eu --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-premium-accent/30" />
            <img 
              src={IMAGES.expert} 
              alt="O Especialista"
              className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-premium-accent/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-premium-dark">Compromisso com a sua <br /><span className="italic">melhor versão</span></h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Minha missão é muito mais do que apenas estética. É sobre devolver a confiança e o prazer de sorrir sem restrições.
              </p>
              <p>
                Com anos de dedicação exclusiva aos laminados e protocolos cerâmicos, desenvolvi um olhar clínico que prioriza a harmonia facial e a longevidade de cada sorriso.
              </p>
            </div>
            
            <ul className="mt-8 space-y-4">
              {[
                "Tratamentos 100% personalizados",
                "Materiais de padrão internacional",
                "Planejamento digital do sorriso",
                "Foco em naturalidade e função"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-premium-dark font-medium">
                  <div className="w-2 h-2 rounded-full bg-premium-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- Section 3: Resultados Reais --- */}
      <section className="py-24 px-6 bg-premium-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Resultados Reais</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Veja algumas das transformações que realizei. Cada sorriso é único e planejado detalhadamente.
            </p>
          </div>

          <div className="gallery-grid">
            {IMAGES.results.map((src, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={src} 
                  alt={`Resultado ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Sparkles className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-gray-400 text-sm italic">
            * Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* --- Section 4: Por que confiar em mim? --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Por que confiar em mim?</h2>
            <div className="w-20 h-1 bg-premium-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DIFFERENTIALS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 hover:border-premium-accent/20 hover:shadow-xl transition-all duration-300 bg-premium-bg/30"
              >
                <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-premium-dark">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: CTA Intermediário --- */}
      <section className="py-20 px-6 bg-premium-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6">Sua transformação começa com uma conversa.</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Tire suas dúvidas e descubra como podemos alcançar o sorriso dos seus sonhos com segurança e transparência.
          </p>
          <WhatsAppButton className="mx-auto" />
          <p className="mt-6 text-premium-accent font-medium">Primeira avaliação gratuita e sem compromisso.</p>
        </div>
      </section>

      {/* --- Section 6: Como funciona --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Como funciona</h2>
            <p className="text-gray-500">O caminho para o seu novo sorriso em 3 passos simples.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-7xl font-serif font-black text-premium-accent/10 absolute -top-10 left-1/2 -translate-x-1/2 z-0">
                  {step.id}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl mb-4 text-premium-dark font-bold">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-premium-accent/30">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-6 bg-premium-accent/5 rounded-2xl border border-premium-accent/10 text-center">
            <p className="text-premium-dark font-semibold">
              <Sparkles className="inline-block w-5 h-5 mr-2 text-premium-accent" />
              Lembre-se: A primeira avaliação é totalmente gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 7: Mais Provas (Expert + Bastidores) --- */}
      <section className="py-24 px-6 bg-premium-bg overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">Bastidores & Autoridade</h2>
              <p className="text-gray-500">O cuidado em cada detalhe do atendimento personalizado.</p>
            </div>
            <div className="flex items-center gap-2 text-premium-accent font-semibold">
              <Instagram className="w-5 h-5" />
              <span>@danielferreiramartins_</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Using some of the gallery images as "behind the scenes" for variety if needed, 
                but the prompt asks to use provided links. I'll use the expert photo and some results. */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.expert} alt="Expert" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
              <img src={IMAGES.results[8]} alt="Atendimento" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
              <img src={IMAGES.results[9]} alt="Detalhes" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img src={IMAGES.results[0]} alt="Clínica" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 8: CTA Final --- */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Subtle Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
              Pronto para conquistar o <br />
              <span className="italic text-premium-accent">sorriso que você merece?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Não adie mais a sua autoestima. Agende agora sua avaliação gratuita e descubra o poder de um sorriso transformado.
            </p>
            <WhatsAppButton className="mx-auto scale-110" />
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Segurança Total</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Excelência Clínica</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Horários Flexíveis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 9: Footer --- */}
      <footer className="py-12 px-6 bg-premium-bg border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-premium-dark">{EXPERT.name}</h3>
            <p className="text-gray-500 text-sm">{EXPERT.profession}</p>
            <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3 h-3" />
              {EXPERT.city}
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href={EXPERT.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-premium-accent transition-all"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href={EXPERT.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-[#25D366] transition-all"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <div className="text-gray-400 text-xs text-center md:text-right">
            <p>© {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido com foco em alta performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
