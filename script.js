const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageOptions = document.querySelectorAll(".language-option");
const servicePreviewVideos = document.querySelectorAll(".service-preview video");
const serviceMenuToggle = document.querySelector(".nav-service-toggle");
const serviceMenu = document.querySelector("#services-menu");
const serviceCards = document.querySelectorAll(".service-card[data-service-page]");

const translations = {
  hi: {
    pageTitle: "Apna Cleaning Service | वाराणसी की प्रीमियम होम डीप क्लीनिंग सेवा",
    metaDescription: "Apna Cleaning Service — पूरे घर की डीप क्लीनिंग, सोफा शैम्पू, AC, फ्रिज, चिमनी, कार इंटीरियर और वाटर टैंक क्लीनिंग। शिवपुर, वाराणसी में कॉल या WhatsApp करें।",
    navigation: "मुख्य नेविगेशन",
    languageSelector: "भाषा चुनें",
    homeLink: "Apna Cleaning Service — होम",
    menuOpen: "मेन्यू खोलें",
    menuClose: "मेन्यू बंद करें",
    navHome: "होम",
    navServices: "हमारी सेवाएं",
    navBeforeAfter: "बिफोर-आफ्टर",
    navCalculator: "प्राइस कैलकुलेटर",
    navVideos: "वीडियो",
    navReviews: "रिव्यूज",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क",
    topBarAlert: "वाराणसी में आज ही घर पर सर्विस उपलब्ध!",
    topBarSub: "शिवपुर, सिगरा, लंका, महमूरगंज और आसपास।",
    servicesDropdownHeading: "अपनी सेवा चुनें",
    heroStatusBadge: "वाराणसी में आज ही उपलब्ध · 30 मिनट में तुरंत जवाब",
    heroTitle: "सफाई की सही सेवा,",
    heroTitleAccent: "आपके घर तक।",
    heroDescription: "पूरे घर की डीप क्लीनिंग, सोफा फोम शैम्पू, एसी सर्विस और वाटर टैंक की प्रोफेशनल सफाई। 100% इको-फ्रेंडली केमिकल्स और भरोसेमंद टीम।",
    heroTagOne: "✓ 500+ संतुष्ट परिवार",
    heroTagTwo: "✓ 10+ साल का अनुभव",
    heroTagThree: "✓ 100% सेफ केमिकल्स",
    heroBadgeRating: "4.9 / 5 रेटिंग",
    heroBadgeClients: "500+ संतुष्ट वाराणसी परिवार",
    heroBadgeSpeed: "सुपरफास्ट विज़िट",
    heroBadgeLocal: "शिवपुर व पूरे वाराणसी में",
    heroLocationNote: "शिवपुर, सिगरा, लंका, महमूरगंज, कैंट और पूरे वाराणसी में",
    heroCalcBtn: "सर्विस चुनें & रेट जानें",
    statHomes: "संतुष्ट घर साफ किए",
    statExp: "वर्षों का अनुभव",
    statEco: "सुरक्षित व इको केमिकल्स",
    statDoorstep: "घर पर तेज़ सर्विस",
    beforeAfterEyebrow: "जादुई बदलाव",
    beforeAfterTitleLead: "सफाई से पहले",
    beforeAfterTitleAccent: "और बाद का फर्क",
    beforeAfterDescription: "नीचे दिए गए स्लाइडर को बीच से पकड़कर बाएँ-दाएँ खिसकाएं और देखें कि कैसे हमारी फोम शैम्पू और डीप क्लीनिंग तकनीक से पुराना और दागदार सोफा बिल्कुल नया चमक उठता है।",
    badgeBefore: "पहले (Before - दागदार)",
    badgeAfter: "बाद में (After - 100% साफ)",
    comparisonInstruction: "स्लाइडर को पकड़कर खिसकाएं (Drag to Compare)",
    calcEyebrow: "साफ और ईमानदार सेवा",
    calcTitleLead: "अपनी सर्विस चुनें &",
    calcTitleAccent: "मुफ्त में रेट जानें",
    calcDescription: "अपनी ज़रूरत के अनुसार सर्विस चुनें और 1-क्लिक में WhatsApp पर सबसे सही व किफायती रेट जानें:",
    calcTabHome: "हाउस डीप क्लीनिंग",
    calcTabSofa: "सोफा शैम्पू",
    calcTabAc: "AC जेट सर्विस",
    calcTabTank: "वाटर टैंक",
    calcChooseHomeSize: "घर का आकार चुनें:",
    calcEstPriceLabel: "सफाई का सही रेट (Best Rates)",
    calcDisplayPrice: "उचित & किफायती दर",
    calcDetailOne: "काम देखकर सबसे सही और किफायती रेट",
    calcDetailTwo: "आधुनिक मशीनों से 100% डीप क्लीनिंग",
    calcDetailThree: "कोई छिपा हुआ अतिरिक्त खर्च नहीं",
    calcBookWhatsapp: "WhatsApp पर रेट पूछें",
    workVideosEyebrow: "हमारे असली काम के वीडियो",
    workVideosTitleLead: "सफाई का असली काम,",
    workVideosTitleAccent: "लाइव वीडियो में",
    workVideosDescription: "हमारी टीम के काम की लाइव झलक। वीडियो पर क्लिक करके फुल-स्क्रीन में चलाएं।",
    workVideosLabel: "सफाई के वीडियो",
    videoOneTitle: "वाटर टैंक हाई-प्रेशर जेट क्लीनिंग",
    videoTwoTitle: "सोफा फोम शैम्पू & डीप एक्सट्रैक्शन",
    videoThreeTitle: "किचन चिमनी डीग्रीजिंग & स्टीम वॉश",
    videoFourTitle: "फ्लोर मशीन स्क्रबिंग & टाइल शाइन",
    videoFiveTitle: "कार इंटीरियर डीप वैक्यूम & सैनिटाइजेशन",
    videoSixTitle: "बाथरूम स्केल & टाइल डीप क्लीनिंग",
    watchNow: "देखें ↗",
    servicesEyebrow: "विश्वसनीय सेवाएं",
    servicesTitleLead: "आपकी हर ज़रूरत के लिए",
    servicesTitleAccent: "विशेषज्ञ सेवाएं",
    servicesDescription: "घर, सोफा, कार और सभी तरह के उपकरणों की आधुनिक मशीनों द्वारा सफाई।",
    badgePopular: "सर्वाधिक लोकप्रिय",
    serviceDeepCleaningTitle: "हाउस डिप क्लीनिंग",
    serviceDeepCleaningDescription: "कमरों, फर्श, किचन और बाथरूम की गहरी सफाई के लिए पूरी होम केयर सर्विस।",
    serviceSofaTitle: "सोफा क्लीनिंग",
    serviceSofaDescription: "सोफे के फैब्रिक के अनुसार जर्म-फ्री फोम वॉश और जिद्दी दाग हटाने की सेवा।",
    serviceTankTitle: "वॉटर टैंक क्लीनिंग",
    serviceTankDescription: "हाई प्रेशर जेट मशीन और यूवी ट्रीटमेंट द्वारा पानी की टंकी की संपूर्ण सफाई।",
    serviceAcTitle: "AC क्लीनिंग & सर्विस",
    serviceAcDescription: "AC कॉइल और फिल्टर की जेट पंप सफाई ताकि बिजली बचे और कमरे में मिले बर्फ जैसी ठंडक।",
    serviceKitchenTitle: "ओवन और चिमनी क्लीनिंग",
    serviceKitchenDescription: "रसोई की चिमनी और ओवन से चिकनाई, तेल और कार्बन को पूरी तरह हटाना।",
    serviceFloorTitle: "फ्लोर क्लीनिंग & पॉलिशिंग",
    serviceFloorDescription: "मार्बल, ग्रेनाइट और टाइल्स की डीप मशीन स्क्रबिंग से लौटाएं नई जैसी चमक।",
    serviceCarTitle: "कार इंटीरियर क्लीनिंग",
    serviceCarDescription: "कार की सीटों, रूफ, डैशबोर्ड और मैट्स की डीप वैक्यूम और ड्राई-क्लीनिंग।",
    serviceFridgeTitle: "फ्रिज डीप क्लीनिंग",
    serviceFridgeDescription: "फ्रिज की अंदरूनी ट्रे, फंगस और बदबू हटाने के लिए 100% हाइजीनिक क्लीनिंग।",
    serviceOtherTitle: "क्या आपको कोई अन्य सेवा चाहिए?",
    serviceOtherDescription: "अपनी ज़रूरत हमें बताएं — हम तुरंत उपलब्धता और सबसे सही रेट बताएंगे।",
    talkToUs: "सीधे WhatsApp पर बात करें",
    bookingAsk: "विस्तार देखें",
    quickBook: "बुक करें",
    whyChooseEyebrow: "हमारा वादा",
    whyChooseTitleLead: "वाराणसी के परिवार",
    whyChooseTitleAccent: "हम पर भरोसा क्यों करते हैं?",
    whyChooseDescription: "सफाई सिर्फ काम नहीं, आपके परिवार के स्वास्थ्य और सुकून की ज़िम्मेदारी है:",
    whyChooseOneTitle: "100% इको-सेफ केमिकल्स",
    whyChooseOneDescription: "हम सिर्फ नॉन-टॉक्सिक और पर्यावरण-अनुकूल केमिकल्स का उपयोग करते हैं, जो बच्चों और पालतू जानवरों के लिए पूरी तरह सुरक्षित हैं।",
    whyChooseTwoTitle: "वेरिफाइड प्रोफेशनल्स",
    whyChooseTwoDescription: "हमारी टीम के सभी सदस्य पुलिस/बैकग्राउंड वेरिफाइड, ट्रेंड और वर्दी में सुसज्जित हैं। आपके घर की सुरक्षा हमारी पहली प्राथमिकता है।",
    whyChooseThreeTitle: "समय पर घर आकर सर्विस",
    whyChooseThreeDescription: "समय की पाबंदी हमारा उसूल है। तय किए गए समय पर टीम आपके दरवाजे पर उपलब्ध होगी।",
    whyChooseFourTitle: "100% संतुष्टि गारंटी",
    whyChooseFourDescription: "अगर आप काम से संतुष्ट नहीं होते हैं, तो बिना किसी अतिरिक्त शुल्क के हम दोबारा सफाई करके देंगे।",
    reviewsEyebrow: "संतुष्ट ग्राहक",
    reviewsTitleLead: "वाराणसी के लोगों की",
    reviewsTitleAccent: "सच्ची राय",
    reviewsDescription: "हमारे 500+ संतुष्ट ग्राहकों में से कुछ परिवारों के अनुभव पढ़ें:",
    reviewOneQuote: "सोफा क्लीनिंग कराई थी। उस पर बच्चों ने चाय और स्केच पेन के जिद्दी दाग लगा दिए थे। Apna Cleaning की टीम ने मशीन से ऐसा साफ किया कि सोफा बिल्कुल शोरूम जैसा नया दिखने लगा!",
    reviewTwoQuote: "दिवाली से पहले 3 BHK पूरे मकान की डीप क्लीनिंग कराई। किचन की टाइल्स, चिमनी और बाथरूम के पानी के दाग पूरी तरह साफ कर दिए। बहुत ही विनम्र और पेशेवर टीम है।",
    reviewThreeQuote: "वाटर टैंक से बहुत गंदा पानी आ रहा था। इनकी हाई-प्रेशर जेट मशीन ने 1000 लीटर की टंकी का सारा काई और कीचड़ 1 घंटे में साफ कर दिया। बहुत ही किफायती और बेहतरीन सर्विस।",
    reviewVerified: "वेरिफाइड ग्राहक · वाराणसी",
    howItWorksEyebrow: "तीन आसान कदम",
    howItWorksTitleLead: "बुकिंग कैसे",
    howItWorksTitleAccent: "काम करती है?",
    howItWorksDescription: "कॉल या WhatsApp के ज़रिए 1 मिनट में अपनी सर्विस बुक करें:",
    howItWorksOneTitle: "अपनी सेवा चुनें",
    howItWorksOneDescription: "घर, सोफा, एसी या वाटर टैंक — अपनी ज़रूरत के अनुसार सेवा और समय चुनें।",
    howItWorksTwoTitle: "कॉल या WhatsApp करें",
    howItWorksTwoDescription: "सीधे हमारे नंबर पर कॉल करें या WhatsApp पर अपनी लोकेशन भेजें।",
    howItWorksThreeTitle: "तय समय पर घर आकर सफाई",
    howItWorksThreeDescription: "हमारी टीम आधुनिक मशीनों के साथ आपके घर पहुंचेगी और पूरी संतुष्टि के साथ काम पूरा करेगी।",
    faqEyebrow: "सीधे और आसान जवाब",
    faqTitleLead: "अक्सर पूछे जाने वाले",
    faqTitleAccent: "सवाल",
    faqDescription: "यदि आपके मन में कोई और सवाल है, तो हम एक कॉल की दूरी पर हैं:",
    faqBookingQuestion: "मैं सेवा कैसे बुक कर सकता हूँ?",
    faqBookingAnswer: "आप सीधे हमारे नंबर +91 92190 59563 पर कॉल कर सकते हैं या WhatsApp पर अपनी ज़रूरत और पता लिख सकते हैं। हमारी टीम तुरंत समय कन्फर्म कर लेगी।",
    faqAreaQuestion: "आप वाराणसी के किन इलाकों में सेवा देते हैं?",
    faqAreaAnswer: "हम शिवपुर, सिगरा, लंका, महमूरगंज, कैंट, अर्दली बाज़ार, पहड़िया, सारनाथ और संपूर्ण वाराणसी शहर में होम सर्विस प्रदान करते हैं।",
    faqPriceQuestion: "सफाई का रेट (खर्च) कैसे तय होता है?",
    faqPriceAnswer: "हम काम शुरू होने से पहले साफ-साफ रेट बता देते हैं। आप वेबसाइट पर अपनी पसंद चुनकर WhatsApp पर तुरंत रेट जान सकते हैं। कोई भी छिपा हुआ खर्च नहीं होता।",
    faqSafetyQuestion: "क्या आपके केमिकल्स बच्चों और पेट्स के लिए सेफ हैं?",
    faqSafetyAnswer: "जी हाँ, हम सिर्फ इको-फ्रेंडली, नॉन-टॉक्सिक और जर्म-फ्री प्रमाणित क्लीनिंग सोल्यूशंस का इस्तेमाल करते हैं जो परिवार के लिए 100% सुरक्षित हैं।",
    faqEquipQuestion: "क्या मुझे सफाई के लिए कोई सामान देना होगा?",
    faqEquipAnswer: "बिल्कुल नहीं! हमारी टीम अपनी आधुनिक मशीनें, वैक्यूम पंप, स्क्रबर्स और केमिकल्स साथ लेकर आती है। आपको बस पानी और बिजली उपलब्ध करानी होती है।",
    stampHome: "10 साल",
    stampCare: "का अनुभव",
    aboutEyebrow: "Apna Cleaning Service · शिवपुर, वाराणसी",
    aboutTitleLead: "करन चौधरी के साथ",
    aboutTitleAccent: "सफाई पर पक्का भरोसा।",
    aboutDescription: "करन चौधरी को घर की सफाई और मशीनों की देखभाल का 10 वर्षों का पक्का तजुर्बा है। इसी अनुभव के साथ वे वाराणसी के परिवारों को साफ-सुथरी, भरोसेमंद और बेहतरीन होम सर्विस दे रहे हैं।",
    benefitOneTitle: "10 साल का पक्का तजुर्बा",
    benefitOneDescription: "सफाई और होम अप्लायंस की हर ज़रूरत की गहरी समझ।",
    benefitTwoTitle: "काम से पहले साफ बात, फिर बुकिंग",
    benefitTwoDescription: "बुकिंग से पहले काम का पूरा विवरण और सही रेट तय किया जाता है।",
    benefitThreeTitle: "लोकल और भरोसेमंद टीम",
    benefitThreeDescription: "वाराणसी के लोकल लोगों द्वारा पूरे अपनेपन से सेवा।",
    aboutContact: "करन चौधरी से संपर्क करें",
    bookingEyebrow: "चलें, शुरुआत करें",
    bookingTitleLead: "घर को चमकाना है?",
    bookingTitleAccent: "बस एक कॉल की दूरी।",
    bookingDescription: "आज ही कॉल करें या WhatsApp पर अपनी पसंदीदा तारीख बुक करें।",
    whatsappContact: "WhatsApp करें",
    footerDescription: "वाराणसी के हर घर को स्वच्छ, कीटाणुरहित और सुंदर बनाना हमारा संकल्प है। दिल से की गई सेवा।",
    footerLocation: "शिवपुर, वाराणसी एवं पूरा शहर",
    quickLinks: "ज़रूरी लिंक्स",
    contactHeading: "संपर्क और बुकिंग",
    contactPrompt: "तुरंत बातचीत या बुकिंग के लिए:",
    whatsappMessage: "WhatsApp पर चैट करें",
    madeWithCare: "वाराणसी में स्नेह से निर्मित",
    bookWhatsapp: "WhatsApp पर बुक करें",
    callNow: "अभी कॉल करें",
    callNowShort: "कॉल करें",
    whatsappShort: "WhatsApp",
    whatsappBooking: "WhatsApp पर बुकिंग करें",
    callBooking: "अभी कॉल करें: +91 92190 59563"
  },
  en: {
    pageTitle: "Apna Cleaning Service | Varanasi's #1 Home Deep Cleaning Service",
    metaDescription: "Full home deep cleaning, sofa foam shampoo, AC, fridge, chimney, car interior and water tank cleaning in Shivpur, Varanasi. Call or WhatsApp Apna Cleaning Service.",
    navigation: "Main navigation",
    languageSelector: "Choose language",
    homeLink: "Apna Cleaning Service — Home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navHome: "Home",
    navServices: "Our Services",
    navBeforeAfter: "Before-After",
    navCalculator: "Price Calculator",
    navVideos: "Videos",
    navReviews: "Reviews",
    navAbout: "About Us",
    navContact: "Contact",
    topBarAlert: "Doorstep Cleaning Available Today in Varanasi!",
    topBarSub: "Shivpur, Sigra, Lanka, Mahmoorganj and across Varanasi.",
    servicesDropdownHeading: "Choose a service",
    heroStatusBadge: "Available in Varanasi Today · 30-Min Fast Response",
    heroTitle: "Expert Cleaning Service,",
    heroTitleAccent: "Right at Your Doorstep.",
    heroDescription: "Professional full home deep cleaning, sofa foam shampooing, AC jet wash, and water tank sanitation. 100% eco-friendly chemicals and verified technicians.",
    heroTagOne: "✓ 500+ Happy Homes Cleaned",
    heroTagTwo: "✓ 10+ Years Experience",
    heroTagThree: "✓ 100% Eco-Safe Chemicals",
    heroBadgeRating: "4.9 / 5 Rating",
    heroBadgeClients: "500+ Satisfied Varanasi Families",
    heroBadgeSpeed: "Superfast Visit",
    heroBadgeLocal: "Shivpur & All Varanasi Areas",
    heroLocationNote: "Shivpur, Sigra, Lanka, Mahmoorganj, Cantt & entire Varanasi",
    heroCalcBtn: "Select Service & Quote",
    statHomes: "Happy Homes Cleaned",
    statExp: "Years Experience",
    statEco: "Eco & Safe Chemicals",
    statDoorstep: "Doorstep Response",
    beforeAfterEyebrow: "Visible Transformation",
    beforeAfterTitleLead: "Before Cleaning",
    beforeAfterTitleAccent: "vs Spotless After",
    beforeAfterDescription: "Drag the slider left and right to see how our foam shampoo and deep extraction process restores dirty, stained sofas back to brand new condition.",
    badgeBefore: "Before (Stained & Dull)",
    badgeAfter: "After (100% Spotless)",
    comparisonInstruction: "Drag slider to compare (Before vs After)",
    calcEyebrow: "Transparent Service",
    calcTitleLead: "Choose Your Service &",
    calcTitleAccent: "Get a Free Quote",
    calcDescription: "Select what you need cleaned and get an instant custom quote on WhatsApp in 1 click:",
    calcTabHome: "Home Deep Clean",
    calcTabSofa: "Sofa Shampoo",
    calcTabAc: "AC Jet Service",
    calcTabTank: "Water Tank",
    calcChooseHomeSize: "Choose Home Size:",
    calcEstPriceLabel: "Quotation & Rates",
    calcDisplayPrice: "Fair & Affordable Rates",
    calcDetailOne: "Best fair quote based on inspection & scope",
    calcDetailTwo: "100% deep cleaning with modern equipment",
    calcDetailThree: "No hidden or surprise charges",
    calcBookWhatsapp: "Ask for Quote on WhatsApp",
    workVideosEyebrow: "Real Work Showcase",
    workVideosTitleLead: "Real Cleaning Work,",
    workVideosTitleAccent: "In Action",
    workVideosDescription: "Watch our team live on the job. Click any card to watch full-screen.",
    workVideosLabel: "Cleaning Videos",
    videoOneTitle: "Water Tank High-Pressure Jet Cleaning",
    videoTwoTitle: "Sofa Foam Shampoo & Deep Extraction",
    videoThreeTitle: "Kitchen Chimney Degreasing & Steam Clean",
    videoFourTitle: "Floor Machine Scrubbing & Tile Polish",
    videoFiveTitle: "Car Interior Deep Vacuum & Sanitization",
    videoSixTitle: "Bathroom Scale & Tile Deep Clean",
    watchNow: "Watch ↗",
    servicesEyebrow: "Trusted Services",
    servicesTitleLead: "Specialized Cleaning",
    servicesTitleAccent: "For Every Need",
    servicesDescription: "State-of-the-art machines and certified non-toxic chemicals for home, appliances, and vehicles.",
    badgePopular: "Most Popular",
    serviceDeepCleaningTitle: "House Deep Cleaning",
    serviceDeepCleaningDescription: "Full home care covering bedrooms, floors, kitchen, and bathroom deep sanitation.",
    serviceSofaTitle: "Sofa Deep Cleaning",
    serviceSofaDescription: "Germ-free foam shampoo and stubborn stain extraction tailored to fabric.",
    serviceTankTitle: "Water Tank Cleaning",
    serviceTankDescription: "High-pressure jet washing and sanitization to clear all sludge and algae.",
    serviceAcTitle: "AC Cleaning & Service",
    serviceAcDescription: "Jet pump coil cleaning to save electricity and restore ice-cool airflow.",
    serviceKitchenTitle: "Oven & Chimney Cleaning",
    serviceKitchenDescription: "Deep degreasing of grease, oil, and carbon buildup in chimneys and ovens.",
    serviceFloorTitle: "Floor Cleaning & Polish",
    serviceFloorDescription: "Heavy scrubbing and polishing for marble, tile, and granite surfaces.",
    serviceCarTitle: "Car Interior Cleaning",
    serviceCarDescription: "Deep vacuuming, seat shampooing, and odor removal for car interiors.",
    serviceFridgeTitle: "Fridge Deep Cleaning",
    serviceFridgeDescription: "Hygienic sanitation of trays, deodorizing, and bacteria removal.",
    serviceOtherTitle: "Need a Custom Cleaning Service?",
    serviceOtherDescription: "Tell us your specific requirement and get an instant custom quote.",
    talkToUs: "Chat on WhatsApp Directly",
    bookingAsk: "View Details",
    quickBook: "Book",
    whyChooseEyebrow: "Our Commitment",
    whyChooseTitleLead: "Why Varanasi Families",
    whyChooseTitleAccent: "Trust Apna Cleaning",
    whyChooseDescription: "We treat your home with the care, hygiene, and honesty it deserves:",
    whyChooseOneTitle: "100% Eco-Safe Chemicals",
    whyChooseOneDescription: "We use only non-toxic, child-safe, and pet-friendly certified cleaning solutions.",
    whyChooseTwoTitle: "Verified Professionals",
    whyChooseTwoDescription: "Background-checked, uniform-clad, and trained technicians for total peace of mind.",
    whyChooseThreeTitle: "On-Time Doorstep Service",
    whyChooseThreeDescription: "Punctuality guaranteed. Our team arrives on time at your chosen slot.",
    whyChooseFourTitle: "100% Satisfaction Guarantee",
    whyChooseFourDescription: "Not satisfied? We will re-clean the area free of charge without questions.",
    reviewsEyebrow: "Customer Feedback",
    reviewsTitleLead: "What Varanasi Clients",
    reviewsTitleAccent: "Say About Us",
    reviewsDescription: "Read real experiences from homes we have proudly cleaned across Varanasi:",
    reviewOneQuote: "Got our 5-seater sofa cleaned. It had stubborn tea stains and dust. Apna Cleaning made it look brand new, just like from the showroom!",
    reviewTwoQuote: "Booked 3 BHK deep cleaning before Diwali. They scrubbed the tiles, kitchen chimney, and bathrooms thoroughly. Very polite and professional team.",
    reviewThreeQuote: "Water tank had heavy algae buildup. Their high-pressure jet pump cleared out all sludge within an hour. Excellent and very affordable service.",
    reviewVerified: "Verified Customer · Varanasi",
    howItWorksEyebrow: "Three Easy Steps",
    howItWorksTitleLead: "How Booking",
    howItWorksTitleAccent: "Works",
    howItWorksDescription: "Book your service in under a minute via Phone or WhatsApp:",
    howItWorksOneTitle: "Choose Your Service",
    howItWorksOneDescription: "Select home, sofa, AC, or tank cleaning along with your preferred time slot.",
    howItWorksTwoTitle: "Call or WhatsApp Us",
    howItWorksTwoDescription: "Call our direct line or text your location and requirement on WhatsApp.",
    howItWorksThreeTitle: "Doorstep Visit & Sparkling Results",
    howItWorksThreeDescription: "Our team arrives with professional gear and completes the job to your satisfaction.",
    faqEyebrow: "Got Questions?",
    faqTitleLead: "Frequently Asked",
    faqTitleAccent: "Questions",
    faqDescription: "Have a specific query? We are just a phone call or WhatsApp away:",
    faqBookingQuestion: "How do I book a cleaning visit?",
    faqBookingAnswer: "Simply call +91 92190 59563 or text us on WhatsApp. We will confirm your address and preferred timing instantly.",
    faqAreaQuestion: "Which areas in Varanasi do you cover?",
    faqAreaAnswer: "We cover Shivpur, Sigra, Lanka, Mahmoorganj, Cantt, Orderly Bazar, Paharia, Sarnath, and all surrounding Varanasi neighborhoods.",
    faqPriceQuestion: "How is the pricing decided?",
    faqPriceAnswer: "We provide upfront, transparent quotations before starting work. Use our price calculator for instant estimates. Zero hidden fees.",
    faqSafetyQuestion: "Are the chemicals safe for kids and pets?",
    faqSafetyAnswer: "Yes! We strictly use certified eco-friendly, non-toxic, and hypoallergenic products safe for children and household pets.",
    faqEquipQuestion: "Do I need to supply any cleaning materials?",
    faqEquipAnswer: "Not at all! Our team brings modern scrubbers, high-pressure washers, extraction vacuums, and eco chemicals. All we need is water and an electrical socket.",
    stampHome: "10 Years",
    stampCare: "Experience",
    aboutEyebrow: "Apna Cleaning Service · Shivpur, Varanasi",
    aboutTitleLead: "Trust in Cleanliness",
    aboutTitleAccent: "with Karan Chaudhary",
    aboutDescription: "With over 10 years of hands-on experience in home care and appliance maintenance, Karan Chaudhary leads Apna Cleaning to deliver dependable, high-quality doorstep service across Varanasi.",
    benefitOneTitle: "10 Years of Practical Expertise",
    benefitOneDescription: "Deep understanding of fabric care, machine maintenance, and stain removal.",
    benefitTwoTitle: "Transparent Estimates First",
    benefitTwoDescription: "Clear scope and fair price agreed upon before any work begins.",
    benefitThreeTitle: "Dedicated Local Team",
    benefitThreeDescription: "Reliable, warm, and community-rooted team based right here in Varanasi.",
    aboutContact: "Contact Karan Chaudhary",
    bookingEyebrow: "Let's Get Started",
    bookingTitleLead: "Ready for a Spotless Home?",
    bookingTitleAccent: "Just one call away.",
    bookingDescription: "Call or text us on WhatsApp to confirm your preferred cleaning slot today.",
    whatsappContact: "WhatsApp Us",
    footerDescription: "Dedicated to making every Varanasi home cleaner, healthier, and brighter with honest service.",
    footerLocation: "Shivpur, Varanasi and all neighborhoods",
    quickLinks: "Quick Links",
    contactHeading: "Contact & Bookings",
    contactPrompt: "For immediate booking and inquiries:",
    whatsappMessage: "Chat with us on WhatsApp",
    madeWithCare: "Crafted with care in Varanasi",
    bookWhatsapp: "Book on WhatsApp",
    callNow: "Call Now",
    callNowShort: "Call",
    whatsappShort: "WhatsApp",
    whatsappBooking: "Book on WhatsApp",
    callBooking: "Call now: +91 92190 59563"
  }
};

