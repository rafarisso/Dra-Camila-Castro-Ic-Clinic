
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Instagram, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Sparkles,
  Heart,
  User,
  ShieldCheck
} from 'lucide-react';

// Types
interface Procedure {
  id: number;
  name: string;
  description: string;
  category: 'Harmonização' | 'Estética Facial';
}

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const WHATSAPP_LINK = "https://wa.me/5511915580633?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20IC%20Clinic%20com%20a%20Dra.%20Camila%20Castro.";

const PROCEDURES: Procedure[] = [
  { id: 1, name: "Harmonização Facial", description: "Equilíbrio e realce dos traços naturais do rosto através de um planejamento personalizado.", category: 'Harmonização' },
  { id: 2, name: "Preenchimento Labial", description: "Lábios hidratados, com contorno definido e volume natural para um sorriso elegante.", category: 'Harmonização' },
  { id: 3, name: "Perfiloplastia", description: "Aperfeiçoamento do perfil facial, focando na harmonia entre nariz, mento e mandíbula.", category: 'Harmonização' },
  { id: 4, name: "Toxina Botulínica (Botox)", description: "Suavização de linhas de expressão e prevenção de rugas para um olhar descansado.", category: 'Harmonização' },
  { id: 5, name: "Bioestimuladores", description: "Estímulo à produção natural de colágeno, devolvendo firmeza e elasticidade à pele.", category: 'Harmonização' },
  { id: 6, name: "Fios de Sustentação", description: "Efeito lifting imediato e rejuvenescimento através do reposicionamento dos tecidos.", category: 'Harmonização' },
  { id: 7, name: "Rinomodelação", description: "Correção de pequenas imperfeições no nariz sem a necessidade de cirurgia.", category: 'Harmonização' },
  { id: 8, name: "Skinbooster", description: "Hidratação profunda da derme para uma pele radiante, viçosa e rejuvenescida.", category: 'Harmonização' },
  { id: 9, name: "Limpeza de Pele", description: "Protocolo completo de higienização, extração e nutrição para saúde cutânea.", category: 'Estética Facial' },
  { id: 10, name: "Rejuvenescimento", description: "Protocolos personalizados para combater os sinais do tempo e melhorar a textura.", category: 'Estética Facial' },
];

const FAQS = [
  { question: "O resultado fica natural?", answer: "Sim. Nosso foco na IC Clinic é a naturalidade. Dra. Camila utiliza técnicas avançadas para realçar sua beleza sem perder suas características únicas." },
  { question: "O procedimento dói?", answer: "Utilizamos anestésicos tópicos e técnicas minimamente invasivas para garantir o máximo conforto durante toda a sessão." },
  { question: "Quanto tempo dura?", answer: "A durabilidade varia conforme o procedimento. O Botox dura em média 4-6 meses, enquanto preenchedores podem durar de 12 a 18 meses." },
  { question: "Precisa de repouso?", answer: "A maioria dos procedimentos permite retorno imediato às atividades leves, seguindo orientações específicas de cuidados pós-sessão." },
];

