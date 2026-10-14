const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const heroVideo = document.querySelector(".hero-visual video");
const videoSoundToggle = document.querySelector(".video-sound-toggle");
const languageOptions = document.querySelectorAll(".language-option");
const servicePreviewVideos = document.querySelectorAll(".service-preview video");
const serviceMenuToggle = document.querySelector(".nav-service-toggle");
const serviceMenu = document.querySelector("#services-menu");
const serviceCards = document.querySelectorAll(".service-card[data-service-page]");

const translations = {
  hi: {
    pageTitle: "Apna Cleaning Service | सफाई और होम सर्विस, वाराणसी",
    metaDescription: "Apna Cleaning Service — AC, फ्रिज, वॉशिंग मशीन, ओवन, चिमनी, कार, पानी की टंकी और सोफे की सफाई। शिवपुर, वाराणसी में कॉल या WhatsApp करें।",
    navigation: "मुख्य नेविगेशन",
    languageSelector: "भाषा चुनें",
    homeLink: "Apna Cleaning Service — होम",
    menuOpen: "मेन्यू खोलें",
    menuClose: "मेन्यू बंद करें",
    navHome: "होम",
    navGallery: "गैलरी",
    navServices: "हमारी सेवाएं",
    servicesDropdownHeading: "अपनी सेवा चुनें",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क करें",
    heroTitleTop: "सफाई में भरोसा,",
    heroTitleBottom: "अपनापन हर सेवा में।",
    heroDescription: "घर, गाड़ी और घरेलू उपकरणों की सफाई के लिए भरोसेमंद सेवा — शिवपुर, वाराणसी में।",
    videoAc: "एयर कंडीशनर की सर्विस करते हुए",
    videoFridge: "फ्रिज की सफाई करते हुए",
    videoWasher: "वॉशिंग मशीन में कपड़े डालते हुए",
    videoOven: "ओवन की सफाई करते हुए",
    videoCar: "कार की सीटों को वैक्यूम से साफ करते हुए",
    videoTank: "पूल की सफाई करते हुए — पानी की सफाई की झलक",
    videoUpholstery: "सोफे की upholstery साफ करते हुए",
    videoSofa: "सोफे की सफाई करते हुए",
    bookWhatsapp: "WhatsApp पर बुक करें",
    callNow: "अभी कॉल करें",
    heroPointHome: "घर पर सेवा",
    heroPointBooking: "आसान बुकिंग",
    heroPointLocal: "स्थानीय सेवा",
    heroBadgeHomeLabel: "सेवा",
    heroBadgeHome: "घर पर, उपलब्धता अनुसार",
    heroBadgeAreaLabel: "क्षेत्र",
    heroBadgeArea: "शिवपुर, वाराणसी",
    heroBadgeBookingLabel: "बुकिंग",
    heroBadgeBooking: "WhatsApp पर पूछें",
    heroHighlightsLabel: "सेवा की ज़रूरी जानकारी",
    whyChooseEyebrow: "आपकी सुविधा, हमारी प्राथमिकता",
    whyChooseTitleLead: "सफाई की सेवा",
    whyChooseTitleAccent: "आसान बनाएं",
    whyChooseDescription: "अपनी ज़रूरत बताएं, जानकारी पाएं और उपलब्धता के अनुसार सेवा का समय तय करें।",
    whyChooseOneTitle: "सीधी और आसान बुकिंग",
    whyChooseOneDescription: "कॉल या WhatsApp पर अपनी ज़रूरत बताएं और उपलब्ध विकल्पों के बारे में पूछें।",
    whyChooseTwoTitle: "घर पर सेवा की सुविधा",
    whyChooseTwoDescription: "सेवा उपलब्ध होने पर अपने पते पर सफाई की सुविधा पाएं।",
    whyChooseThreeTitle: "पहले जानकारी, फिर बुकिंग",
    whyChooseThreeDescription: "काम और अनुमानित शुल्क के बारे में पहले पूछें; अंतिम शुल्क काम देखकर तय होगा।",
    whyChooseFourTitle: "वाराणसी की स्थानीय सेवा",
    whyChooseFourDescription: "शिवपुर और आसपास के इलाके में उपलब्धता हमसे पूछें।",
    galleryEyebrow: "हमारे काम की झलक",
    galleryTitleLead: "हमारी",
    galleryTitleAccent: "गैलरी",
    gallerySofaVideo: "सोफा और कुर्सी की सफाई का वीडियो",
    gallerySofaPhotoOne: "सोफे की सफाई",
    gallerySofaPhotoTwo: "कुर्सी और कपड़े के फर्नीचर की सफाई",
    galleryLabel: "सफाई सेवाओं की गैलरी",
    galleryWasherPhoto: "वॉशिंग मशीन की सफाई",
    galleryAcPhoto: "AC की सफाई",
    galleryFridgePhoto: "फ्रिज की सफाई",
    galleryChimneyPhoto: "चिमनी की सफाई",
    howItWorksEyebrow: "तीन आसान कदम",
    howItWorksTitleLead: "बुकिंग कैसे",
    howItWorksTitleAccent: "काम करती है?",
    howItWorksDescription: "अपनी सेवा चुनें, हमसे बात करें और उपलब्धता के अनुसार समय तय करें।",
    howItWorksOneTitle: "अपनी सेवा चुनें",
    howItWorksOneDescription: "AC, फ्रिज, कार के अंदरूनी हिस्से या सूची में दी गई दूसरी सेवा चुनें।",
    howItWorksTwoTitle: "कॉल या WhatsApp करें",
    howItWorksTwoDescription: "अपनी समस्या, जगह और सुविधाजनक समय बताएं।",
    howItWorksThreeTitle: "जानकारी लेकर समय तय करें",
    howItWorksThreeDescription: "उपलब्धता और अनुमानित शुल्क पूछें; सहमति के बाद समय पक्का करें।",
    faqEyebrow: "आपके सवाल",
    faqTitleLead: "अक्सर पूछे जाने वाले",
    faqTitleAccent: "सवाल",
    faqDescription: "किसी और जानकारी के लिए हमें कॉल या WhatsApp करें।",
    faqBookingQuestion: "मैं सेवा कैसे बुक करूं?",
    faqBookingAnswer: "अपनी ज़रूरत बताने के लिए हमें कॉल या WhatsApp करें। उपलब्धता और समय की पुष्टि के बाद बुकिंग तय होगी।",
    faqAreaQuestion: "आप किन इलाकों में सेवा देते हैं?",
    faqAreaAnswer: "हम शिवपुर, वाराणसी और आसपास के इलाकों में सेवा देते हैं। अपने पते के लिए पहले उपलब्धता पूछें।",
    faqServicesQuestion: "कौन-कौन सी सेवाएं उपलब्ध हैं?",
    faqServicesAnswer: "AC, फ्रिज, वॉशिंग मशीन, ओवन और चिमनी, कार के अंदरूनी हिस्से, पानी की टंकी, कुर्सी, सोफा और कपड़े के फर्नीचर की सफाई उपलब्ध है। अपने इलाके के लिए उपलब्धता पूछ लें।",
    faqPriceQuestion: "सेवा का शुल्क कितना होगा?",
    faqPriceAnswer: "शुल्क सेवा और काम की स्थिति के अनुसार बदल सकता है। बुकिंग से पहले अनुमान पूछें और काम शुरू होने से पहले अंतिम शुल्क तय करें।",
    faqTimingQuestion: "विज़िट का समय कैसे तय होगा?",
    faqTimingAnswer: "अपना पसंदीदा समय बताएं। टीम की उपलब्धता की पुष्टि होने के बाद ही समय तय होगा।",
    videoDescription: "होम क्लीनिंग करते technician का वीडियो",
    soundOn: "आवाज़ चालू करें",
    soundOff: "आवाज़ बंद करें",
    videoNoteTitle: "साफ घर, सुकून भरा एहसास",
    videoNoteSubtitle: "शिवपुर, वाराणसी और आसपास",
    floatingTitle: "आपके घर तक",
    heroBottomLeft: "आपका घर, हमारी ज़िम्मेदारी",
    servicesEyebrow: "हमारी सेवाएं",
    servicesTitleLead: "आपकी ज़रूरत की",
    servicesTitleAccent: "हर ज़रूरत के लिए",
    servicesDescription: "घर, गाड़ी और घरेलू उपकरणों की सफाई के विकल्प। अपनी ज़रूरत के अनुसार सेवा चुनें और हमसे बात करें।",
    serviceHighlightsEyebrow: "सेवा की जानकारी",
    serviceHighlightsTitle: "लोकप्रिय सफाई सेवाएं",
    highlightPrevious: "पिछली सेवा",
    highlightNext: "अगली सेवा",
    serviceAcTitle: "AC की सफाई",
    serviceAcDescription: "AC की सफाई और उपलब्ध विकल्पों की जानकारी लें।",
    serviceFridgeTitle: "फ्रिज की सफाई",
    serviceFridgeDescription: "फ्रिज की अंदरूनी सफाई के विकल्पों के बारे में पूछें।",
    serviceWasherTitle: "वॉशिंग मशीन की सफाई",
    serviceWasherDescription: "वॉशिंग मशीन की सफाई और उपलब्धता की जानकारी लें।",
    serviceKitchenTitle: "ओवन और चिमनी की सफाई",
    serviceKitchenDescription: "रसोई के ओवन और चिमनी की सफाई के विकल्प जानें।",
    serviceDeepCleaningTitle: "घर की गहरी सफाई",
    serviceDeepCleaningDescription: "कमरों, फर्श, रसोई और बाथरूम की गहरी सफाई के विकल्प जानें।",
    serviceApartmentTitle: "अपार्टमेंट की सफाई",
    serviceApartmentDescription: "अपार्टमेंट के कमरों, रसोई और बाथरूम की सफाई के विकल्प पूछें।",
    serviceFloorTitle: "फर्श की सफाई",
    serviceFloorDescription: "टाइल, मार्बल और लकड़ी के फर्श की सफाई के विकल्प जानें।",
    serviceGlassTitle: "कांच और खिड़की की सफाई",
    serviceGlassDescription: "खिड़कियों, दरवाज़ों और कांच से धूल और दाग हटाने के विकल्प पूछें।",
    serviceMoveTitle: "घर बदलने से पहले या बाद की सफाई",
    serviceMoveDescription: "घर खाली करने या नए घर में जाने के समय पूरी सफाई के विकल्प पूछें।",
    serviceCarTitle: "कार के अंदरूनी हिस्से की सफाई",
    serviceCarDescription: "सीटों और कार के अंदरूनी हिस्सों की सफाई के विकल्प पूछें।",
    serviceTankTitle: "पानी की टंकी की सफाई",
    serviceTankDescription: "पानी की टंकी की सफाई की उपलब्धता और समय के बारे में पूछें।",
    serviceUpholsteryTitle: "कुर्सी और कपड़े के फर्नीचर की सफाई",
    serviceUpholsteryDescription: "कुर्सियों और कपड़े के फर्नीचर की सफाई के विकल्प जानें।",
    serviceSofaTitle: "सोफे की सफाई",
    serviceSofaDescription: "सोफे के कपड़े और स्थिति के अनुसार सफाई के विकल्प जानें।",
    serviceOtherTitle: "कोई दूसरी सेवा चाहिए?",
    serviceOtherDescription: "अपनी ज़रूरत बताएं — हम उपलब्धता और जानकारी साझा करेंगे।",
    bookingAsk: "जानकारी देखें",
    talkToUs: "हमसे बात करें",
    howItWorksNav: "बुकिंग कैसे करें",
    faqNav: "अक्सर पूछे जाने वाले सवाल",
    aboutImageAlt: "साफ-सुथरा और आरामदायक घर",
    stampHome: "10 साल",
    stampCare: "का अनुभव",
    aboutEyebrow: "Apna Cleaning Service · शिवपुर, वाराणसी",
    aboutTitleLead: "कराना रावत के साथ",
    aboutTitleAccent: "सफाई पर भरोसा।",
    aboutDescription: "कराना रावत को सफाई और घरेलू उपकरणों की सेवा के क्षेत्र में 10 वर्षों का अनुभव है। वे ग्राहकों को उनकी ज़रूरत के अनुसार सेवा समझने, उपलब्धता जानने और बुकिंग से पहले ज़रूरी जानकारी पाने में मदद करते हैं। Apna Cleaning Service के ज़रिए शिवपुर, वाराणसी और आसपास के घरों तक सुविधाजनक स्थानीय सेवा पहुँचाने की कोशिश है।",
    benefitOneTitle: "10 साल का व्यावहारिक अनुभव",
    benefitOneDescription: "सफाई और घरेलू उपकरणों की सेवा की ज़रूरतों की समझ।",
    benefitTwoTitle: "पहले जानकारी, फिर बुकिंग",
    benefitTwoDescription: "सेवा, उपलब्धता और अनुमानित शुल्क के बारे में पूछें।",
    benefitThreeTitle: "लोकल सेवा",
    benefitThreeDescription: "शिवपुर, वाराणसी और आसपास के लिए।",
    aboutContact: "कराना रावत से बात करें",
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
    quickLinks: "ज़रूरी लिंक",
    contactHeading: "हमसे संपर्क करें",
    contactPrompt: "बुकिंग और जानकारी के लिए कॉल करें",
    whatsappMessage: "WhatsApp पर मैसेज करें",
    copyright: "Apna Cleaning Service. All rights reserved.",
    madeWithCare: "वाराणसी में स्नेह से निर्मित",
    footerPrivacy: "गोपनीयता नीति",
    footerTerms: "नियम और शर्तें",
    whatsappBooking: "WhatsApp पर बुकिंग करें",
    callBooking: "अभी कॉल करें: +91 92190 59563",
  },
  en: {
    pageTitle: "Apna Cleaning Service | Cleaning & Home Services, Varanasi",
    metaDescription: "AC, refrigerator, washing machine, oven, chimney, car interior, water tank, upholstery, and sofa cleaning in Shivpur, Varanasi. Contact Apna Cleaning Service.",
    navigation: "Main navigation",
    languageSelector: "Choose language",
    homeLink: "Apna Cleaning Service — Home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navHome: "Home",
    navGallery: "Gallery",
    navServices: "Our services",
    servicesDropdownHeading: "Choose a service",
    navAbout: "About Us",
    navContact: "Contact",
    heroTitleTop: "Care for your home,",
    heroTitleBottom: "cleaning you can trust.",
    heroDescription: "Reliable, convenient service for your home, car and appliances — right at your doorstep.",
    videoAc: "Technician servicing an air conditioner",
    videoFridge: "Person cleaning a refrigerator",
    videoWasher: "Person loading a washing machine",
    videoOven: "Person cleaning an oven",
    videoCar: "Vacuuming car seats",
    videoTank: "Pool cleaning footage — a water-cleaning preview",
    videoUpholstery: "People cleaning upholstered furniture",
    videoSofa: "Cleaning a sofa",
    bookWhatsapp: "Book on WhatsApp",
    callNow: "Call Now",
    heroPointHome: "At-home service",
    heroPointBooking: "Easy booking",
    heroPointLocal: "Local team",
    heroBadgeHomeLabel: "SERVICE",
    heroBadgeHome: "At home, subject to availability",
    heroBadgeAreaLabel: "AREA",
    heroBadgeArea: "Shivpur, Varanasi",
    heroBadgeBookingLabel: "BOOKING",
    heroBadgeBooking: "Ask on WhatsApp",
    heroHighlightsLabel: "Key service information",
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
    galleryEyebrow: "Work in action",
    galleryTitleLead: "Our",
    galleryTitleAccent: "gallery",
    gallerySofaVideo: "Sofa and chair cleaning video",
    gallerySofaPhotoOne: "Sofa cleaning",
    gallerySofaPhotoTwo: "Chair and upholstery cleaning",
    galleryLabel: "Cleaning service gallery",
    galleryWasherPhoto: "Washing machine cleaning",
    galleryAcPhoto: "AC cleaning",
    galleryFridgePhoto: "Refrigerator cleaning",
    galleryChimneyPhoto: "Chimney cleaning",
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
    faqServicesAnswer: "We offer AC, refrigerator, washing machine, oven and chimney, car interior, water tank, chair and upholstery, and sofa cleaning. Please ask us to confirm availability in your area.",
    faqPriceQuestion: "How much will the service cost?",
    faqPriceAnswer: "Charges can vary by service and condition. Ask for an estimate before booking and confirm the final charge before work begins.",
    faqTimingQuestion: "How do I schedule a visit?",
    faqTimingAnswer: "Share your preferred time. A visit is scheduled only after the team's availability is confirmed.",
    videoDescription: "A technician demonstrating home cleaning",
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
    serviceHighlightsEyebrow: "Cleaning information",
    serviceHighlightsTitle: "Our cleaning services",
    highlightPrevious: "Previous service",
    highlightNext: "Next service",
    serviceAcTitle: "AC Cleaning",
    serviceAcDescription: "Ask about AC cleaning options to help keep your home cool and comfortable.",
    serviceFridgeTitle: "Refrigerator Cleaning",
    serviceFridgeDescription: "Ask about interior refrigerator cleaning and care.",
    serviceWasherTitle: "Washing Machine Cleaning",
    serviceWasherDescription: "Ask about washing machine cleaning and availability.",
    serviceKitchenTitle: "Oven & Chimney Cleaning",
    serviceKitchenDescription: "Ask about cleaning options for your kitchen oven and chimney.",
    serviceDeepCleaningTitle: "House Deep Cleaning",
    serviceDeepCleaningDescription: "Ask about room-by-room deep cleaning for kitchens, bathrooms, and living spaces.",
    serviceApartmentTitle: "Apartment Cleaning",
    serviceApartmentDescription: "Ask about apartment-wide cleaning for rooms, kitchens, and bathrooms.",
    serviceFloorTitle: "Floor Cleaning",
    serviceFloorDescription: "Ask about tile, marble, and hardwood floor cleaning and finishing options.",
    serviceGlassTitle: "Glass & Window Cleaning",
    serviceGlassDescription: "Ask about window, glass, and frame cleaning for a brighter finish.",
    serviceMoveTitle: "Move In / Move Out Cleaning",
    serviceMoveDescription: "Ask about full reset and final cleaning for moving in or moving out.",
    serviceCarTitle: "Car Interior Cleaning",
    serviceCarDescription: "Ask about cleaning options for seats and interior surfaces.",
    serviceTankTitle: "Water Tank Cleaning",
    serviceTankDescription: "Schedule your water tank cleaning in advance.",
    serviceUpholsteryTitle: "Chair & Upholstery Cleaning",
    serviceUpholsteryDescription: "Ask about cleaning options for chairs and fabric surfaces.",
    serviceSofaTitle: "Sofa Cleaning",
    serviceSofaDescription: "Ask about cleaning options based on your sofa's fabric and condition.",
    serviceOtherTitle: "Need another service?",
    serviceOtherDescription: "Tell us what you need — we’ll share availability and details.",
    bookingAsk: "View details",
    talkToUs: "Talk to us",
    howItWorksNav: "How it works",
    faqNav: "FAQs",
    aboutImageAlt: "A clean and comfortable home",
    stampHome: "10 years",
    stampCare: "of experience",
    aboutEyebrow: "Apna Cleaning Service · Shivpur, Varanasi",
    aboutTitleLead: "Karana Ravat",
    aboutTitleAccent: "service you can trust.",
    aboutDescription: "Karana Ravat brings 10 years of experience in cleaning and home appliance services. He helps customers understand the service that fits their needs, check availability, and get the essential details before booking. Through Apna Cleaning Service, he aims to make convenient local service available to homes in Shivpur, Varanasi, and nearby areas.",
    benefitOneTitle: "10 years of hands-on experience",
    benefitOneDescription: "A practical understanding of cleaning and home appliance service needs.",
    benefitTwoTitle: "Clear information before booking",
    benefitTwoDescription: "Ask about the service, availability, and estimated charges.",
    benefitThreeTitle: "Local service",
    benefitThreeDescription: "Serving Shivpur, Varanasi and nearby areas.",
    aboutContact: "Talk to Karana Ravat",
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
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms and Conditions",
    whatsappBooking: "Book on WhatsApp",
    callBooking: "Call now: +91 92190 59563",
  },
};