// ==========================================================================
// 1. LANGUAGE SWITCHER
// ==========================================================================
function setLanguage(lang) {
  const currentLang = translations[lang] ? lang : "hi";
  document.documentElement.lang = currentLang;
  localStorage.setItem("apna-cleaning-language", currentLang);

  languageOptions.forEach((btn) => {
    const isActive = btn.dataset.language === currentLang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  const langData = translations[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (langData[key]) el.textContent = langData[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (langData[key]) el.setAttribute("aria-label", langData[key]);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.dataset.i18nContent;
    if (langData[key]) el.setAttribute("content", langData[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (langData[key]) el.setAttribute("alt", langData[key]);
  });

  // Re-render price calculator with new language
  if (typeof renderCalculatorOptions === "function") {
    renderCalculatorOptions();
  }
}

// ==========================================================================
// 2. NAVIGATION TOGGLE & SERVICE DROPDOWN
// ==========================================================================
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (serviceMenuToggle && serviceMenu) {
  serviceMenuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = serviceMenu.hidden;
    serviceMenu.hidden = !isHidden;
    serviceMenuToggle.setAttribute("aria-expanded", String(isHidden));
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-service-menu")) {
      serviceMenu.hidden = true;
      serviceMenuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ==========================================================================
// 3. SERVICE CARDS CLICK HANDLER
// ==========================================================================
serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.dataset.servicePage;
    if (service) {
      window.location.href = `service.html?service=${service}`;
    }
  });
});

// ==========================================================================
// 4. INTERACTIVE BEFORE & AFTER SLIDER
// ==========================================================================
function initBeforeAfterSlider() {
  const container = document.getElementById("before-after-container");
  const afterWrap = document.getElementById("comparison-after");
  const handle = document.getElementById("comparison-handle");
  const dividerLine = document.getElementById("comparison-divider");
  if (!container || !afterWrap || !handle) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percentage = (x / rect.width) * 100;
    afterWrap.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    handle.style.left = `${percentage}%`;
    if (dividerLine) dividerLine.style.left = `${percentage}%`;
  }

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });
}