const NavLink = ({ href, children, mobile, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`${mobile ? 'block py-4 text-xl border-b border-neutral-100' : 'text-sm font-medium hover:text-amber-600 transition-colors'} text-neutral-700`}
  >
    {children}
  </a>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold italic shadow-lg">IC</div>
            <span className="text-xl font-serif font-bold tracking-tight">IC CLINIC</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <NavLink href="#inicio" onClick={closeMenu}>Início</NavLink>
            <NavLink href="#procedimentos" onClick={closeMenu}>Procedimentos</NavLink>
            <NavLink href="#sobre" onClick={closeMenu}>Sobre</NavLink>
            <NavLink href="#resultados" onClick={closeMenu}>Resultados</NavLink>
            <NavLink href="#depoimentos" onClick={closeMenu}>Depoimentos</NavLink>
            <NavLink href="#duvidas" onClick={closeMenu}>Dúvidas</NavLink>
            <NavLink href="#localizacao" onClick={closeMenu}>Localização</NavLink>
            <NavLink href="#contato" onClick={closeMenu}>Contato</NavLink>
            <a 
              href={WHATSAPP_LINK}
              className="bg-neutral-900 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all transform hover:scale-105"
            >
              Agendar
            </a>
          </nav>

          <button className="lg:hidden text-neutral-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto">
          <NavLink href="#inicio" mobile onClick={closeMenu}>Início</NavLink>
          <NavLink href="#procedimentos" mobile onClick={closeMenu}>Procedimentos</NavLink>
          <NavLink href="#sobre" mobile onClick={closeMenu}>Sobre</NavLink>
          <NavLink href="#resultados" mobile onClick={closeMenu}>Resultados</NavLink>
          <NavLink href="#depoimentos" mobile onClick={closeMenu}>Depoimentos</NavLink>
          <NavLink href="#duvidas" mobile onClick={closeMenu}>Dúvidas</NavLink>
          <NavLink href="#localizacao" mobile onClick={closeMenu}>Localização</NavLink>
          <NavLink href="#contato" mobile onClick={closeMenu}>Contato</NavLink>
          <a 
            href={WHATSAPP_LINK}
            className="mt-8 block w-full bg-amber-600 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-amber-200"
          >
            Agendar Agora no WhatsApp
          </a>
          <div className="h-10"></div>
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Fundo luxuoso clínica" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>Dra. Camila Castro – Biomédica Esteta</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] mb-6">
              Harmonização facial com <span className="italic font-normal text-amber-700">naturalidade</span> e elegância.
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-lg">
              Te deixo confiante de todos os ângulos, inclusive de perfil. Atendimento personalizado para realçar sua melhor versão.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-200 group"
              >
                <span>Agendar Avaliação</span>
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="#procedimentos"
                className="inline-flex items-center justify-center space-x-2 bg-white border border-neutral-200 text-neutral-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-50 transition-all"
              >
                <span>Ver Procedimentos</span>
                <ChevronDown size={20} />
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="w-[500px] h-[600px] rounded-2xl overflow-hidden shadow-2xl relative z-10 transform translate-x-12">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
                alt="Dra. Camila Castro" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 p-6 glass-effect rounded-2xl shadow-xl z-20 max-w-xs border border-white/40">
              <p className="text-sm font-medium text-neutral-800 italic">"Minha missão é devolver sua autoestima através de um olhar cuidadoso e resultados sutis."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section id="procedimentos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nossos Procedimentos</h2>
            <p className="text-lg text-neutral-600">
              Planejamento individualizado para cada face. Utilizamos as melhores tecnologias e produtos do mercado mundial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCEDURES.map((proc) => (
              <div key={proc.id} className="group p-8 rounded-2xl bg-cream border border-neutral-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{proc.name}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">{proc.description}</p>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-amber-700 uppercase tracking-widest hover:text-amber-600 transition-colors"
                >
                  <span>Agendar Avaliação</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-cream">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-6">Sobre a Dra. Camila</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Especialista em realçar sua <span className="italic font-normal text-amber-700">beleza única</span></h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Dra. Camila Castro é Biomédica Esteta, especialista em Harmonização Facial e CEO da IC Clinic. Com um olhar artístico e técnico, dedica-se a transformar vidas através da autoestima.
              </p>
              <p>
                Acreditamos que a verdadeira beleza reside nos detalhes. Por isso, cada atendimento na IC Clinic começa com uma avaliação detalhada e um planejamento facial totalmente individual.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-amber-600 p-1 rounded-full text-white"><CheckCircle2 size={16} /></div>
                <div>
                  <h4 className="font-bold text-neutral-900">Planejamento Facial</h4>
                  <p className="text-sm text-neutral-600">Cada face é um mapa único.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-amber-600 p-1 rounded-full text-white"><CheckCircle2 size={16} /></div>
                <div>
                  <h4 className="font-bold text-neutral-900">Técnicas Modernas</h4>
                  <p className="text-sm text-neutral-600">O que há de mais novo no mundo.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-amber-600 p-1 rounded-full text-white"><CheckCircle2 size={16} /></div>
                <div>
                  <h4 className="font-bold text-neutral-900">Segurança Total</h4>
                  <p className="text-sm text-neutral-600">Produtos premium certificados.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-amber-600 p-1 rounded-full text-white"><CheckCircle2 size={16} /></div>
                <div>
                  <h4 className="font-bold text-neutral-900">Resultados Naturais</h4>
                  <p className="text-sm text-neutral-600">Elegância sem excessos.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
             <div className="aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dra. Camila Castro" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-600 rounded-full flex flex-col items-center justify-center text-white z-20 shadow-xl border-4 border-cream">
                <span className="text-2xl font-bold">100%</span>
                <span className="text-[10px] uppercase font-bold text-center leading-tight">Satisfação<br/>Garantida</span>
             </div>
             <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-amber-200 rounded-2xl z-0"></div>
          </div>
        </div>
      </section>

      {/* Results / Gallery */}
      <section id="resultados" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Galeria de Resultados</h2>
              <p className="text-lg text-neutral-600">Transformações sutis que trazem grandes impactos na confiança. Cada paciente é um caso único.</p>
            </div>
            <p className="text-sm italic text-neutral-400 max-w-[200px]">* Os resultados podem variar de acordo com cada paciente.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=400"
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:opacity-90 cursor-pointer transition-opacity border border-neutral-100">
                <img src={img} alt={`Resultado ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">O que dizem nossas pacientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mariana S.", text: "A Dra. Camila transformou meu rosto de um jeito tão natural que ninguém percebeu o que eu fiz, só dizem que estou mais descansada. Amei!", rating: 5 },
              { name: "Beatriz R.", text: "Fiz rinomodelação e preenchimento labial. O cuidado dela é impecável, não senti nada de dor e o resultado ficou perfeito.", rating: 5 },
              { name: "Carla M.", text: "Ambiente maravilhoso e profissional de altíssimo nível. Já virei paciente fiel da IC Clinic!", rating: 5 }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md relative">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Heart key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-neutral-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-3 border-t pt-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xs">{t.name[0]}</div>
                  <span className="font-bold text-neutral-800">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="duvidas" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border border-neutral-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50 transition-colors">
                  <span className="text-lg font-bold text-neutral-800">{faq.question}</span>
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-neutral-600 leading-relaxed bg-neutral-50/50">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="localizacao" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-3xl shadow-xl overflow-hidden">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Nossa Localização</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Endereço</h4>
                    <p className="text-neutral-600">Av. Manuel Alves Soares, 437 – Sala 4<br/>São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Horário de Atendimento</h4>
                    <p className="text-neutral-600">Quarta-feira: 09:00 às 18:00</p>
                    <p className="text-xs text-neutral-400 mt-1 font-medium italic">Atendimento somente com agendamento prévio.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <p className="text-neutral-600">(11) 91558-0633</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Av.+Manuel+Alves+Soares,+437+Sala+4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-all"
              >
                <span>Ver no Google Maps</span>
                <MapPin size={20} />
              </a>
            </div>
            <div className="h-[400px] bg-neutral-200 rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Mapa da Clínica" 
                className="w-full h-full object-cover opacity-80 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-2xl animate-bounce">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 bg-neutral-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 filter blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-cream">Agende sua avaliação e receba um plano personalizado</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">Sua jornada para a melhor versão começa com uma conversa. Estamos ansiosos para te receber.</p>
          <a 
            href={WHATSAPP_LINK}
            className="inline-flex items-center space-x-3 bg-amber-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-500 transition-all shadow-2xl shadow-amber-900/40 group"
          >
            <MessageCircle size={28} />
            <span>Agendar no WhatsApp</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-cream border-t border-neutral-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white font-serif text-lg italic">IC</div>
            <span className="text-lg font-serif font-bold">IC CLINIC</span>
          </div>
          
          <div className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} IC Clinic. Todos os direitos reservados.
          </div>

          <div className="flex space-x-6">
            <a href="https://instagram.com" className="text-neutral-400 hover:text-amber-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href={WHATSAPP_LINK} className="text-neutral-400 hover:text-green-600 transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={WHATSAPP_LINK}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-[#25D366]/40"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