const serviceHighlights = {
  hi: [
    {
      description: "कार इंटीरियर क्लीनिंग में सीटों और अंदरूनी हिस्सों की सफाई के विकल्प पूछें।",
      name: "कार इंटीरियर क्लीनिंग",
    },
    {
      description: "AC क्लीनिंग के विकल्प और उपलब्धता बुकिंग से पहले कन्फर्म करें।",
      name: "AC क्लीनिंग",
    },
    {
      description: "फ्रिज की अंदरूनी सफाई और देखभाल के विकल्पों के बारे में जानें।",
      name: "फ्रिज क्लीनिंग",
    },
    {
      description: "वॉशिंग मशीन की सफाई और उपलब्धता की जानकारी लें।",
      name: "वॉशिंग मशीन क्लीनिंग",
    },
    {
      description: "सोफा क्लीनिंग के विकल्प और अनुमानित शुल्क के बारे में पूछें।",
      name: "सोफा क्लीनिंग",
    },
    {
      description: "घर की deep cleaning के काम और उपलब्धता की जानकारी लें।",
      name: "हाउस डीप क्लीनिंग",
    },
  ],
  en: [
    {
      description: "Ask about cleaning the seats and interior surfaces with car interior cleaning.",
      name: "Car Interior Cleaning",
    },
    {
      description: "Check AC cleaning options and availability before booking.",
      name: "AC Cleaning",
    },
    {
      description: "Ask about refrigerator interior cleaning and care options.",
      name: "Refrigerator Cleaning",
    },
    {
      description: "Get information about washing machine cleaning and availability.",
      name: "Washing Machine Cleaning",
    },
    {
      description: "Ask about sofa cleaning options and an estimated price.",
      name: "Sofa Cleaning",
    },
    {
      description: "Get information about the scope and availability of deep house cleaning.",
      name: "House Deep Cleaning",
    },
  ],
};

