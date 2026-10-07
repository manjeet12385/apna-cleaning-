const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const heroVideo = document.querySelector(".hero-visual video");
const videoSoundToggle = document.querySelector(".video-sound-toggle");
const languageOptions = document.querySelectorAll(".language-option");
const servicePreviewVideos = document.querySelectorAll(".service-preview video");
const contactDialog = document.querySelector("#contact-dialog");
const contactDialogClose = document.querySelector(".contact-dialog-close");
const bookingForm = document.querySelector("#booking-form");
const bookingPhone = bookingForm.querySelector('[name="phone"]');
const bookingServiceOptions = [...bookingForm.querySelectorAll('[name="services"]')];
const bookingFormStatus = document.querySelector("#booking-form-status");
const bookingWhatsAppLink = document.querySelector("#booking-whatsapp-link");
const serviceMenuToggle = document.querySelector(".nav-service-toggle");
const serviceMenu = document.querySelector("#services-menu");
const serviceCards = document.querySelectorAll(".service-card[data-service-page]");

const translations = {
  hi: {
    pageTitle: "Apna Cleaning Service | सफाई और होम सर्विस, वाराणसी",
    metaDescription: "Apna Cleaning Service — AC, fridge, washing machine, chimney, water tank, car interior और upholstery cleaning की भरोसेमंद सेवा। शिवपुर, वाराणसी में कॉल या WhatsApp करें।",
    navigation: "मुख्य नेविगेशन",
    languageSelector: "भाषा चुनें",
    homeLink: "Apna Cleaning Service — होम",
    menuOpen: "मेन्यू खोलें",
    menuClose: "मेन्यू बंद करें",
    navHome: "होम",
    navServices: "हमारी सेवाएं",
    servicesDropdownHeading: "अपनी service चुनें",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क करें",
    heroTitleTop: "सफाई हो या सर्विस,",
    heroTitleBottom: "अपना भरोसा चुनें।",
    heroDescription: "घर, गाड़ी और appliances के लिए आसान और भरोसेमंद service — आपके दरवाज़े पर।",
    videoAc: "एयर कंडीशनर की सर्विस करते हुए",
    videoFridge: "फ्रिज की सफाई करते हुए",
    videoWasher: "वॉशिंग मशीन में कपड़े डालते हुए",
    videoOven: "ओवन की सफाई करते हुए",
    videoCar: "कार की सीटों को वैक्यूम से साफ करते हुए",
    videoTank: "पूल की सफाई करते हुए — पानी की सफाई की झलक",
    videoUpholstery: "सोफे की upholstery साफ करते हुए",
    bookWhatsapp: "WhatsApp पर बुक करें",
    callNow: "अभी कॉल करें",
    heroPointHome: "घर पर service",
    heroPointBooking: "आसान booking",
    heroPointLocal: "लोकल टीम",
    whyChooseEyebrow: "आपकी सुविधा, हमारी प्राथमिकता",
    whyChooseTitleLead: "सफाई की बुकिंग",
    whyChooseTitleAccent: "आसान बनाएं",
    whyChooseDescription: "अपनी ज़रूरत बताएं, ज़रूरी जानकारी पाएं और सेवा का समय सीधे कन्फर्म करें।",
    whyChooseOneTitle: "सीधी और आसान बुकिंग",
    whyChooseOneDescription: "कॉल या WhatsApp पर अपनी समस्या बताएं और उपलब्ध विकल्पों के बारे में पूछें।",
    whyChooseTwoTitle: "घर पर सेवा की सुविधा",
    whyChooseTwoDescription: "उपलब्धता कन्फर्म होने पर अपनी बताई जगह पर विज़िट की जानकारी पाएं।",
    whyChooseThreeTitle: "पहले जानकारी, फिर बुकिंग",
    whyChooseThreeDescription: "काम और संभावित शुल्क के बारे में पूछकर आगे बढ़ें; अंतिम जानकारी सेवा देखकर कन्फर्म होगी।",
    whyChooseFourTitle: "वाराणसी की लोकल सेवा",
    whyChooseFourDescription: "शिवपुर और आसपास के इलाके के लिए उपलब्धता सीधे हमसे कन्फर्म करें।",
    howItWorksEyebrow: "तीन आसान कदम",
    howItWorksTitleLead: "बुकिंग कैसे",
    howItWorksTitleAccent: "काम करती है?",
    howItWorksDescription: "अपनी सेवा चुनें, हमसे बात करें और समय कन्फर्म करें।",
    howItWorksOneTitle: "अपनी सेवा चुनें",
    howItWorksOneDescription: "AC, फ्रिज, कार इंटीरियर या सूची में दी गई दूसरी सेवा चुनें।",
    howItWorksTwoTitle: "कॉल या WhatsApp करें",
    howItWorksTwoDescription: "अपनी समस्या, जगह और सुविधाजनक समय बताएं।",
    howItWorksThreeTitle: "जानकारी लेकर समय कन्फर्म करें",
    howItWorksThreeDescription: "उपलब्धता और अनुमानित शुल्क पूछें; सहमति के बाद विज़िट कन्फर्म करें।",
    faqEyebrow: "आपके सवाल",
    faqTitleLead: "अक्सर पूछे जाने वाले",
    faqTitleAccent: "सवाल",
    faqDescription: "किसी और जानकारी के लिए हमें कॉल या WhatsApp करें।",
    faqBookingQuestion: "मैं सेवा कैसे बुक करूं?",
    faqBookingAnswer: "अपनी सेवा बताने के लिए हमें कॉल या WhatsApp करें। उपलब्धता और समय की पुष्टि के बाद ही बुकिंग तय होगी।",
    faqAreaQuestion: "आप किन इलाकों में सेवा देते हैं?",
    faqAreaAnswer: "हम शिवपुर, वाराणसी और आसपास के इलाकों पर ध्यान देते हैं। अपने पते के लिए पहले हमसे उपलब्धता कन्फर्म करें।",
    faqServicesQuestion: "कौन-कौन सी सेवाएं उपलब्ध हैं?",
    faqServicesAnswer: "वेबसाइट पर AC, फ्रिज, वॉशिंग मशीन, ओवन और चिमनी, कार इंटीरियर, वॉटर टैंक और upholstery सेवाएं दी गई हैं। उपलब्धता पूछ लें।",
    faqPriceQuestion: "सेवा का शुल्क कितना होगा?",
    faqPriceAnswer: "शुल्क सेवा और काम की स्थिति के अनुसार बदल सकता है। बुकिंग से पहले अनुमान पूछें और काम शुरू होने से पहले अंतिम शुल्क कन्फर्म करें।",
    faqTimingQuestion: "विज़िट का समय कैसे तय होगा?",
    faqTimingAnswer: "अपना पसंदीदा समय बताएं। टीम की उपलब्धता कन्फर्म होने पर ही विज़िट का समय तय होगा।",
    videoDescription: "सोफे की upholstery साफ करते हुए",
    soundOn: "आवाज़ चालू करें",
    soundOff: "आवाज़ बंद करें",
    videoNoteTitle: "हर कोने की सफाई",
    videoNoteSubtitle: "Care that feels like home",
    floatingTitle: "आपके घर तक",
    heroBottomLeft: "आपका घर, हमारी ज़िम्मेदारी",
    servicesEyebrow: "हम क्या करते हैं",
    servicesTitleLead: "आपकी ज़रूरत की",
    servicesTitleAccent: "हर service",
    servicesDescription: "सफाई और home appliance service — सब एक ही जगह। अपनी service चुनें और हमसे बात करें।",
    reviewsEyebrow: "ग्राहक अनुभव",
    reviewsTitleLead: "हमारे",
    reviewsTitleAccent: "रिव्यू",
    reviewsDemoNotice: "डेमो रिव्यू — ये वास्तविक ग्राहक समीक्षाएं नहीं हैं।",
    reviewSampleTag: "नमूना · काल्पनिक",
    reviewPrevious: "पिछला रिव्यू",
    reviewNext: "अगला रिव्यू",
    reviewRating: "5 में से 5 स्टार (नमूना)",
    serviceAcTitle: "AC सर्विस",
    serviceAcDescription: "AC की देखभाल और सर्विस, ताकि घर रहे ठंडा और आरामदायक।",
    serviceFridgeTitle: "फ्रिज सर्विस",
    serviceFridgeDescription: "फ्रिज की सर्विस के लिए मदद — समय और जानकारी के लिए कॉल करें।",
    serviceWasherTitle: "वॉशिंग मशीन",
    serviceWasherDescription: "वॉशिंग मशीन की सर्विस के लिए सुविधाजनक home visit बुक करें।",
    serviceKitchenTitle: "ओवन और चिमनी",
    serviceKitchenDescription: "किचन के oven और chimney की सर्विस व सफाई की सुविधा।",
    serviceCarTitle: "कार इंटीरियर",
    serviceCarDescription: "गाड़ी के अंदरूनी हिस्सों की सफाई से सफर बनाएं और भी fresh।",
    serviceTankTitle: "वॉटर टैंक सफाई",
    serviceTankDescription: "पानी की टंकी की सफाई के लिए अपनी booking पहले से तय करें।",
    serviceUpholsteryTitle: "चेयर और upholstery",
    serviceUpholsteryDescription: "चेयर और fabric surfaces की सफाई से घर को दें नया एहसास।",
    serviceOtherTitle: "आपको चाहिए कोई और service?",
    serviceOtherDescription: "अपनी ज़रूरत बताइए — हम उपलब्धता और जानकारी साझा करेंगे।",
    bookingAsk: "विस्तार देखें",
    talkToUs: "हमसे बात करें",
    howItWorksNav: "बुकिंग कैसे करें",
    faqNav: "अक्सर पूछे जाने वाले सवाल",
    aboutImageAlt: "साफ-सुथरा और आरामदायक घर",
    stampHome: "अपना घर",
    stampCare: "अपनी care",
    aboutEyebrow: "आपका लोकल service partner",
    aboutTitleLead: "साफ घर, सुकून वाला",
    aboutTitleAccent: "हर दिन।",
    aboutDescription: "Apna Cleaning Service में हमारा मकसद है आपकी रोज़मर्रा की सफाई और appliance service को आसान बनाना। आप अपनी ज़रूरत बताइए, हमारी टीम आपसे बात करके आगे की जानकारी देगी।",
    benefitOneTitle: "एक कॉल पर जानकारी",
    benefitOneDescription: "सेवा और उपलब्धता के बारे में सीधे बात करें।",
    benefitTwoTitle: "सुविधाजनक booking",
    benefitTwoDescription: "कॉल या WhatsApp पर अपनी ज़रूरत बताएं।",
    benefitThreeTitle: "लोकल सेवा",
    benefitThreeDescription: "शिवपुर, वाराणसी और आसपास के लिए।",
    contactUs: "हमसे संपर्क करें",
    contactDialogEyebrow: "बुकिंग की शुरुआत",
    contactDialogTitle: "अपनी सेवा बुक करें",
    contactDialogDescription: "जानकारी भरें और अपनी पसंद की सेवा चुनें। अनुरोध WhatsApp पर खुलेगा।",
    contactDialogClose: "फॉर्म बंद करें",
    bookingNameLabel: "आपका नाम",
    bookingNamePlaceholder: "पूरा नाम",
    bookingPhoneLabel: "फोन नंबर",
    bookingPhonePlaceholder: "मोबाइल नंबर",
    bookingAddressLabel: "इलाका / पूरा पता",
    bookingAddressPlaceholder: "जैसे: शिवपुर, वाराणसी",
    bookingServicesLegend: "कौन-सी सेवाएं चाहिए? (एक से ज़्यादा चुन सकते हैं)",
    bookingOtherService: "अन्य सेवा",
    bookingDetailsLabel: "ज़रूरी जानकारी (वैकल्पिक)",
    bookingDetailsPlaceholder: "अपनी ज़रूरत या सुविधाजनक समय बताएं",
    bookingSubmit: "WhatsApp पर अनुरोध भेजें",
    bookingServicesRequired: "कृपया कम से कम एक सेवा चुनें।",
    bookingPhoneInvalid: "कृपया सही फोन नंबर लिखें।",
    bookingWhatsAppReady: "जानकारी WhatsApp में तैयार है। अनुरोध भेजने के लिए चैट में Send दबाएं।",
    bookingWhatsAppLink: "WhatsApp चैट खोलें",
    bookingMessageGreeting: "नमस्ते, मुझे cleaning service बुक करनी है।",
    bookingMessageName: "नाम",
    bookingMessagePhone: "फोन",
    bookingMessageServices: "चुनी हुई सेवाएं",
    bookingMessageAddress: "पता",
    bookingMessageDetails: "ज़रूरी जानकारी",
    contactMapTitle: "हमारा सेवा क्षेत्र",
    contactMapLocation: "शिवपुर, वाराणसी और आसपास",
    contactMapFrameTitle: "शिवपुर, वाराणसी का नक्शा",
    contactMapDirections: "Google Maps में देखें",
    bookingEyebrow: "चलें, शुरुआत करें",
    bookingTitleLead: "आपकी service booking",
    bookingTitleAccent: "बस एक call दूर।",
    bookingDescription: "कॉल करें या WhatsApp पर अपनी ज़रूरत लिखें।",
    whatsappContact: "WhatsApp करें",
    footerDescription: "आपके घर और रोज़मर्रा की ज़रूरतों के लिए, दिल से की गई service.",
    footerLocation: "शिवपुर, वाराणसी और आसपास",
    quickLinks: "Quick Links",
    contactHeading: "हमसे संपर्क करें",
    contactPrompt: "बुकिंग और जानकारी के लिए कॉल करें",
    whatsappMessage: "WhatsApp पर मैसेज करें",
    copyright: "Apna Cleaning Service. All rights reserved.",
    madeWithCare: "Made with care in Varanasi",
    whatsappBooking: "WhatsApp पर बुकिंग करें",
    callBooking: "अभी कॉल करें: +91 92190 59563",
  },
  en: {
    pageTitle: "Apna Cleaning Service | Cleaning & Home Services, Varanasi",
    metaDescription: "Trusted AC, refrigerator, washing machine, chimney, water tank, car interior and upholstery cleaning services in Shivpur, Varanasi. Call or WhatsApp Apna Cleaning Service.",
    navigation: "Main navigation",
    languageSelector: "Choose language",
    homeLink: "Apna Cleaning Service — Home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navHome: "Home",
    navServices: "Our Services",
    servicesDropdownHeading: "Choose a service",
    navAbout: "About Us",
    navContact: "Contact",
    heroTitleTop: "Cleaning or servicing,",
    heroTitleBottom: "choose a name you trust.",
    heroDescription: "Reliable, convenient service for your home, car and appliances — right at your doorstep.",
    videoAc: "Technician servicing an air conditioner",
    videoFridge: "Person cleaning a refrigerator",
    videoWasher: "Person loading a washing machine",
    videoOven: "Person cleaning an oven",
    videoCar: "Vacuuming car seats",
    videoTank: "Pool cleaning footage — a water-cleaning preview",
    videoUpholstery: "People cleaning upholstered furniture",
    bookWhatsapp: "Book on WhatsApp",
    callNow: "Call Now",
    heroPointHome: "At-home service",
    heroPointBooking: "Easy booking",
    heroPointLocal: "Local team",
    whyChooseEyebrow: "Your convenience comes first",
    whyChooseTitleLead: "Cleaning service,",
    whyChooseTitleAccent: "made simpler",
    whyChooseDescription: "Tell us what you need, get the details, and confirm a visit directly with our team.",
    whyChooseOneTitle: "Easy, direct booking",
    whyChooseOneDescription: "Tell us about the issue by phone or WhatsApp and ask which options are available.",
    whyChooseTwoTitle: "Service at your location",
    whyChooseTwoDescription: "If a visit is available, get the details for service at the address you share.",
    whyChooseThreeTitle: "Know the details first",
    whyChooseThreeDescription: "Ask about the work and estimated charges; confirm the final details after assessment.",
    whyChooseFourTitle: "Local Varanasi service",
    whyChooseFourDescription: "Contact us to confirm availability in Shivpur and nearby areas.",
    howItWorksEyebrow: "Three simple steps",
    howItWorksTitleLead: "How booking",
    howItWorksTitleAccent: "works",
    howItWorksDescription: "Choose a service, speak with us, and confirm a time.",
    howItWorksOneTitle: "Choose your service",
    howItWorksOneDescription: "Select AC, refrigerator, car interior, or another listed service.",
    howItWorksTwoTitle: "Call or WhatsApp",
    howItWorksTwoDescription: "Tell us what you need, your location, and a convenient time.",
    howItWorksThreeTitle: "Confirm the details",
    howItWorksThreeDescription: "Ask about availability and an estimate; confirm the visit if it works for you.",
    faqEyebrow: "Questions",
    faqTitleLead: "Frequently asked",
    faqTitleAccent: "questions",
    faqDescription: "Call or WhatsApp us if you need any other information.",
    faqBookingQuestion: "How do I book a service?",
    faqBookingAnswer: "Call or WhatsApp us with the service you need. The booking is confirmed only after availability and timing are agreed.",
    faqAreaQuestion: "Which areas do you serve?",
    faqAreaAnswer: "We focus on Shivpur, Varanasi, and nearby areas. Contact us to confirm availability for your address.",
    faqServicesQuestion: "Which services are available?",
    faqServicesAnswer: "The website lists AC, refrigerator, washing machine, oven and chimney, car interior, water tank, and upholstery services. Please ask us to confirm availability.",
    faqPriceQuestion: "How much will the service cost?",
    faqPriceAnswer: "Charges can vary by service and condition. Ask for an estimate before booking and confirm the final charge before work begins.",
    faqTimingQuestion: "How do I schedule a visit?",
    faqTimingAnswer: "Share your preferred time. A visit is scheduled only after the team's availability is confirmed.",
    videoDescription: "Upholstery cleaning in progress",
    soundOn: "Turn sound on",
    soundOff: "Turn sound off",
    videoNoteTitle: "A cleaner in every corner",
    videoNoteSubtitle: "Care that feels like home",
    floatingTitle: "At your doorstep",
    heroBottomLeft: "Your home, our responsibility",
    servicesEyebrow: "What we do",
    servicesTitleLead: "Every service",
    servicesTitleAccent: "you need",
    servicesDescription: "Cleaning and home appliance services — all in one place. Choose a service and get in touch.",
    reviewsEyebrow: "Customer stories",
    reviewsTitleLead: "What people",
    reviewsTitleAccent: "say",
    reviewsDemoNotice: "Demo reviews — these are not real customer testimonials.",
    reviewSampleTag: "Sample · fictional",
    reviewPrevious: "Previous review",
    reviewNext: "Next review",
    reviewRating: "5 out of 5 stars (sample)",
    serviceAcTitle: "AC Service",
    serviceAcDescription: "AC care and servicing to keep your home cool and comfortable.",
    serviceFridgeTitle: "Refrigerator Service",
    serviceFridgeDescription: "Get help with refrigerator servicing — call us for timings and details.",
    serviceWasherTitle: "Washing Machine",
    serviceWasherDescription: "Book a convenient home visit for washing machine servicing.",
    serviceKitchenTitle: "Oven & Chimney",
    serviceKitchenDescription: "Kitchen oven and chimney servicing and cleaning.",
    serviceCarTitle: "Car Interior",
    serviceCarDescription: "Make every drive feel fresher with a clean car interior.",
    serviceTankTitle: "Water Tank Cleaning",
    serviceTankDescription: "Schedule your water tank cleaning in advance.",
    serviceUpholsteryTitle: "Chairs & Upholstery",
    serviceUpholsteryDescription: "Refresh your home with clean chairs and fabric surfaces.",
    serviceOtherTitle: "Need another service?",
    serviceOtherDescription: "Tell us what you need — we’ll share availability and details.",
    bookingAsk: "View details",
    talkToUs: "Talk to us",
    howItWorksNav: "How it works",
    faqNav: "FAQs",
    aboutImageAlt: "A clean and comfortable home",
    stampHome: "Your home",
    stampCare: "Our care",
    aboutEyebrow: "Your local service partner",
    aboutTitleLead: "A clean home,",
    aboutTitleAccent: "peace every day.",
    aboutDescription: "At Apna Cleaning Service, we make everyday cleaning and appliance servicing easier. Tell us what you need, and our team will get in touch with the details.",
    benefitOneTitle: "Help with one call",
    benefitOneDescription: "Speak directly with us about services and availability.",
    benefitTwoTitle: "Convenient booking",
    benefitTwoDescription: "Tell us what you need by phone or WhatsApp.",
    benefitThreeTitle: "Local service",
    benefitThreeDescription: "Serving Shivpur, Varanasi and nearby areas.",
    contactUs: "Contact us",
    contactDialogEyebrow: "Start your booking",
    contactDialogTitle: "Book a service",
    contactDialogDescription: "Fill in your details and choose the services you need. Your request will open in WhatsApp.",
    contactDialogClose: "Close form",
    bookingNameLabel: "Your name",
    bookingNamePlaceholder: "Full name",
    bookingPhoneLabel: "Phone number",
    bookingPhonePlaceholder: "Mobile number",
    bookingAddressLabel: "Area / full address",
    bookingAddressPlaceholder: "For example: Shivpur, Varanasi",
    bookingServicesLegend: "Which services do you need? (Choose more than one if needed)",
    bookingOtherService: "Other service",
    bookingDetailsLabel: "Additional details (optional)",
    bookingDetailsPlaceholder: "Tell us what you need or a convenient time",
    bookingSubmit: "Send request on WhatsApp",
    bookingServicesRequired: "Please choose at least one service.",
    bookingPhoneInvalid: "Please enter a valid phone number.",
    bookingWhatsAppReady: "Your details are ready in WhatsApp. Press Send in the chat to submit your request.",
    bookingWhatsAppLink: "Open WhatsApp chat",
    bookingMessageGreeting: "Hello, I would like to book a cleaning service.",
    bookingMessageName: "Name",
    bookingMessagePhone: "Phone",
    bookingMessageServices: "Selected services",
    bookingMessageAddress: "Address",
    bookingMessageDetails: "Additional details",
    contactMapTitle: "Our service area",
    contactMapLocation: "Shivpur, Varanasi and nearby areas",
    contactMapFrameTitle: "Map of Shivpur, Varanasi",
    contactMapDirections: "Open in Google Maps",
    bookingEyebrow: "Let’s get started",
    bookingTitleLead: "Your service booking",
    bookingTitleAccent: "is just one call away.",
    bookingDescription: "Call us or tell us what you need on WhatsApp.",
    whatsappContact: "Chat on WhatsApp",
    footerDescription: "Thoughtful service for your home and everyday needs.",
    footerLocation: "Shivpur, Varanasi and nearby",
    quickLinks: "Quick Links",
    contactHeading: "Get in touch",
    contactPrompt: "Call for bookings and information",
    whatsappMessage: "Message us on WhatsApp",
    copyright: "Apna Cleaning Service. All rights reserved.",
    madeWithCare: "Made with care in Varanasi",
    whatsappBooking: "Book on WhatsApp",
    callBooking: "Call now: +91 92190 59563",
  },
};

