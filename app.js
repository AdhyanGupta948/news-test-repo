// Self-contained high-res SVG graphics for zero-network dependency
const svgCoins = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231a102f"/><stop offset="50%" stop-color="%233b0764"/><stop offset="100%" stop-color="%230f172a"/></linearGradient><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23fde047"/><stop offset="50%" stop-color="%23d97706"/><stop offset="100%" stop-color="%2378350f"/></linearGradient><linearGradient id="s1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23ffffff"/><stop offset="50%" stop-color="%2394a3b8"/><stop offset="100%" stop-color="%23475569"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bg)"/><circle cx="400" cy="210" r="130" fill="url(%23g1)" stroke="%23fef08a" stroke-width="8"/><circle cx="400" cy="210" r="110" fill="none" stroke="%23b45309" stroke-width="3" stroke-dasharray="6,6"/><text x="400" y="245" font-family="Arial,sans-serif" font-size="80" font-weight="bold" fill="%2378350f" text-anchor="middle">₹1</text><text x="400" y="150" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="%2378350f" text-anchor="middle" letter-spacing="4">INDIA • 1985</text><circle cx="220" cy="230" r="85" fill="url(%23s1)" stroke="%23e2e8f0" stroke-width="6"/><text x="220" y="255" font-family="Arial,sans-serif" font-size="55" font-weight="bold" fill="%23334155" text-anchor="middle">₹2</text><circle cx="580" cy="230" r="85" fill="url(%23g1)" stroke="%23fef08a" stroke-width="6"/><text x="580" y="255" font-family="Arial,sans-serif" font-size="55" font-weight="bold" fill="%2378350f" text-anchor="middle">₹5</text><text x="400" y="390" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="%23facc15" text-anchor="middle" letter-spacing="2">RARE INDIAN COINS MARKET</text></svg>`;

const svgUpi = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450"><defs><linearGradient id="bgU" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23064e3b"/><stop offset="50%" stop-color="%23022c22"/><stop offset="100%" stop-color="%230f172a"/></linearGradient><linearGradient id="mesh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2310b981"/><stop offset="100%" stop-color="%23059669"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bgU)"/><circle cx="400" cy="200" r="110" fill="url(%23mesh)" stroke="%236ee7b7" stroke-width="6"/><text x="400" y="225" font-family="Arial,sans-serif" font-size="65" font-weight="bold" fill="%23ffffff" text-anchor="middle">UPI</text><text x="400" y="145" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="%23a7f3d0" text-anchor="middle" letter-spacing="4">OFFLINE MESH</text><text x="400" y="370" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="%2334d399" text-anchor="middle" letter-spacing="2">ZERO INTERNET DIRECT PAY</text></svg>`;