let activeHighlightIndex = 0;
let highlightIntervalId = null;
const HIGHLIGHT_INTERVAL_MS = 18000;
const highlightDescription = document.querySelector("#service-highlight-description");
const highlightDescriptionCopy = document.querySelector("#service-highlight-copy");

function getCurrentHighlights() {
  return serviceHighlights[document.documentElement.lang === "en" ? "en" : "hi"];
}

function renderHighlight() {
  const highlights = getCurrentHighlights();
  const highlight = highlights[activeHighlightIndex];
  highlightDescription.textContent = highlight.description;
  highlightDescriptionCopy.textContent = highlight.description;
  document.querySelector("#service-highlight-name").textContent = highlight.name;
  document.querySelector("#highlight-count").textContent =
    `${activeHighlightIndex + 1} / ${highlights.length}`;
}

function moveHighlight(direction) {
  const highlights = getCurrentHighlights();
  activeHighlightIndex = (activeHighlightIndex + direction + highlights.length) % highlights.length;
  renderHighlight();
}

function startHighlightRotation() {
  if (highlightIntervalId || reducedMotionPreference.matches || document.hidden) return;

  highlightIntervalId = window.setInterval(() => {
    if (!serviceHighlightCard.contains(document.activeElement)) {
      moveHighlight(1);
    }
  }, HIGHLIGHT_INTERVAL_MS);
}

