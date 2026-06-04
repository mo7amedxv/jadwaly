const whatsappNumber = "201024165262";

const pdfs = [
  {
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&auto=format&fit=crop&q=80",
    name: "الحقيبة المتكاملة للأنشطة الصيفية الترفيهية",
    desc: "دليل عملي يضم 50 فكرة نشاط حركي وفني ممتع للأطفال.",
    price: 120,
  },
  {
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&auto=format&fit=crop&q=80",
    name: "حزمة الملفات الإدارية المتقدمة للحضانات",
    desc: "سجلات حضور ونماذج تقييم وجداول يومية لتنظيم الإدارة.",
    price: 250,
  },
  {
    img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 3) - صورة لدفتر تنظيم ومهام مع لمسة نباتية خضراء
    name: "الجدول الأسبوعي العملي لتنظيم اليوم الافتراضي",
    desc: "مخطط مرن وجاهز للطباعة لتنظيم المهام والأنشطة اليومية.",
    price: 75,
  },
  {
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    name: "دليل ركن التعايش والقراءة التفاعلية",
    desc: "خطوات تأسيس ركن قراءة تفاعلي ومحفز للأطفال بالحضانة.",
    price: 180,
  },
  {
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80",
    name: "دفتر تحضير المعلمة المتميز للحضانات",
    desc: "نموذج جاهز يساعد المعلمة على تنظيم الدروس والأهداف اليومية.",
    price: 90,
  },
  {
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=80",
    name: "ملف أوراق عمل الحروف العربية بالتنقيط",
    desc: "أوراق تفاعلية ومبسطة لمساعدة الأطفال على كتابة الحروف.",
    price: 60,
  },
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=80",
    name: "كتاب الألعاب الذهنية وتنمية الذكاء",
    desc: "تمارين ومسابقات مصممة لتطوير مهارات التفكير والتركيز.",
    price: 110,
  },
  {
    img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 8) - صورة بخلفية بيضاء نقية ولمسة خضراء مناسبة للبطاقات والأوراق 
    name: "بطاقات الأرقام والأشكال التعليمية الملونة",
    desc: "بطاقات جاهزة للطباعة لتعليم الأرقام والأشكال الهندسية.",
    price: 50,
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=80",
    name: "حقيبة بطاقات السلوك الإيجابي للطفل",
    desc: "وسيلة تربوية مصورة لتشجيع الأطفال على العادات الصحيحة.",
    price: 70,
  },
  {
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    name: "دليل تهيئة الطفل لدخول الروضة",
    desc: "إرشادات عملية لتأهيل الطفل نفسياً واجتماعياً للمرحلة الجديدة.",
    price: 95,
  },
];
const courses = [
  {
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=80",
    name: "دورة التخطيط الإستراتيجي للأنشطة الصيفية",
    desc: "ورشة مكثفة لبناء خطة ترفيهية وتعليمية متكاملة للحضانة.",
    price: 350,
  },
  {
    img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 2)
    name: "ورشة تصميم الوسائل التعليمية المبتكرة",
    desc: "كورس تطبيقي بالفيديو لصنع مجسمات تعليمية بأدوات بسيطة.",
    price: 400,
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 3)
    name: "دورة التميز الإداري وتأسيس الحضانات",
    desc: "خطوات إدارة العمل والتعامل الاحترافي مع أولياء الأمور.",
    price: 600,
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 4)
    name: "دورة استراتيجيات التعلم النشط للأطفال",
    desc: "أحدث أساليب التدريس التفاعلية لزيادة استيعاب وتركيز الطفل.",
    price: 300,
  },
  {
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 5)
    name: "دورة تعديل السلوك والمشكلات النفسية",
    desc: "طرق تربوية عملية للتعامل مع عناد أو عدوانية الأطفال.",
    price: 450,
  },
  {
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 6)
    name: "دورة مهارات ومعايير معلمة الروضة المحترفة",
    desc: "تأهيل شامل لامتلاك مهارات الشرح الجذاب وإدارة الفصل.",
    price: 280,
  },
  {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=80",
    name: "ورشة أساسيات الحساب الذهني (اليوسي ماس)",
    desc: "تمكين المعلمات من تدريس مهارات الحساب السريع للأطفال.",
    price: 500,
  },
  {
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=80",
    name: "دورة صعوبات التعلم عند الأطفال وطرق علاجها",
    desc: "كيفية اكتشاف مشكلات القراءة والكتابة والتعامل معها بفعالية.",
    price: 380,
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 9)
    name: "ورشة فن سرد القصص ومسرح العرائس",
    desc: "تقنيات لغة الجسد وتغيير الصوت لجذب انتباه الطفل للقصة.",
    price: 220,
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 10)
    name: "دورة التسويق الفعال واجتذاب العملاء للحضانات",
    desc: "خطة تسويقية لزيادة المشتركين وبناء سمعة قوية للحضانة.",
    price: 550,
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
        <img width="280" height="200" loading="lazy" src="${item.img}&w=300&q=75" alt="${item.name}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p  class="desc">${item.desc}</p>
        <div class="card-footer">
          <p class="price">${item.price} <span class="currency">ج.م</span></p>
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
  const wrap = document.createElement("div");
  wrap.className = "scroll-indicator-wrap";
  wrap.innerHTML =
    '<div class="scroll-track"><div class="scroll-thumb"></div></div>';
  grid.after(wrap);

  const track = wrap.querySelector(".scroll-track");
  const thumb = wrap.querySelector(".scroll-thumb");

  function updateThumb() {
    const max = grid.scrollWidth - grid.clientWidth;
    const pct = max > 0 ? Math.abs(grid.scrollLeft) / max : 0;
    const tw = (grid.clientWidth / grid.scrollWidth) * 100;
    thumb.style.width = tw.toFixed(1) + "%";
    thumb.style.marginRight = (pct * (100 - tw)).toFixed(2) + "%";
  }

  grid.addEventListener("scroll", updateThumb, { passive: true });
  window.addEventListener("resize", updateThumb, { passive: true });
  updateThumb();

  let isDragging = false;
  let startX = 0;
  let startScroll = 0;

  thumb.style.cursor = "grab";

  thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    startScroll = grid.scrollLeft;
    thumb.style.cursor = "grabbing";
    thumb.style.transition = "none";
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const delta = e.pageX - startX;
    const scrollRatio = grid.scrollWidth / track.clientWidth;
    grid.scrollLeft = startScroll + delta * scrollRatio;
  });

  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    thumb.style.cursor = "grab";
    thumb.style.transition = "";
  });
}

document.querySelectorAll(".product-grid").forEach(initGrid);
