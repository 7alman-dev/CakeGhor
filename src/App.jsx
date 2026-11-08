import { useEffect, useMemo, useRef, useState } from "react";
import { ShoppingBag, Menu, X, Star, Heart, CakeSlice, Truck, Sparkles, Plus, Minus, Trash2, ArrowRight, Instagram, Facebook, MessageCircle } from "lucide-react";
import { products } from "./data/products";
import { translations } from "./data/translations";

const money = (n) => `৳${Number(n).toLocaleString("en-BD")}`;
const areas = ["Zindabazar", "Ambarkhana", "Subidbazar"];
const categories = [
  { key: "Birthday", title: "Birthday Cakes", bn: "জন্মদিনের কেক", art: "🎂", color: "yellow" },
  { key: "Chocolate", title: "Chocolate Cakes", bn: "চকলেট কেক", art: "🍫", color: "pink" },
  { key: "Wedding", title: "Wedding Cakes", bn: "বিয়ের কেক", art: "💍", color: "green" },
  { key: "Special", title: "Special Cakes", bn: "স্পেশাল কেক", art: "🍓", color: "lavender" }
];

function CakeArt({ tone = "pink", small = false }) {
  return <div className={`cake-art cake-${tone} ${small ? "cake-art-small" : ""}`} aria-hidden="true">
    <span className="cake-spark s1">✦</span><span className="cake-spark s2">✧</span>
    <div className="cake-top"><i></i><i></i><i></i></div>
    <div className="cake-body"><span className="icing"></span><span className="berry b1"></span><span className="berry b2"></span><span className="berry b3"></span></div>
    <div className="cake-plate"></div>
  </div>;
}