function stopHighlightRotation() {
  if (highlightIntervalId) {
    window.clearInterval(highlightIntervalId);
    highlightIntervalId = null;
  }
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
  renderHighlight();
  startHighlightRotation();

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

const serviceHighlightCard = document.querySelector(".service-highlight-card");
document.querySelector("#highlight-previous").addEventListener("click", () => {
  moveHighlight(-1);
  stopHighlightRotation();
  startHighlightRotation();
});
document.querySelector("#highlight-next").addEventListener("click", () => {
  moveHighlight(1);
  stopHighlightRotation();
  startHighlightRotation();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopHighlightRotation();
  } else {
    startHighlightRotation();
  }
});

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
reducedMotionPreference.addEventListener("change", () => {
  if (reducedMotionPreference.matches) {
    stopHighlightRotation();
  } else {
    startHighlightRotation();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

const galleryCards = document.querySelectorAll(".gallery-card");
const galleryModal = document.querySelector("#gallery-modal");
const galleryModalImage = document.querySelector("#gallery-modal-image");
const galleryModalVideo = document.querySelector("#gallery-modal-video");
const galleryModalTitle = document.querySelector("#gallery-modal-title");
const galleryCloseButton = document.querySelector(".gallery-modal-close");

function openGalleryMedia(mediaSrc, title, mediaType = "image", poster = "") {
  galleryModalVideo.pause();
  galleryModalVideo.hidden = mediaType !== "video";
  galleryModalImage.hidden = mediaType === "video";
  galleryModalTitle.textContent = title;

  if (mediaType === "video") {
    galleryModalVideo.src = mediaSrc;
    galleryModalVideo.poster = poster;
    galleryModalVideo.play().catch((error) => {
      if (error.name !== "AbortError") {
        console.error("Could not play the gallery video:", error);
      }
    });
  } else {
    galleryModalImage.src = mediaSrc;
    galleryModalImage.alt = title;
    galleryModalVideo.removeAttribute("src");
    galleryModalVideo.removeAttribute("poster");
    galleryModalVideo.load();
  }

  galleryModal.classList.add("is-open");
  galleryModal.setAttribute("aria-hidden", "false");
}

function closeGalleryImage() {
  galleryModal.classList.remove("is-open");
  galleryModal.setAttribute("aria-hidden", "true");
  galleryModalVideo.pause();
  galleryModalVideo.removeAttribute("src");
  galleryModalVideo.removeAttribute("poster");
  galleryModalVideo.load();
}

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const language = document.documentElement.lang === "en" ? "En" : "Hi";
    const title = card.dataset[`title${language}`] || card.dataset.title;
    const mediaType = card.dataset.mediaType || "image";
    const mediaSrc = mediaType === "video" ? card.dataset.video : card.dataset.image;
    openGalleryMedia(mediaSrc, title, mediaType, card.dataset.poster);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const language = document.documentElement.lang === "en" ? "En" : "Hi";
      const title = card.dataset[`title${language}`] || card.dataset.title;
      const mediaType = card.dataset.mediaType || "image";
      const mediaSrc = mediaType === "video" ? card.dataset.video : card.dataset.image;
      openGalleryMedia(mediaSrc, title, mediaType, card.dataset.poster);
    }
  });
});

galleryCloseButton.addEventListener("click", closeGalleryImage);
galleryModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-gallery='true']") || event.target === galleryModal) {
    closeGalleryImage();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && galleryModal.classList.contains("is-open")) {
    closeGalleryImage();
  }
});

const savedLanguage = localStorage.getItem("apna-cleaning-language");
setLanguage(savedLanguage === "en" ? "en" : "hi");
startHighlightRotation();
