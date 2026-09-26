const whatsappNumber = "201024165262";

const pdfs = [
  {
    img: "imgs/pdf1.avif",
    name: "ملف الأنشطة الصيفية",
    desc: "برنامج صيفي جاهز للحضانات يشمل أنشطة تعليمية وترفيهية منظمة للفترة من مايو إلى أغسطس.",
    price: 400,
  },
  {
    img: "imgs/pdf3.avif",
    name: "الخطة التعليمية الصيفية (مايو – أغسطس)",
    desc: "مخطط مرن وجاهز للطباعة لتنظيم المهام والأنشطة اليومية.",
    price: 400,
  },
  {
    img: "imgs/pdf2.avif",
    name: "حقيبة جدولي الإدارية والتنظيمية للحضانات",
    desc: "حقيبة إدارية متكاملة للحضانات تضم نماذج التسجيل والتقييم والعقود واللوائح الجاهزة للاستخدام.",
    price: 300,
  },
  {
    img: "imgs/pdf4.avif",
    name: "الخطط التعليمية (مايو – سبتمبر)",
    desc: " خطة سنوية متكاملة تساعد الحضانة على تنظيم العام الدراسي خطوة بخطوة، بدايةً من التهيئة والاستقبال وتقييم الأطفال، مرورًا بالموضوعات التعليمية المتنوعة والأنشطة الفنية والحركية والتجارب العلمية البسيطة والفعاليات الأسبوعية، وصولًا إلى المراجعة والتقييم والاستعداد للانتقال للمرحلة التالية.",
    price: 600,
  },
];
const courses = [
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=80",
    name: "كورس إعداد معلمة اللغة العربية (نور البيان)",
    desc: "تأسيس القراءة والكتابة، الحركات والمدود، وأنشطة تطبيقية لتعليم الطفل خطوة بخطوة.",
    price: 600,
  },
  {
    img: "https://images.unsplash.com/photo-1592431913823-7af6b323da9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxwaGFiZXR8ZW58MHx8MHx8fDA%3D",
    name: "كورس إعداد معلمة اللغة الإنجليزية",
    desc: "Jolly Phonics، المنهج، لغة الفصل، وخطط دروس وأنشطة تفاعلية للأطفال.",
    price: 600,
  },
  {
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&auto=format&fit=crop&q=80",
    name: "كورس إعداد معلمة رياضيات رياض الأطفال",
    desc: "تأسيس الأعداد، العمليات الحسابية، وألعاب تعليمية وأنشطة حسية ممتعة.",
    price: 600,
  },
  {
    img: "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/quran-memorization-centers1-AR201120251.jpg",
    name: "كورس معلمة القرآن الكريم والتربية الإسلامية",
    desc: "تحفيظ القرآن، السلوكيات الإسلامية، وقصص الأنبياء للأطفال بأسلوب مبسط.",
    price: 600,
  },
  {
    img: "https://october-gardens.com/wp-content/uploads/2019/12/%D8%AD%D8%B6%D8%A7%D9%86%D9%87-aca.jpg",
    name: "كورس إدارة الحضانات والأكاديميات",
    desc: "إدارة الحضانة، الملفات، التسويق، التعامل مع الأهالي وتحسين الأداء الإداري.",
    price: 600,
  },
  {
    img: "https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/ca/126/0395_637756306103800235.jpg",
    name: "كورس إدارة الصف والمهارات المهنية للمعلمات",
    desc: "إدارة الفصل، ضبط السلوك، حل المشكلات والتواصل الفعال مع أولياء الأمور.",
    price: 400,
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
      <div class="card-img-wrapper">
        <img  loading="lazy" src="${item.img}" alt="${item.name}">
        </div>
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