const demoReviews = {
  hi: [
    {
      quote: "सैंपल: AC सर्विस की बुकिंग आसान रही और टीम समय पर पहुंची।",
      name: "आरव शर्मा",
      service: "AC सर्विस",
    },
    {
      quote: "सैंपल: फ्रिज की सफाई अच्छी लगी और काम के बारे में साफ जानकारी मिली।",
      name: "नेहा सिंह",
      service: "फ्रिज सर्विस",
    },
    {
      quote: "सैंपल: कार की सीटों की सफाई के बाद इंटीरियर काफी बेहतर लगा।",
      name: "रोहन वर्मा",
      service: "कार इंटीरियर सफाई",
    },
  ],
  en: [
    {
      quote: "Sample: Booking the AC service was easy, and the team arrived on time.",
      name: "Aarav Sharma",
      service: "AC service",
    },
    {
      quote: "Sample: The refrigerator cleaning was good, and the service details were clear.",
      name: "Neha Singh",
      service: "Refrigerator service",
    },
    {
      quote: "Sample: The car interior felt much fresher after the seat cleaning.",
      name: "Rohan Verma",
      service: "Car interior cleaning",
    },
  ],
};

let activeReviewIndex = 0;

function renderReview() {
  const reviews = demoReviews[document.documentElement.lang === "en" ? "en" : "hi"];
  const review = reviews[activeReviewIndex];
  document.querySelector("#review-quote").textContent = review.quote;
  document.querySelector("#review-name").textContent = review.name;
  document.querySelector("#review-service").textContent = review.service;
  document.querySelector("#review-avatar").textContent = review.name.charAt(0);
  document.querySelector("#review-count").textContent =
    `${activeReviewIndex + 1} / ${reviews.length}`;
}

