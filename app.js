const whatsappNumber = "201024165262";
const pdfs = [
  {
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&auto=format&fit=crop&q=80",
    name: "الحقيبة المتكاملة للأنشطة الصيفية الترفيهية",
    desc: "دليل عملي يحتوي على أكثر من 50 فكرة نشاط حركي، فني، وذهني للأطفال لتنمية مهاراتهم وقضاء صيف ممتع ومفيد.",
    price: 120,
  },
  {
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=80",
    name: "حزمة الملفات الإدارية المتقدمة للحضانات",
    desc: "تشمل سجلات الحضور والغياب، نماذج تقييم الأطفال، جداول المتابعة اليومية، وملفات تنظيم شؤون العاملين لضمان إدارة احترافية.",
    price: 250,
  },
  {
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80",
    name: "الجدول الأسبوعي العملي لتنظيم اليوم الافتراضي",
    desc: "مخطط أسبوعي مرن وجاهز للطباعة الفورية لمساعدة المعلمات والأمهات على تنظيم المهام اليومية والأنشطة التعليمية بوضوح.",
    price: 75,
  },
  {
    img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=80",
    name: "دليل ركن التعايش والقراءة التفاعلية",
    desc: "دليل خطوة بخطوة لتأسيس ركن قراءة تفاعلي ومريح للأطفال، مع قوائم قصصية مقترحة وطرق تحفيز الأطفال على حب القراءة.",
    price: 180,
  },
];

const courses = [
  {
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=80",
    name: "دورة التخطيط الإستراتيجي للأنشطة الصيفية (أغسطس)",
    desc: "ورشة عمل مكثفة لمعلمات الحضانات لشرح كيفية بناء خطة ترفيهية تعليمية متكاملة لشهر أغسطس وتوزيع الأهداف الأسبوعية بنجاح.",
    price: 350,
  },
  {
    img: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=500&auto=format&fit=crop&q=80",
    name: "ورشة تجميع وتصميم الوسائل التعليمية المبتكرة",
    desc: "كورس تطبيقي بالفيديو يشرح كيفية إعادة تدوير الأدوات البسيطة لصنع مجسمات ووسائل تعليمية مبهجة تجذب انتباه الأطفال.",
    price: 400,
  },
  {
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=80",
    name: "دورة التميز الإداري وتأسيس الحضانات الناجحة",
    desc: "كورس متكامل موجه لأصحاب الحضانات والمشرفات لشرح كيفية وضع الهيكل التنظيمي، التعامل مع أولياء الأمور، وإدارة الأزمات.",
    price: 600,
  },
];

function renderCards(itemsArray, containerId, itemTypeLabel) {
  let cardsHtml = "";
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < itemsArray.length; i++) {
    const item = itemsArray[i];
    const message = `مرحباً، أود شراء ${itemTypeLabel}: ${item.name}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    cardsHtml += `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p class="desc">${item.desc}</p>
        <div class="card-footer">
          <p class="price">${item.price}EGP</p>
          <a href="${whatsappUrl}" target="_blank" class="buy-btn">شراء عبر واتساب</a>
        </div>
        </div>
        </div>
    `;
    container.innerHTML = cardsHtml;
  }
}

renderCards(pdfs, "pdf-grid", "PDF");
renderCards(courses, "courses-grid", "Course");

function initGrid(grid) {
  const wrap = document.createElement('div');
  wrap.className = 'scroll-indicator-wrap';
  wrap.innerHTML = '<div class="scroll-track"><div class="scroll-thumb"></div></div>';
  grid.after(wrap);

  const track = wrap.querySelector('.scroll-track');
  const thumb = wrap.querySelector('.scroll-thumb');

  function updateThumb() {
    const max = grid.scrollWidth - grid.clientWidth;
    const pct = max > 0 ? Math.abs(grid.scrollLeft) / max : 0;
    const tw = (grid.clientWidth / grid.scrollWidth) * 100;
    thumb.style.width = tw.toFixed(1) + '%';
    thumb.style.marginRight = (pct * (100 - tw)).toFixed(2) + '%';
  }

  grid.addEventListener('scroll', updateThumb, { passive: true });
  window.addEventListener('resize', updateThumb, { passive: true });
  updateThumb();

  let isDragging = false;
  let startX = 0;
  let startScroll = 0;

  thumb.style.cursor = 'grab';

  thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    startScroll = grid.scrollLeft;
    thumb.style.cursor = 'grabbing';
    thumb.style.transition = 'none'; 
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = e.pageX - startX;
    const scrollRatio = grid.scrollWidth / track.clientWidth;
    grid.scrollLeft = startScroll + (delta * scrollRatio);
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    thumb.style.cursor = 'grab';
    thumb.style.transition = ''; 
  });
}

document.querySelectorAll('.product-grid').forEach(initGrid);