// Mock Data for ABP LIVE Mobile Web Portal
const mockNews = [
  {
    id: 1,
    title: "Old Coins Selling Trend Explodes in India: Rare ₹1 & ₹2 Coins Fetching Up to ₹5 Lakh Online",
    category: "india",
    source: "ABP Wealth Bureau",
    time: "10m ago",
    readTime: "3 min read",
    image: svgCoins,
    summary: "Numismatic collectors and antique portals report a massive surge in demand for vintage British-era coins, 1985 series ₹1 coins, and rare Mata Vaishno Devi coins.",
    content: `NEW DELHI — In a viral financial phenomenon capturing the attention of households across India, the collector market for antique currency notes and rare coins has seen unprecedented demand on verified auction portals.

Collectors and numismatic experts reveal that certain rare commemorative coins issued in limited mintages are commanding staggering sums, often ranging from ₹50,000 to over ₹5 Lakh per coin. Among the most sought-after items are the 1985 ₹1 coins minted with the rare 'H' mint mark, British India George V silver one-rupee coins, and the widely collected 2002 Mata Vaishno Devi ₹5 and ₹10 commemorative coins.

"Many families have ancestral trunks or old piggy banks holding these coins without realizing their high market valuation among serious collectors," said an executive member of the Indian Numismatic Guild.

However, the Reserve Bank of India and consumer protection experts also urge sellers to remain vigilant: always deal with recognized auction houses and certified coin exhibitions, and never pay upfront 'registration or verification fees' to anonymous buyers online.

To determine if your old coins hold premium value, check the mint year, mint mark (star, diamond, or dot beneath the year), and coin condition before listing.`,
    featured: true,
    views: "142.6k reads"
  },
  {
    id: 2,
    title: "Next-Gen 2nm Mobile AI Chip Unveiled: Promises 4-Day Smartphone Battery Life",
    category: "ai",
    source: "ABP Tech Bureau",
    time: "32m ago",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    summary: "New neuromorphic architecture dynamically idles cores, slashing standby drain while delivering 80 TOPS of local LLM performance.",
    content: `BENGALURU — Semiconductor engineers have revealed a commercial 2nm neuromorphic system-on-chip capable of running 70-billion parameter generative AI models directly on mobile devices without thermal throttling.

The chip incorporates hybrid ultra-dense silicon capacitors that store power efficiently and route current only to the synaptic neural engines actively processing prompt tokens. Early benchmarks indicate smartphones powered by this architecture can operate for up to 96 continuous hours on a standard 5000mAh battery.

Several flagship Android smartphone manufacturers have already committed to deploying this processor in upcoming flagship releases scheduled for late 2026.`,
    featured: true,
    views: "89.4k reads"
  },
  {
    id: 3,
    title: "IPL 2026 Mega Auction: 19-Year-Old Domestic Speedster Bagged for Historic ₹20.5 Cr",
    category: "sports",
    source: "ABP Sports Live",
    time: "1h ago",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    summary: "An exhilarating 15-minute bidding duel saw the young pace-bowling all-rounder smash all previous uncapped player bidding records.",
    content: `MUMBAI — Thunderous applause echoed in the auction hall as the bidding paddle finally rested on an unprecedented ₹20.5 Crore bid. The 19-year-old speed sensation, who clocked speeds of 152 km/h in the domestic Ranji trophy season, became the most prized signing of the night.

Franchise coaches praised his death-overs yorker consistency and fearless lower-order batting. "He is a generational athletic talent who has displayed immense poise under pressure," said the team's head coach.`,
    featured: false,
    views: "120k reads"
  },
  {
    id: 4,
    title: "Reserve Bank Launches Direct UPI Without Internet or Signal Via Satellite Mesh",
    category: "india",
    source: "ABP Business Live",
    time: "2h ago",
    readTime: "3 min read",
    image: svgUpi,
    summary: "Zero-connectivity digital payments now roll out across remote rural corridors and Himalayan trails via acoustic and satellite relay.",
    content: `NEW DELHI — In a major boost to financial inclusion, the central bank has rolled out UPI Offline Direct. Citizens in regions without cellular or Wi-Fi connectivity can now complete instant cryptographic transactions using low-power hardware handshakes.

The pilot test across 1,200 rural panchayats demonstrated 99.98% ledger settlement accuracy upon reconnecting to local aggregation nodes.`,
    featured: false,
    views: "34.1k reads"
  },
  {
    id: 5,
    title: "Electric Vehicles Cross 40% of All New City Registrations In Milestone Quarter",
    category: "business",
    source: "ABP Auto Bureau",
    time: "3h ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    summary: "Rapid expansion of ultra-fast highway charging corridors and localized battery manufacturing fuels unprecedented consumer adoption.",
    content: `NEW DELHI — The latest quarterly transportation analytics indicate a seismic shift in personal mobility. Electric two-wheelers and passenger cars accounted for 41.2% of newly registered consumer vehicles across metropolitan clusters.

City municipal corporations have installed over 14,000 rapid charging stations in under eighteen months, virtually eliminating range anxiety for urban commuters.`,
    featured: false,
    views: "28.5k reads"
  },
  {
    id: 6,
    title: "Box Office Record: Sci-Fi Epic 'Veda 2099' Crosses ₹500 Crore Worldwide in 3 Days",
    category: "entertainment",
    source: "ABP Cinema Desk",
    time: "4h ago",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    summary: "Stunning visual effects rendered using real-time generative neural engines win over audiences across 85 countries.",
    content: `HYDERABAD — The much-anticipated sci-fi spectacle 'Veda 2099' has rewritten global theatrical records, grossing upwards of ₹540 Crore in its opening weekend.

With IMAX halls running around-the-clock screenings, critics have hailed the production quality, noting that Indian cinema has set an international benchmark for futuristic world-building.`,
    featured: false,
    views: "71.3k reads"
  },
  {
    id: 7,
    title: "Major Archaeological Discovery: 4,000-Year-Old Port City Found Submerged Off Coast",
    category: "india",
    source: "ABP Special Bureau",
    time: "5h ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    summary: "Marine archaeologists using acoustic sonar uncover massive granite docks, seal engravings, and trade artifacts dating back to Bronze Age.",
    content: `GUJARAT — Subsea bathymetric surveys have pinpointed a sprawling sunken port city spanning over 12 square kilometers. Initial acoustic scans reveal organized grid roadways, multi-chambered warehouses, and ceremonial plazas.

Recovered bronze tablets and lapis lazuli beads point to ancient maritime trade corridors linking the Indus valley directly with ancient Mesopotamian centers.`,
    featured: false,
    views: "44.9k reads"
  },
  {
    id: 8,
    title: "Global Cyber Security Treaty Signed by 52 Nations to Ban Ransomware Havens",
    category: "world",
    source: "ABP Global News",
    time: "6h ago",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    summary: "Historic Geneva accord mandates international intelligence sharing and immediate freezing of illicit crypto ransomware wallets.",
    content: `GENEVA — High-level delegates concluded marathon negotiations today, ratifying the Global Cyber Resilience Accord. Under the treaty, participating states agree to harmonize extraditions of cyber syndicates and establish zero-tolerance enforcement against digital extortion networks.`,
    featured: false,
    views: "19.2k reads"
  }
];

