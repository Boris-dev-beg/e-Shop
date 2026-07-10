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

window.addEventListener("load", handleLoad());

function handleLoad() {
  const partner_container = document.getElementById("partner-container");
  Tab_Partner.forEach(
    (partner) =>
      (partner_container.innerHTML += `
        <span class="w-25 max-[430px]:w-15">
            <img src="../images/patners/${partner.image_url}" alt=${partner.name} />
        </span>
        `),
  );
}