// ==========================================================================
// 5. INTERACTIVE PRICE ESTIMATOR (CALCULATOR)
// ==========================================================================
const calculatorConfig = {
  home: {
    titleHi: "घर का आकार चुनें:",
    titleEn: "Choose Home Size:",
    options: [
      { id: "1bhk", labelHi: "1 BHK डीप क्लीनिंग", labelEn: "1 BHK Deep Cleaning" },
      { id: "2bhk", labelHi: "2 BHK डीप क्लीनिंग", labelEn: "2 BHK Deep Cleaning", default: true },
      { id: "3bhk", labelHi: "3 BHK डीप क्लीनिंग", labelEn: "3 BHK Deep Cleaning" },
      { id: "4bhk", labelHi: "4+ BHK / विला क्लीनिंग", labelEn: "4+ BHK / Villa Cleaning" }
    ]
  },
  sofa: {
    titleHi: "सोफे की सीटें चुनें:",
    titleEn: "Choose Sofa Seats:",
    options: [
      { id: "sofa3", labelHi: "3-सीटर सोफा शैम्पू", labelEn: "3-Seater Sofa Shampoo" },
      { id: "sofa5", labelHi: "5-सीटर सोफा शैम्पू", labelEn: "5-Seater Sofa Shampoo", default: true },
      { id: "sofa7", labelHi: "7-सीटर सोफा शैम्पू", labelEn: "7-Seater Sofa Shampoo" },
      { id: "sofaL", labelHi: "L-शेप सोफा (कुशन सहित)", labelEn: "L-Shape Sofa + Cushions" }
    ]
  },
  ac: {
    titleHi: "AC की संख्या चुनें:",
    titleEn: "Choose AC Units:",
    options: [
      { id: "ac1", labelHi: "1 Split AC डीप जेट वॉश", labelEn: "1 Split AC Deep Jet Wash", default: true },
      { id: "ac2", labelHi: "2 Split ACs सर्विस", labelEn: "2 Split ACs Service" },
      { id: "ac3", labelHi: "3 Split ACs कॉम्बो", labelEn: "3 Split ACs Combo" },
      { id: "acWindow", labelHi: "Window AC डीप क्लीन", labelEn: "Window AC Deep Clean" }
    ]
  },
  tank: {
    titleHi: "टैंक की क्षमता चुनें:",
    titleEn: "Choose Tank Capacity:",
    options: [
      { id: "tank500", labelHi: "500 लीटर वाटर टैंक", labelEn: "500 Litre Water Tank" },
      { id: "tank1000", labelHi: "1000 लीटर वाटर टैंक", labelEn: "1000 Litre Water Tank", default: true },
      { id: "tank2000", labelHi: "2000 लीटर वाटर टैंक", labelEn: "2000 Litre Water Tank" },
      { id: "tankUnder", labelHi: "अंडरग्राउंड संप / हौज", labelEn: "Underground Sump / Tank" }
    ]
  }
};