// Mock In-feed and Native Ads (Google AdSense / Outbrain / Taboola style)
const mockAds = [
  {
    id: "ad-course",
    badge: "Ad by Google",
    title: "Master AI & Cloud Architecture in 90 Days",
    brand: "NextGen Tech Institute",
    tagline: "100% Placement Assistance with leading tech companies. 50,000+ Alumni.",
    cta: "Apply for ₹25,000 Scholarship",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    rating: "4.9 ★★★★★",
  },
  {
    id: "ad-solar",
    badge: "Sponsored • PM Surya Ghar",
    title: "Zero Down Payment Solar: Cut Bills to ₹0",
    brand: "Tata Solar Power",
    tagline: "Claim up to ₹78,000 direct govt subsidy in your bank account today.",
    cta: "Calculate Roof Savings",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    rating: "Over 60k homes electrified",
  },
  {
    id: "ad-phone",
    badge: "Ad • Amazon Deal",
    title: "OnePlus Nord 5G at ₹19,999 (Limited Stock)",
    brand: "Amazon India",
    tagline: "Flat ₹3,000 instant bank discount + No-cost EMI up to 12 months.",
    cta: "Check Availability",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    rating: "Free Prime Same-Day Delivery",
  }
];

// State variables
let currentCategory = "all";
let searchQuery = "";
let currentTab = "home";
let bookmarks = JSON.parse(localStorage.getItem("abp_news_bookmarks") || "[]");
let interstitialIntervalTrigger = 0;
let isSpeaking = false;
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let currentArticleFontSize = 14;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderStoriesBar();
  renderNews();
  updateBookmarkBadge();
});

