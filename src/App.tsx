import React, { useState, useEffect, useRef } from "react"
import logoImg from "@/imports/seraj-logo.png"

// ─── Product images (Unsplash) ───────────────────────────────────────────────
const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1660486044177-45cd45bb5e99?w=800&h=1000&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1559697242-a465f2578a95?w=800&h=1000&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1535487958887-032fb5767ade?w=800&h=1000&fit=crop&auto=format",
]

// ─── Header ──────────────────────────────────────────────────────────────────
function Header({ onBack, showBack, onLogoClick }: { onBack?: () => void; showBack?: boolean; onLogoClick?: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartCount] = useState(2)

  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setSidebarOpen(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 w-72 max-w-[85vw] h-full flex flex-col"
            style={{ background: "linear-gradient(180deg,#0f0f0f 0%,#080808 100%)", borderRight: "1px solid rgba(192,168,122,0.15)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-6" style={{ borderBottom: "1px solid rgba(192,168,122,0.1)" }}>
              <span className="text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel',serif", color: "#c0a87a" }}>Menu</span>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 py-8">
              {["New Arrivals", "Collections", "Men", "Women", "About", "Contact"].map((item) => (
                <a key={item} href="#"
                  className="py-3 text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:pl-2"
                  style={{ fontFamily: "'Cinzel',serif", color: "#888", borderBottom: "1px solid rgba(192,168,122,0.06)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c0a87a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >{item}</a>
              ))}
            </nav>
            <div className="mt-auto px-6 pb-8">
              <p className="text-xs tracking-widest text-gray-600 uppercase" style={{ fontFamily: "'Cinzel',serif" }}>Seraj © 2026</p>
            </div>
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-3 sm:px-6 md:px-10 py-4 sm:py-5"
        style={{ background: "linear-gradient(180deg,rgba(8,8,8,0.98) 0%,transparent 100%)" }}>
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          {showBack ? (
            <button onClick={onBack} className="opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2" aria-label="Back">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0a87a" strokeWidth="1.5"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            </button>
          ) : (
            <button onClick={() => setSidebarOpen(true)} className="flex flex-col gap-[5px] group" aria-label="Open menu">
              {[0, 1, 2].map((i) => (
                <span key={i} className="block transition-all duration-300 group-hover:opacity-70"
                  style={{ width: i === 1 ? "18px" : "24px", height: "1px", background: "#c0a87a" }} />
              ))}
            </button>
          )}
          <button className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Search">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c0a87a" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 px-1">
          <button
            onClick={onLogoClick}
            className="bg-transparent border-0 p-0 m-0 cursor-pointer text-base sm:text-lg tracking-[0.18em] sm:tracking-[0.35em] whitespace-nowrap transition-opacity duration-200 hover:opacity-75"
            style={{ fontFamily: "'Cinzel',serif", color: "#c0a87a" }}
            aria-label="Go to homepage"
          >
            SERAJ
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <button className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Profile">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c0a87a" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          <button className="relative opacity-60 hover:opacity-100 transition-opacity" aria-label="Cart">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c0a87a" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center text-[9px] rounded-full"
                style={{ background: "#c0a87a", color: "#080808", fontFamily: "'Cinzel',serif", fontWeight: 700 }}>{cartCount}</span>
            )}
          </button>
        </div>
      </header>
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [logoVisible, setLogoVisible] = useState(false)
  const [phraseVisible, setPhraseVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setLogoVisible(true), 300)
    const t2 = setTimeout(() => setPhraseVisible(true), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 pb-0"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%,rgba(192,168,122,0.04) 0%,transparent 70%),#080808" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(192,168,122,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(192,168,122,0.03) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className={`relative transition-all duration-1000 ${logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
        <div className="logo-glow w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden flex items-center justify-center">
          <img src={logoImg} alt="SERAJ logo" className="w-[130%] h-[130%] object-cover"
            style={{ filter: "brightness(1.05) contrast(1.05)", objectPosition: "center center" }} />
        </div>
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "1px solid rgba(192,168,122,0.15)", transform: "scale(1.12)" }} />
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "1px solid rgba(192,168,122,0.06)", transform: "scale(1.24)" }} />
      </div>

      <div className="mt-10 text-center overflow-hidden">
        {phraseVisible && (
          <p className="phrase-reveal" style={{ fontFamily: "'Great Vibes',cursive", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#e8d9b5", letterSpacing: "0.2em", opacity: 0 }}>
            welcome to our world
          </p>
        )}
      </div>

      <div className="mt-12 w-16" style={{ height: "1px", background: "linear-gradient(90deg,transparent,#c0a87a,transparent)" }} />

      <div className="mt-8 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Cinzel',serif", color: "#c0a87a" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-yellow-700/60 to-transparent" />
      </div>
    </section>
  )
}

// ─── Scrolling banner ─────────────────────────────────────────────────────────
function ShopNowBanner() {
  const items = Array(12).fill("SHOP NOW ◆")
  return (
    <div className="relative overflow-hidden py-4"
      style={{ background: "#0d0d0d", borderTop: "1px solid rgba(192,168,122,0.12)", borderBottom: "1px solid rgba(192,168,122,0.12)" }}>
      <div className="banner-track flex whitespace-nowrap" style={{ width: "max-content" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm"
            style={{ fontFamily: "'Cinzel',serif", color: i % 2 === 0 ? "#c0a87a" : "rgba(192,168,122,0.4)", letterSpacing: "0.4em" }}>{item}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Chapter section ──────────────────────────────────────────────────────────
function ChapterSection({ onUnlock }: { onUnlock: () => void }) {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [startTyping, setStartTyping] = useState(false)
  const [retreating, setRetreating] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const fullText = "tap to unlock"

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStartTyping(true) }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!startTyping) return
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < fullText.length) { setTypedText(fullText.slice(0, i + 1)); i++ }
        else clearInterval(interval)
      }, 90)
      return () => clearInterval(interval)
    }, 800)
    return () => clearTimeout(timer)
  }, [startTyping])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530)
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    if (retreating) return
    setRetreating(true)
    // content retreats for 600ms, then doors open
    setTimeout(onUnlock, 650)
  }

  return (
    <section ref={ref} onClick={handleClick}
      className="relative flex flex-col items-center justify-center py-32 px-6 cursor-pointer group"
      style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%,rgba(192,168,122,0.03) 0%,#080808 70%)", minHeight: "60vh" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1px] h-24 absolute top-0" style={{ background: "linear-gradient(to bottom,transparent,rgba(192,168,122,0.2))" }} />
        <div className="w-[1px] h-24 absolute bottom-0" style={{ background: "linear-gradient(to top,transparent,rgba(192,168,122,0.2))" }} />
      </div>

      {/* Hover glow ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle,rgba(192,168,122,0.06) 0%,transparent 70%)" }} />
      </div>

      {/* Content that retreats on tap */}
      <div className="flex flex-col items-center transition-all duration-500"
        style={{
          transform: retreating ? "scale(0.85) translateZ(-60px)" : "scale(1) translateZ(0)",
          opacity: retreating ? 0 : 1,
          filter: retreating ? "blur(6px)" : "blur(0)",
          transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
        }}>
        <div className="mb-2">
          <span className="text-xs tracking-[0.6em] uppercase" style={{ fontFamily: "'Cinzel',serif", color: "rgba(192,168,122,0.4)" }}>◆ &nbsp; &nbsp; ◆ &nbsp; &nbsp; ◆</span>
        </div>

        <h2 className={`text-center shimmer-text mb-6 ${startTyping ? "opacity-100" : "opacity-0"}`}
          style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(2.25rem,13vw,8rem)", fontWeight: 700, letterSpacing: "0.05em", lineHeight: 1 }}>
          Chapter01
        </h2>

        <div className="mb-8 w-12" style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(192,168,122,0.5),transparent)" }} />

        <div className="h-8 flex items-center">
          <span className="text-sm tracking-[0.5em] uppercase" style={{ fontFamily: "'Montserrat',sans-serif", color: "rgba(192,168,122,0.55)", fontWeight: 300 }}>
            {typedText}
            <span className="inline-block w-[1px] h-4 ml-[2px] align-middle"
              style={{ background: "rgba(192,168,122,0.7)", opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }} />
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Unlock overlay (door animation) ─────────────────────────────────────────
// The overlay mounts fully closed (covering whatever is on screen), then the
// parent swaps the page underneath while it's hidden, then the doors open to
// reveal the new page directly — no flash of the previous page.
function UnlockOverlay({ onDone }: { onDone: () => void }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // brief pause so doors are visible closed, then split open to reveal
    // the page that's now underneath (already swapped by the parent)
    const t1 = setTimeout(() => setOpen(true), 120)
    const t2 = setTimeout(() => onDone(), 1300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  const doorBase: React.CSSProperties = {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "50%",
    zIndex: 10,
    transition: "transform 1.1s cubic-bezier(0.76,0,0.24,1)",
    background: "#080808",
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Left door */}
      <div style={{ ...doorBase, left: 0, borderRight: "1px solid rgba(192,168,122,0.12)", transform: open ? "translateX(-100%)" : "translateX(0)" }} />
      {/* Right door */}
      <div style={{ ...doorBase, right: 0, borderLeft: "1px solid rgba(192,168,122,0.12)", transform: open ? "translateX(100%)" : "translateX(0)" }} />
    </div>
  )
}

// ─── Image carousel ───────────────────────────────────────────────────────────
function Carousel() {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length)
  const next = () => setCurrent((c) => (c + 1) % PRODUCT_IMAGES.length)

  const onPointerDown = (e: React.PointerEvent) => { setDragging(true); setStartX(e.clientX) }
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return
    setDragging(false)
    const diff = e.clientX - startX
    if (diff < -40) next()
    else if (diff > 40) prev()
  }

  return (
    <div className="relative w-full select-none" style={{ aspectRatio: "4/5", maxHeight: "520px" }}>
      <div className="relative w-full h-full overflow-hidden rounded-sm"
        onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
        {PRODUCT_IMAGES.map((src, i) => (
          <div key={i} className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ opacity: i === current ? 1 : 0, transform: i === current ? "scale(1)" : i < current ? "scale(0.96) translateX(-4%)" : "scale(0.96) translateX(4%)", zIndex: i === current ? 1 : 0 }}>
            <img src={src} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,8,8,0.5) 0%,transparent 50%)" }} />
          </div>
        ))}

        {/* Arrows */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{ background: "rgba(8,8,8,0.6)", border: "1px solid rgba(192,168,122,0.2)", backdropFilter: "blur(4px)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c0a87a" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{ background: "rgba(8,8,8,0.6)", border: "1px solid rgba(192,168,122,0.2)", backdropFilter: "blur(4px)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c0a87a" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {PRODUCT_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{ width: i === current ? "24px" : "6px", height: "6px", background: i === current ? "#c0a87a" : "rgba(192,168,122,0.25)" }} />
        ))}
      </div>
    </div>
  )
}

// ─── Item page ────────────────────────────────────────────────────────────────
function ItemPage({ onBack }: { onBack: () => void }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const sizes = ["XS", "S", "M", "L", "XL"]

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="item-fade-in min-h-screen bg-[#080808]" style={{ paddingTop: "80px" }}>
      <div className="max-w-lg mx-auto px-5 pb-20">

        {/* Carousel */}
        <div className="mb-8">
          <Carousel />
        </div>

        {/* Name */}
        <div className="mb-1">
          <span className="text-[10px] tracking-[0.5em] uppercase" style={{ fontFamily: "'Cinzel',serif", color: "rgba(192,168,122,0.45)" }}>Chap01 — Drop 001</span>
        </div>
        <h1 className="mb-4" style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(1.4rem,4vw,1.9rem)", color: "#e8d9b5", fontWeight: 600, letterSpacing: "0.05em" }}>
          The Shadow Coat
        </h1>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-7">
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: "1.5rem", color: "#c0a87a", fontWeight: 500 }}>$340</span>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.8rem", color: "rgba(192,168,122,0.35)", textDecoration: "line-through" }}>$420</span>
        </div>

        <div className="w-full mb-7" style={{ height: "1px", background: "linear-gradient(90deg,rgba(192,168,122,0.15),transparent)" }} />

        {/* Sizes */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Cinzel',serif", color: "rgba(192,168,122,0.5)" }}>Size</span>
            <button className="text-[10px] tracking-[0.3em] uppercase underline underline-offset-2"
              style={{ fontFamily: "'Montserrat',sans-serif", color: "rgba(192,168,122,0.35)" }}>Size Guide</button>
          </div>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <button key={s} onClick={() => setSelectedSize(s)}
                className="w-11 h-11 text-xs transition-all duration-200"
                style={{
                  fontFamily: "'Cinzel',serif",
                  border: selectedSize === s ? "1px solid #c0a87a" : "1px solid rgba(192,168,122,0.2)",
                  color: selectedSize === s ? "#c0a87a" : "rgba(192,168,122,0.45)",
                  background: selectedSize === s ? "rgba(192,168,122,0.08)" : "transparent",
                  letterSpacing: "0.05em",
                }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Qty + Add to Cart */}
        <div className="flex gap-3 mb-4">
          {/* Quantity */}
          <div className="flex items-center" style={{ border: "1px solid rgba(192,168,122,0.2)" }}>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-12 flex items-center justify-center transition-colors duration-200 hover:bg-white/5"
              style={{ color: "#c0a87a" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
            </button>
            <span className="w-10 text-center text-sm" style={{ fontFamily: "'Cinzel',serif", color: "#e8d9b5" }}>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)}
              className="w-10 h-12 flex items-center justify-center transition-colors duration-200 hover:bg-white/5"
              style={{ color: "#c0a87a" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
            </button>
          </div>

          {/* Add to cart */}
          <button onClick={handleAddToCart}
            className="flex-1 h-12 text-xs tracking-[0.35em] uppercase transition-all duration-300 active:scale-[0.98]"
            style={{
              fontFamily: "'Cinzel',serif",
              background: added ? "rgba(192,168,122,0.15)" : "rgba(192,168,122,0.1)",
              border: "1px solid rgba(192,168,122,0.4)",
              color: added ? "#c0a87a" : "rgba(192,168,122,0.8)",
            }}>
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>

        {/* Buy now */}
        <button className="w-full h-12 text-xs tracking-[0.4em] uppercase mb-8 transition-all duration-300 active:scale-[0.98] hover:brightness-110"
          style={{ fontFamily: "'Cinzel',serif", background: "#c0a87a", color: "#080808", fontWeight: 600, letterSpacing: "0.4em" }}>
          Buy Now
        </button>

        <div className="w-full mb-8" style={{ height: "1px", background: "linear-gradient(90deg,rgba(192,168,122,0.12),transparent)" }} />

        {/* Description */}
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase block mb-4" style={{ fontFamily: "'Cinzel',serif", color: "rgba(192,168,122,0.45)" }}>Description</span>
          <p className="text-sm leading-7 mb-4" style={{ fontFamily: "'Montserrat',sans-serif", color: "rgba(232,217,181,0.6)", fontWeight: 300 }}>
            The Shadow Coat is Seraj's debut silhouette — a long-form structured coat cut from a heavy Japanese wool-blend. Oversized lapels, concealed snap closure, and raw-edge inner lining.
          </p>
          <p className="text-sm leading-7" style={{ fontFamily: "'Montserrat',sans-serif", color: "rgba(232,217,181,0.6)", fontWeight: 300 }}>
            Designed for those who move in silence. Limited to 40 units worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {[["Material", "85% Wool / 15% Polyester"], ["Fit", "Oversized — size down for a tailored look"], ["Care", "Dry clean only"], ["Origin", "Made in Japan"]].map(([label, val]) => (
              <div key={label} className="flex justify-between" style={{ borderBottom: "1px solid rgba(192,168,122,0.06)", paddingBottom: "12px" }}>
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel',serif", color: "rgba(192,168,122,0.4)" }}>{label}</span>
                <span className="text-xs" style={{ fontFamily: "'Montserrat',sans-serif", color: "rgba(232,217,181,0.5)", fontWeight: 300 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ background: "#050505", borderTop: "1px solid rgba(192,168,122,0.1)" }}>
      <p className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel',serif", color: "rgba(192,168,122,0.35)" }}>© 2026 Seraj. All rights reserved.</p>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group" style={{ textDecoration: "none" }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(192,168,122,0.4)" strokeWidth="1.5"
          className="group-hover:stroke-[#c0a87a] transition-colors duration-300">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <span className="text-xs tracking-[0.3em] uppercase transition-colors duration-300 group-hover:text-[#c0a87a]"
          style={{ fontFamily: "'Cinzel',serif", color: "rgba(192,168,122,0.35)" }}>Instagram</span>
      </a>
    </footer>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
type Page = "home" | "item"

export default function App() {
  const [page, setPage] = useState<Page>("home")
  const [unlocking, setUnlocking] = useState(false)

  // Called once the "tap to unlock" retreat animation finishes on the home
  // page. The doors overlay mounts fully closed (covering the screen), and
  // only *then* do we jump the scroll position and swap the page content to
  // "item" underneath it — so when the doors open a beat later, they reveal
  // the item page directly instead of a flash of the homepage top.
  const handleUnlock = () => {
    setUnlocking(true)
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    setPage("item")
  }

  const handleUnlockOverlayDone = () => setUnlocking(false)

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    setPage("home")
  }

  return (
    <div className="relative bg-[#080808] min-h-screen">
      {unlocking && <UnlockOverlay onDone={handleUnlockOverlayDone} />}

      {page === "item" ? (
        <>
          <Header showBack onBack={handleBack} onLogoClick={handleBack} />
          <ItemPage onBack={handleBack} />
          <Footer />
        </>
      ) : (
        <>
          <Header onLogoClick={handleBack} />
          <HeroSection />
          <ShopNowBanner />
          <ChapterSection onUnlock={handleUnlock} />
          <Footer />
        </>
      )}
    </div>
  )
}