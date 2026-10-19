const contactMessages = {
  hi: {
    pageTitle: "संपर्क करें | Apna Cleaning Service",
    eyebrow: "अपनी ज़रूरत बताएं",
    title: "हमसे संपर्क करें",
    description: "बुकिंग, काम और सफाई के रेट (खर्च) की जानकारी के लिए नीचे दिए गए तरीके से संपर्क करें।",
    homeLink: "होम",
    servicesLink: "सेवाएं",
    contactLink: "संपर्क",
    nameLabel: "आपका नाम",
    namePlaceholder: "पूरा नाम",
    phoneLabel: "फोन नंबर",
    phonePlaceholder: "मोबाइल नंबर",
    addressLabel: "इलाका / पूरा पता",
    addressPlaceholder: "जैसे: शिवपुर, वाराणसी",
    servicesLegend: "कौन-सी सेवाएं चाहिए? (एक से ज़्यादा चुन सकते हैं)",
    serviceAc: "AC क्लीनिंग",
    serviceFridge: "फ्रिज क्लीनिंग",
    serviceWasher: "वॉशिंग मशीन क्लीनिंग",
    serviceKitchen: "ओवन और चिमनी क्लीनिंग",
    serviceCar: "कार इंटीरियर क्लीनिंग",
    serviceTank: "वॉटर टैंक क्लीनिंग",
    serviceUpholstery: "चेयर और अपहोल्स्ट्री क्लीनिंग",
    serviceSofa: "सोफा क्लीनिंग",
    otherService: "अन्य सेवा",
    detailsLabel: "ज़रूरी जानकारी (वैकल्पिक)",
    detailsPlaceholder: "अपनी ज़रूरत या सुविधाजनक समय बताएं",
    submit: "WhatsApp पर अनुरोध भेजें",
    bookingWhatsAppReady: "जानकारी WhatsApp में तैयार है। अनुरोध भेजने के लिए चैट में Send दबाएं।",
    openWhatsApp: "WhatsApp चैट खोलें",
    bookingServicesRequired: "कृपया कम से कम एक सेवा चुनें।",
    bookingPhoneInvalid: "कृपया सही फोन नंबर लिखें।",
    bookingMessageGreeting: "नमस्ते, मुझे cleaning service बुक करनी है।",
    bookingMessageName: "नाम",
    bookingMessagePhone: "फोन",
    bookingMessageServices: "चुनी हुई सेवाएं",
    bookingMessageAddress: "पता",
    bookingMessageDetails: "ज़रूरी जानकारी",
    privacyNote: "फ़ॉर्म की जानकारी WhatsApp में खुलेगी।",
    privacyLink: "गोपनीयता नीति",
    termsLink: "नियम और शर्तें",
    contactInfo: "संपर्क जानकारी",
    area: "शिवपुर, वाराणसी और आसपास",
    directWhatsApp: "WhatsApp पर मैसेज करें",
    mapTitle: "शिवपुर, वाराणसी का नक्शा",
    directions: "Google Maps में देखें",
    footerDescription: "आपके घर और रोज़मर्रा की ज़रूरतों के लिए, दिल से की गई service.",
    quickLinks: "Quick Links",
    contactPrompt: "बुकिंग और जानकारी के लिए कॉल करें",
    callNowShort: "कॉल करें",
    whatsappShort: "WhatsApp",
    copyright: "Apna Cleaning Service. All rights reserved.",
    madeWithCare: "Made with care in Varanasi",
  },
  en: {
    pageTitle: "Contact Us | Apna Cleaning Service",
    eyebrow: "Tell us what you need",
    title: "Contact us",
    description: "Contact us using the options below for bookings, availability, and an estimate.",
    homeLink: "Home",
    servicesLink: "Services",
    contactLink: "Contact",
    nameLabel: "Your name",
    namePlaceholder: "Full name",
    phoneLabel: "Phone number",
    phonePlaceholder: "Mobile number",
    addressLabel: "Area / full address",
    addressPlaceholder: "For example: Shivpur, Varanasi",
    servicesLegend: "Which services do you need? (Choose more than one if needed)",
    serviceAc: "AC cleaning",
    serviceFridge: "Refrigerator cleaning",
    serviceWasher: "Washing machine cleaning",
    serviceKitchen: "Oven and chimney cleaning",
    serviceCar: "Car interior cleaning",
    serviceTank: "Water tank cleaning",
    serviceUpholstery: "Chairs and upholstery cleaning",
    serviceSofa: "Sofa cleaning",
    otherService: "Other service",
    detailsLabel: "Additional details (optional)",
    detailsPlaceholder: "Tell us what you need or a convenient time",
    submit: "Send request on WhatsApp",
    bookingWhatsAppReady: "Your details are ready in WhatsApp. Press Send in the chat to submit your request.",
    openWhatsApp: "Open WhatsApp chat",
    bookingServicesRequired: "Please choose at least one service.",
    bookingPhoneInvalid: "Please enter a valid phone number.",
    bookingMessageGreeting: "Hello, I would like to book a cleaning service.",
    bookingMessageName: "Name",
    bookingMessagePhone: "Phone",
    bookingMessageServices: "Selected services",
    bookingMessageAddress: "Address",
    bookingMessageDetails: "Additional details",
    privacyNote: "Your form details will open in WhatsApp.",
    privacyLink: "Privacy Policy",
    termsLink: "Terms and Conditions",
    contactInfo: "Contact information",
    area: "Shivpur, Varanasi and nearby areas",
    directWhatsApp: "Message us on WhatsApp",
    mapTitle: "Map of Shivpur, Varanasi",
    directions: "Open in Google Maps",
    footerDescription: "Thoughtful service for your home and everyday needs.",
    quickLinks: "Quick Links",
    contactPrompt: "Call for bookings and information",
    callNowShort: "Call Us",
    whatsappShort: "WhatsApp",
    copyright: "Apna Cleaning Service. All rights reserved.",
    madeWithCare: "Made with care in Varanasi",
  },
};

