const Tab_Partner = [
  {
    id: 1,
    image_url: "openai.png",
    name: "openai",
  },
  {
    id: 2,
    image_url: "amazon.png",
    name: "amazon",
  },
  {
    id: 3,
    image_url: "tencent.png",
    name: "tencent",
  },
  {
    id: 4,
    image_url: "spotify.png",
    name: "spotify",
  },
];
const Tab_Testimonial = [
  {
    image_url: "jake-nackos.jpg",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reprehenderit laboriosam dolorem ad?",
    name: "Jake Nackos",
    email: "jake@example.com"
  },{
    image_url: "diego-hernandez.jpg",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reprehenderit laboriosam dolorem ad?",
    name: "Diego Hernandez",
    email: "diego@example.com"
  },{
    image_url: "michael-dam.jpg",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reprehenderit laboriosam dolorem ad?",
    name: "Michael Dam",
    email: "michael@example.com"
  },
]
const Tab_Product = [
  {
    image_url: "desktop_3.png",
    title: "desktop 3",
    new_price: 25,
    last_price: 50,
    likes: "25k+",
  },
  {
    image_url: "laptop_3.png",
    title: "laptop",
    new_price: 125,
    last_price: 350,
    likes: "25k+",
  },
  {
    image_url: "mouse_1.png",
    title: "mouse",
    new_price: 15,
    last_price: 30,
    likes: "15k+",
  },
  {
    image_url: "desktop_2.png",
    title: "desktop",
    new_price: 35,
    last_price: 60,
    likes: "25k+",
  },
]
window.addEventListener("load", handleLoad());

function handleLoad() {
    setTimeout(showPartner(),500)
    setTimeout(showTestimonial(), 500)
    setTimeout(showProduct(), 500)
  
}
// ! Partner Section
function showPartner() {
  const partner_container = document.getElementById("partner-container");
  Tab_Partner.forEach((partner) =>
    partner_container.innerHTML += `
        <span class="w-25 max-[430px]:w-15">
            <img src="../images/patners/${partner.image_url}" alt=${partner.name} />
        </span>
        `
  );
}

// ! Products Section
function showProduct(){
  const products_container = document.getElementById("products-container")
  Tab_Product.forEach((product) => (
    products_container.innerHTML += `
    <div
      class="rounded-md group hover:border-accent border border-slate-200 p-5 max-[430px]:p-2 flex sm:flex-col max-[430px]:flex-col items-center justify-center gap-1.5 w-full sm:h-85 bg-white"
    >
      <div
        class="relative rounded-md flex items-center justify-center bg-slate-100 group hover:rotate-3 h-45 max-[430px]:h-30 max-[430px]:object-cover w-55 max-[430px]:w-35"
      >
        <img
          src="../images/products/${product.image_url}"
          alt="${product.title}"
          class="absolute inset-0 object-contain group-hover:scale-105 w-full h-full"
        />
      </div>
      <div class="flex flex-col gap-1 w-1/2 px-5 max-[430px]:px-0 sm:w-full max-[430px]:w-full">
        <h1 class="font-bold text-2xl max-[430px]:text-sm sm:text-xl line-clamp-1 capitalize">${product.title}</h1>
        <span class="flex flex-col sm:flex-row md:items-center w-full justify-between">
          <span class="flex gap-3 items-end font-semibold">
            <h2 class="text-2xl max-[430px]:text-base text-accent font-bold">$${product.new_price}</h2>
            <h2 class="text-sm text-slate-700 line-through">$${product.last_price}</h2>
          </span>
          <span class="flex gap-0.5 max-[430px]:hidden">
            <i class="fi fi-rr-star text-yellow-500 text-lg"></i>
            <p class="font-semibold text-sm">${product.likes}</p>
          </span>
        </span>
        <div
          class="w-full flex flex-col gap-2 pt-3 mt-1 border-t border-slate-200 font-semibold *:rounded-md *:border"
        >
          <button
            class="py-2 px-4 text-center text-slate-800 bg-slate-100 hover:bg-slate-50 max-[430px]:hidden"
          >
            Wishlist
          </button>
          <button
            class="py-2 px-4 bg-accent hover:bg-accent/90 text-white text-nowrap"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
    `
  ))
}

// ! Testimonial Section
function showTestimonial(){
  const testimonial_container = document.getElementById("testimonial-container");
  Tab_Testimonial.forEach((testimonial) => (
    testimonial_container.innerHTML += `
      <div
        class="relative px-5 pb-5 pt-14 flex flex-col items-center justify-center bg-slate-200 rounded-md h-50 group hover:bg-accent transition-colors duration-300"
      >
        <img
          src="../images/avatars/${testimonial.image_url}"
          alt="${testimonial.name}"
          class="rounded-full w-21 h-22 absolute -top-10 group-hover:grayscale-0 grayscale-100"
        />
        <p class="text-center text-secondary group-hover:text-slate-50 text-sm line-clamp-3 my-2">
          ${testimonial.message}
        </p>
        <h2 class="font-bold text-lg group-hover:text-white">${testimonial.name}</h2>
        <h2 class="italic text-xs text-secondary group-hover:text-slate-50">${testimonial.email}</h2>
      </div>`
  ))
}
