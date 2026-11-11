import React, { useState, useEffect } from 'react';

type ModalType = 'sharad' | 'vtune' | 'loop' | 'stremo' | 'wings' | null;

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [projectsExpanded, setProjectsExpanded] = useState<boolean>(false);

  // Close modals on Escape key & handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#100C08] text-[#F5F5F7] font-sans antialiased selection:bg-[#F5F5F7] selection:text-[#100C08] relative">
      {/* BEGIN: MainHeader */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#100C08]/90 border-b border-[#2E2E2E] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between relative">
          {/* Brand Logo */}
          <a className="flex items-center gap-2.5 group cursor-pointer" data-purpose="brand-logo" href="#home">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5F5F7] group-hover:scale-125 transition-transform duration-300 shadow-luxury-sm"></span>
            <span className="font-bold text-xl tracking-tight text-[#F5F5F7] group-hover:text-[#A3A3A3] transition-colors">Videsh Karmakar</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A3A3A3] absolute left-1/2 -translate-x-1/2">
            <a className="hover:text-white transition-colors duration-200" href="#home">Home</a>
            <a className="hover:text-white transition-colors duration-200" href="#about">About</a>
            <a className="hover:text-white transition-colors duration-200" href="#music">Music &amp; Channel</a>
            <a className="hover:text-white transition-colors duration-200" href="#vk-projects">V.K Projects</a>
            <a className="hover:text-white transition-colors duration-200" href="#contact">Contact</a>
          </nav>

          {/* CTA Button matching refined luxury aesthetic */}
          <div className="flex items-center">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] hover:bg-[#242424] border border-[#2E2E2E] hover:border-[#383838] text-xs font-semibold text-[#F5F5F7] transition duration-200" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: HeroSection */}
      <section className="pt-28 pb-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto" id="home">
        {/* Curved Hero Container with luxury dark palette */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#120F0C] border border-[#2E2E2E] shadow-2xl min-h-[580px] flex flex-col justify-between p-8 sm:p-12 md:p-16">
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
            <img 
              alt="Videsh Karmakar" 
              className="absolute inset-0 w-full h-full object-cover object-right md:object-[75%_center] opacity-40 mix-blend-luminosity filter contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV-4QqUr05ou2CG-GijWRmKtCQwHVdxDZwZWcpoQfTb2R12hmtDHDcs1e055rmtYL_wly6LAXbGYb_muuGkIjVRWCjZ6f4cqaDFQNC-haf-sAqA9iDH9WrbNokc2vFWiZMvagA-9oGTw2iQWszWzLp6h24Hv-aeBUGEqmObDr_tXAcJaVX5YkrreYjV-MnxKCrnikdlhMBd6_G5Pa932hbsFgB31JweWtENj_sZT0BxOpABen9zsaj0QCSEEdrvnkMNWg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#100C08] via-[#100C08]/85 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#100C08] via-transparent to-[#1A1A1A]/70"></div>
          </div>
          {/* Background Ambient Glow & Subtle Texture */}
          <div className="absolute inset-0 bg-ambient-glow pointer-events-none"></div>
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

          {/* Top Label inside Hero */}
          <div className="relative z-10">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#242424] border border-[#383838] text-[#E5E5E5]">
              Music Producer &amp; Developer
            </span>
          </div>

          {/* Hero Visual Composition & Typography */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-16">
            {/* Giant Headline Section (Left) */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm font-semibold tracking-wider text-[#A3A3A3] uppercase">Brand Designer &amp; Producer</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">Videsh Karmakar</h1>
            </div>
            {/* Hero Sub-column (Right) */}
            <div className="md:col-span-4 md:text-right space-y-2 border-t md:border-t-0 md:border-l border-[#2E2E2E] pt-6 md:pt-0 md:pl-8">
              <h2 className="text-lg font-semibold text-white">The Person Behind the Sound &amp; Code</h2>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: PreviewSection - Live Project Previews */}
      <section className="py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto" id="previews">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Project Preview Card: Sharad Vromon */}
          <div className="group rounded-3xl bg-[#1A1A1A] border border-[#2E2E2E] overflow-hidden hover:border-[#383838] transition-all duration-500 shadow-2xl cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#100C08] via-[#100C08]/90 to-[#120F0C]"></div>
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest font-bold text-[#A3A3A3]">Flagship Utility</span>
                <span className="text-xs font-semibold text-[#F5F5F7]">v1.4.0</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-white mb-2 line-clamp-1">শারদ ভ্রমণ</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed line-clamp-2">Kolkata Durga Puja Pandal Hopping & Google Maps Navigation Guide. Zero permissions, station-by-station crowd routing, offline-ready local railway corridors.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#100C08]/90 border border-[#2E2E2E] text-xs font-semibold text-[#E5E5E5] hover:text-white transition-colors"
                  href="https://pujavromon.vercel.app/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  Preview Live
                </a>
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242424] border border-[#2E2E2E] text-xs font-semibold text-[#737373] hover:text-white hover:border-[#383838] transition-colors"
                  href="https://pujovromon.ai.studio/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  AI Studio
                </a>
              </div>
            </div>
          </div>

          {/* Project Preview Card: Loop */}
          <div className="group rounded-3xl bg-[#1A1A1A] border border-[#2E2E2E] overflow-hidden hover:border-[#383838] transition-all duration-500 shadow-2xl cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#100C08] via-[#100C08]/90 to-[#120F0C]"></div>
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest font-bold text-[#A3A3A3]">Cross-Platform</span>
                <span className="text-xs font-semibold text-[#F5F5F7]">v1.2.1.0</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-white mb-2 line-clamp-1">Loop</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed line-clamp-2">Next-generation cross-platform downloader for photos, videos, and digital media. Unified ecosystem with parallel pipelines and centralized task management.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#100C08]/90 border border-[#2E2E2E] text-xs font-semibold text-[#E5E5E5] hover:text-white transition-colors"
                  href="https://loopfile.ai.studio" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  Launch Web App
                </a>
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242424] border border-[#2E2E2E] text-xs font-semibold text-[#737373] hover:text-white hover:border-[#383838] transition-colors"
                  href="#loop" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  Details
                </a>
              </div>
            </div>
          </div>

          {/* Project Preview Card: Stremo */}
          <div className="group rounded-3xl bg-[#1A1A1A] border border-[#2E2E2E] overflow-hidden hover:border-[#383838] transition-all duration-500 shadow-2xl cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1F1C18] to-[#100C08]"></div>
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest font-bold text-[#A3A3A3]">Music Streaming</span>
                <span className="text-xs font-semibold text-[#F5F5F7]">v2.2.0.1</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-white mb-2 line-clamp-1">Stremo</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed line-clamp-2">Alternative music streaming platform aggregating Spotify, YouTube Music, and lossless audio. Hi-Res FLAC & AAC 320, synchronized lyrics, studio-grade processing.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#100C08]/90 border border-[#2E2E2E] text-xs font-semibold text-[#E5E5E5] hover:text-white transition-colors"
                  href="https://stremo.ai.studio/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  Launch Web App
                </a>
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242424] border border-[#2E2E2E] text-xs font-semibold text-[#737373] hover:text-white hover:border-[#383838] transition-colors"
                  href="#stremo" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: PreviewSection */}

      {/* BEGIN: AboutAndMissionSection */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Kicker */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3A3A3] block">Who I Am</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              About ME:
            </h2>
            <div className="w-16 h-1 bg-[#F5F5F7] rounded-full"></div>
          </div>
          {/* Right Column: Multi-Paragraph Content & Social Links */}
          <div className="md:col-span-7 space-y-6 text-[#A3A3A3] leading-relaxed font-normal text-base md:text-lg">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
              Shaping futuristic sonic experiences &amp; clean web solutions.
            </h3>
            <p>
              <strong className="text-white font-medium">Videsh Karmakar</strong> is a bedroom electronic music producer creating emotionally driven, high-energy electronic music for the future. With over 8 years of experience, he blends cinematic atmospheres, uplifting melodies, heavy drops, and modern sound design to craft music that connects emotion with energy.
            </p>
            <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed">
              Inspired by global artists like <span className="text-white">Marshmello, San Holo, Illenium, Hardwell, Martin Garrix, Alan Walker, David Guetta</span>, and <span className="text-white">Nicky Romero</span>, his sound spans Future Bass, Progressive House, Festival EDM, Hardstyle, Dubstep, and Lo-Fi.
            </p>
            <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed">
              Driven by passion, consistency, and innovation, Videsh aims to push boundaries and create Next-Generation Electronic Music that feels immersive, hopeful, and ahead of its time.
            </p>
            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] text-sm italic text-[#E5E5E5]">
              Bedroom Producer | Futuristic EDM — “Beyond The Music” — A Vision of the Future.
            </div>

            {/* Social & Streaming Pill Bar */}
            <div className="pt-4 border-t border-[#2E2E2E]">
              <span className="block text-xs uppercase tracking-wider text-[#737373] font-semibold mb-3">Connect &amp; Stream</span>
              <div className="flex flex-wrap gap-3" data-purpose="social-links-bar">
                {/* Spotify */}
                <a 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#383838] hover:bg-[#242424] text-[#E5E5E5] hover:text-white transition duration-200 text-sm group" 
                  href="https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current text-[#F5F5F7] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.311c-.218.358-.68.472-1.037.254-2.844-1.737-6.425-2.13-10.642-1.166-.407.094-.813-.158-.907-.565-.094-.407.158-.813.565-.907 4.622-1.057 8.583-.612 11.767 1.347.357.218.471.68.254 1.037zm1.468-3.264c-.275.447-.862.59-1.309.315-3.255-2.001-8.217-2.582-12.067-1.413-.503.153-1.035-.133-1.188-.636-.153-.503.133-1.035.636-1.188 4.412-1.339 9.888-.691 13.613 1.613.447.275.59.862.315 1.309zm.126-3.41c-3.903-2.318-10.334-2.531-14.072-1.396-.599.182-1.233-.161-1.415-.76-.182-.599.161-1.233.76-1.415 4.301-1.306 11.401-1.06 15.894 1.606.538.319.715 1.015.396 1.553-.319.538-1.015.715-1.563.412z"/>
                  </svg>
                  <span>Spotify</span>
                </a>
                {/* YouTube */}
                <a 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#383838] hover:bg-[#242424] text-[#E5E5E5] hover:text-white transition duration-200 text-sm group" 
                  href="https://www.youtube.com/@videshkarmakar2000" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current text-[#F5F5F7] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>
                {/* Instagram */}
                <a 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#383838] hover:bg-[#242424] text-[#E5E5E5] hover:text-white transition duration-200 text-sm group" 
                  href="https://www.instagram.com/code.red_videsh/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current text-[#F5F5F7] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                {/* Facebook */}
                <a 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#383838] hover:bg-[#242424] text-[#E5E5E5] hover:text-white transition duration-200 text-sm group" 
                  href="https://www.facebook.com/gfx.videsh" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current text-[#F5F5F7] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                {/* Gmail */}
                <a 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#383838] hover:bg-[#242424] text-[#E5E5E5] hover:text-white transition duration-200 text-sm group" 
                  href="mailto:videshkarmakar@gmail.com"
                >
                  <svg className="w-4 h-4 fill-none stroke-current text-[#F5F5F7] group-hover:scale-110 transition-transform" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: AboutAndMissionSection */}

      {/* BEGIN: YouTubeChannelSection */}
      <section className="py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto" id="music">
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#1A1A1A] via-[#161310] to-[#1F1C18] border border-[#2E2E2E] p-8 sm:p-12 md:p-16 shadow-2xl">
          {/* Subtle Luxury Glow Elements */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Copy and Main Hook */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#242424] text-[#E5E5E5] border border-[#383838] inline-block">
                YouTube Official Channel
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Official YouTube Artist
              </h2>
              <p className="text-[#A3A3A3] text-base sm:text-lg max-w-xl font-light leading-relaxed">
                Driven by a deep passion for future bass soundscapes, I craft emotive melodies, lush atmospheres, and heavy drops that blend cinematic feeling with high-voltage festival energy. Over eight years of sound design and electronic music production shape every release into an immersive, forward-looking sonic journey.
              </p>
              {/* Channel Stats Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-2 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                  <span className="block text-xs text-[#737373]">Content</span>
                  <span className="text-sm font-bold text-white">Future Bass &amp; Festival EDM</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                  <span className="block text-xs text-[#737373]">Experience</span>
                  <span className="text-sm font-bold text-[#E5E5E5]">8+ Years of Sound</span>
                </div>
              </div>
            </div>

            {/* Right Side: Channel Visit Action Box */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-6">
              <a 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-semibold text-base transition-all duration-300 shadow-luxury group" 
                href="https://www.youtube.com/@videshkarmakar2000/featured" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span>Visit Channel</span>
                <span className="w-6 h-6 rounded-full bg-[#100C08] text-[#F5F5F7] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END: YouTubeChannelSection */}

      {/* BEGIN: FeaturedAppSection */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-12 md:py-16" id="vk-projects">
        {/* Collapsible Section Container */}
        <div className={`w-full ${projectsExpanded ? 'accordion-open' : ''}`} id="projects-accordion-wrapper">
          {/* Interactive Accordion Toggle Header Card */}
          <button 
            aria-controls="projects-accordion-content" 
            aria-expanded={projectsExpanded} 
            className="w-full text-left rounded-[2.5rem] bg-[#1A1A1A] hover:bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#383838] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 group focus:outline-none focus:ring-1 focus:ring-white/40 cursor-pointer relative overflow-hidden" 
            id="projects-accordion-toggle" 
            onClick={() => setProjectsExpanded(!projectsExpanded)} 
            type="button"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Title & Kicker Group */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] border border-[#383838] text-[#E5E5E5] text-xs font-semibold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7] animate-pulse"></span>
                  Software &amp; Android Lab
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight group-hover:text-white transition-colors">
                      V.K Projects
                    </h2>
                    <span className="px-3 py-1 rounded-full bg-[#242424] border border-[#383838] text-xs font-bold text-[#E5E5E5]">3 Active Projects</span>
                  </div>
                </div>
              </div>
              {/* Toggle Action Indicator (Pill + Flipping Chevron) */}
              <div className="flex items-center gap-4 self-start md:self-center shrink-0">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#242424] group-hover:bg-[#2A2A2A] border border-[#2E2E2E] group-hover:border-[#383838] text-xs sm:text-sm font-semibold text-white transition-all shadow-luxury-sm">
                  <span>{projectsExpanded ? 'Tap to collapse projects' : 'Tap to expand projects'}</span>
                  <span className={`w-7 h-7 rounded-full bg-[#100C08] border border-[#2E2E2E] text-white flex items-center justify-center accordion-chevron ${projectsExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Collapsible Content Drawer */}
          <div className="accordion-content" id="projects-accordion-content">
            <div className="pt-8 space-y-10">
              
              {/* 1. Flagship Featured Project Card: Sharad Vromon */}
              <div className="w-full rounded-[2.5rem] bg-[#1A1A1A] border border-[#2E2E2E] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#F5F5F7] bg-[#242424] px-3 py-1 rounded-full border border-[#383838] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F7] animate-pulse"></span> Flagship Utility
                      </span>
                      <span className="text-[11px] font-semibold tracking-wider text-[#A3A3A3] bg-[#242424] px-3 py-1 rounded-full border border-[#383838]">
                        v1.4.0 • Android APK &amp; Web
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-baseline gap-2">
                        <span>শারদ ভ্রমণ</span>
                        <span className="text-[#A3A3A3] text-lg sm:text-xl font-normal">(Ultimate Durga Puja Hopping Guide App)</span>
                      </h3>
                      <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed mt-2">
                        Kolkata Durga Puja Pandal Hopping &amp; Google Maps Navigation Guide. Zero permissions required, station-by-station crowd routing, and offline-ready local railway corridors.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Platform</span>
                        <span className="text-xs font-bold text-white">Android &amp; PWA</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Security</span>
                        <span className="text-xs font-bold text-white">0 Permissions</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Stations</span>
                        <span className="text-xs font-bold text-white">Metro &amp; Local</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Maps API</span>
                        <span className="text-xs font-bold text-[#E5E5E5]">Direct Waypoints</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-3 w-full">
                    <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-2.5">
                      <a 
                        className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-bold text-sm shadow-luxury transition group" 
                        href="https://pujavromon.vercel.app/" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>Visit Website (Vercel)</span>
                      </a>
                      <a 
                        className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-white font-semibold text-sm transition group" 
                        href="https://pujovromon.ai.studio/" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <svg className="w-4 h-4 fill-none stroke-current text-[#A3A3A3] group-hover:text-white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>Visit Website (AI Studio)</span>
                      </a>
                      <button 
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#242424] border border-[#2E2E2E] text-[#A3A3A3] hover:text-white font-medium text-xs transition cursor-pointer" 
                        onClick={() => setActiveModal('sharad')} 
                        type="button"
                      >
                        <svg className="w-3.5 h-3.5 fill-none stroke-current text-[#A3A3A3]" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>View Comprehensive Specs &amp; Guide</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Featured Project Card: Loop (Cross-Platform Downloader) */}
              <div className="w-full rounded-[2.5rem] bg-[#1A1A1A] border border-[#2E2E2E] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#F5F5F7] bg-[#242424] px-3 py-1 rounded-full border border-[#383838] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F7] animate-pulse"></span> MULTI-PLATFORM DOWNLOADER
                      </span>
                      <span className="text-[11px] font-semibold tracking-wider text-[#A3A3A3] bg-[#242424] px-3 py-1 rounded-full border border-[#383838]">
                        v1.2.1.0 • Web App &amp; Utility
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-baseline gap-2">
                        <span>Loop</span>
                        <span className="text-[#A3A3A3] text-lg sm:text-xl font-normal">(Cross-Platform Downloader)</span>
                      </h3>
                      <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed mt-2">
                        A next-generation cross-platform downloader designed to make downloading photos, videos, and other supported digital media simpler, faster, and more organized. Built around modern download pipelines, efficient processing, and centralized task management.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Category</span>
                        <span className="text-xs font-bold text-white">Cross-Platform Downloader</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Version</span>
                        <span className="text-xs font-bold text-[#F5F5F7]">v1.2.1.0</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Content</span>
                        <span className="text-xs font-bold text-white">Photo &amp; Video Downloads</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Architecture</span>
                        <span className="text-xs font-bold text-[#E5E5E5]">Task Queue Engine</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-3 w-full">
                    <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-2.5">
                      <a 
                        className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-bold text-sm shadow-luxury transition group" 
                        href="https://loopfile.ai.studio" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>Visit Website (AI Studio)</span>
                      </a>
                      <button 
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#242424] border border-[#2E2E2E] text-[#A3A3A3] hover:text-white font-medium text-xs transition cursor-pointer" 
                        onClick={() => setActiveModal('loop')} 
                        type="button"
                      >
                        <svg className="w-3.5 h-3.5 fill-none stroke-current text-[#A3A3A3]" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>View Comprehensive Specs &amp; Guide</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Featured Project Card: V-Tune 2.O */}
              <div className="w-full rounded-[2.5rem] bg-[#1A1A1A] border border-[#2E2E2E] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#F5F5F7] bg-[#242424] px-3 py-1 rounded-full border border-[#383838] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F7] animate-pulse"></span> LIGHTWEIGHT MUSIC STREAMING
                      </span>
                      <span className="text-[11px] font-semibold tracking-wider text-[#A3A3A3] bg-[#242424] px-3 py-1 rounded-full border border-[#383838]">
                        V-Tune 2.O • Android APK
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-baseline gap-2">
                        <span>V-Tune 2.O</span>
                        <span className="text-[#A3A3A3] text-lg sm:text-xl font-normal">(Lightweight Music Streaming Alternative)</span>
                      </h3>
                      <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed mt-2">
                        The next generation of V-Tune — a lightweight music streaming alternative inspired by Spotify and YouTube Music. Specially built for low-end devices, V-Tune 2.O focuses on delivering a smooth, accessible, and convenient music-listening experience without demanding excessive device resources.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Category</span>
                        <span className="text-xs font-bold text-white">Music &amp; Audio</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Version</span>
                        <span className="text-xs font-bold text-[#F5F5F7]">V-Tune 2.O</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Platform</span>
                        <span className="text-xs font-bold text-white">Android APK</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E]">
                        <span className="block text-[10px] text-[#737373] uppercase font-semibold">Architecture</span>
                        <span className="text-xs font-bold text-[#E5E5E5]">Minimal RAM / CPU</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-3 w-full">
                    <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-2.5">
                      <a 
                        className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-bold text-sm shadow-luxury transition group" 
                        href="https://github.com/videshkarmakar-hue/V-Tune/releases/download/V-Tune/V-Tune.2.O.apk" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>Download APK (V-Tune 2.O)</span>
                      </a>
                      <button 
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#242424] border border-[#2E2E2E] text-[#A3A3A3] hover:text-white font-medium text-xs transition cursor-pointer" 
                        onClick={() => setActiveModal('vtune')} 
                        type="button"
                      >
                        <svg className="w-3.5 h-3.5 fill-none stroke-current text-[#A3A3A3]" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>View Comprehensive Specs &amp; Guide</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* END: FeaturedAppSection */}

      {/* BEGIN: ContactFooterSection */}
      <footer className="border-t border-[#2E2E2E] bg-[#100C08] pt-16 pb-12" id="contact">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Upper Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2E2E2E]">
            {/* Logo & Description */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#F5F5F7] shadow-luxury-sm"></span>
                <span className="font-bold text-2xl tracking-tight text-white">Videsh Karmakar</span>
              </div>
              <p className="text-[#A3A3A3] text-sm max-w-sm leading-relaxed">
                Bedroom Electronic Music Producer &amp; Utility Web Developer. Shaping high-energy sounds and intuitive digital experiences.
              </p>
              <div className="pt-2 text-sm text-[#737373]">
                <span>Email: </span>
                <a className="text-white hover:underline" href="mailto:videshkarmakar@gmail.com">videshkarmakar@gmail.com</a>
              </div>
            </div>
            {/* Navigation Links Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm text-[#A3A3A3]">
                <li><a className="hover:text-white transition" href="#home">Home</a></li>
                <li><a className="hover:text-white transition" href="#about">About &amp; Bio</a></li>
                <li><a className="hover:text-white transition" href="#music">YouTube Channel</a></li>
                <li><a className="hover:text-white transition" href="#vk-projects">V.K Projects</a></li>
              </ul>
            </div>
            {/* Direct Social Links Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 text-sm text-[#A3A3A3]">
                <li><a className="hover:text-white transition" href="https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP" rel="noopener noreferrer" target="_blank">Spotify Profile</a></li>
                <li><a className="hover:text-white transition" href="https://www.youtube.com/@videshkarmakar2000" rel="noopener noreferrer" target="_blank">YouTube Channel</a></li>
                <li><a className="hover:text-white transition" href="https://www.instagram.com/code.red_videsh/" rel="noopener noreferrer" target="_blank">Instagram (@code.red_videsh)</a></li>
                <li><a className="hover:text-white transition" href="https://www.facebook.com/gfx.videsh" rel="noopener noreferrer" target="_blank">Facebook Profile</a></li>
              </ul>
            </div>
          </div>
          {/* Lower Copyright Note */}
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 text-xs text-[#737373] justify-center">
            <p className="text-center">© 2025 Videsh Karmakar. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* END: ContactFooterSection */}

      {/* BEGIN: InteractiveModalSharadVromon */}
      {activeModal === 'sharad' && (
        <div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog">
          {/* Backdrop Blur */}
          <div aria-hidden="true" className="fixed inset-0 bg-[#100C08]/85 modal-backdrop-blur transition-opacity duration-300" onClick={closeModal}></div>
          {/* Modal Dialog Container */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1A1A1A] border border-[#2E2E2E] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto text-left transform transition-all">
            {/* Modal Sticky Header */}
            <div className="sticky top-0 z-20 flex items-start justify-between p-6 sm:p-8 bg-[#1A1A1A]/95 border-b border-[#2E2E2E] backdrop-blur-md">
              <div className="pr-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] border border-[#383838] text-[#E5E5E5] text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Official Architecture &amp; System Docs</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" id="modal-title">
                  শারদ ভ্রমণ <span className="text-[#A3A3A3] font-medium text-xl sm:text-2xl">(Sharad Vromon)</span> — Full Application Overview
                </h2>
                <p className="text-sm sm:text-base text-[#A3A3A3] mt-1">
                  Your Kolkata Durga Puja Pandal Hopping &amp; Google Maps Guide
                </p>
              </div>
              {/* Close Button */}
              <button 
                aria-label="Close modal" 
                className="shrink-0 w-10 h-10 rounded-full bg-[#242424] border border-[#2E2E2E] hover:border-[#383838] text-[#A3A3A3] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white cursor-pointer" 
                onClick={closeModal} 
                type="button"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            {/* Quick External Access Bar Inside Modal */}
            <div className="px-6 sm:px-8 py-3 bg-[#100C08]/90 border-b border-[#2E2E2E] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#737373] font-medium">Direct Live Deployments:</span>
              <div className="flex items-center gap-3">
                <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-semibold transition" href="https://pujavromon.vercel.app/" rel="noopener noreferrer" target="_blank">
                  <span>Vercel Production</span>
                  <svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#242424] border border-[#2E2E2E] hover:border-[#383838] text-white font-semibold transition" href="https://pujovromon.ai.studio/" rel="noopener noreferrer" target="_blank">
                  <span>AI Studio Version</span>
                  <svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            {/* Scrollable Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
              {/* Section 1: What is Sharad Vromon? */}
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">1. What is শারদ ভ্রমণ?</h3>
                </div>
                <p>
                  Durga Puja in Kolkata is not merely an annual religious observance—it is one of the world’s largest public open-air art exhibitions and human gatherings. Millions take to the streets across day and night, visiting hundreds of intricately themed pandals that span North, South, Central, East Kolkata, and extended suburban districts like Kalyani.
                </p>
                <p>
                  However, navigating this enormous carnival is notoriously difficult: street closures, police barricades, unpredictable congestion, and confusing transit connections frequently lead to exhaustion. 
                  <strong className="text-white font-medium"> শারদ ভ্রমণ (Sharad Vromon)</strong> was built to solve this exact problem. It functions as a lightweight, lightning-fast digital expedition companion designed to organize pandal hopping systematically through verified public transit corridors, station-wise clustering, and instant Google Maps waypoints.
                </p>
              </section>
              {/* Section 2: Why Sharad Vromon? */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">2. Why শারদ ভ্রমণ? (Key Advantages)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">📍 Pandal Hopping Made Effortless</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Eliminates random wandering by grouping nearby pandals into seamless walking clusters, cutting down hours of unnecessary transit.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🗺️ Direct Google Maps Turn-by-Turn</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">One tap on any pandal or station directly opens exact walking or transit routes inside Google Maps—no manual typing required.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🚇 Station-Based Strategic Planning</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Organized around Kolkata Metro and Suburban railway hubs, allowing visitors to commute directly to entry gates.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🏛️ Heritage, Theme &amp; Suburban Reach</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Categorizes century-old Bonedi Bari traditions alongside state-of-the-art Theme Pujas and outstation highlights like Kalyani ITI More.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🚻 Essential Facilities Discovery</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Quickly finds clean public toilets, medical aid tents, drinking water posts, and dining spots nearby without frantic searching.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🔒 Zero Permissions Required</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Guaranteed complete privacy: no account creation, zero tracking, no device hardware access demanded.</p>
                  </div>
                </div>
              </section>
              {/* Section 3: All Features & Exploration Modules */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">3. All Features &amp; Exploration Modules</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Metro Station-Wise Guide</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Explore pandals grouped by North-South Blue Line stations (Sovabazar, Girish Park, MG Road, Kalighat, Netaji Bhavan, Rabindra Sarobar) and East-West Green Line corridors (Karunamoyee, Salt Lake Stadium, Sealdah).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Suburban &amp; Train Route Directory</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Comprehensive travel directions for Sealdah and Howrah local train commuters navigating through Bidhan Nagar, Dum Dum, Ballygunge, Jadavpur, and Garia.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">North vs. South Kolkata Separation</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Dedicated zones prevent exhausting cross-city travel during peak traffic hours. Plan North Kolkata on Sasthi/Saptami and South Kolkata on Asthami/Navami with dedicated trail lists.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Bonedi Bari &amp; Heritage Aristocratic Pujas</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Specialized archival trails showcasing centuries-old zamindar house pujas, including Sovabazar Rajbari, Rani Rashmoni, Thanthania Dutta Bari, and Pathuriaghata.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Kalyani &amp; Suburban Mega Exhibits</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Full guides for suburban mega pandals like the famous Kalyani ITI More pandals, with explicit instructions on Sealdah Main Line trains and road options.</p>
                  </div>
                </div>
              </section>
              {/* Section 4: Google Maps Integration Layer */}
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">4. Google Maps Integration Layer</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  Unlike proprietary map apps that require resource-heavy in-app tracking or drain battery rapidly, শারদ ভ্রমণ integrates directly with Google Maps via optimized universal URL protocols. Users tap a destination, and the route instantaneously launches in Google Maps with exact coordinate precision, taking advantage of Google's live crowd rerouting and pedestrian paths.
                </p>
              </section>
              {/* Section 5: Privacy & Zero Permissions Guarantee */}
              <section className="space-y-3 p-5 rounded-2xl bg-[#100C08]/90 border border-[#2E2E2E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-base sm:text-lg font-bold text-white">5. Privacy &amp; Zero Permissions Guarantee</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  Sharad Vromon strictly respects user freedom and battery life:
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#E5E5E5]">
                  <li className="flex items-center gap-1.5"><span className="text-[#F5F5F7] font-bold">✓</span> No Camera</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#F5F5F7] font-bold">✓</span> No Storage Access</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#F5F5F7] font-bold">✓</span> No Contact Lists</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#F5F5F7] font-bold">✓</span> No Microphone</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#F5F5F7] font-bold">✓</span> No Login / Passwords</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#F5F5F7] font-bold">✓</span> Zero Background Tracking</li>
                </ul>
              </section>
              {/* Modal Footer Quote & Motto */}
              <div className="p-5 rounded-2xl bg-[#242424] border border-[#2E2E2E] text-center space-y-2">
                <p className="text-sm font-semibold text-white">
                  “Find your Puja destination. Plan your visit. Open the map. Start exploring.”
                </p>
                <p className="text-xs text-[#A3A3A3] font-bold tracking-wider uppercase">
                  Explore More. Plan Better. Celebrate Sharad.
                </p>
              </div>
            </div>
            {/* Modal Sticky Bottom Footer */}
            <div className="sticky bottom-0 z-20 p-4 sm:p-6 bg-[#1A1A1A]/95 border-t border-[#2E2E2E] backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#737373]">
                Created &amp; Maintained by <span className="text-white font-semibold">Videsh Karmakar</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-white text-xs font-semibold transition cursor-pointer" onClick={closeModal} type="button">
                  Close Window
                </button>
                <a className="px-5 py-2 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] text-xs font-bold transition shadow-luxury-sm" href="https://pujavromon.vercel.app/" rel="noopener noreferrer" target="_blank">
                  Launch App Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END: InteractiveModalSharadVromon */}

      {/* BEGIN: InteractiveModalVTune */}
      {activeModal === 'vtune' && (
        <div aria-labelledby="vtune-modal-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog">
          <div aria-hidden="true" className="fixed inset-0 bg-[#100C08]/85 modal-backdrop-blur transition-opacity duration-300" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1A1A1A] border border-[#2E2E2E] rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl overflow-y-auto z-10 text-[#E5E5E5] my-auto">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#2E2E2E]">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-white bg-[#242424] px-3 py-1 rounded-full border border-[#383838]">v2.1.0.0</span>
                  <span className="text-[11px] font-semibold tracking-wider text-[#A3A3A3] bg-[#242424] px-3 py-1 rounded-full border border-[#383838]">Music Streaming Alternative</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" id="vtune-modal-title">V-Tune — Specifications &amp; Guide</h3>
              </div>
              <button className="p-2.5 rounded-full bg-[#242424] hover:bg-[#2E2E2E] text-[#A3A3A3] hover:text-white border border-[#383838] transition cursor-pointer" onClick={closeModal} type="button">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="py-6 space-y-6 text-sm sm:text-base leading-relaxed text-[#A3A3A3]">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">What is V-Tune?</h4>
                <p>V-Tune is a lightweight music streaming alternative inspired by the music discovery and listening experiences offered by Spotify and YouTube Music. Specially built for low-end devices, V-Tune focuses on delivering a smooth, accessible, and convenient music-listening experience without demanding excessive device resources.</p>
                <p className="mt-2">Designed with performance and simplicity in mind, V-Tune aims to make music more accessible to users who prefer a lightweight application over resource-intensive music streaming apps. The name “V-Tune” reflects the core idea: a modern, personalized music experience built around tunes, simplicity, and accessibility.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Why V-Tune?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-[#100C08] border border-[#2E2E2E]"><strong className="text-white block mb-1">Music Made Lightweight</strong>A music-listening alternative designed especially for low-end devices and users who prefer a lightweight experience.</div>
                  <div className="p-4 rounded-2xl bg-[#100C08] border border-[#2E2E2E]"><strong className="text-white block mb-1">Spotify &amp; YouTube Music Alternative</strong>An alternative for users looking for another way to discover and enjoy music.</div>
                  <div className="p-4 rounded-2xl bg-[#100C08] border border-[#2E2E2E]"><strong className="text-white block mb-1">Performance-Focused Experience</strong>Attention to efficient resource usage and responsive interactions on devices with limited hardware capabilities.</div>
                  <div className="p-4 rounded-2xl bg-[#100C08] border border-[#2E2E2E]"><strong className="text-white block mb-1">Simple &amp; Convenient Interface</strong>A music-focused experience that makes listening straightforward and accessible.</div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">A Different Approach to Music Listening</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li><strong className="text-white">Lightweight Design:</strong> A performance-conscious application experience.</li>
                  <li><strong className="text-white">Low-End Device Focus:</strong> Designed with limited hardware resources in mind.</li>
                  <li><strong className="text-white">Music-Centered Interface:</strong> A streamlined experience built around listening.</li>
                  <li><strong className="text-white">Everyday Accessibility:</strong> Simplicity and usability at the center of the experience.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Privacy &amp; Permissions</h4>
                <p className="text-xs sm:text-sm">V-Tune aims to keep the user experience focused and avoid unnecessary complexity. Its actual permission requirements depend on implemented features (such as internet access for streaming). V-Tune requests only permissions necessary for its intended functionality.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#100C08] border border-[#2E2E2E] text-center">
                <p className="text-xs uppercase tracking-widest text-[#737373] font-semibold">The V-Tune Experience</p>
                <p className="text-white font-bold text-base mt-1">Find Your Music. Keep It Lightweight. Tune In.</p>
                <p className="text-[#A3A3A3] text-xs mt-1">Listen Simply. Experience More. Tune Into V-Tune.</p>
              </div>
            </div>
            <div className="pt-6 border-t border-[#2E2E2E] flex flex-col sm:flex-row gap-3 justify-end">
              <a className="px-5 py-2.5 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-bold text-xs inline-flex items-center justify-center gap-2" href="https://github.com/videshkarmakar-hue/V-Tune/releases/download/V-Tune/V-Tune-arm64-foss-debug.apk" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Download APK (v2.1.0)
              </a>
              <button className="px-5 py-2.5 rounded-xl bg-[#242424] hover:bg-[#2E2E2E] text-white font-medium text-xs border border-[#383838] transition cursor-pointer" onClick={closeModal} type="button">
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
      {/* END: InteractiveModalVTune */}

      {/* BEGIN: InteractiveModalLoop */}
      {activeModal === 'loop' && (
        <div aria-labelledby="loop-modal-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog">
          <div aria-hidden="true" className="fixed inset-0 bg-[#100C08]/85 modal-backdrop-blur transition-opacity duration-300" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1A1A1A] border border-[#2E2E2E] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto text-left transform transition-all">
            <div className="sticky top-0 z-20 flex items-start justify-between p-6 sm:p-8 bg-[#1A1A1A]/95 border-b border-[#2E2E2E] backdrop-blur-md">
              <div className="pr-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] border border-[#383838] text-[#E5E5E5] text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Next-Generation Downloader Platform</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" id="loop-modal-title">
                  Loop <span className="text-[#A3A3A3] font-medium text-xl sm:text-2xl">(Cross-Platform Downloader)</span> — v1.2.1.0
                </h2>
                <p className="text-sm sm:text-base text-[#A3A3A3] mt-1">
                  Modern, unified cross-platform pipeline for photo, video, and digital media downloads.
                </p>
              </div>
              <button aria-label="Close modal" className="shrink-0 w-10 h-10 rounded-full bg-[#242424] border border-[#2E2E2E] hover:border-[#383838] text-[#A3A3A3] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white cursor-pointer" onClick={closeModal} type="button">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="px-6 sm:px-8 py-3 bg-[#100C08]/90 border-b border-[#2E2E2E] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#737373] font-medium">Direct Live Web App:</span>
              <div className="flex items-center gap-3">
                <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-semibold transition" href="https://loopfile.ai.studio" rel="noopener noreferrer" target="_blank">
                  <span>Launch Loop Web App</span>
                  <svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">1. What is Loop?</h3>
                </div>
                <p>
                  <strong className="text-white font-medium">Loop</strong> is a next-generation cross-platform downloader designed to make downloading photos, videos, and digital content simpler, faster, and centralized across multiple sources. Instead of juggling dozens of fragmented tools, ad-heavy web converters, and convoluted download scripts, Loop offers a clean, unified ecosystem that automates and streamlines retrieval tasks.
                </p>
                <p>
                  Built around modern asynchronous download pipelines and efficient stream handling, Loop provides users with an intuitive, reliable dashboard to queue, fetch, and organize their media effortlessly.
                </p>
              </section>
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">2. Why Loop? (Key Advantages)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🌐 Cross-Platform Support</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Engineered to function seamlessly across desktop browsers, tablet viewports, and mobile devices with complete responsiveness.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">⚡ Next-Generation Download Technology</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Employs parallel download pipelines and optimized chunking to deliver maximum speed without artificial throttle barriers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">📸 High-Definition Photo Downloads</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Extracts source-resolution imagery, albums, and visual assets without unnecessary compression or quality loss.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🎬 Crisp Video Downloads</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Supports diverse resolutions, adaptive bitrates, and audio extraction across supported video host environments.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">📦 Multiple Content Types</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">A flexible parser engine capable of ingesting diverse media payloads from single links to multi-item collections.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🔄 Centralized Download Management</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Organize active, pending, and completed download streams from a single unified status dashboard.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🚀 Efficient Processing &amp; Minimal Footprint</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Engineered with low memory overhead, avoiding client bloat and battery drain during background tasks.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">✨ Simplified Workflow</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">One-click link ingestion with automatic type recognition—no tedious configuration or complex setup steps.</p>
                  </div>
                </div>
              </section>
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">3. Core Features</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Cross-Platform Downloader Architecture</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Universal browser-based client designed for cross-OS compatibility across Windows, macOS, Linux, Android, and iOS.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Next-Generation Download Method</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Asynchronous task handling with automatic retry mechanics and intelligent buffer management for seamless large file completion.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Photo &amp; Image Downloads</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Preserves full color depths, EXIF metadata where permissible, and pristine uncompressed asset dimensions.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Video Downloads</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Provides versatile multi-resolution streams (SD, HD, Full HD) with optimized audio-video remuxing for crystal playback.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Other Supported Downloads</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Modular pipeline ready for expanding digital formats, including audio podcasts, archival sets, and bundled assets.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Download Task Management</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Robust task queue engine featuring pause, resume, progress monitoring, and batch job organization.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Performance-Focused Architecture</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Lightweight frontend bundled with resilient worker execution guarantees lightning response times even under heavy queues.</p>
                  </div>
                </div>
              </section>
              <section className="space-y-3 p-5 rounded-2xl bg-[#100C08]/90 border border-[#2E2E2E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-base sm:text-lg font-bold text-white">4. Privacy &amp; Responsible Use</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  Loop is created strictly as an authorized personal utility. Users are advised to adhere to ethical download guidelines:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#E5E5E5]">
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Content Rights Notice:</strong> Download only content you have permission or license to store.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Authorized Downloads:</strong> Built for personal archival, offline research, and creative workflows.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Respect Terms of Service:</strong> Comply with platform guidelines and creators' proprietary rights.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Zero Data Hoarding:</strong> Loop does not store or share your downloads or browsing history.</span></li>
                </ul>
              </section>
              <div className="p-5 rounded-2xl bg-[#242424] border border-[#2E2E2E] text-center space-y-2">
                <p className="text-sm font-semibold text-white">
                  “One app. Multiple platforms. A smarter way to download.”
                </p>
                <p className="text-xs text-[#A3A3A3] font-bold tracking-wider uppercase">
                  Clean Pipelines • High Speed • Unified Utility
                </p>
              </div>
            </div>
            <div className="sticky bottom-0 z-20 p-4 sm:p-6 bg-[#1A1A1A]/95 border-t border-[#2E2E2E] backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#737373]">
                Created &amp; Maintained by <span className="text-white font-semibold">Videsh Karmakar</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-white text-xs font-semibold transition cursor-pointer" onClick={closeModal} type="button">
                  Close Window
                </button>
                <a className="px-5 py-2 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] text-xs font-bold transition shadow-luxury-sm" href="https://loopfile.ai.studio" rel="noopener noreferrer" target="_blank">
                  Launch Loop Web App →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END: InteractiveModalLoop */}

      {/* BEGIN: InteractiveModalStremo */}
      {activeModal === 'stremo' && (
        <div aria-labelledby="stremo-modal-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog">
          <div aria-hidden="true" className="fixed inset-0 bg-[#100C08]/85 modal-backdrop-blur transition-opacity duration-300" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1A1A1A] border border-[#2E2E2E] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto text-left transform transition-all">
            <div className="sticky top-0 z-20 flex items-start justify-between p-6 sm:p-8 bg-[#1A1A1A]/95 border-b border-[#2E2E2E] backdrop-blur-md">
              <div className="pr-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] border border-[#383838] text-[#E5E5E5] text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Alternative Music Streaming Platform</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" id="stremo-modal-title">
                  Stremo <span className="text-[#A3A3A3] font-medium text-xl sm:text-2xl">(Alternative Music Streaming Platform)</span> — v2.2.0.1
                </h2>
                <p className="text-sm sm:text-base text-[#A3A3A3] mt-1">
                  A powerful, unified music streaming ecosystem bringing Spotify, YouTube Music, and Lossless Audio together.
                </p>
              </div>
              <button aria-label="Close modal" className="shrink-0 w-10 h-10 rounded-full bg-[#242424] border border-[#2E2E2E] hover:border-[#383838] text-[#A3A3A3] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white cursor-pointer" onClick={closeModal} type="button">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="px-6 sm:px-8 py-3 bg-[#100C08]/90 border-b border-[#2E2E2E] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#737373] font-medium">Direct Live Web App:</span>
              <div className="flex items-center gap-3">
                <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-semibold transition" href="https://stremo.ai.studio/" rel="noopener noreferrer" target="_blank">
                  <span>Launch Stremo Web App</span>
                  <svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">1. What is Stremo?</h3>
                </div>
                <p>
                  <strong className="text-white font-medium">Stremo</strong> is an innovative, high-performance music streaming application built as an open, versatile alternative to conventional corporate music streaming services like Spotify and YouTube Music. It aggregates multiple streaming providers into a unified, seamless player with clean ergonomics, zero intrusive subscriptions, and audiophile-level playback capabilities.
                </p>
                <p>
                  Designed for modern music enthusiasts, Stremo harmonizes your personal libraries, external streaming feeds, high-fidelity lossless tiers, and synced lyrics into one cohesive environment tailored to your preferences.
                </p>
              </section>
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">2. Why Stremo? (Key Advantages)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🎵 Multi-Source Audio Streaming</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Seamlessly switches between YouTube Music audio streams, Spotify library sync, and studio-grade lossless codecs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🎧 Audiophile Hi-Res Lossless</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Experimental master quality up to 24-bit/192kHz via Qobuz alongside standard CD-quality 16-bit FLAC and AAC 320kbps.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🔒 Sandboxed WebView Privacy</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Spotify accounts connect directly via official isolated WebViews. Stremo never stores, accesses, or relays login credentials.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🎤 Synchronized Real-Time Lyrics</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Enjoy line-by-line karaoked lyrics synced automatically with live tracks for seamless singing and browsing.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🎛️ Studio-Grade Audio Processing</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Equipped with automatic silence skipping, ReplayGain volume normalization, real-time tempo control, and pitch shifts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🎨 Material 3 &amp; Discord Presence</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Adaptive color extraction from album art matching Material You, paired with real-time Discord Rich Presence broadcasting.</p>
                  </div>
                </div>
              </section>
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">3. Core Music Features</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">YouTube Music Integration</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Stream vast song collections, live bootlegs, remixes, Quick Picks, and background playback with smart stream caching.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Spotify Integration &amp; WebView Sync</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Import your Spotify playlists, explore Spotify-curated home feeds, and sync your favorite artists securely via WebView authentication.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Experimental Lossless Audio (Qobuz Hi-Res Engine)</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Experience pristine studio master audio up to 24-bit/192kHz, CD quality (16-bit/44.1kHz), and AAC 320kbps backed by ISRC track matching and intelligent fallback resolvers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Smart Music Search &amp; Unified Catalog</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Search across multiple platforms simultaneously. Find tracks, albums, artists, remixes, and podcasts with zero duplicates.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Personalized Recommendations &amp; Smart Queue</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Algorithmic radio queues matching genre, tempo, and mood transitions ensure an uninterrupted listening session.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Music Library &amp; Playlist Management</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Build custom offline-capable playlists, sort by release year, BPM, or artist, and pin top-rotation collections.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Downloads &amp; Offline Playback</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Cache and download tracks for high-speed offline listening on flights, commutes, or remote travels without data consumption.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Live Synchronized Lyrics</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Real-time synchronized line scrolling with interactive lyrics tap-to-seek support powered by community lyric databases.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Advanced Audio Controls</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">ReplayGain loudness matching, smooth crossfades, automatic gapless transitions, audio pitch shift, and silence trimming.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Listen Together, Sleep Timer &amp; Widget</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Synchronized collaborative playback rooms with friends, custom bedtime sleep timer, and convenient home screen widget integration.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Material 3 Theming &amp; Discord Rich Presence</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Dynamic palette extraction reflecting currently playing album artwork, plus detailed Discord status displaying track name and elapsed playback.</p>
                  </div>
                </div>
              </section>
              <section className="space-y-3 p-5 rounded-2xl bg-[#100C08]/90 border border-[#2E2E2E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-base sm:text-lg font-bold text-white">4. Account Access &amp; Privacy</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  Stremo adopts a zero-trust credential architecture. All third-party logins occur inside official, isolated, sandboxed WebViews directly hosted by respective providers:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#E5E5E5]">
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>No Credential Harvesting:</strong> Passwords, session tokens, and keys are never touched or harvested by Stremo servers.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Client-Side Storage:</strong> Playlists, favorites, and history remain securely cached on your local client instance.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Zero Telemetry Selling:</strong> No audio tracking profiles, advertiser SDKs, or data brokers.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Direct Stream Routing:</strong> Media is fetched directly via source CDNs without middleman proxy logging.</span></li>
                </ul>
              </section>
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">5. Who Is Stremo For?</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#A3A3A3]">
                  <div className="p-3 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <strong className="text-white block mb-1">🎧 Audiophiles</strong>
                    Demanding uncompressed FLAC master tiers and granular sound frequency personalization.
                  </div>
                  <div className="p-3 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <strong className="text-white block mb-1">🚀 Multi-Platform Listeners</strong>
                    Users tired of switching between separate YouTube and Spotify applications.
                  </div>
                  <div className="p-3 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <strong className="text-white block mb-1">💡 Privacy Enthusiasts</strong>
                    Listeners looking for clean, open-source inspired player ergonomics free of bloat.
                  </div>
                </div>
              </section>
              <div className="p-5 rounded-2xl bg-[#242424] border border-[#2E2E2E] text-center space-y-2">
                <p className="text-sm font-semibold text-white">
                  “Your music. Your style. Your experience. Explore More. Listen Better. Make Every Track Yours.”
                </p>
                <p className="text-xs text-[#A3A3A3] font-bold tracking-wider uppercase">
                  The Stremo Experience • Next-Generation Sound
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#100C08]/90 border border-[#2E2E2E] text-[11px] text-[#737373] leading-normal">
                <strong className="text-[#A3A3A3] block mb-1">Important Disclaimer:</strong>
                Stremo is an independent, non-commercial software project designed for educational and personal entertainment utility. It is not affiliated with, endorsed by, or sponsored by Spotify AB, YouTube, Google LLC, Qobuz, or any associated trademark holders. All trademarks, service marks, trade names, and product names are the property of their respective owners.
              </div>
            </div>
            <div className="sticky bottom-0 z-20 p-4 sm:p-6 bg-[#1A1A1A]/95 border-t border-[#2E2E2E] backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#737373]">
                Created &amp; Maintained by <span className="text-white font-semibold">Videsh Karmakar</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-white text-xs font-semibold transition cursor-pointer" onClick={closeModal} type="button">
                  Close Window
                </button>
                <a className="px-5 py-2 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] text-xs font-bold transition shadow-luxury-sm" href="https://stremo.ai.studio/" rel="noopener noreferrer" target="_blank">
                  Launch Stremo Web App →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END: InteractiveModalStremo */}

      {/* BEGIN: InteractiveModalWings */}
      {activeModal === 'wings' && (
        <div aria-labelledby="wings-modal-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog">
          <div aria-hidden="true" className="fixed inset-0 bg-[#100C08]/85 modal-backdrop-blur transition-opacity duration-300" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1A1A1A] border border-[#2E2E2E] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto text-left transform transition-all">
            <div className="sticky top-0 z-20 flex items-start justify-between p-6 sm:p-8 bg-[#1A1A1A]/95 border-b border-[#2E2E2E] backdrop-blur-md">
              <div className="pr-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] border border-[#383838] text-[#E5E5E5] text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Built for Low-End Devices</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" id="wings-modal-title">
                  Wings <span className="text-[#A3A3A3] font-medium text-xl sm:text-2xl">(Lightweight Music Streaming Platform)</span>
                </h2>
                <p className="text-sm sm:text-base text-[#A3A3A3] mt-1">
                  Lightweight Music Streaming Platform • Spotify &amp; YouTube Music Alternative
                </p>
              </div>
              <button aria-label="Close modal" className="shrink-0 w-10 h-10 rounded-full bg-[#242424] border border-[#2E2E2E] hover:border-[#383838] text-[#A3A3A3] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white cursor-pointer" onClick={closeModal} type="button">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="px-6 sm:px-8 py-3 bg-[#100C08]/90 border-b border-[#2E2E2E] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#737373] font-medium">Direct Live Web App:</span>
              <div className="flex items-center gap-3">
                <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] font-semibold transition" href="https://wings.ai.studio/" rel="noopener noreferrer" target="_blank">
                  <span>Launch Wings Web App</span>
                  <svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">1. What is Wings?</h3>
                </div>
                <p>
                  <strong className="text-white font-medium">Wings</strong> is a lightweight, performance-first music streaming platform built as an accessible, streamlined alternative to heavyweight corporate music streaming apps like Spotify and YouTube Music. Mainstream platforms have grown increasingly bloated with resource-heavy animations, background tracking scripts, algorithmic clutter, and intrusive upsells—rendering them sluggish on modest hardware.
                </p>
                <p>
                  Wings reverses this paradigm. Built from the ground up for minimal resource footprint, Wings ensures that music streaming remains fluid, immediate, and responsive—even on budget smartphones, aging laptops, and restricted data connections.
                </p>
                <div className="p-4 rounded-xl bg-[#100C08]/80 border-l-2 border-[#F5F5F7] mt-2">
                  <span className="block text-xs uppercase font-semibold text-[#A3A3A3] tracking-wider">The Wings Philosophy</span>
                  <p className="text-white font-medium text-sm mt-1">“Less Overhead. More Music.”</p>
                </div>
              </section>
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">2. Why Wings? (6 Core Pillars)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🪶 Lightweight Music Experience</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Streamlined bundle size and minimal memory consumption allow the player to launch and respond instantly.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">⚡ Built for Low-End Devices</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Specifically optimized for devices with 1GB–3GB RAM, older multi-core processors, and storage-limited environments.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🎵 Spotify &amp; YouTube Music Alternative</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Delivers your favorite audio tracks without the bloat, forced podcasts, audio ads, or algorithmic home-screen clutter.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">✨ Simple &amp; Intuitive Interface</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Clean, accessible navigation focused entirely on playback, search, and queue management without deep menu nesting.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🚀 Performance-Oriented Design</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">CSS GPU-accelerated transforms, zero heavyweight runtime dependencies, and efficient audio buffer pipelines.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/80 border border-[#2E2E2E]">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">🌐 Accessibility by Design</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3]">Fully responsive layout with high-contrast text ratios, clear tap targets, and reliable background playback.</p>
                  </div>
                </div>
              </section>
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">3. Specially Built for Low-End Devices</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Efficient Resource Usage</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Strict limits on background threads and passive memory retention prevent device throttling, overheating, and battery drain.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Performance-Conscious Design</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Omits redundant visual effects, particle renders, and complex blur layers in favor of high-performance flat obsidian styling.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Device Accessibility</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Works seamlessly across entry-level Android devices, lightweight Linux desktops, Chromebooks, and modern lightweight browsers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#100C08]/60 border-l-2 border-[#F5F5F7]">
                    <h4 className="font-bold text-white text-sm sm:text-base">Simplified Navigation &amp; Everyday Reliability</h4>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">Immediate audio playback controls with zero multi-second latency, ensuring that pressing play actually starts music instantly.</p>
                  </div>
                </div>
              </section>
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">4. An Alternative to Spotify &amp; YouTube Music</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  Mainstream applications have evolved into monolithic lifestyle portals stuffed with video podcasts, sponsored carousels, social graphs, and constant upsell banners. Wings returns to what music listening was meant to be: a clean, uncluttered, respectful utility that plays the sound you love with flawless reliability.
                </p>
              </section>
              <section className="space-y-3 p-5 rounded-2xl bg-[#100C08]/90 border border-[#2E2E2E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-base sm:text-lg font-bold text-white">5. Privacy &amp; Permissions</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  Wings respects your digital freedom with transparent data practices:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#E5E5E5]">
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Minimal Required Permissions:</strong> No access requested to contacts, location, media storage, or device camera.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>No Invasive Ad Trackers:</strong> Zero behavioral tracking scripts, telemetry pixels, or commercial profiling.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Client-Side Preferences:</strong> Your recent plays, volume levels, and queues stay purely inside your local browser storage.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F5F5F7] font-bold mt-0.5">✓</span> <span><strong>Safe Stream Retrieval:</strong> Streams are pulled directly through secure channels without intermediary storage.</span></li>
                </ul>
              </section>
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7]"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">6. Designed for Everyday Music Listeners</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  Whether commuting on an older phone, working in low-connectivity areas, or multitasking on a low-spec laptop, Wings guarantees your audio playback stays uninterrupted without draining your device dry.
                </p>
              </section>
              <div className="p-5 rounded-2xl bg-[#242424] border border-[#2E2E2E] text-center space-y-2">
                <p className="text-sm font-semibold text-white">
                  “WINGS — Your Music. Your Freedom. Your Wings.”
                </p>
                <p className="text-xs text-[#A3A3A3] font-bold tracking-wider uppercase">
                  Listen Freely. Stay Lightweight. Let Your Music Fly.
                </p>
              </div>
            </div>
            <div className="sticky bottom-0 z-20 p-4 sm:p-6 bg-[#1A1A1A]/95 border-t border-[#2E2E2E] backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#737373]">
                Created &amp; Maintained by <span className="text-white font-semibold">Videsh Karmakar</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-white text-xs font-semibold transition cursor-pointer" onClick={closeModal} type="button">
                  Close Window
                </button>
                <a className="px-5 py-2 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#100C08] text-xs font-bold transition shadow-luxury-sm" href="https://wings.ai.studio/" rel="noopener noreferrer" target="_blank">
                  Launch Wings Web App →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END: InteractiveModalWings */}
    </div>
  );
}
