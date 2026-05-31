const whatsappNumber = "201024165262";
const pdfs = [
  {
    img: "imgs/pdf1.jpeg",
    name:"خطة النشاط الصيفي الترفيهيه",
    desc: "الخطه الترفيهية التعليمية من مايو الي اغسطس",
    price: 100,
  },

  {
    img: "imgs/pdf2.jfif",
    name: "الملفات الادارية للحضانة",
    desc: "جدول أسبوعي عملي اليومية",
    price: 90,
  },

  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    name: "دليل ركن التعايش والقراءة",
    desc: "جدول أسبوعي عملي جاهز للطباعة",
    price: 150,
  },
];

const courses = [
  {
    img: "imgs/pdf1.jpeg",
    name: "خطة النشاط الصيفي الترفيهيه من مايو الي اغسطس",
    desc: "الخطه الصيفية الترفيهية والخطة الصيفية التعليمية من مايو الي اغسطس",
    price: 100,
  },

  {
    img: "imgs/pdf2.jfif",
    name: "الملفات الادارية للحضانة",
    desc: "جدول أسبوعي عملي اليومية",
    price: 90,
  },
];
function renderCards(itemsArray, containerId, itemTypeLabel) {
  let cardsHtml = "";
  const container = document.getElementById(containerId);
  if (!container) return;
  for (i = 0; i < itemsArray.length; i++) {
    const item = itemsArray[i];
    const message = `مرحباً، أود شراء ${itemTypeLabel}: ${item.name}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    cardsHtml += `
  <div class="card">
    <img src="${item.img}" alt="${item.name}">
    <div class="card-content">
      <h3>${item.name}</h3>
      <p class="desc">${item.desc}</p>
      <p class="price">${item.price}EGP</p>
      <a href="${whatsappUrl}" target="_blank" class="buy-btn">شراء عبر واتساب</a>
    </div>
  </div>
`;
    container.innerHTML = cardsHtml;
  }
}
renderCards(pdfs, "pdf-grid", "PDF");
renderCards(courses, "courses-grid", "Course");
