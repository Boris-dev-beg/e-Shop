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

window.addEventListener("load", handleLoad());

function handleLoad() {
    setTimeout(showPartner(),500)
    setTimeout(showTestimonial(), 500)
  
}

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

function showTestimonial(){
  const testimonial_container = document.getElementById("testimonial-container");
  Tab_Testimonial.forEach((testimonial) => (
    testimonial_container.innerHTML += `
      <div
        class="relative px-5 pb-5 pt-14 flex flex-col items-center justify-center bg-slate-200 rounded-sm h-50"
      >
        <img
          src="../images/avatars/${testimonial.image_url}"
          alt="${testimonial.name}"
          class="rounded-full w-21 h-22 absolute -top-10"
        />
        <p class="text-center text-secondary text-sm line-clamp-3 my-2">
          ${testimonial.message}
        </p>
        <h2 class="font-bold text-lg">${testimonial.name}</h2>
        <h2 class="italic text-xs text-secondary">${testimonial.email}</h2>
      </div>`
  ))
}
