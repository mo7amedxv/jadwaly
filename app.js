let pdfs = [
  {
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80",
    name: "جدول تنظيم الوقت الأسبوعي",
    price: "100egp",
  },
  {
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80",
    name: "كتاب الأنشطة التفاعلية للأطفال",
    price: "90egp",
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    name: "دليل ركن التعايش والقراءة",
    price: "150egp",
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    name: "دليل ركن التعايش والقراءة",
    price: "150egp",
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    name: "دليل ركن التعايش والقراءة",
    price: "150egp",
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    name: "دليل ركن التعايش والقراءة",
    price: "150egp",
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    name: "دليل ركن التعايش والقراءة",
    price: "150egp",
  },
];

let pdfContainer = document.getElementById("pdf-grid");
pdfContainer.innerHTML = "";
for (let i = 0; i < pdfs.length; i++) {
  pdfContainer.innerHTML += `
    <div class="card">
      <img src="${pdfs[i].img}" alt="${pdfs[i].name}">
      <h3>${pdfs[i].name}</h3>
      <p class="price">${pdfs[i].price}</p>
    </div>
  `;
}