// Render Visual Stories Bar
function renderStoriesBar() {
  const container = document.getElementById("stories-scroll");
  if (!container) return;

  const storiesData = [
    { title: "Old Coins", tag: "Money", img: mockNews[0].image, id: 1 },
    { title: "2nm AI Chip", tag: "AI", img: mockNews[1].image, id: 2 },
    { title: "IPL ₹20.5Cr", tag: "Sports", img: mockNews[2].image, id: 3 },
    { title: "Offline UPI", tag: "India", img: mockNews[3].image, id: 4 },
    { title: "EV 40% Share", tag: "Auto", img: mockNews[4].image, id: 5 },
    { title: "Veda 2099", tag: "Cinema", img: mockNews[5].image, id: 6 },
  ];

  container.innerHTML = storiesData.map(s => `
    <div class="flex flex-col items-center flex-shrink-0 cursor-pointer tap-highlight" onclick="openArticle(${s.id})">
      <div class="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-rose-600 via-amber-500 to-rose-700 shadow-sm">
        <img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-900" />
      </div>
      <span class="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mt-1 truncate w-16 text-center">${s.title}</span>
    </div>
  `).join("");
}

// Render News Feed
function renderNews() {
  const container = document.getElementById("news-feed");
  if (!container) return;

  let list = [...mockNews];

  if (currentTab === "saved") {
    list = list.filter(item => bookmarks.includes(item.id));
    if (list.length === 0) {
      container.innerHTML = `
        <div class="py-20 text-center px-4">
          <div class="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
          </div>
          <h3 class="font-bold text-slate-800 dark:text-slate-200 text-base">No Saved Articles</h3>
          <p class="text-xs text-slate-500 mt-1">Tap the bookmark icon on any news story to save it for reading later.</p>
        </div>
      `;
      return;
    }
  } else if (currentTab === "headlines") {
    list = list.filter(item => item.featured || item.category === "india" || item.category === "tech");
  } else {
    // Standard Category Filter
    if (currentCategory !== "all") {
      list = list.filter(item => item.category === currentCategory);
    }
  }

  // Keyword Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.summary.toLowerCase().includes(q) ||
      item.source.toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-500">
        <p class="font-semibold text-sm">No stories found for "${searchQuery}"</p>
        <button onclick="clearSearch()" class="mt-3 text-xs bg-rose-600 text-white px-3.5 py-1.5 rounded-full shadow">Clear Search</button>
      </div>
    `;
    return;
  }

  let html = "";

  // Hero Card for Top Story
  const heroItem = (currentCategory === "all" && !searchQuery && currentTab === "home") ? list[0] : null;
  const feedItems = heroItem ? list.slice(1) : list;

  if (heroItem) {
    const isBookmarked = bookmarks.includes(heroItem.id);
    html += `
      <!-- Top Breaking Hero Story Card -->
      <article class="relative rounded-xl overflow-hidden shadow bg-white dark:bg-slate-800 cursor-pointer tap-highlight border border-slate-200 dark:border-slate-800 mb-4" onclick="openArticle(${heroItem.id})">
        <div class="relative h-56 w-full">
          <img src="${heroItem.image}" alt="${heroItem.title}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
          
          <div class="absolute top-3 left-3 flex gap-1.5 items-center">
            <span class="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider shadow">TOP STORY</span>
            <span class="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded capitalize">${heroItem.category}</span>
          </div>

          <button onclick="event.stopPropagation(); toggleBookmark(${heroItem.id})" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white tap-highlight">
            <svg class="w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : 'text-white'}" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
          </button>

          <div class="absolute bottom-3 left-3 right-3 text-white">
            <h2 class="text-base font-bold leading-snug drop-shadow">${heroItem.title}</h2>
            <div class="flex items-center gap-2 mt-1.5 text-[11px] text-slate-300">
              <span class="font-bold text-rose-400">${heroItem.source}</span>
              <span>•</span>
              <span>${heroItem.time}</span>
              <span>•</span>
              <span>${heroItem.views}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // Iterate Feed Cards
  feedItems.forEach((item, index) => {
    const isBookmarked = bookmarks.includes(item.id);

    // Insert Native Ads
    if (index === 1 && mockAds[0]) {
      html += renderNativeAd(mockAds[0]);
    } else if (index === 3 && mockAds[1]) {
      html += renderNativeAd(mockAds[1]);
    }

    html += `
      <article class="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-200/80 dark:border-slate-800 mb-3 cursor-pointer tap-highlight flex gap-3.5 items-center justify-between" onclick="openArticle(${item.id})">
        <div class="flex-1 min-w-0 pr-1">
          <div class="flex items-center gap-1.5 mb-1 text-[11px] text-slate-500 dark:text-slate-400">
            <span class="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide text-[10px]">${item.category}</span>
            <span>•</span>
            <span class="truncate">${item.source}</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-2">${item.title}</h3>
          <div class="flex items-center gap-2 mt-2 text-[11px] text-slate-400">
            <span>${item.time}</span>
            <span>•</span>
            <span>${item.readTime}</span>
            <div class="ml-auto flex items-center gap-2.5" onclick="event.stopPropagation()">
              <button onclick="shareArticle(${item.id})" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" title="Share">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </button>
              <button onclick="toggleBookmark(${item.id})" class="text-slate-400 hover:text-amber-500" title="Bookmark">
                <svg class="w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 relative shadow-inner">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy" />
        </div>
      </article>
    `;
  });

  // Mid-Feed Medium Rectangle Ad (Google AdSense 300x250 simulation)
  if (mockAds[2] && list.length > 2) {
    html += `
      <div class="my-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 p-3 shadow-sm cursor-pointer tap-highlight" onclick="onAdClicked('${mockAds[2].title}')">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-1.5">
            <span class="bg-amber-400 text-slate-900 text-[8px] font-black px-1.5 py-0.5 rounded tracking-wider">AD</span>
            <span class="text-[10px] text-slate-500 font-semibold">${mockAds[2].badge}</span>
          </div>
          <span class="text-[10px] text-slate-400">AdChoices ⓘ</span>
        </div>
        <div class="h-36 w-full rounded-lg overflow-hidden relative mb-2">
          <img src="${mockAds[2].image}" alt="${mockAds[2].title}" class="w-full h-full object-cover" />
          <div class="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            Special Festive Deal
          </div>
        </div>
        <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100">${mockAds[2].title}</h4>
        <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">${mockAds[2].tagline}</p>
        <div class="mt-2 flex items-center justify-between">
          <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">${mockAds[2].rating}</span>
          <button class="bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold px-3 py-1 rounded shadow-sm">${mockAds[2].cta} ➔</button>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// Generate Realistic In-feed Native Ad Card
function renderNativeAd(ad) {
  return `
    <div class="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 rounded-xl p-3 mb-3 shadow-sm relative cursor-pointer tap-highlight" onclick="onAdClicked('${ad.title}')">
      <div class="flex items-center justify-between mb-1.5">
        <div class="flex items-center gap-1.5">
          <span class="bg-amber-500 text-slate-900 text-[8px] font-black px-1.5 py-0.5 rounded tracking-wider uppercase">${ad.badge}</span>
          <span class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${ad.brand}</span>
        </div>
        <span class="text-[9px] text-slate-400">Sponsored Content ⓘ</span>
      </div>
      <div class="flex gap-3 items-center">
        <div class="flex-1">
          <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">${ad.title}</h4>
          <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">${ad.tagline}</p>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">${ad.rating}</span>
            <span class="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900">
              ${ad.cta} <span>→</span>
            </span>
          </div>
        </div>
        <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200">
          <img src="${ad.image}" alt="${ad.title}" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  `;
}

// Open Article in Bottom Sheet Reader
function openArticle(id) {
  const item = mockNews.find(n => n.id === id);
  if (!item) return;

  // Interstitial Ad Trigger: Every 3rd article open triggers simulated full-screen Vignette ad
  interstitialIntervalTrigger++;
  if (interstitialIntervalTrigger % 3 === 0) {
    triggerInterstitial(() => {
      displayArticleModal(item);
    });
    return;
  }

  displayArticleModal(item);
}

function displayArticleModal(item) {
  const modal = document.getElementById("article-modal");
  const modalContent = document.getElementById("article-content");
  if (!modal || !modalContent) return;

  const isBookmarked = bookmarks.includes(item.id);

  modalContent.innerHTML = `
    <!-- Sticky Modal Header -->
    <div class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <button onclick="closeArticleModal()" class="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 tap-highlight">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
        <span>Back</span>
      </button>

      <!-- Font Resizing Controls -->
      <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
        <button onclick="changeFontSize(-1)" class="px-2 py-0.5 rounded text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 tap-highlight" title="Smaller font">A-</button>
        <span class="text-[10px] text-slate-400 px-1 font-mono">Aa</span>
        <button onclick="changeFontSize(1)" class="px-2 py-0.5 rounded text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 tap-highlight" title="Larger font">A+</button>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="shareArticle(${item.id})" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 tap-highlight">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
        </button>
        <button id="modal-bookmark-btn" onclick="toggleBookmark(${item.id}, true)" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 tap-highlight">
          <svg class="w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
        </button>
      </div>
    </div>

    <!-- Article Hero Banner -->
    <div class="relative w-full h-64 bg-black">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

      <div class="absolute bottom-4 left-4 right-4 text-white">
        <span class="bg-rose-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">${item.category}</span>
        <h1 class="text-lg font-extrabold leading-snug mt-2">${item.title}</h1>
        <div class="flex items-center gap-2 text-xs text-slate-300 mt-2">
          <span class="font-bold text-rose-400">${item.source}</span>
          <span>•</span>
          <span>${item.time}</span>
          <span>•</span>
          <span>${item.readTime}</span>
        </div>
      </div>
    </div>

    <!-- Article Body -->
    <div class="p-4 pb-20">
      <!-- Audio Listen Story Widget -->
      <div class="bg-rose-50 dark:bg-slate-800/80 rounded-xl p-3 mb-4 flex items-center justify-between border border-rose-100 dark:border-slate-700">
        <div class="flex items-center gap-3">
          <button id="audio-play-btn" onclick="toggleAudioSpeech('${item.title}. ${item.summary}')" class="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md tap-highlight">
            <svg id="audio-icon-play" class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            <svg id="audio-icon-pause" class="w-4 h-4 hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          </button>
          <div>
            <p class="text-xs font-bold text-slate-800 dark:text-slate-100">Listen with ABP AI Audio</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400">Instant Automated Narration</p>
          </div>
        </div>
        <div class="flex items-center gap-1.5 pr-2">
          <div class="w-1 h-3 bg-rose-400 rounded-full animate-pulse"></div>
          <div class="w-1 h-5 bg-rose-600 rounded-full animate-pulse" style="animation-delay: 0.15s"></div>
          <div class="w-1 h-2 bg-rose-300 rounded-full animate-pulse" style="animation-delay: 0.3s"></div>
        </div>
      </div>

      <!-- Lead Summary -->
      <p class="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        ${item.summary}
      </p>

      <!-- Full Prose Content -->
      <div id="article-prose-body" class="prose dark:prose-invert text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-4">
        ${item.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
      </div>

      <!-- In-Article Sponsored Banner Ad -->
      <div class="my-6 p-4 rounded-xl border border-dashed border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-center cursor-pointer tap-highlight" onclick="onAdClicked('CloudHost AI Server 2026')">
        <span class="text-[8px] uppercase tracking-wider font-black bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200 px-2 py-0.5 rounded">Sponsored Partner</span>
        <h4 class="font-bold text-sm text-slate-900 dark:text-white mt-1.5">⚡ Deploy AI Models on Cloud from ₹99/mo</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">High Performance GPUs • 99.99% Uptime • Instant Setup</p>
        <button class="mt-3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-1.5 rounded shadow">Claim 80% Coupon ➔</button>
      </div>

      <!-- Article Footer -->
      <div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button onclick="closeArticleModal()" class="text-xs font-bold text-slate-600 dark:text-slate-400 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 tap-highlight">
          ← Back to Headlines
        </button>
        <button onclick="triggerInterstitial()" class="text-xs font-bold text-rose-600 dark:text-rose-400 py-2 px-3 tap-highlight">
          Test Vignette Ad ⚡
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("closed");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeArticleModal() {
  const modal = document.getElementById("article-modal");
  if (modal) {
    modal.classList.remove("open");
    modal.classList.add("closed");
  }
  document.body.style.overflow = "auto";
  stopAudioSpeech();
}

// Adjust Article Text Size
function changeFontSize(delta) {
  currentArticleFontSize = Math.min(22, Math.max(12, currentArticleFontSize + delta));
  const el = document.getElementById("article-prose-body");
  if (el) {
    el.style.fontSize = `${currentArticleFontSize}px`;
    el.style.lineHeight = `${currentArticleFontSize * 1.6}px`;
  }
}

// Interstitial Ad Trigger (5-Second Countdown)
let interstitialCountdown = 5;
let interstitialTimer = null;

function triggerInterstitial(onCloseCallback) {
  const adModal = document.getElementById("interstitial-ad-modal");
  const skipBtn = document.getElementById("ad-skip-btn");
  if (!adModal || !skipBtn) return;

  interstitialCountdown = 5;
  skipBtn.disabled = true;
  skipBtn.innerHTML = `Skip Ad in ${interstitialCountdown}s`;
  skipBtn.classList.add("opacity-60", "cursor-not-allowed");
  skipBtn.classList.remove("bg-white", "text-slate-900");

  adModal.classList.remove("hidden");

  clearInterval(interstitialTimer);
  interstitialTimer = setInterval(() => {
    interstitialCountdown--;
    if (interstitialCountdown > 0) {
      skipBtn.innerHTML = `Skip Ad in ${interstitialCountdown}s`;
    } else {
      clearInterval(interstitialTimer);
      skipBtn.disabled = false;
      skipBtn.innerHTML = `Skip Ad ✕`;
      skipBtn.classList.remove("opacity-60", "cursor-not-allowed");
      skipBtn.classList.add("bg-white", "text-slate-900", "shadow-lg");
    }
  }, 1000);

  window.closeInterstitialAd = () => {
    clearInterval(interstitialTimer);
    adModal.classList.add("hidden");
    if (typeof onCloseCallback === "function") {
      onCloseCallback();
    }
  };
}

// Bookmarking System
function toggleBookmark(id, isFromModal = false) {
  const index = bookmarks.indexOf(id);
  if (index > -1) {
    bookmarks.splice(index, 1);
    showToast("Removed from saved stories");
  } else {
    bookmarks.push(id);
    showToast("Saved to Bookmarks! 🔖");
  }
  localStorage.setItem("abp_news_bookmarks", JSON.stringify(bookmarks));
  updateBookmarkBadge();
  renderNews();

  if (isFromModal) {
    const btn = document.getElementById("modal-bookmark-btn");
    const isNowBookmarked = bookmarks.includes(id);
    if (btn) {
      btn.innerHTML = `
        <svg class="w-4 h-4 ${isNowBookmarked ? 'fill-amber-400 text-amber-400' : ''}" fill="${isNowBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
      `;
    }
  }
}

function updateBookmarkBadge() {
  const badge = document.getElementById("saved-count-badge");
  if (badge) {
    badge.textContent = bookmarks.length;
    badge.style.display = bookmarks.length > 0 ? "inline-flex" : "none";
  }
}

// Fake Ad Click Handler
function onAdClicked(campaign) {
  showToast(`Ad clicked: "${campaign}" (Mock analytics recorded)`);
}

function dismissTopAd() {
  const banner = document.getElementById("top-ad-banner");
  if (banner) banner.style.display = "none";
  showToast("Top banner closed");
}

// Audio Narration Speech Synthesis
function toggleAudioSpeech(text) {
  const playIcon = document.getElementById("audio-icon-play");
  const pauseIcon = document.getElementById("audio-icon-pause");

  if (isSpeaking) {
    speechSynth.cancel();
    isSpeaking = false;
    if (playIcon) playIcon.classList.remove("hidden");
    if (pauseIcon) pauseIcon.classList.add("hidden");
    showToast("Audio narration paused");
  } else {
    speechSynth.cancel();
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.rate = 1.0;
    
    currentUtterance.onend = () => {
      isSpeaking = false;
      if (playIcon) playIcon.classList.remove("hidden");
      if (pauseIcon) pauseIcon.classList.add("hidden");
    };

    currentUtterance.onerror = () => {
      isSpeaking = false;
      if (playIcon) playIcon.classList.remove("hidden");
      if (pauseIcon) pauseIcon.classList.add("hidden");
    };

    speechSynth.speak(currentUtterance);
    isSpeaking = true;
    if (playIcon) playIcon.classList.add("hidden");
    if (pauseIcon) pauseIcon.classList.remove("hidden");
    showToast("Playing ABP AI audio narration 🔊");
  }
}

function stopAudioSpeech() {
  if (speechSynth) {
    speechSynth.cancel();
    isSpeaking = false;
  }
}

// Share Modal
function shareArticle(id) {
  const item = mockNews.find(n => n.id === id);
  if (!item) return;

  const shareModal = document.getElementById("share-modal");
  const shareTitle = document.getElementById("share-story-title");
  if (shareModal && shareTitle) {
    shareTitle.textContent = item.title;
    shareModal.classList.remove("hidden");
  }
}

function closeShareModal() {
  const shareModal = document.getElementById("share-modal");
  if (shareModal) shareModal.classList.add("hidden");
}

function copyStoryLink() {
  navigator.clipboard?.writeText(window.location.href);
  closeShareModal();
  showToast("ABP story link copied to clipboard! 📋");
}

// Toast System
function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "bg-slate-900/90 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 backdrop-blur-sm transform transition-all duration-300 translate-y-2 opacity-0";
  toast.innerHTML = `<span>${msg}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  }, 10);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Toggle Search Box Bar
function toggleSearchBar() {
  const box = document.getElementById("search-box-container");
  const input = document.getElementById("search-input");
  if (!box) return;

  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden");
    input?.focus();
  } else {
    box.classList.add("hidden");
  }
}

function clearSearch() {
  const input = document.getElementById("search-input");
  if (input) input.value = "";
  searchQuery = "";
  renderNews();
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Chips Click
  document.querySelectorAll(".category-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".category-chip").forEach(c => {
        c.classList.remove("bg-rose-600", "text-white");
        c.classList.add("bg-slate-100", "text-slate-700", "dark:bg-slate-800", "dark:text-slate-300");
      });
      chip.classList.remove("bg-slate-100", "text-slate-700", "dark:bg-slate-800", "dark:text-slate-300");
      chip.classList.add("bg-rose-600", "text-white");

      currentCategory = chip.dataset.category;
      renderNews();
    });
  });

  // Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderNews();
    });
  }

  // Dark Mode Toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("abp_news_theme", isDark ? "dark" : "light");
      showToast(isDark ? "Dark mode enabled 🌙" : "Light mode enabled ☀️");
    });

    if (localStorage.getItem("abp_news_theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }

  // Dismiss Sticky Bottom Ad
  const dismissStickyAdBtn = document.getElementById("dismiss-sticky-ad");
  const stickyAdBanner = document.getElementById("sticky-bottom-ad");
  if (dismissStickyAdBtn && stickyAdBanner) {
    dismissStickyAdBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      stickyAdBanner.style.display = "none";
      showToast("Bottom ad banner dismissed");
    });
  }
}

// Navigation Tabs
function switchTab(tabName) {
  currentTab = tabName;
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.classList.remove("text-rose-600", "dark:text-rose-400");
    btn.classList.add("text-slate-500", "dark:text-slate-400");
  });

  const activeBtn = document.getElementById(`nav-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.remove("text-slate-500", "dark:text-slate-400");
    activeBtn.classList.add("text-rose-600", "dark:text-rose-400");
  }

  const scrollableArea = document.getElementById("feed-scrollable");
  if (scrollableArea) scrollableArea.scrollTop = 0;

  renderNews();
}