function moveReview(direction) {
  const totalReviews = demoReviews.hi.length;
  activeReviewIndex = (activeReviewIndex + direction + totalReviews) % totalReviews;
  renderReview();
}

function setLanguage(language) {
  const messages = translations[language];
  document.documentElement.lang = language === "hi" ? "hi" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const message = messages[element.dataset.i18n];
    if (message !== undefined) element.textContent = message;
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const message = messages[element.dataset.i18nContent];
    if (message !== undefined) element.setAttribute("content", message);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const message = messages[element.dataset.i18nAlt];
    if (message !== undefined) element.setAttribute("alt", message);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const message = messages[element.dataset.i18nAriaLabel];
    if (message !== undefined) element.setAttribute("aria-label", message);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const message = messages[element.dataset.i18nPlaceholder];
    if (message !== undefined) element.setAttribute("placeholder", message);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const message = messages[element.dataset.i18nTitle];
    if (message !== undefined) element.setAttribute("title", message);
  });

  document.title = messages.pageTitle;
  menuToggle.setAttribute(
    "aria-label",
    menuToggle.getAttribute("aria-expanded") === "true" ? messages.menuClose : messages.menuOpen,
  );
  videoSoundToggle.setAttribute(
    "aria-label",
    messages[heroVideo.muted ? "soundOn" : "soundOff"],
  );
  videoSoundToggle.querySelector("span").textContent = heroVideo.muted
    ? messages.soundOn
    : messages.soundOff;
  renderReview();

  languageOptions.forEach((option) => {
    const isActive = option.dataset.language === language;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("apna-cleaning-language", language);
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? translations[document.documentElement.lang].menuOpen : translations[document.documentElement.lang].menuClose,
  );
  navLinks.classList.toggle("is-open", !isExpanded);
  if (isExpanded) closeServicesMenu();
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[document.documentElement.lang].menuOpen);
    navLinks.classList.remove("is-open");
  }
});