let currentServiceType = "home";
let currentSelectedOption = null;

function renderCalculatorOptions() {
  const isEn = document.documentElement.lang === "en";
  const titleEl = document.getElementById("calc-options-title");
  const gridEl = document.getElementById("calc-options-grid");
  const displayPrice = document.getElementById("calc-display-price");
  const whatsappLink = document.getElementById("calc-whatsapp-link");

  if (!titleEl || !gridEl || !displayPrice || !whatsappLink) return;

  const currentConfig = calculatorConfig[currentServiceType];
  titleEl.textContent = isEn ? currentConfig.titleEn : currentConfig.titleHi;

  gridEl.innerHTML = "";

  currentConfig.options.forEach((opt) => {
    const item = document.createElement("div");
    item.className = "calc-option-item";
    if (!currentSelectedOption && opt.default) {
      currentSelectedOption = opt;
    }
    if (currentSelectedOption && currentSelectedOption.id === opt.id) {
      item.classList.add("is-selected");
    }

    item.innerHTML = `
      <strong>${isEn ? opt.labelEn : opt.labelHi}</strong>
      <span>✓ ${isEn ? "Select" : "चुनें"}</span>
    `;

    item.addEventListener("click", () => {
      currentSelectedOption = opt;
      document.querySelectorAll(".calc-option-item").forEach((el) => el.classList.remove("is-selected"));
      item.classList.add("is-selected");
      updateCalculatorOutput();
    });

    gridEl.appendChild(item);
  });

  updateCalculatorOutput();
}