const bookingForm = document.querySelector("#booking-form");
const bookingPhone = bookingForm.querySelector('[name="phone"]');
const bookingServiceOptions = [...bookingForm.querySelectorAll('[name="services"]')];
const bookingFormStatus = document.querySelector("#booking-form-status");
const bookingWhatsAppLink = document.querySelector("#booking-whatsapp-link");

function setContactLanguage(language) {
  const messages = contactMessages[language];
  document.documentElement.lang = language;
  document.title = messages.pageTitle;

  document.querySelectorAll("[data-contact-copy]").forEach((element) => {
    element.textContent = messages[element.dataset.contactCopy];
  });
  document.querySelectorAll("[data-contact-placeholder]").forEach((element) => {
    element.placeholder = messages[element.dataset.contactPlaceholder];
  });
  document.querySelectorAll("[data-contact-title]").forEach((element) => {
    element.title = messages[element.dataset.contactTitle];
  });
  document.querySelectorAll("[data-contact-language]").forEach((button) => {
    const isActive = button.dataset.contactLanguage === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("apna-cleaning-language", language);
}

document.querySelectorAll("[data-contact-language]").forEach((button) => {
  button.addEventListener("click", () => setContactLanguage(button.dataset.contactLanguage));
});

bookingServiceOptions.forEach((option) => {
  option.addEventListener("change", () => bookingServiceOptions[0].setCustomValidity(""));
});

bookingForm.addEventListener("input", () => {
  bookingPhone.setCustomValidity("");
  bookingFormStatus.hidden = true;
  bookingWhatsAppLink.hidden = true;
  bookingWhatsAppLink.removeAttribute("href");
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const messages = contactMessages[document.documentElement.lang];
  const selectedServices = bookingServiceOptions
    .filter((option) => option.checked)
    .map((option) => option.closest("label").querySelector("[data-contact-copy]").textContent.trim());
  const phoneDigits = bookingPhone.value.replace(/\D/g, "");

  bookingServiceOptions[0].setCustomValidity(
    selectedServices.length ? "" : messages.bookingServicesRequired,
  );
  bookingPhone.setCustomValidity(
    phoneDigits.length >= 10 && phoneDigits.length <= 13 ? "" : messages.bookingPhoneInvalid,
  );
  if (!bookingForm.reportValidity()) return;

  const formData = new FormData(bookingForm);
  const details = String(formData.get("details") || "").trim();
  const messageLines = [
    messages.bookingMessageGreeting,
    `${messages.bookingMessageName}: ${String(formData.get("name")).trim()}`,
    `${messages.bookingMessagePhone}: ${String(formData.get("phone")).trim()}`,
    `${messages.bookingMessageServices}: ${selectedServices.join(", ")}`,
    `${messages.bookingMessageAddress}: ${String(formData.get("address")).trim()}`,
  ];
  if (details) messageLines.push(`${messages.bookingMessageDetails}: ${details}`);

  const whatsappUrl = `https://wa.me/919219059563?text=${encodeURIComponent(messageLines.join("\n"))}`;
  bookingWhatsAppLink.href = whatsappUrl;
  bookingWhatsAppLink.hidden = false;
  bookingFormStatus.textContent = messages.bookingWhatsAppReady;
  bookingFormStatus.hidden = false;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

const savedLanguage = localStorage.getItem("apna-cleaning-language");
setContactLanguage(savedLanguage === "en" ? "en" : "hi");
document.querySelector("#contact-year").textContent = new Date().getFullYear();
