/* CakeGhor demo interactions. All information here is sample data; no server is used. */
const translations = {
bn:{
navHome:"হোম",navCategories:"ক্যাটাগরি",navBest:"বেস্ট সেলার",navCollection:"সব কেক",navCustom:"কাস্টম কেক",navContact:"যোগাযোগ",languageLabel:"ভাষা নির্বাচন",cart:"কার্ট",
heroEyebrow:"ভালোবাসা মেশানো প্রতিটি কামড়ে",heroTitle:'আপনার বিশেষ দিন হোক আরও <span>মিষ্টি!</span>',heroDescription:"জন্মদিন, উদযাপন কিংবা প্রিয়জনের জন্য — পছন্দের কেকটি বেছে নিন CakeGhor থেকে।",shopNow:"কেক দেখুন",customOrder:"কাস্টম কেক বানান",heroNote:"সিলেট জুড়ে demo delivery selection",heroArtCaption:"Made with sweetness",
featureOneTitle:"ভালোবাসায় তৈরি",featureOneText:"প্রতিটি কেকে যত্নের ছোঁয়া",featureTwoTitle:"পছন্দমতো ডিজাইন",featureTwoText:"আপনার ভাবনায় কাস্টম কেক",featureThreeTitle:"সুন্দর আয়োজন",featureThreeText:"বিশেষ দিনের মিষ্টি সঙ্গী",featureFourTitle:"সিলেট ডেমো ডেলিভারি",featureFourText:"সহজ এরিয়া সিলেকশন",
categoriesEyebrow:"আপনার পছন্দের স্বাদ",categoriesTitle:'কেকের <span>ক্যাটাগরি</span>',categoriesDescription:"যেকোনো উপলক্ষের জন্য বেছে নিন পছন্দের ধরন।",categoryBirthday:"জন্মদিনের কেক",categoryChocolate:"চকলেট কেক",categoryClassic:"ক্লাসিক কেক",categorySpecial:"স্পেশাল কেক",explore:"দেখুন →",
bestEyebrow:"সবার পছন্দের তালিকায়",bestTitle:'বেস্ট <span>সেলিং কেক</span>',viewAll:"সব কেক দেখুন →",collectionEyebrow:"মিষ্টি পছন্দের আরও আয়োজন",collectionTitle:'আমাদের <span>সব কেক</span>',collectionDescription:"আপনার পছন্দের কেকটি খুঁজে নিন।",filterAll:"সব",filterChocolate:"চকলেট",filterClassic:"ক্লাসিক",filterSpecial:"স্পেশাল",
customEyebrow:"আপনার কল্পনা, আমাদের কেক",customTitle:'নিজের মতো করে <span>কাস্টম কেক</span>',customDescription:"ওজন, ফ্লেভার এবং কেকের ওপরের বার্তা বেছে নিয়ে আপনার পছন্দ জানান। এটি একটি demo request form।",weightLabel:"ওজন",onePound:"১ পাউন্ড",twoPound:"২ পাউন্ড",threePound:"৩ পাউন্ড",flavorLabel:"ফ্লেভার",flavorChocolate:"চকলেট",flavorVanilla:"ভ্যানিলা",flavorRedVelvet:"রেড ভেলভেট",flavorBlackForest:"ব্ল্যাক ফরেস্ট",customMessageLabel:"কেকের ওপর কী লিখতে চান?",customMessagePlaceholder:"যেমন: শুভ জন্মদিন",instructionsLabel:"বিশেষ নির্দেশনা",instructionsPlaceholder:"আপনার পছন্দের রং বা ডিজাইন লিখুন",customSubmit:"কাস্টম কেকের বিবরণ যোগ করুন",
benefitsEyebrow:"CakeGhor কেন?",benefitsTitle:'ছোট ছোট যত্নে <span>বিশেষ অভিজ্ঞতা</span>',benefitOneTitle:"যত্নের ছোঁয়া",benefitOneText:"প্রতিটি অর্ডারের বিবরণ গুরুত্ব দিয়ে দেখা হয়।",benefitTwoTitle:"পছন্দমতো সাজ",benefitTwoText:"আপনার উপলক্ষ অনুযায়ী কাস্টমাইজেশনের সুযোগ।",benefitThreeTitle:"সহজ নির্বাচন",benefitThreeText:"কেক, ওজন ও ফ্লেভার এক জায়গায় বেছে নিন।",benefitFourTitle:"লোকাল ডেমো",benefitFourText:"সিলেটের sample delivery area নির্বাচন।",
reviewsEyebrow:"মিষ্টি কিছু কথা",reviewsTitle:'কাস্টমারদের <span>ভালোবাসা</span>',reviewOne:"“কেকের ডিজাইনটা খুব সুন্দর ছিল। পুরো আয়োজনের সঙ্গে দারুণ মানিয়েছে!”",reviewOneName:"— নুসরাত (Demo Review)",reviewTwo:"“চকলেট ফ্লেভারটি আমার পরিবারের সবার পছন্দ হয়েছে।”",reviewTwoName:"— তানভীর (Demo Review)",reviewThree:"“কাস্টম মেসেজ দেওয়ার অপশনটি বেশ ভালো লেগেছে।”",reviewThreeName:"— সাদিয়া (Demo Review)",
contactEyebrow:"কথা বলতে চাই?",contactTitle:'আপনার পরের উদযাপন হোক <span>আরও মিষ্টি</span>',brandLabel:"CakeGhor",locationText:"সিলেট, বাংলাদেশ",contactDemoText:"এটি একটি demo website। এখানে real contact number দেওয়া হয়নি।",quickLinks:"দ্রুত লিংক",copyright:"© 2026 CakeGhor. Demo preview only.",backToTop:"উপরে ফিরে যান ↑",
cartTitle:"আপনার কার্ট",emptyCart:"এখনো কোনো কেক যোগ করা হয়নি।",subtotal:"সাবটোটাল",continueOrder:"অর্ডার বিবরণ দেখুন",orderEyebrow:"আপনার পছন্দের কেক",orderTitle:"অর্ডার বিবরণ",add:"কার্টে যোগ করুন",order:"অর্ডার",added:"কেকটি সফলভাবে কার্টে যোগ হয়েছে!",weight:"ওজন",flavor:"ফ্লেভার",rating:"রেটিং",pound:"পাউন্ড",remove:"বাদ দিন",district:"জেলা",upazila:"উপজেলা",area:"এলাকা",available:"Available",notAvailable:"Not Available",customerName:"আপনার নাম",phone:"মোবাইল নম্বর",address:"বিস্তারিত ঠিকানা",quantity:"পরিমাণ",delivery:"ডেলিভারি চার্জ",total:"সর্বমোট",message:"কেকের বার্তা",instructions:"বিশেষ নির্দেশনা",selectArea:"এলাকা নির্বাচন করুন",summary:"অর্ডার সামারি",copy:"মেসেজ প্রিভিউ কপি করুন",orderNow:"এখনই অর্ডার করুন",addedTitle:"কার্টে যোগ হয়েছে!",copied:"মেসেজ কপি হয়েছে",demoOnly:"এটি demo preview। Order Now চাপলে WhatsApp-এর contact selection খুলবে; নিজে Send না করা পর্যন্ত কিছু পাঠানো হবে না।",required:"অনুগ্রহ করে প্রয়োজনীয় তথ্য পূরণ করুন।",customAdded:"কাস্টম কেকের বিবরণ কার্টে যোগ হয়েছে।",close:"বন্ধ করুন",noArea:"এই demo area-তে delivery available নয়।"
},
en:{
navHome:"Home",navCategories:"Categories",navBest:"Best Sellers",navCollection:"All Cakes",navCustom:"Custom Cake",navContact:"Contact",languageLabel:"Choose language",cart:"Cart",
heroEyebrow:"A little love in every bite",heroTitle:'Make your special day even <span>sweeter!</span>',heroDescription:"For birthdays, celebrations or someone special — find your favourite cake at CakeGhor.",shopNow:"Explore Cakes",customOrder:"Create Custom Cake",heroNote:"Demo delivery selection across Sylhet",heroArtCaption:"Made with sweetness",
featureOneTitle:"Made with Love",featureOneText:"A thoughtful touch in every cake",featureTwoTitle:"Your Design",featureTwoText:"Custom cakes inspired by you",featureThreeTitle:"Sweet Celebrations",featureThreeText:"A lovely companion for special days",featureFourTitle:"Sylhet Demo Delivery",featureFourText:"Simple area selection",
categoriesEyebrow:"Find your favourite taste",categoriesTitle:'Cake <span>Categories</span>',categoriesDescription:"Choose a style for every kind of celebration.",categoryBirthday:"Birthday Cakes",categoryChocolate:"Chocolate Cakes",categoryClassic:"Classic Cakes",categorySpecial:"Special Cakes",explore:"Explore →",
bestEyebrow:"Loved by everyone",bestTitle:'Best <span>Selling Cakes</span>',viewAll:"View all cakes →",collectionEyebrow:"More sweet choices",collectionTitle:'Our <span>Cake Collection</span>',collectionDescription:"Find the cake that feels just right.",filterAll:"All",filterChocolate:"Chocolate",filterClassic:"Classic",filterSpecial:"Special",
customEyebrow:"Your imagination, our cake",customTitle:'Make it <span>your own</span>',customDescription:"Choose the weight, flavour and message for your cake. This is a demo request form.",weightLabel:"Weight",onePound:"1 Pound",twoPound:"2 Pounds",threePound:"3 Pounds",flavorLabel:"Flavour",flavorChocolate:"Chocolate",flavorVanilla:"Vanilla",flavorRedVelvet:"Red Velvet",flavorBlackForest:"Black Forest",customMessageLabel:"What should the cake say?",customMessagePlaceholder:"e.g. Happy Birthday",instructionsLabel:"Special instructions",instructionsPlaceholder:"Tell us your preferred colour or design",customSubmit:"Add custom cake details",
benefitsEyebrow:"Why CakeGhor?",benefitsTitle:'Thoughtful details, <span>sweet experiences</span>',benefitOneTitle:"Made with Care",benefitOneText:"Every order detail gets thoughtful attention.",benefitTwoTitle:"Your Style",benefitTwoText:"Customisation for your special occasion.",benefitThreeTitle:"Easy Choices",benefitThreeText:"Choose cake, weight and flavour in one place.",benefitFourTitle:"Local Demo",benefitFourText:"Select a sample delivery area in Sylhet.",
reviewsEyebrow:"A few sweet words",reviewsTitle:'Customer <span>Love</span>',reviewOne:"“The cake design was beautiful and matched the celebration perfectly!”",reviewOneName:"— Nusrat (Demo Review)",reviewTwo:"“Everyone in my family loved the chocolate flavour.”",reviewTwoName:"— Tanvir (Demo Review)",reviewThree:"“I really liked the option to add a custom message.”",reviewThreeName:"— Sadia (Demo Review)",
contactEyebrow:"Want to say hello?",contactTitle:'Make your next celebration <span>extra sweet</span>',brandLabel:"CakeGhor",locationText:"Sylhet, Bangladesh",contactDemoText:"This is a demo website. No real contact number is provided.",quickLinks:"Quick Links",copyright:"© 2026 CakeGhor. Demo preview only.",backToTop:"Back to top ↑",
cartTitle:"Your Cart",emptyCart:"You have not added any cakes yet.",subtotal:"Subtotal",continueOrder:"View Order Details",orderEyebrow:"Your chosen cakes",orderTitle:"Order Details",add:"Add to Cart",order:"Order",added:"Cake successfully added to cart!",weight:"Weight",flavor:"Flavour",rating:"Rating",pound:"Pound",remove:"Remove",district:"District",upazila:"Upazila",area:"Area",available:"Available",notAvailable:"Not Available",customerName:"Your Name",phone:"Phone Number",address:"Full Address",quantity:"Quantity",delivery:"Delivery Charge",total:"Grand Total",message:"Cake Message",instructions:"Special Instructions",selectArea:"Select an area",summary:"Order Summary",copy:"Copy Message Preview",orderNow:"Order Now",addedTitle:"Added to your cart!",copied:"Message copied",demoOnly:"Demo preview only. Order Now opens WhatsApp contact selection; nothing is sent unless you choose a contact and press Send.",required:"Please complete the required fields.",customAdded:"Custom cake details added to cart.",close:"Close",noArea:"Delivery is not available in this demo area."
}
};
const products=[
{id:"choc",name:{bn:"Chocolate Fudge",en:"Chocolate Fudge"},price:1200,desc:{bn:"সমৃদ্ধ চকলেট ও নরম ক্রিমের দারুণ স্বাদ।",en:"Rich chocolate with smooth, soft cream."},weight:"1",flavor:"Chocolate",rating:"4.9",category:"chocolate",color:"#f7dce2",type:"chocolate"},
{id:"red",name:{bn:"Red Velvet",en:"Red Velvet"},price:1400,desc:{bn:"মোলায়েম রেড ভেলভেট ও ক্রিম চিজের ছোঁয়া।",en:"Soft red velvet with a cream cheese touch."},weight:"1",flavor:"Red Velvet",rating:"4.8",category:"special",color:"#f8e1df",type:"red"},
{id:"van",name:{bn:"Vanilla Birthday",en:"Vanilla Birthday"},price:1000,desc:{bn:"হালকা ভ্যানিলা ফ্লেভারের উৎসবের কেক।",en:"A celebratory cake with a light vanilla flavour."},weight:"1",flavor:"Vanilla",rating:"4.7",category:"classic",color:"#fff0c9",type:"vanilla"},
{id:"black",name:{bn:"Black Forest",en:"Black Forest"},price:1300,desc:{bn:"চকলেট, ক্রিম ও চেরির পরিচিত মিশ্রণ।",en:"A classic mix of chocolate, cream and cherry."},weight:"1",flavor:"Black Forest",rating:"4.9",category:"chocolate",color:"#e8e1d9",type:"forest"},
{id:"wed",name:{bn:"Wedding Special",en:"Wedding Special"},price:3500,desc:{bn:"বিশেষ আয়োজনের জন্য সুন্দর multi-layer cake।",en:"A lovely multi-layer cake for special occasions."},weight:"3",flavor:"Vanilla",rating:"5.0",category:"special",color:"#f4e9f1",type:"wedding"},
{id:"straw",name:{bn:"Strawberry Cream",en:"Strawberry Cream"},price:1500,desc:{bn:"স্ট্রবেরির মিষ্টি ঘ্রাণ ও ক্রিমি স্বাদ।",en:"Sweet strawberry notes with creamy layers."},weight:"1",flavor:"Vanilla",rating:"4.8",category:"classic",color:"#fce3e9",type:"straw"}
];
let language="en",cart=[],activeFilter="all",toastTimer;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const t=key=>translations[language][key]||key;
const money=n=>"৳"+Number(n).toLocaleString("en-US");
function cakeSvg(type){
 const layers={chocolate:['#6b392d','#9b5b45','#f7c6d2'],red:['#b52d4d','#f4a7b7','#fff0f2'],vanilla:['#f2d69b','#fff0c9','#e9a9bb'],forest:['#4b3029','#eee2d9','#9e3349'],wedding:['#fff4e7','#e8c7d1','#c78c9f'],straw:['#f5a8ba','#fff0f2','#d64b70']}[type]||['#6b392d','#f7c6d2','#fff'];
 return `<svg viewBox="0 0 260 190" role="img" aria-label="Illustrated cake"><ellipse cx="130" cy="165" rx="104" ry="13" fill="#fff" opacity=".85"/><rect x="42" y="103" width="176" height="57" rx="15" fill="${layers[0]}"/><path d="M42 116 Q60 130 78 116 T114 116 T150 116 T186 116 T218 116" fill="none" stroke="${layers[2]}" stroke-width="9" stroke-linecap="round"/><rect x="61" y="65" width="138" height="47" rx="13" fill="${layers[1]}"/><path d="M61 77 Q78 91 95 77 T129 77 T163 77 T199 77" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/><ellipse cx="130" cy="66" rx="69" ry="13" fill="${layers[2]}"/><path d="M125 55V28" stroke="#b80d50" stroke-width="6" stroke-linecap="round"/><path d="M125 27 Q113 14 126 5 Q140 16 125 27" fill="#ffb24b"/><circle cx="85" cy="96" r="5" fill="#fff"/><circle cx="174" cy="95" r="5" fill="#fff"/><path d="M99 137 q8 -12 16 0 q-8 12 -16 0 M150 137 q8 -12 16 0 q-8 12 -16 0" fill="${layers[2]}"/></svg>`;
}
function productCard(p){
 const label=p.name[language];
 return `<article class="product-card"><div class="product-art" style="background:${p.color}">${cakeSvg(p.type)}</div><div class="product-info"><div class="product-topline"><h3>${label}</h3><span class="product-price">${money(p.price)}</span></div><p class="product-description">${p.desc[language]}</p><div class="product-meta"><span>★ ${p.rating}</span><span>${p.weight} ${t("pound")}</span><span>${p.flavor}</span></div><div class="product-actions"><button class="button button-outline add-cart" data-id="${p.id}">${t("add")}</button><button class="button button-primary order-product" data-id="${p.id}">${t("order")}</button></div></div></article>`;
}
// Reveal sections and cards gently as they enter the viewport.
function observeRevealItems(){
 const items=$$(".reveal-on-scroll:not(.is-visible)");
 if(!("IntersectionObserver" in window)){items.forEach(el=>el.classList.add("is-visible"));return}
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}
  });
 },{threshold:0.12});
 items.forEach(el=>observer.observe(el));
}
function renderProducts(){
 $("#bestProductGrid").innerHTML=products.slice(0,3).map(productCard).join("");
 $("#allProductGrid").innerHTML=products.filter(p=>activeFilter==="all"||p.category===activeFilter).map(productCard).join("");
 $$(".add-cart").forEach(b=>b.addEventListener("click",()=>addToCart(b.dataset.id)));
 $$(".order-product").forEach(b=>b.addEventListener("click",()=>{addToCart(b.dataset.id,false);openOrder()}));
 $$(".product-card").forEach(el=>el.classList.add("reveal-on-scroll"));
 observeRevealItems();
}
function setLanguage(lang){
 language=lang;document.documentElement.lang=lang;document.body.classList.toggle("lang-en",lang==="en");
 $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});
 $$("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder)});
 $("#languageBn").classList.toggle("is-active",lang==="bn");
 $("#languageEn").classList.toggle("is-active",lang==="en");
 $("#languageBn").setAttribute("aria-pressed",String(lang==="bn"));
 $("#languageEn").setAttribute("aria-pressed",String(lang==="en"));
 renderProducts();renderCart();
 if($("#orderModal").hidden===false) renderOrderForm();
}
function showToast(message){const el=$("#toast");el.textContent=message;el.classList.remove("cake-added-popup");el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.hidden=true,2300)}
function cakeTypeForFlavor(flavor){return ({Chocolate:"chocolate",Vanilla:"vanilla","Red Velvet":"red","Black Forest":"forest"})[flavor]||"wedding"}
function itemArt(item){const p=item.custom?null:products.find(product=>product.id===item.id);const type=p?p.type:cakeTypeForFlavor(item.custom.flavor);const bg=p?p.color:"#fff0f2";return `<div class="cart-item-thumb" style="background:${bg}">${cakeSvg(type)}</div>`}
function showAddedPopup(item){
 const p=item.custom?null:products.find(product=>product.id===item.id);
 const name=p?p.name[language]:(language==="bn"?"কাস্টম কেক":"Custom Cake");
 const detail=p?`${money(p.price)} · ${p.weight} ${t("pound")}`:`${item.custom.weight} ${t("pound")} · ${item.custom.flavor}`;
 const el=$("#toast");el.innerHTML=`<div class="added-popup-art">${itemArt(item)}</div><div class="added-popup-copy"><strong>${t("addedTitle")}</strong><span>${name}</span><small>${detail}</small></div>`;
 el.classList.add("cake-added-popup");el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{el.hidden=true;el.classList.remove("cake-added-popup")},2600);
}
function addToCart(id,notify=true){const p=products.find(x=>x.id===id);if(!p)return;const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({id,qty:1});renderCart();if(notify)showAddedPopup({id,qty:1})}
function renderCart(){
 const count=cart.reduce((s,x)=>s+x.qty,0);$("#cartCount").textContent=count;
 const total=cart.reduce((s,x)=>s+(x.custom?0:products.find(p=>p.id===x.id).price)*x.qty,0);$("#cartSubtotal").textContent=money(total);
 $("#cartItems").innerHTML=cart.length?cart.map(x=>{const p=x.custom?null:products.find(p=>p.id===x.id);const name=p?p.name[language]:(language==="bn"?"কাস্টম কেক":"Custom Cake");const price=p?p.price:0;return `<div class="cart-row"><div class="cart-row-main">${itemArt(x)}<div class="cart-row-details"><h3>${name}</h3><p>${x.custom?`${x.custom.weight} ${t("pound")} · ${x.custom.flavor}`:money(price)+" × "+x.qty}</p><div class="qty-controls"><button data-qty="-1" data-id="${x.id}" aria-label="Decrease">−</button><strong>${x.qty}</strong><button data-qty="1" data-id="${x.id}" aria-label="Increase">+</button><button class="remove-item" data-remove="${x.id}">${t("remove")}</button></div></div></div><strong class="cart-row-price">${money(price*x.qty)}</strong></div>`}).join(""):`<p class="empty-cart">${t("emptyCart")}</p>`;
 $$('[data-qty]').forEach(b=>b.onclick=()=>{const item=cart.find(x=>x.id===b.dataset.id);item.qty+=Number(b.dataset.qty);if(item.qty<=0)cart=cart.filter(x=>x!==item);renderCart()});
 $$('[data-remove]').forEach(b=>b.onclick=()=>{cart=cart.filter(x=>x.id!==b.dataset.remove);renderCart()});
}
function openCart(){$("#cartPanel").classList.add("is-open");$("#cartPanel").setAttribute("aria-hidden","false");$("#panelBackdrop").hidden=false}
function closeCart(){$("#cartPanel").classList.remove("is-open");$("#cartPanel").setAttribute("aria-hidden","true");$("#panelBackdrop").hidden=true}
function orderItems(){return cart.map(x=>({p:x.custom?null:products.find(p=>p.id===x.id),custom:x.custom||null,qty:x.qty}))}
let pageScrollPosition=0;
function lockPageScroll(){
 // Freeze the page behind the popup, including on mobile browsers.
 pageScrollPosition=window.scrollY;
 document.body.classList.add("modal-open");
 document.body.style.top=`-${pageScrollPosition}px`;
}
function unlockPageScroll(){
 // Restore the exact page position after the popup closes.
 document.body.classList.remove("modal-open");
 document.body.style.top="";
 window.scrollTo(0,pageScrollPosition);
}
function openOrder(){
 closeCart();
 $("#orderModal").hidden=false;
 lockPageScroll();
 renderOrderForm();
}
function closeOrder(){
 if($("#orderModal").hidden)return;
 $("#orderModal").hidden=true;
 unlockPageScroll();
}
function renderOrderForm(){
 const items=orderItems();const subtotal=items.reduce((s,x)=>s+(x.p?x.p.price:0)*x.qty,0);
 const list=items.length?items.map(x=>x.p?`${x.p.name[language]} × ${x.qty}`:`${language==="bn"?"কাস্টম কেক":"Custom Cake"} (${x.custom.weight} ${t("pound")}, ${x.custom.flavor}) × ${x.qty}`).join(", "): (language==="bn"?"কাস্টম কেক":"Custom Cake");
 const itemCards=items.map(x=>{const name=x.p?x.p.name[language]:(language==="bn"?"কাস্টম কেক":"Custom Cake");const price=x.p?x.p.price:0;const detail=x.p?`${x.p.weight} ${t("pound")} · ${x.p.flavor}`:`${x.custom.weight} ${t("pound")} · ${x.custom.flavor}`;return `<div class="order-item-preview">${itemArt(x)}<div><strong>${name}</strong><small>${detail} · Qty ${x.qty}</small></div><b>${money(price*x.qty)}</b></div>`}).join("");
 $("#orderFormMount").innerHTML=`
 <form id="orderForm"><div class="order-form-grid">
 <div class="form-field"><label>${t("customerName")} *</label><input name="customer" required autocomplete="name"></div>
 <div class="form-field"><label>${t("phone")} *</label><input name="phone" required type="tel" placeholder="01XXXXXXXXX"></div>
 <div class="form-field"><label>${t("district")}</label><input value="Sylhet" readonly></div>
 <div class="form-field"><label>${t("upazila")}</label><input value="Sylhet Sadar" readonly></div>
 <div class="form-field full"><label>${t("area")} *</label><select name="area" required><option value="">${t("selectArea")}</option><option value="Zindabazar">Zindabazar — ${t("available")}</option><option value="Ambarkhana">Ambarkhana — ${t("available")}</option><option value="South Surma">South Surma — ${t("notAvailable")}</option></select></div>
 <div class="form-field full"><label>${t("address")} *</label><textarea name="address" rows="2" required></textarea></div>
 <div class="form-field"><label>${t("weight")}</label><select name="weight"><option>1 ${t("pound")}</option><option>2 ${t("pound")}</option><option>3 ${t("pound")}</option></select></div>
 <div class="form-field"><label>${t("flavor")}</label><select name="flavor"><option>Chocolate</option><option>Vanilla</option><option>Red Velvet</option><option>Black Forest</option></select></div>
 <div class="form-field"><label>${t("message")}</label><input name="cakeMessage"></div>
 <div class="form-field"><label>${t("quantity")}</label><input name="quantity" type="number" min="1" value="${Math.max(1,cart.reduce((s,x)=>s+x.qty,0))}"></div>
 <div class="form-field full"><label>${t("instructions")}</label><textarea name="instructions" rows="2"></textarea></div></div>
 <div class="order-summary"><h3>${t("summary")}</h3><div class="order-item-list">${itemCards}</div><div class="summary-line"><span>${t("subtotal")}</span><strong>${money(subtotal)}</strong></div><div class="summary-line"><span>${t("delivery")}</span><strong id="deliveryValue">${money(60)}</strong></div><div class="summary-line total"><span>${t("total")}</span><strong id="grandTotal">${money(subtotal+60)}</strong></div><p class="address-preview" id="availabilityText">${t("available")} — demo charge ${money(60)}</p></div>
 <div class="whatsapp-preview" id="messagePreview"></div><div class="modal-actions"><button type="button" class="button button-outline" id="copyPreview">${t("copy")}</button><button type="submit" class="button button-primary">${t("orderNow")}</button></div><p class="demo-note">${t("demoOnly")}</p></form>`;
 const form=$("#orderForm");
 function buildMessage(){
  const data=new FormData(form),areaValue=data.get("area")||"-",unavailable=areaValue==="South Surma";
  const delivery=unavailable?0:60,total=subtotal+delivery;
  $("#deliveryValue").textContent=money(delivery);$("#grandTotal").textContent=money(total);
  $("#availabilityText").textContent=unavailable?t("noArea"):`${t("available")} — ${money(delivery)} demo charge`;
  const address=`${data.get("address")||"-"}, ${areaValue}, Sylhet Sadar, Sylhet`;
  const itemDetails=items.map(x=>x.p?`${x.p.name[language]} | ${x.p.weight} ${t("pound")} | ${x.p.flavor} | Qty: ${x.qty}`:`Custom Cake | ${x.custom.weight} ${t("pound")} | ${x.custom.flavor} | Message: ${x.custom.message||"-"} | Instructions: ${x.custom.instructions||"-"} | Qty: ${x.qty}`).join("\n");
  const msg=`CakeGhor — Demo Order Preview\nCustomer: ${data.get("customer")||"-"}\nPhone: ${data.get("phone")||"-"}\nDelivery Address: ${address}\nSelected Cakes:\n${itemDetails}\nCake Message: ${data.get("cakeMessage")||"-"}\nSpecial Instructions: ${data.get("instructions")||"-"}\nSubtotal: ${money(subtotal)}\nDelivery Charge: ${money(delivery)}\nGrand Total: ${money(total)}\n\nDEMO ONLY — no order is automatically sent.`;
  $("#messagePreview").textContent=msg;return {msg,unavailable};
 }
 form.addEventListener("input",buildMessage);form.addEventListener("change",buildMessage);buildMessage();
 $("#copyPreview").onclick=async()=>{const {msg}=buildMessage();try{await navigator.clipboard.writeText(msg);showToast(t("copied"))}catch(e){showToast(t("demoOnly"))}};
 form.onsubmit=e=>{e.preventDefault();if(!form.reportValidity())return;const {msg,unavailable}=buildMessage();if(unavailable){showToast(t("noArea"));return}const whatsappUrl=`https://wa.me/?text=${encodeURIComponent(msg)}`;window.open(whatsappUrl,"_blank","noopener,noreferrer")};
}
$("#languageBn").addEventListener("click",()=>setLanguage("bn"));
$("#languageEn").addEventListener("click",()=>setLanguage("en"));
$("#menuToggle").addEventListener("click",()=>{const nav=$("#primaryNav"),open=nav.classList.toggle("is-open");$("#menuToggle").setAttribute("aria-expanded",String(open))});
$$(".primary-nav a").forEach(a=>a.addEventListener("click",()=>{$("#primaryNav").classList.remove("is-open");$("#menuToggle").setAttribute("aria-expanded","false")}));
$("#cartButton").onclick=openCart;$("#cartClose").onclick=closeCart;$("#panelBackdrop").onclick=closeCart;
$("#cartCheckout").onclick=()=>{if(!cart.length){showToast(t("emptyCart"));return}openOrder()};
$("#modalClose").onclick=closeOrder;
$$(".filter-button").forEach(b=>b.addEventListener("click",()=>{$$(".filter-button").forEach(x=>x.classList.remove("is-active"));b.classList.add("is-active");activeFilter=b.dataset.filter;renderProducts()}));
$$(".category-card").forEach(a=>a.addEventListener("click",()=>{const map={birthday:"all",chocolate:"chocolate",classic:"classic",special:"special"};activeFilter=map[a.dataset.category]||"all";$$(".filter-button").forEach(b=>b.classList.toggle("is-active",b.dataset.filter===activeFilter));renderProducts()}));
$("#customCakeForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.currentTarget);const id="custom-"+Date.now();cart.push({id,qty:1,custom:{weight:f.get("weight"),flavor:f.get("flavor"),message:f.get("message"),instructions:f.get("instructions")}});renderCart();showAddedPopup({id,qty:1,custom:{weight:f.get("weight"),flavor:f.get("flavor"),message:f.get("message"),instructions:f.get("instructions")}})});
const initialRender=renderProducts;
$$(".section,.feature-strip,.category-card,.benefit-card,.review-card").forEach(el=>el.classList.add("reveal-on-scroll"));
setLanguage("en");renderCart();observeRevealItems();