function updateCalculatorOutput() {
  if (!currentSelectedOption) return;
  const isEn = document.documentElement.lang === "en";
  const displayPrice = document.getElementById("calc-display-price");
  const whatsappLink = document.getElementById("calc-whatsapp-link");

  if (displayPrice) {
    displayPrice.textContent = isEn ? "Fair & Affordable Quote" : "उचित & किफायती दर";
  }

  if (whatsappLink) {
    const serviceName = isEn ? currentSelectedOption.labelEn : currentSelectedOption.labelHi;
    const msg = isEn
      ? `Hello, I would like to get a quotation and check availability for "${serviceName}" with Apna Cleaning Service.`
      : `नमस्ते, मुझे Apna Cleaning Service से "${serviceName}" का रेट और उपलब्धता जाननी है।`;
    whatsappLink.href = `https://wa.me/919219059563?text=${encodeURIComponent(msg)}`;
  }
}

function initCalculator() {
  const tabBtns = document.querySelectorAll(".calc-tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      currentServiceType = btn.dataset.serviceType;
      const opts = calculatorConfig[currentServiceType].options;
      currentSelectedOption = opts.find((o) => o.default) || opts[0];
      renderCalculatorOptions();
    });
  });

  const opts = calculatorConfig[currentServiceType].options;
  currentSelectedOption = opts.find((o) => o.default) || opts[0];
  renderCalculatorOptions();
}