function closeServicesMenu(restoreFocus = false) {
  serviceMenuToggle.setAttribute("aria-expanded", "false");
  serviceMenu.hidden = true;
  if (restoreFocus) serviceMenuToggle.focus();
}

serviceMenuToggle.addEventListener("click", () => {
  const isExpanded = serviceMenuToggle.getAttribute("aria-expanded") === "true";
  serviceMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
  serviceMenu.hidden = isExpanded;
});

serviceMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeServicesMenu();
});

function openServicePage(card) {
  window.location.href = `service.html?service=${encodeURIComponent(card.dataset.servicePage)}`;
}

serviceCards.forEach((card) => {
  card.setAttribute(
    "aria-label",
    card.querySelector("h3").textContent.trim(),
  );
  card.addEventListener("click", () => openServicePage(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openServicePage(card);
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-service-menu")) closeServicesMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !serviceMenu.hidden) closeServicesMenu(true);
});

document.addEventListener("click", (event) => {
  const contactLink = event.target.closest("[data-open-contact]");
  if (!contactLink) return;

  event.preventDefault();
  if (!contactDialog.open) contactDialog.showModal();
});

contactDialogClose.addEventListener("click", () => contactDialog.close());
contactDialog.addEventListener("click", (event) => {
  if (event.target === contactDialog) contactDialog.close();
});

bookingServiceOptions.forEach((option) => {
  option.addEventListener("change", () => {
    bookingServiceOptions[0].setCustomValidity("");
  });
});

bookingForm.addEventListener("input", () => {
  bookingPhone.setCustomValidity("");
  bookingFormStatus.hidden = true;
  bookingWhatsAppLink.hidden = true;
  bookingWhatsAppLink.removeAttribute("href");
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const messages = translations[document.documentElement.lang];
  const selectedServices = bookingServiceOptions
    .filter((option) => option.checked)
    .map((option) => option.closest("label").querySelector("[data-i18n]").textContent.trim());
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
  bookingFormStatus.hidden = false;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

videoSoundToggle.addEventListener("click", async () => {
  heroVideo.muted = !heroVideo.muted;
  videoSoundToggle.setAttribute("aria-pressed", String(!heroVideo.muted));
  videoSoundToggle.setAttribute(
    "aria-label",
    translations[document.documentElement.lang][heroVideo.muted ? "soundOn" : "soundOff"],
  );
  videoSoundToggle.querySelector("span").textContent =
    translations[document.documentElement.lang][heroVideo.muted ? "soundOn" : "soundOff"];

  if (!heroVideo.muted && heroVideo.paused) {
    await heroVideo.play();
  }
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => setLanguage(option.dataset.language));
});

const reviewCard = document.querySelector(".review-card");
document.querySelector("#review-previous").addEventListener("click", () => moveReview(-1));
document.querySelector("#review-next").addEventListener("click", () => moveReview(1));

servicePreviewVideos.forEach((video) => {
  video.addEventListener("error", () => {
    console.error("Could not load a service preview video:", video.error);
  });
});

const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const updateServicePreviewMotion = () => {
  servicePreviewVideos.forEach((video) => {
    video.autoplay = !reducedMotionPreference.matches;
    if (reducedMotionPreference.matches) {
      video.pause();
    } else {
      video.play().catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Could not play a service preview video:", error);
        }
      });
    }
  });
};

updateServicePreviewMotion();
reducedMotionPreference.addEventListener("change", updateServicePreviewMotion);

document.querySelector("#year").textContent = new Date().getFullYear();

const savedLanguage = localStorage.getItem("apna-cleaning-language");
setLanguage(savedLanguage === "en" ? "en" : "hi");

setInterval(() => {
  if (
    !reducedMotionPreference.matches &&
    !document.hidden &&
    !reviewCard.matches(":hover") &&
    !reviewCard.contains(document.activeElement)
  ) {
    moveReview(1);
  }
}, 7000);