function ProductCard({ product, lang, t, onAdd, onOrder }) {
  const bn = lang === "bn";
  return <article className="product-card">
    <div className={`product-visual visual-${product.color}`}>
      <span className="product-tag">{product.category}</span>
      <CakeArt tone={product.color} />
    </div>
    <div className="product-info">
      <div className="product-title-row"><h3>{bn ? product.bn : product.name}</h3><span className="rating"><Star size={13} fill="currentColor" /> {product.rating}</span></div>
      <p>{product.description}</p>
      <div className="product-meta"><span>{product.weight}</span><span>{product.flavor}</span></div>
      <div className="product-bottom"><strong>{money(product.price)}</strong><div className="product-actions">
        <button className="btn btn-soft btn-small" onClick={() => onAdd(product)}>{t.add}</button>
        <button className="btn btn-primary btn-small" onClick={() => onOrder(product)}>{t.order}</button>
      </div></div>
    </div>
  </article>;
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [filter, setFilter] = useState("All");
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", area: "", address: "", weight: "1 Pound", flavor: "Chocolate", quantity: 1, message: "", instructions: "" });
  // Keep references so keyboard users can enter and leave each popup predictably.
  const lastFocusedElementRef = useRef(null);
  const cartCloseButtonRef = useRef(null);
  const orderCloseButtonRef = useRef(null);
  const activePopupRef = useRef(null);
  const t = translations[lang];
  const bn = lang === "bn";
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const filteredProducts = useMemo(() => filter === "All" ? products : products.filter(p => p.category === filter), [filter]);

  // Reveal page sections and cards gently as they enter the viewport.
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".hero-copy, .hero-art-wrap, .feature-item, .section-heading, .category-card, .product-card, .collection-banner, .custom-illustration, .custom-copy, .why-card, .review-card, .contact-inner, .footer-grid > div"
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    targets.forEach((element) => {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent the page behind an open popup from scrolling.
  useEffect(() => {
    const popupOpen = cartOpen || orderOpen;
    if (!popupOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [cartOpen, orderOpen]);

  // Give the open popup keyboard focus, support Escape, and restore focus on close.
  useEffect(() => {
    const activePopup = orderOpen ? "order" : cartOpen ? "cart" : null;

    if (activePopup && activePopup !== activePopupRef.current) {
      const closeButton = activePopup === "order" ? orderCloseButtonRef.current : cartCloseButtonRef.current;
      closeButton?.focus();
    }

    if (!activePopup && activePopupRef.current) {
      lastFocusedElementRef.current?.focus?.();
      lastFocusedElementRef.current = null;
    }

    activePopupRef.current = activePopup;

    if (!activePopup) return;

    const handlePopupKeyDown = (event) => {
      if (event.key === "Escape") {
        if (orderOpen) setOrderOpen(false);
        else setCartOpen(false);
      }
    };

    document.addEventListener("keydown", handlePopupKeyDown);
    return () => document.removeEventListener("keydown", handlePopupKeyDown);
  }, [cartOpen, orderOpen]);

  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(""), 2600); };
  const addToCart = (product) => {
    setCart(current => {
      const found = current.find(item => item.id === product.id);
      return found ? current.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) : [...current, { ...product, qty: 1 }];
    });
    // Product-card Add to Cart keeps the original toast-only behavior.
    notify(bn ? "কার্টে যোগ করা হয়েছে!" : "Cake successfully added to cart!");
  };
  const updateQty = (id, delta) => setCart(current => current.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  const openOrder = (product) => {
    lastFocusedElementRef.current = document.activeElement;
    setOrderItems([{ ...product, qty: 1 }]);
    setForm({ name: "", phone: "", area: "", address: "", weight: product.weight || "1 Pound", flavor: product.flavor || "Chocolate", quantity: 1, message: "", instructions: "" });
    setOrderOpen(true);
    setCartOpen(false);
  };
  const openCartOrder = () => {
    if (!cart.length) return;
    // Keep the original Cart trigger as the focus return target after checkout.
    setOrderItems(cart.map(item => ({ ...item })));
    setForm({ name: "", phone: "", area: "", address: "", weight: cart[0].weight || "1 Pound", flavor: cart[0].flavor || "Chocolate", quantity: 1, message: "", instructions: "" });
    setOrderOpen(true);
    setCartOpen(false);
  };
  const updateOrderQty = (id, delta) => {
    setOrderItems(current => current.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };
  const setField = (key, value) => setForm(current => ({ ...current, [key]: value }));
  const deliveryCharge = 60;
  const orderSubtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const grandTotal = orderSubtotal + deliveryCharge;
  const completeOrder = (event) => {
    event.preventDefault();
    // Stop submission if the order has no items or a required field is blank.
    if (!orderItems.length || !form.name.trim() || !form.phone.trim() || !form.area.trim() || !form.address.trim()) {
      notify(t.required);
      return;
    }

    // Build the WhatsApp text from the current order state so quantities and totals stay in sync.
    const msg = [
      "CakeGhor Demo Order",
      `Customer: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      "District: Sylhet",
      "Upazila: Sylhet Sadar",
      `Area: ${form.area.trim()}`,
      `Delivery address: ${form.address.trim()}`,
      "Order items:",
      ...orderItems.map((item, index) => `${index + 1}. ${bn ? item.bn : item.name} | Qty: ${item.qty} | Unit: ${money(item.price)} | Line total: ${money(item.price * item.qty)}`),
      `Weight preference: ${form.weight}`,
      `Flavor preference: ${form.flavor}`,
      `Message: ${form.message.trim() || "-"}`,
      `Special instructions: ${form.instructions.trim() || "-"}`,
      `Subtotal: ${money(orderSubtotal)}`,
      `Delivery: ${money(deliveryCharge)}`,
      `Grand total: ${money(grandTotal)}`,
      "This is a demo order. No real order will be processed."
    ].join("\n");
    // Demo placeholder only. Replace with a real business number only after approval.
    const fakeNumber = "8801000000000";
    window.open(`https://wa.me/${fakeNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setOrderOpen(false);
    notify(t.toastCopied);
  };

  const scrollTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const nav = [{ id: "home", label: t.navHome }, { id: "cakes", label: t.navCakes }, { id: "custom", label: t.navCustom }, { id: "why", label: t.navAbout }, { id: "contact", label: t.navContact }];

  return <div className={bn ? "app lang-bn" : "app"}>
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark"><CakeSlice size={22}/></span><span>Cake<span>Ghor</span><small>CAKES MADE WITH LOVE</small></span></a>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>{nav.map(item => <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>)}</nav>
        <div className="header-actions">
          <button className="language-switch" onClick={() => setLang(lang === "en" ? "bn" : "en")}>{lang === "en" ? "বাংলা" : "English"}</button>
          <button className="cart-button" aria-label={t.cart} onClick={(event) => { lastFocusedElementRef.current = event.currentTarget; setCartOpen(true); }}><ShoppingBag size={19}/><span>{cart.reduce((n, item) => n + item.qty, 0)}</span></button>
          <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>

    <main>
      <section className="hero section-pad" id="home">
        <div className="container hero-grid">
          <div className="hero-copy"><span className="eyebrow"><Sparkles size={15}/> {t.heroEyebrow}</span><h1>{t.heroTitle}</h1><p>{t.heroText}</p><div className="hero-actions"><button className="btn btn-primary" onClick={() => scrollTo("cakes")}>{t.explore} <ArrowRight size={16}/></button><button className="btn btn-outline" onClick={() => scrollTo("custom")}>{t.custom}</button></div><div className="hero-note"><span className="avatar-dots">♥ ♥ ♥</span><span>{bn ? "সিলেটে ভালোবাসায় তৈরি" : "Made with love in Sylhet"}</span></div></div>
          <div className="hero-art-wrap"><div className="hero-circle"></div><div className="hero-art"><CakeArt tone="hero"/></div><span className="floating-note note-one">Baked fresh ✿</span><span className="floating-note note-two">Sweet moments!</span><span className="hero-flower">✿</span></div>
        </div>
      </section>

      <section className="feature-strip"><div className="container feature-grid">
        {[ [<CakeSlice/>,t.feature1,t.feature1d], [<Heart/>,t.feature2,t.feature2d], [<Sparkles/>,t.feature3,t.feature3d], [<Truck/>,t.feature4,t.feature4d] ].map(([icon,title,desc],i)=><div className="feature-item" key={i}><span className="feature-icon">{icon}</span><div><strong>{title}</strong><small>{desc}</small></div></div>)}
      </div></section>

      <section className="section-pad category-section"><div className="container"><div className="section-heading"><span className="eyebrow">{bn ? "কেকের কালেকশন" : "OUR COLLECTION"}</span><h2>{t.categoriesTitle}</h2><p>{t.categoriesSub}</p></div><div className="category-grid">{categories.map(cat=><button key={cat.key} className={`category-card category-${cat.color}`} onClick={()=>{setFilter(cat.key);scrollTo("cakes");}}><span className="category-art">{cat.art}</span><strong>{bn?cat.bn:cat.title}</strong><span className="category-arrow"><ArrowRight size={16}/></span></button>)}</div></div></section>

      <section className="section-pad products-section" id="cakes"><div className="container"><div className="section-heading"><span className="eyebrow">{bn ? "সবসময় পছন্দের" : "LOVED BY YOU"}</span><h2>{t.bestTitle}</h2><p>{t.bestSub}</p></div><div className="filter-row"><div className="filter-label">{t.filter}</div>{["All","Birthday","Chocolate","Special"].map(key=><button key={key} className={filter===key?"filter-chip active":"filter-chip"} onClick={()=>setFilter(key)}>{key==="All"?t.all:key==="Birthday"?t.catBirthday:key==="Chocolate"?t.catChocolate:t.catSpecial}</button>)}</div><div className="product-grid">{filteredProducts.map(product=><ProductCard key={product.id} product={product} lang={lang} t={t} onAdd={addToCart} onOrder={openOrder}/>)}</div></div></section>

      <section className="section-pad all-collection"><div className="container collection-banner"><div><span className="eyebrow">{bn?"মিষ্টি মুহূর্ত":"MADE FOR YOUR MOMENTS"}</span><h2>{t.allTitle}</h2><p>{t.allSub}</p><button className="btn btn-primary" onClick={()=>{setFilter("All");scrollTo("cakes");}}>{t.explore} <ArrowRight size={16}/></button></div><div className="collection-art"><CakeArt tone="strawberry"/></div></div></section>

      <section className="section-pad custom-section" id="custom"><div className="container custom-grid"><div className="custom-illustration"><div className="custom-blob"></div><CakeArt tone="custom"/><span className="custom-sticker">Made<br/>for you</span></div><div className="custom-copy"><span className="eyebrow">{bn?"আপনার ভাবনা, আমাদের তৈরি":"YOUR IDEA, OUR CRAFT"}</span><h2>{t.customTitle}</h2><p>{t.customSub}</p><div className="custom-options"><label>{t.chooseWeight}<select id="custom-weight"><option>1 Pound</option><option>2 Pound</option><option>3 Pound</option></select></label><label>{t.chooseFlavor}<select id="custom-flavor"><option>Vanilla</option><option>Chocolate</option><option>Strawberry</option><option>Red Velvet</option></select></label></div><label className="custom-message-label">{t.message}<input id="custom-message" placeholder={bn?"যেমন: শুভ জন্মদিন!":"e.g. Happy Birthday!"}/></label><label className="custom-message-label">{t.instructions}<textarea id="custom-instructions" rows="3" placeholder={bn?"আপনার পছন্দের ডিজাইন বা নির্দেশনা":"Share your design idea or instructions"}></textarea></label><button className="btn btn-primary" onClick={()=>{const p={...products[2],name:"Custom Cake",bn:"কাস্টম কেক",price:1500,weight:document.getElementById("custom-weight").value,flavor:document.getElementById("custom-flavor").value};openOrder(p);setForm(f=>({...f,weight:p.weight,flavor:p.flavor,message:document.getElementById("custom-message").value,instructions:document.getElementById("custom-instructions").value}));}}>{t.sendCustom} <ArrowRight size={16}/></button></div></div></section>

      <section className="section-pad why-section" id="why"><div className="container"><div className="section-heading"><span className="eyebrow">{bn?"কেন আমাদের বেছে নেবেন":"THE CAKEGHOR PROMISE"}</span><h2>{t.whyTitle}</h2></div><div className="why-grid">{[t.why1,t.why2,t.why3,t.why4].map((item,i)=><div className="why-card" key={i}><span>{[<CakeSlice/>,<Heart/>,<Sparkles/>,<Truck/>][i]}</span><strong>{item}</strong></div>)}</div></div></section>

      <section className="section-pad reviews-section"><div className="container"><div className="section-heading"><span className="eyebrow">{bn?"আপনাদের ভালোবাসা":"KIND WORDS"}</span><h2>{t.reviewTitle}</h2></div><div className="review-grid">{[t.review1,t.review2,t.review3].map((review,i)=><article className="review-card" key={i}><div className="review-stars">★★★★★</div><p>“{review}”</p><div className="review-person"><span>{["S","N","A"][i]}</span><div><strong>{["Sadia Rahman","Nusrat Jahan","Ayesha Khan"][i]}</strong><small>{bn?"যাচাইকৃত ক্রেতা":"Happy customer"}</small></div></div></article>)}</div></div></section>

      <section className="contact-band" id="contact"><div className="container contact-inner"><div><span className="eyebrow">{bn?"যোগাযোগ করুন":"SAY HELLO"}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><a className="btn btn-light" href="mailto:hello@cakeghor.example">{bn?"ইমেইল করুন":"Send us an email"} <ArrowRight size={16}/></a></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><a className="brand brand-light" href="#home"><span className="brand-mark"><CakeSlice size={22}/></span><span>Cake<span>Ghor</span><small>CAKES MADE WITH LOVE</small></span></a><p>{t.footerText}</p><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram/></a><a href="#contact" aria-label="Facebook"><Facebook/></a><a href="#contact" aria-label="Message"><MessageCircle/></a></div></div><div><h4>{t.quickLinks}</h4>{nav.slice(0,4).map(n=><button className="footer-link" key={n.id} onClick={()=>scrollTo(n.id)}>{n.label}</button>)}</div><div><h4>{t.contact}</h4><p>Sylhet, Bangladesh</p><p>hello@cakeghor.example</p><p className="footer-small">Demo website · Sample content only</p></div></div><div className="container copyright">© 2026 CakeGhor. {bn?"সর্বস্বত্ব সংরক্ষিত।":"All rights reserved."}</div></footer>

    {cartOpen && <div className="drawer-backdrop"><aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title"><div className="drawer-head"><h2 id="cart-title">{t.cart}</h2><button ref={cartCloseButtonRef} className="icon-button" onClick={()=>setCartOpen(false)} aria-label={t.close}><X/></button></div>{cart.length===0?<div className="empty-cart"><span>🧁</span><p>{t.emptyCart}</p></div>:<><div className="cart-items">{cart.map(item=><div className="cart-item" key={item.id}><div className={`mini-art visual-${item.color}`}><CakeArt tone={item.color} small/></div><div className="cart-item-info"><strong>{bn?item.bn:item.name}</strong><small>{money(item.price)}</small><div className="qty-control"><button onClick={()=>updateQty(item.id,-1)} aria-label="Decrease"><Minus size={13}/></button><span>{item.qty}</span><button onClick={()=>updateQty(item.id,1)} aria-label="Increase"><Plus size={13}/></button></div></div><button className="remove-button" onClick={()=>setCart(c=>c.filter(p=>p.id!==item.id))} aria-label={t.remove}><Trash2 size={16}/></button></div>)}</div><div className="cart-summary"><div><span>{t.subtotal}</span><strong>{money(subtotal)}</strong></div><button className="btn btn-primary btn-full" onClick={openCartOrder}>{t.checkout}</button></div></>}</aside></div>}

    {orderOpen && <div className="modal-backdrop"><section className="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-title"><div className="order-modal-closebar"><button ref={orderCloseButtonRef} className="modal-close" onClick={()=>setOrderOpen(false)} aria-label={t.close}><X/></button></div><div className="order-modal-scroll"><div className="modal-heading"><span className="eyebrow">CAKEGHOR ORDER</span><h2 id="order-title">{t.orderTitle}</h2><p>{t.orderNote}</p></div><form onSubmit={completeOrder}><div className="form-section"><h3>{t.cakeDetails}</h3><div className="order-item-list">{orderItems.map(item=><div className="order-item-row" key={item.id}><div className={`mini-art visual-${item.color}`}><CakeArt tone={item.color} small/></div><div className="order-item-details"><strong>{bn?item.bn:item.name}</strong><small>{money(item.price)} / {t.pound}</small></div><div className="qty-control order-qty"><button type="button" onClick={()=>updateOrderQty(item.id,-1)} aria-label="Decrease"><Minus size={13}/></button><span>{item.qty}</span><button type="button" onClick={()=>updateOrderQty(item.id,1)} aria-label="Increase"><Plus size={13}/></button></div><strong className="order-line-total">{money(item.price * item.qty)}</strong></div>)}</div><div className="form-grid"><label>{t.weight}<select value={form.weight} onChange={e=>setField("weight",e.target.value)}><option>1 Pound</option><option>2 Pound</option><option>3 Pound</option></select></label><label>{t.flavor}<select value={form.flavor} onChange={e=>setField("flavor",e.target.value)}><option>Vanilla</option><option>Chocolate</option><option>Strawberry</option><option>Red Velvet</option></select></label></div><div className="form-grid"><label>{t.customMessage}<input value={form.message} onChange={e=>setField("message",e.target.value)}/></label><label>{t.special}<input value={form.instructions} onChange={e=>setField("instructions",e.target.value)}/></label></div></div><div className="form-section"><h3>{t.customerName}</h3><div className="form-grid"><label>{t.customerName} *<input value={form.name} onChange={e=>setField("name",e.target.value)} required/></label><label>{t.phone} *<input type="tel" value={form.phone} onChange={e=>setField("phone",e.target.value)} required/></label></div></div><div className="form-section"><h3>{t.address}</h3><div className="form-grid three"><label>{t.district}<input value="Sylhet" readOnly/></label><label>{t.upazila}<input value="Sylhet Sadar" readOnly/></label><label>{t.area} *<select value={form.area} onChange={e=>setField("area",e.target.value)} required><option value="">{t.selectArea}</option>{areas.map(a=><option key={a}>{a}</option>)}</select></label></div><label>{t.address} *<textarea rows="2" value={form.address} onChange={e=>setField("address",e.target.value)} required/></label><small className="availability">{form.area ? t.available : t.selectArea}</small></div><div className="order-totals"><div><span>{t.subtotal}</span><strong>{money(orderSubtotal)}</strong></div><div><span>{t.delivery}</span><strong>{money(deliveryCharge)}</strong></div><div className="grand-total"><span>{t.total}</span><strong>{money(grandTotal)}</strong></div></div><button type="submit" className="btn btn-primary btn-full">{t.complete} <ArrowRight size={17}/></button><p className="demo-disclaimer">{t.sampleNumber}: +880 1000-000000 (fake placeholder). No real order is processed.</p></form></div></section></div>}

    {toast && <div className="toast" role="status"><span>✓</span>{toast}</div>}
  </div>;
}