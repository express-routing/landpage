const siteConfig = {
  brandName: "Partiu Entrega",
  controllerName: "Equipe Partiu Entrega",
  contactEmail: "partiu.entrega.app@gmail.com",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.diegoserrat.deliveryrouting",
  updatedAt: "13 de abril de 2026",
};

siteConfig.contactMailto = `mailto:${siteConfig.contactEmail}`;

document.querySelectorAll("[data-config]").forEach((element) => {
  const key = element.getAttribute("data-config");
  const value = key ? siteConfig[key] : "";

  if (typeof value === "string" && value.trim()) {
    element.textContent = value;
  }
});

document.querySelectorAll("[data-config-link]").forEach((element) => {
  const key = element.getAttribute("data-config-link");
  const value = key ? siteConfig[key] : "";

  if (!(element instanceof HTMLAnchorElement)) {
    return;
  }

  if (typeof value === "string" && value.trim()) {
    element.href = value;
    return;
  }

  element.setAttribute("aria-disabled", "true");
});
