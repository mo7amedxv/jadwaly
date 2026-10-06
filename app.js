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
  {
    img: "imgs/pdf5.avif",
    name: "الباقة الإدارية والتعليمية الشاملة للحضانات – السعودية والدول العربية",
    desc: "باقة متكاملة تساعدك على تنظيم وإدارة الحضانة بشكل احترافي، وتوفر لكِ نماذج وملفات إدارية وتعليمية جاهزة للاستخدام، تساعد على تقليل العشوائية وتوفير الوقت والجهد. مناسبة للحضانات في السعودية ومختلف الدول العربية، ويمكن تكييف بعض النماذج حسب نظام كل حضانة واحتياجاتها.",
    price: 1000,
  },
];
const courses = [
  {
    img: "imgs/course1.avif",
    name: "كورس إعداد معلمة اللغة العربية (نور البيان)",
    desc: "تأسيس القراءة والكتابة، الحركات والمدود، وأنشطة تطبيقية لتعليم الطفل خطوة بخطوة.",
    price: 600,
  },
  {
    img: "imgs/course2.avif",
    name: "كورس إعداد معلمة اللغة الإنجليزية",
    desc: "Jolly Phonics، المنهج، لغة الفصل، وخطط دروس وأنشطة تفاعلية للأطفال.",
    price: 600,
  },
  {
    img: "imgs/course3.avif",
    name: "كورس إعداد معلمة رياضيات رياض الأطفال",
    desc: "تأسيس الأعداد، العمليات الحسابية، وألعاب تعليمية وأنشطة حسية ممتعة.",
    price: 600,
  },
  {
    img: "imgs/course4.avif",
    name: "كورس معلمة القرآن الكريم والتربية الإسلامية",
    desc: "تحفيظ القرآن، السلوكيات الإسلامية، وقصص الأنبياء للأطفال بأسلوب مبسط.",
    price: 600,
  },
  {
    img: "imgs/course5.avif",
    name: "كورس إدارة الحضانات والأكاديميات",
    desc: "إدارة الحضانة، الملفات، التسويق، التعامل مع الأهالي وتحسين الأداء الإداري.",
    price: 600,
  },
  {
    img: "imgs/course6.avif",
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
        <img width="400" height="200" loading="lazy" src="${item.img}" alt="${item.name}">
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