// ==========================================================================
// 6. VIDEO MODAL POPUP PLAYER
// ==========================================================================
const galleryCards = document.querySelectorAll(".gallery-card");
const galleryModal = document.querySelector("#gallery-modal");
const galleryModalImage = document.querySelector("#gallery-modal-image");
const galleryModalVideo = document.querySelector("#gallery-modal-video");
const galleryModalTitle = document.querySelector("#gallery-modal-title");
const galleryCloseButton = document.querySelector(".gallery-modal-close");

function openGalleryMedia(mediaSrc, title) {
  if (!galleryModal || !galleryModalVideo) return;
  galleryModalVideo.pause();
  if (galleryModalImage) galleryModalImage.hidden = true;
  galleryModalVideo.hidden = false;
  if (galleryModalTitle) galleryModalTitle.textContent = title;

  galleryModalVideo.src = mediaSrc;
  galleryModalVideo.play().catch((err) => {
    if (err.name !== "AbortError") {
      console.error("Could not play video:", err);
    }
  });

  galleryModal.classList.add("is-active");
  galleryModal.setAttribute("aria-hidden", "false");
}

function closeGalleryImage() {
  if (!galleryModal || !galleryModalVideo) return;
  galleryModal.classList.remove("is-active");
  galleryModal.setAttribute("aria-hidden", "true");
  galleryModalVideo.pause();
  galleryModalVideo.removeAttribute("src");
  galleryModalVideo.load();
}

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isEn = document.documentElement.lang === "en";
    const title = (isEn ? card.dataset.titleEn : card.dataset.titleHi) || card.dataset.title || "";
    const mediaSrc = card.dataset.video || card.dataset.image;
    if (mediaSrc) openGalleryMedia(mediaSrc, title);
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const isEn = document.documentElement.lang === "en";
      const title = (isEn ? card.dataset.titleEn : card.dataset.titleHi) || card.dataset.title || "";
      const mediaSrc = card.dataset.video || card.dataset.image;
      if (mediaSrc) openGalleryMedia(mediaSrc, title);
    }
  });
});

if (galleryCloseButton) {
  galleryCloseButton.addEventListener("click", closeGalleryImage);
}

if (galleryModal) {
  galleryModal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close-gallery='true']") || e.target === galleryModal) {
      closeGalleryImage();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && galleryModal && galleryModal.classList.contains("is-active")) {
    closeGalleryImage();
  }
});

// ==========================================================================
// 7. INITIALIZATION
// ==========================================================================
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

languageOptions.forEach((option) => {
  option.addEventListener("click", () => setLanguage(option.dataset.language));
});

initBeforeAfterSlider();
initCalculator();

const savedLanguage = localStorage.getItem("apna-cleaning-language") || "hi";
setLanguage(savedLanguage);
