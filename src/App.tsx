/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Search, 
  X, 
  Star, 
  ArrowRight, 
  Gem,
  Truck
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Necklaces' | 'Rings' | 'Bracelets' | 'Couple Sets';
  price: number;
  formattedPrice: string;
  karat: string;
  weight: string;
  description: string;
  image: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Dual Ring Interlocked Necklace',
    category: 'Necklaces',
    price: 380000,
    formattedPrice: '₦380,000',
    karat: '18K Gold Plated / Stainless',
    weight: '25.0g',
    description: 'Sleek double interlocking rings pendant on a durable curb chain. Elegant and modern.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__4__d7130b20.jpeg',
    badge: 'Bestseller'
  },
  {
    id: 'p2',
    name: 'My King & My Queen Couple Necklaces',
    category: 'Couple Sets',
    price: 450000,
    formattedPrice: '₦450,000',
    karat: '18K Pure Gold Finish',
    weight: '32.4g',
    description: 'Matching split heart gold necklaces engraved with "My King" and "My Queen". Perfect for couples.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__3__21ff4de4.jpeg',
    badge: 'Couple Goal'
  },
  {
    id: 'p3',
    name: 'Celestial Star & Moon Necklace Set',
    category: 'Necklaces',
    price: 420000,
    formattedPrice: '₦420,000',
    karat: '18K Gold & Silver Curation',
    weight: '18.5g',
    description: 'Stunning star and moon motif pendants designed to catch light and sparkle effortlessly.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__2__f55ac533.jpeg',
    badge: 'Trending'
  },
  {
    id: 'p4',
    name: 'Personalized Fingerprint Gold Wedding Bands',
    category: 'Rings',
    price: 750000,
    formattedPrice: '₦750,000',
    karat: '18K Solid Gold',
    weight: '16.0g',
    description: 'Exquisite matching wedding bands engraved with custom fingerprints and heartfelt symbols.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__1__8219b76a.jpeg',
    badge: 'Bridal'
  },
  {
    id: 'p5',
    name: 'Celestial Couple Bracelets',
    category: 'Bracelets',
    price: 290000,
    formattedPrice: '₦290,000',
    karat: 'Braided Cord & Metal Charm',
    weight: '15.2g',
    description: 'Braided leather and woven cord couple bracelets featuring starry night celestial charms.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM_7b8e6903.jpeg'
  },
  {
    id: 'p6',
    name: 'Engraved Eternity Ring Necklace',
    category: 'Necklaces',
    price: 410000,
    formattedPrice: '₦410,000',
    karat: '18K Gold & Rose Gold Accents',
    weight: '21.0g',
    description: 'Interlocking eternity rings inscribed with inspiring words and shimmering crystal accents.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.29_PM__4__ade6e357.jpeg',
    badge: 'Luxury'
  },
  {
    id: 'p7',
    name: 'Custom Name Gold Ring',
    category: 'Rings',
    price: 550000,
    formattedPrice: '₦550,000',
    karat: '18K Pure Gold',
    weight: '14.5g',
    description: 'Handcrafted gold bands featuring custom name engravings and raised heart detailing.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.29_PM__3__2411eed7.jpeg'
  },
  {
    id: 'p8',
    name: 'Yin Yang Soulmate Set',
    category: 'Couple Sets',
    price: 350000,
    formattedPrice: '₦350,000',
    karat: 'Stainless Steel & Enamel',
    weight: '28.0g',
    description: 'Matching Yin Yang pendant necklaces and braided bracelet set symbolizing eternal balance.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.29_PM__2__d743b661.jpeg'
  },
  {
    id: 'p9',
    name: 'Colorful Clover Gold Bracelet',
    category: 'Bracelets',
    price: 480000,
    formattedPrice: '₦480,000',
    karat: '18K Gold Plated with Enamel Stones',
    weight: '19.8g',
    description: 'Four-leaf clover motif bracelet available in multiple vibrant colors for everyday elegance.',
    image: '/images/WhatsApp_Image_2026-11-20_at_5.37.29_PM__1__71392dd0.jpeg',
    badge: 'Popular'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Appointment booking states
  const [visitorName, setVisitorName] = useState<string>('');
  const [visitorPhone, setVisitorPhone] = useState<string>('');
  const [visitDate, setVisitDate] = useState<string>('');
  const [visitTime, setVisitTime] = useState<string>('Morning (9 AM - 12 PM)');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleWhatsAppOrder = (productName?: string, price?: string) => {
    const text = productName 
      ? `Hello Lola Real Gold, I want to buy "${productName}" (${price}). Please let me know how to pay and receive it.`
      : `Hello Lola Real Gold, I want to talk to customer care about your jewelry.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2348168814021?text=${encoded}`, '_blank');
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone || !visitDate) {
      showToast('Please fill in your name, phone number, and date.');
      return;
    }
    const text = `Hello Lola Real Gold! I want to book a showroom visit in Oakland Land, Lagos.\nName: ${visitorName}\nPhone: ${visitorPhone}\nDate: ${visitDate}\nTime: ${visitTime}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2348168814021?text=${encoded}`, '_blank');
    showToast('Redirecting to WhatsApp to confirm your visit!');
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f4f2ee] font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 right-6 z-50 bg-[#141414] border border-[#d4af37] text-[#f4f2ee] px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3"
          >
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Widget (Fixed Bottom Right -> 0816 881 4021) */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <button
          onClick={() => handleWhatsAppOrder()}
          className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none"
          title="Chat on WhatsApp: 0816 881 4021"
        >
          <span className="absolute -top-10 right-0 bg-[#141414] text-[#d4af37] border border-[#d4af37]/40 text-xs font-semibold px-3 py-1 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat 0816 881 4021
          </span>
          <MessageCircle className="w-8 h-8 fill-current" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
        </button>
      </motion.div>

      {/* Simplified Header */}
      <header className="sticky top-0 z-40 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#aa771c] p-0.5 shadow-lg">
              <div className="w-full h-full bg-[#0c0c0c] rounded-full flex items-center justify-center">
                <Gem className="w-5 h-5 text-[#d4af37]" />
              </div>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider gold-gradient">LOLA REAL GOLD</span>
              <span className="block text-[10px] tracking-widest uppercase text-[#d4af37]">Oakland Land, Lagos</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#collection" className="hover:text-[#d4af37] transition-colors">Jewelry</a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a>
            <a href="#booking" className="hover:text-[#d4af37] transition-colors">Visit Showroom</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </nav>

          <div>
            <button 
              onClick={() => handleWhatsAppOrder()}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-black font-bold px-4 py-2.5 rounded-full text-xs sm:text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>0816 881 4021</span>
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================================
          SECTION 1: HERO SECTION
          ========================================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/WhatsApp_Image_2026-11-20_at_5.37.29_PM_7898f491.jpeg" 
            alt="Lola Real Gold Jewelry" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]/75"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#141414]/90 border border-[#d4af37]/40 px-4 py-2 rounded-full mb-6 shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Oakland Land, Lagos, Nigeria</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Real Gold Jewelry <br />
            <span className="gold-gradient">For Every Special Moment</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
          >
            Welcome to <strong className="text-[#f4f2ee]">Lola Real Gold</strong>. We sell 100% pure 18k and 24k gold necklaces, rings, and couple sets in Lagos. Order easily on WhatsApp or visit our shop today.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#collection"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-black font-bold rounded-xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>View Jewelry Catalog</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button 
              onClick={() => handleWhatsAppOrder()}
              className="w-full sm:w-auto px-8 py-4 bg-[#141414] hover:bg-[#1f1f1f] text-[#f4f2ee] border border-[#d4af37]/50 font-bold rounded-xl shadow-xl active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>Chat on WhatsApp (0816 881 4021)</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: ABOUT US & HERITAGE
          ========================================================== */}
      <section id="about" className="py-20 bg-[#111111] border-t border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">About Lola Real Gold</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Trusted Gold Jewelry Dealer in Lagos
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Located right at Oakland Land in Lagos, <strong className="text-[#f4f2ee]">Lola Real Gold</strong> is known for honesty, quality, and beauty. We provide genuine gold pieces for weddings, birthdays, anniversaries, and daily luxury.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Every gold piece you buy from us comes with guaranteed purity. Whether you are in Lagos or any other state in Nigeria, we deliver safely and securely to your doorstep.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#181818] border border-[#d4af37]/20">
                  <ShieldCheck className="w-6 h-6 text-[#d4af37] mb-2" />
                  <h3 className="font-semibold text-sm mb-1">100% Real Gold</h3>
                  <p className="text-xs text-neutral-400">Tested and certified pure gold.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#181818] border border-[#d4af37]/20">
                  <Truck className="w-6 h-6 text-[#d4af37] mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Fast Delivery</h3>
                  <p className="text-xs text-neutral-400">Same-day delivery in Lagos & nationwide.</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/30">
              <img 
                src="/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__1__8219b76a.jpeg" 
                alt="Lola Real Gold Showcase" 
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 3: JEWELRY CATALOG & COLLECTIONS
          ========================================================== */}
      <section id="collection" className="py-20 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Our Catalog</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
              Explore Our <span className="gold-gradient">Jewelry Collection</span>
            </h2>
            <p className="text-neutral-400 text-sm">
              Real photos of our actual stock. Click any item to view details or order directly on WhatsApp with Naira prices.
            </p>

            {/* Category Filter Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {['All', 'Necklaces', 'Rings', 'Bracelets', 'Couple Sets'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat 
                      ? 'bg-[#d4af37] text-black shadow-md' 
                      : 'bg-[#181818] text-neutral-300 hover:bg-[#222] border border-[#d4af37]/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-4 max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
              <input 
                type="text"
                placeholder="Search jewelry name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#181818] border border-[#d4af37]/30 rounded-full pl-10 pr-4 py-2 text-sm text-[#f4f2ee] placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#141414] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-80 bg-[#1f1f1f] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#d4af37] text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-black/80 text-[#d4af37] text-xs px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                      {product.karat}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase text-neutral-400 font-semibold">{product.category}</span>
                    <h3 className="font-serif text-xl font-bold mt-1 mb-2">{product.name}</h3>
                    <p className="text-neutral-400 text-xs">{product.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-800 mt-2">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase">Price</span>
                    <span className="font-serif text-2xl font-bold gold-gradient">{product.formattedPrice}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="px-3.5 py-2 bg-[#222] text-xs rounded-xl hover:bg-[#333] border border-neutral-700 font-medium"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleWhatsAppOrder(product.name, product.formattedPrice)}
                      className="p-2.5 bg-[#25D366] text-black rounded-xl hover:brightness-110 shadow"
                      title="Order on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-400">No jewelry found matching your search.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 px-4 py-2 bg-[#d4af37] text-black font-semibold rounded-full text-xs"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: WHY CHOOSE US
          ========================================================== */}
      <section className="py-20 bg-[#111111] border-t border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Our Promise</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Why Buy From <span className="gold-gradient">Lola Real Gold</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#181818] border border-[#d4af37]/20">
              <ShieldCheck className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="font-serif text-xl font-bold mb-2">Original Hallmarked Gold</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                All our jewelry is tested and certified pure gold. You get full value for your money.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#181818] border border-[#d4af37]/20">
              <Truck className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="font-serif text-xl font-bold mb-2">Safe Lagos & Nationwide Delivery</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We deliver securely to your home or office in Lagos and across all states in Nigeria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#181818] border border-[#d4af37]/20">
              <Phone className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="font-serif text-xl font-bold mb-2">Friendly Customer Service</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Chat with us anytime on WhatsApp (0816 881 4021) for quick answers and custom orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 5: CUSTOMER REVIEWS
          ========================================================== */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Testimonials</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              What Our <span className="gold-gradient">Customers Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#d4af37]/25 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 text-[#d4af37] mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-neutral-300 text-xs italic mb-4">
                  "I bought couple necklaces from Lola Real Gold in Oakland Land. The quality is top notch and shiny. Everyone praised it!"
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-800">
                <h4 className="font-semibold text-xs text-[#f4f2ee]">Adunni Oakland</h4>
                <p className="text-[10px] text-neutral-400">Lagos Client</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-[#d4af37]/25 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 text-[#d4af37] mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-neutral-300 text-xs italic mb-4">
                  "Very reliable gold dealer in Lagos. Their WhatsApp response is fast and delivery to Victoria Island was done the same day."
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-800">
                <h4 className="font-semibold text-xs text-[#f4f2ee]">Chinedu Eze</h4>
                <p className="text-[10px] text-neutral-400">Lagos Customer</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-[#d4af37]/25 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 text-[#d4af37] mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-neutral-300 text-xs italic mb-4">
                  "Ordered matching bands and they were delivered to Abuja in perfect condition. Genuine quality. Thank you!"
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-800">
                <h4 className="font-semibold text-xs text-[#f4f2ee]">Fatima Aliyu</h4>
                <p className="text-[10px] text-neutral-400">Abuja Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: BOOK A SHOWROOM VISIT
          ========================================================== */}
      <section id="booking" className="py-20 bg-[#111111] border-t border-b border-[#d4af37]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#181818] border border-[#d4af37]/40 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Showroom Visit</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
                Book a Visit to Our <span className="gold-gradient">Lagos Showroom</span>
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Want to see the jewelry in person at Oakland Land, Lagos? Fill the short form below and click to send your booking to WhatsApp instantly.
              </p>
            </div>

            <form onSubmit={handleBookAppointment} className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block text-xs text-neutral-400 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ronke Adebayo"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="w-full bg-[#222] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-[#f4f2ee] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Your Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 08012345678"
                  value={visitorPhone}
                  onChange={(e) => setVisitorPhone(e.target.value)}
                  className="w-full bg-[#222] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-[#f4f2ee] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Preferred Date</label>
                <input 
                  type="date" 
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full bg-[#222] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-[#f4f2ee] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Preferred Time</label>
                <select 
                  value={visitTime}
                  onChange={(e) => setVisitTime(e.target.value)}
                  className="w-full bg-[#222] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-[#f4f2ee] focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                  <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-black font-bold rounded-xl text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2 mt-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book Visit via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 7: FOOTER & CONTACT INFO
          ========================================================== */}
      <footer id="contact" className="bg-[#0c0c0c] border-t border-[#d4af37]/20 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#aa771c] p-0.5">
                  <div className="w-full h-full bg-[#0c0c0c] rounded-full flex items-center justify-center">
                    <Gem className="w-5 h-5 text-[#d4af37]" />
                  </div>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold gold-gradient">LOLA REAL GOLD</span>
                  <span className="block text-[10px] tracking-widest uppercase text-[#d4af37]">Lagos, Nigeria</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Your trusted seller of pure gold and fine jewelry in Lagos.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold mb-3 text-[#d4af37]">Showroom Address</h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#f4f2ee]">Oakland Land, Lagos, Nigeria</span>
                    <a 
                      href="https://maps.app.goo.gl/MHkxxxG9jy97sfqL7" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#d4af37] hover:underline mt-1 block font-medium"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-2 pt-1">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold mb-3 text-[#d4af37]">WhatsApp & Phone</h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span className="font-semibold text-[#f4f2ee]">0816 881 4021</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <button 
                    onClick={() => handleWhatsAppOrder()}
                    className="text-[#d4af37] hover:underline font-semibold"
                  >
                    Chat directly on WhatsApp
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Lola Real Gold. Oakland Land, Lagos, Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#141414] border border-[#d4af37]/40 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-[#d4af37]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="h-64 sm:h-auto bg-[#1a1a1a]">
                  <img 
                    src={activeProduct.image} 
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs uppercase text-[#d4af37] font-semibold">
                      {activeProduct.category} · {activeProduct.karat}
                    </span>
                    <h3 className="font-serif text-xl font-bold">{activeProduct.name}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {activeProduct.description}
                    </p>
                    <div className="text-xs text-neutral-300 space-y-1 pt-2 border-t border-neutral-800">
                      <div><strong className="text-neutral-400">Purity:</strong> {activeProduct.karat}</div>
                      <div><strong className="text-neutral-400">Weight:</strong> {activeProduct.weight}</div>
                      <div><strong className="text-neutral-400">Location:</strong> Oakland Land, Lagos</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase">Price</span>
                      <span className="font-serif text-xl font-bold gold-gradient">{activeProduct.formattedPrice}</span>
                    </div>

                    <button
                      onClick={() => {
                        handleWhatsAppOrder(activeProduct.name, activeProduct.formattedPrice);
                        setActiveProduct(null);
                      }}
                      className="px-5 py-2.5 bg-[#25D366] text-black font-bold rounded-xl text-xs shadow hover:brightness-110 flex items-center space-x-1.5"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
