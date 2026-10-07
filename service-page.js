const serviceCopy = {
  hi: {
    homeTitle: "Apna Cleaning Service | वाराणसी",
    metaDescription: "शिवपुर, वाराणसी में Apna Cleaning Service की जानकारी और उपलब्धता पूछें।",
    back: "सभी सेवाएं",
    eyebrow: "शिवपुर, वाराणसी और आसपास",
    book: "WhatsApp पर उपलब्धता पूछें",
    call: "कॉल करें",
    availabilityNote: "काम, उपलब्धता और अनुमानित शुल्क booking से पहले सीधे कन्फर्म करें।",
    photoCaption: "साफ-सुथरी service, आपकी सुविधा के लिए",
    includedEyebrow: "आपकी ज़रूरत के अनुसार",
    includedTitle: "Service में क्या शामिल हो सकता है?",
    includedIntro: "काम की सही जानकारी पहले लें। अंतिम scope और कीमत सामान की स्थिति और उपलब्धता देखकर तय होंगे।",
    storyEyebrow: "इस service के बारे में",
    prepareTitle: "विज़िट से पहले",
    faqEyebrow: "बुकिंग से पहले जानें",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faqIntro: "सटीक scope और उपलब्धता आपकी ज़रूरत देखकर कन्फर्म की जाएगी।",
    stepsEyebrow: "आसान booking",
    stepsTitle: "आगे कैसे बढ़ें?",
    stepOneTitle: "अपनी ज़रूरत बताएं",
    stepOneBody: "कॉल या WhatsApp पर service और समस्या की जानकारी दें।",
    stepTwoTitle: "जानकारी कन्फर्म करें",
    stepTwoBody: "इलाका, उपलब्धता, अनुमानित शुल्क और काम का scope पूछें।",
    stepThreeTitle: "समय तय करें",
    stepThreeBody: "टीम से समय की पुष्टि होने के बाद ही visit तय करें।",
    bottomTitle: "इस service के बारे में पूछना है?",
    bottomBody: "हमसे बात करें और अपने पते के लिए उपलब्धता कन्फर्म करें।",
    notFoundTitle: "यह service नहीं मिली",
    notFoundBody: "सभी उपलब्ध services देखने के लिए वापस जाएं।",
    messageStart: "नमस्ते, मुझे यह service चाहिए:",
    messageArea: "मेरा इलाका शिवपुर, वाराणसी है। कृपया उपलब्धता और अनुमानित शुल्क बताएं।",
    pageTitle: (title) => `${title} | Apna Cleaning Service, Varanasi`,
  },
  en: {
    homeTitle: "Apna Cleaning Service | Varanasi",
    metaDescription: "Ask about Apna Cleaning Service availability in Shivpur, Varanasi.",
    back: "All services",
    eyebrow: "Shivpur, Varanasi and nearby",
    book: "Ask availability on WhatsApp",
    call: "Call us",
    availabilityNote: "Confirm the work, availability, and estimate with our team before booking.",
    photoCaption: "A closer look at the service",
    includedEyebrow: "Based on your needs",
    includedTitle: "What may be included?",
    includedIntro: "Ask for the exact scope first. Final work and charges depend on the condition and confirmed availability.",
    storyEyebrow: "About this service",
    prepareTitle: "Before the visit",
    faqEyebrow: "Before you book",
    faqTitle: "Frequently asked questions",
    faqIntro: "We will confirm the exact scope and availability based on your needs.",
    stepsEyebrow: "Simple booking",
    stepsTitle: "How to get started",
    stepOneTitle: "Tell us what you need",
    stepOneBody: "Share the service and issue with us by phone or WhatsApp.",
    stepTwoTitle: "Confirm the details",
    stepTwoBody: "Ask about your area, availability, estimate, and the scope of work.",
    stepThreeTitle: "Choose a time",
    stepThreeBody: "Schedule a visit only after the team confirms a suitable time.",
    bottomTitle: "Have a question about this service?",
    bottomBody: "Talk with us and confirm availability for your address.",
    notFoundTitle: "Service not found",
    notFoundBody: "Go back to see all available services.",
    messageStart: "Hello, I am interested in this service:",
    messageArea: "My area is Shivpur, Varanasi. Please share availability and an estimate.",
    pageTitle: (title) => `${title} | Apna Cleaning Service, Varanasi`,
  },
};

const services = {
  ac: {
    icon: "AC",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    hi: {
      title: "AC सर्विस",
      imageAlt: "घर में एयर कंडीशनर के पास सफाई और देखभाल",
      description: "अपने AC की सफाई, जाँच या सर्विस की जानकारी लें। अपनी cooling समस्या और AC का प्रकार बताएं, ताकि टीम आगे के विकल्प समझा सके।",
      included: ["AC की स्थिति और आपकी बताई समस्या की शुरुआती जानकारी", "सफाई या सर्विस के उपलब्ध विकल्पों पर चर्चा", "किसी repair या अतिरिक्त काम का शुल्क शुरू करने से पहले कन्फर्म करना"],
      storyTitle: "कम cooling या धूल? AC की ज़रूरत के अनुसार जानकारी लें",
      story: ["कम हवा, बदबू, आवाज़ या पानी टपकने जैसी परेशानी हो तो लक्षण और AC का प्रकार बताएं। इससे टीम आपकी ज़रूरत समझकर उपलब्ध जाँच या सर्विस विकल्प बता सकती है।", "AC की सफाई, filter तक पहुँच और किसी repair की आवश्यकता अलग-अलग हो सकती है। मशीन की स्थिति देखकर ही काम का दायरा और शुल्क कन्फर्म करें; यह booking request उपलब्धता की पुष्टि के बाद तय होगी।"],
      prepare: ["AC का split या window प्रकार और समस्या नोट करें।", "Indoor unit और outdoor unit तक सुरक्षित पहुँच रखें।", "बिजली या installation से जुड़ी चिंता हो तो पहले से बताएं।"],
      faqs: [["सर्विस में क्या होगा?", "पहले समस्या और AC की स्थिति समझी जाएगी। सफाई या जाँच का सही scope मशीन देखकर कन्फर्म होगा।"], ["क्या repair भी शामिल है?", "Repair और parts की ज़रूरत अलग हो सकती है। कोई अतिरिक्त काम शुरू होने से पहले estimate और सहमति कन्फर्म करें।"], ["बुकिंग के लिए क्या जानकारी दें?", "AC का प्रकार, समस्या, अपना इलाका और सुविधाजनक समय बताएं।"]],
    },
    en: {
      title: "AC Service",
      imageAlt: "Home cleaning and care around an air conditioner",
      description: "Ask about AC cleaning, inspection, or servicing. Share the cooling issue and AC type so the team can explain the available options.",
      included: ["An initial discussion about the AC condition and issue you describe", "Available cleaning or servicing options", "Confirming any repair or additional charges before work starts"],
      storyTitle: "Weak cooling or dust? Ask about service for your AC",
      story: ["If you notice weak airflow, an odour, unusual noise, or dripping water, share the symptoms and AC type. This helps the team understand your needs and discuss available inspection or service options.", "Cleaning, filter access, and repair needs can vary. Confirm the final scope and estimate after the unit is assessed. A visit is scheduled only after availability is confirmed."],
      prepare: ["Note whether the unit is split or window type and describe the issue.", "Keep safe access to the indoor and outdoor units.", "Mention any electrical or installation concerns in advance."],
      faqs: [["What does the service include?", "The team will first understand the issue and unit condition. The exact cleaning or inspection scope is confirmed after assessment."], ["Are repairs included?", "Repair and parts may be separate. Confirm the estimate and agree before any extra work starts."], ["What should I share to book?", "Share the AC type, issue, area, and a convenient time."]],
    },
  },
  fridge: {
    icon: "FR",
    image: "https://images.pexels.com/videos/9462942/pexels-photo-9462942.jpeg?auto=compress&cs=tinysrgb&w=1200",
    hi: {
      title: "फ्रिज सर्विस",
      imageAlt: "फ्रिज की सफाई और देखभाल",
      description: "फ्रिज की सफाई या सर्विस के बारे में पूछें। ठंडा न होने या किसी दूसरी समस्या की जानकारी दें और उपलब्धता पहले कन्फर्म करें।",
      included: ["फ्रिज की बताई गई समस्या और स्थिति की जानकारी", "सफाई या सर्विस के संभावित विकल्पों पर चर्चा", "जाँच के बाद काम और अनुमानित शुल्क की पुष्टि"],
      storyTitle: "फ्रिज की समस्या को समझकर सही अगला कदम तय करें",
      story: ["फ्रिज कम ठंडा कर रहा हो, बहुत आवाज़ कर रहा हो या अंदर पानी जमा हो रहा हो, तो समस्या कब से है और कितनी बार होती है यह बताएं। मॉडल और single-door/double-door जानकारी देने से शुरुआती बातचीत आसान रहती है।", "सफाई, जाँच और repair अलग-अलग काम हैं। केवल जाँच के बाद ही उपयुक्त विकल्प, अनुमानित शुल्क और क्या-क्या शामिल होगा, यह कन्फर्म करें।"],
      prepare: ["फ्रिज का मॉडल और समस्या के लक्षण लिख लें।", "जाँच के लिए फ्रिज के आसपास थोड़ी जगह खाली रखें।", "खराब होने वाले खाने को पहले सुरक्षित जगह पर रखें।"],
      faqs: [["फ्रिज ठंडा न करे तो क्या बताएं?", "समस्या कब शुरू हुई, दोनों compartments का हाल और कोई unusual sound या leakage हो तो बताएं।"], ["क्या सफाई और repair एक ही service है?", "नहीं, काम की ज़रूरत स्थिति देखकर तय होती है। Repair या parts का estimate पहले कन्फर्म करें।"], ["क्या मॉडल की जानकारी ज़रूरी है?", "मॉडल या brand और फ्रिज का प्रकार साझा करें; यदि जानकारी न हो तो फोटो भेजकर पूछ सकते हैं।"]],
    },
    en: {
      title: "Refrigerator Service",
      imageAlt: "Refrigerator cleaning and care",
      description: "Ask about refrigerator cleaning or servicing. Describe a cooling issue or other concern and confirm availability first.",
      included: ["A discussion about the refrigerator condition and issue you describe", "Possible cleaning or servicing options", "Confirming the work and estimate after assessment"],
      storyTitle: "Understand the refrigerator issue before choosing a service",
      story: ["If the fridge is not cooling well, making unusual noise, or collecting water, describe when the issue started and how often it occurs. Sharing the model and whether it is single- or double-door helps the initial discussion.", "Cleaning, inspection, and repair are different tasks. Confirm the suitable option, estimate, and scope after assessment."],
      prepare: ["Note the model and symptoms you have noticed.", "Leave some space around the fridge for inspection.", "Move perishable food to a safe place beforehand."],
      faqs: [["What should I report if the fridge is not cooling?", "Share when it began, which compartments are affected, and any unusual sounds or leaks."], ["Are cleaning and repair the same service?", "No. The work depends on the condition. Confirm any repair or parts estimate first."], ["Do I need the model details?", "Share the model or brand and fridge type. If unsure, ask whether a photo will help."]],
    },
  },
  washer: {
    icon: "WM",
    image: "https://images.pexels.com/videos/4440711/pexels-photo-4440711.jpeg?auto=compress&cs=tinysrgb&w=1200",
    hi: {
      title: "वॉशिंग मशीन सर्विस",
      imageAlt: "वॉशिंग मशीन और laundry care",
      description: "वॉशिंग मशीन की समस्या या सफाई की ज़रूरत बताएं। मशीन का प्रकार और सुविधाजनक इलाका साझा करके service विकल्प पूछें।",
      included: ["मशीन का प्रकार और बताई गई समस्या समझना", "जाँच या सर्विस विज़िट की उपलब्धता कन्फर्म करना", "काम शुरू होने से पहले अनुमानित शुल्क और scope पूछना"],
      storyTitle: "मशीन रुक रही है, आवाज़ कर रही है या पानी नहीं निकाल रही?",
      story: ["मशीन का front-load/top-load प्रकार बताएं और cycle किस चरण पर रुकती है यह साझा करें। पानी न भरना, drain न होना, तेज़ vibration या error code जैसी जानकारी शुरुआती जाँच को उपयोगी बनाती है।", "हर समस्या में अलग जाँच या repair की ज़रूरत हो सकती है। मशीन का मॉडल और लक्षण बताएँ; parts, labour और visit scope की पुष्टि काम से पहले करें।"],
      prepare: ["Machine का brand, type और error code नोट करें।", "मशीन के plug और water inlet तक पहुँच खुली रखें।", "यदि मशीन leak कर रही है, तो यह बात पहले बताएं।"],
      faqs: [["कौन-कौन सी समस्या बतानी चाहिए?", "पानी भरने या निकालने, spinning, vibration, leakage या error code का विवरण दें।"], ["क्या parts बदलने का खर्च तय है?", "Parts की ज़रूरत जाँच के बाद पता चलती है। बदलने से पहले parts और labour का estimate पूछें।"], ["Front-load और top-load दोनों के लिए पूछ सकते हैं?", "हाँ, enquiry में machine type और model बताएं ताकि service option कन्फर्म किया जा सके।"]],
    },
    en: {
      title: "Washing Machine Service",
      imageAlt: "Washing machine and laundry care",
      description: "Tell us about a washing machine issue or cleaning need. Share the machine type and area to ask about service options.",
      included: ["Understanding the machine type and issue you describe", "Checking availability for an assessment or service visit", "Asking for the scope and estimate before work begins"],
      storyTitle: "Stops mid-cycle, makes noise, or will not drain?",
      story: ["Tell us whether it is a front-load or top-load machine and when the cycle stops. Details such as a filling or draining issue, strong vibration, or an error code make the initial discussion more useful.", "Different problems need different checks or repairs. Share the model and symptoms, and confirm any parts, labour, and visit scope before work starts."],
      prepare: ["Note the brand, machine type, and any error code.", "Keep access to the plug and water inlet clear.", "Mention any leaking before the visit."],
      faqs: [["What issue details should I share?", "Describe filling or draining, spinning, vibration, leakage, or any displayed error code."], ["Are replacement parts included in the estimate?", "Parts needs are determined after inspection. Ask for parts and labour estimates before replacement."], ["Can I enquire about either machine type?", "Yes. Share whether it is front-load or top-load and the model if available."]],
    },
  },
  kitchen: {
    icon: "K",
    image: "https://images.pexels.com/videos/9473225/pexels-photo-9473225.jpeg?auto=compress&cs=tinysrgb&w=1200",
    hi: {
      title: "ओवन और चिमनी सर्विस",
      imageAlt: "किचन appliance और oven की सफाई",
      description: "किचन ओवन या चिमनी की सफाई और सर्विस के विकल्प जानें। किस appliance के लिए मदद चाहिए, यह booking के समय बताएं।",
      included: ["ओवन या चिमनी और सफाई की ज़रूरत की जानकारी", "सर्विस के scope और उपलब्धता की पुष्टि", "काम और अनुमानित शुल्क पर सहमति के बाद booking"],
      storyTitle: "किचन appliance की सफाई, उसके प्रकार के मुताबिक",
      story: ["ओवन में जमी चिकनाई या चिमनी filter की सफाई की ज़रूरत अलग होती है। enquiry करते समय appliance का प्रकार, model और कितनी सफाई चाहिए—यह स्पष्ट करें।", "चिमनी के filter, अंदरूनी हिस्से और duct तक पहुँच अलग-अलग हो सकती है; हर हिस्से की सफाई स्वतः शामिल नहीं मानी जाएगी। पहले scope, किसी dismantling की आवश्यकता और अनुमानित शुल्क कन्फर्म करें।"],
      prepare: ["बताएं कि enquiry oven, chimney या दोनों के लिए है।", "चिमनी की ऊँचाई और filter तक पहुँच की जानकारी दें।", "सफाई वाली जगह से बर्तन और सामान हटा दें।"],
      faqs: [["क्या oven और chimney साथ book कर सकते हैं?", "हाँ, enquiry में दोनों appliance और उनकी स्थिति बताएं ताकि scope कन्फर्म हो सके।"], ["क्या chimney duct भी साफ होगा?", "Duct access और काम का scope अलग हो सकता है; booking से पहले इसकी पुष्टि करें।"], ["क्या appliance पहले से बंद करना चाहिए?", "सुरक्षा के लिए appliance का उपयोग रोकें और टीम से पूछें कि visit से पहले बिजली या गैस disconnect करनी है या नहीं।"]],
    },
    en: {
      title: "Oven & Chimney Service",
      imageAlt: "Kitchen appliance and oven cleaning",
      description: "Ask about kitchen oven or chimney cleaning and servicing. Tell us which appliance needs attention when you enquire.",
      included: ["Details about the oven or chimney and the cleaning needed", "Confirmation of service scope and availability", "Booking after agreeing on the work and estimate"],
      storyTitle: "Kitchen appliance cleaning depends on the appliance",
      story: ["Grease inside an oven and cleaning a chimney filter are different jobs. When enquiring, specify the appliance, model, and the areas that need attention.", "Access to filters, internal components, and ducts varies. Do not assume every area is included; confirm the scope, whether dismantling is needed, and the estimate before booking."],
      prepare: ["Tell us whether the enquiry is for an oven, chimney, or both.", "Share chimney height and filter access details.", "Clear cookware and other items from the cleaning area."],
      faqs: [["Can I book an oven and chimney together?", "Yes. Mention both appliances and their condition so the scope can be confirmed."], ["Is chimney duct cleaning included?", "Duct access and scope can vary. Confirm this before booking."], ["Should I switch off the appliance first?", "Stop using it and ask the team whether power or gas should be disconnected before the visit."]],
    },
  },
  car: {
    icon: "CAR",
    image: "https://images.pexels.com/videos/4822914/pexels-photo-4822914.jpeg?auto=compress&cs=tinysrgb&w=1200",
    hi: {
      title: "कार इंटीरियर क्लीनिंग",
      imageAlt: "कार के अंदर की सीटों की सफाई",
      description: "कार के अंदरूनी हिस्से और सीटों की सफाई के विकल्प पूछें। वाहन का प्रकार और अपनी ज़रूरत बताकर समय व जगह कन्फर्म करें।",
      included: ["कार के interior और आपकी प्राथमिकता की जानकारी", "सीटों व अंदरूनी सतहों की सफाई के विकल्प", "वाहन देखकर scope, समय और शुल्क कन्फर्म करना"],
      storyTitle: "सीटों, carpets और cabin के लिए interior care",
      story: ["धूल, crumbs, हल्के दाग या रोज़मर्रा की गंदगी के लिए कार interior cleaning के विकल्प पूछें। कार का प्रकार, कितनी सीटें और fabric या leather upholstery है या नहीं—ये बातें बताएं।", "Fabric, leather और अलग trim पर cleaning method बदल सकता है। गहरे दाग या बदबू पूरी तरह निकलने की गारंटी नहीं होती; काम का scope, अनुमानित समय और शुल्क पहले कन्फर्म करें।"],
      prepare: ["कार का model और साफ करने वाले हिस्से बताएं।", "Personal सामान, child seat और valuables निकाल लें।", "दाग या delicate surface दिखाकर पहले से बता दें।"],
      faqs: [["क्या पूरी कार का interior साफ होता है?", "काम में कौन से हिस्से शामिल होंगे—seats, carpets, mats या dashboard—यह पहले कन्फर्म करें।"], ["क्या हर दाग पूरी तरह निकल जाएगा?", "परिणाम fabric, दाग की उम्र और हालत पर निर्भर करते हैं; पूरी तरह हटने की गारंटी नहीं दी जा सकती।"], ["कार कितनी देर उपलब्ध रखनी होगी?", "समय कार के आकार और चुने गए scope पर निर्भर करता है। अनुमान booking से पहले पूछें।"]],
    },
    en: {
      title: "Car Interior Cleaning",
      imageAlt: "Cleaning seats inside a car",
      description: "Ask about cleaning options for your car interior and seats. Share the vehicle type and your needs to confirm timing and location.",
      included: ["Details about the car interior and your priorities", "Cleaning options for seats and interior surfaces", "Confirming scope, time, and charges after assessing the vehicle"],
      storyTitle: "Interior care for seats, carpets, and the cabin",
      story: ["Ask about interior cleaning for dust, crumbs, light stains, or everyday dirt. Share the vehicle type, number of seats, and whether the upholstery is fabric or leather.", "Cleaning methods vary by fabric, leather, and trim. Deep stains or odours cannot be guaranteed to disappear; confirm the scope, estimated time, and charges first."],
      prepare: ["Share the vehicle model and areas to be cleaned.", "Remove personal items, child seats, and valuables.", "Point out stains or delicate surfaces before work starts."],
      faqs: [["Does the service cover the whole interior?", "Confirm which areas are included—seats, carpets, mats, or dashboard—before booking."], ["Will every stain come out?", "Results depend on the material, stain age, and condition; complete removal cannot be guaranteed."], ["How long will the car be needed?", "Time depends on vehicle size and agreed scope. Ask for an estimate before booking."]],
    },
  },
  tank: {
    icon: "TANK",
    image: "https://images.pexels.com/videos/4451962/pexels-photo-4451962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    hi: {
      title: "वॉटर टैंक सफाई",
      imageAlt: "पानी की टंकी की सफाई सेवा का उदाहरण",
      description: "पानी की टंकी की सफाई की booking और उपलब्धता पूछें। टंकी का अनुमानित आकार, जगह और पहुँच की जानकारी पहले साझा करें।",
      included: ["टंकी के आकार और जगह के बारे में शुरुआती जानकारी", "पहुँच और सफाई के scope की पुष्टि", "विज़िट, उपलब्धता और अनुमानित शुल्क तय करना"],
      storyTitle: "टंकी का आकार और सुरक्षित पहुँच—दोनों ज़रूरी",
      story: ["पानी की टंकी जमीन पर है या ऊँचाई पर, उसका अनुमानित आकार और ढक्कन तक पहुँच कैसी है—ये जानकारी पहले दें। इससे टीम सफाई के scope और visit की व्यवहारिकता पर बात कर सकती है।", "काम के लिए पानी की supply रोकनी पड़ सकती है और टंकी खाली करने की व्यवस्था अलग हो सकती है। सफाई, sludge हटाने और दुबारा पानी भरने जैसी चीज़ें शामिल हैं या नहीं, स्पष्ट रूप से पूछें।"],
      prepare: ["टंकी का प्रकार, अनुमानित क्षमता और location बताएं।", "ढक्कन तक सुरक्षित पहुँच और रास्ते की जानकारी दें।", "घर के लोगों को पानी की supply रुकने की सम्भावना के लिए तैयार रखें।"],
      faqs: [["कौन सी जानकारी पहले देनी चाहिए?", "टंकी की capacity, जमीन/छत की location और access की स्थिति बताएं।"], ["क्या पानी निकालना और वापस भरना शामिल है?", "ये काम अलग हो सकते हैं; booking से पहले हर चरण का scope स्पष्ट कर लें।"], ["क्या हर तरह की टंकी साफ हो सकती है?", "Material, size और access के आधार पर उपलब्धता बदल सकती है; पहले फोटो और विवरण साझा करके पूछें।"]],
    },
    en: {
      title: "Water Tank Cleaning",
      imageAlt: "Illustrative image for water tank cleaning service",
      description: "Ask about water tank cleaning and booking availability. Share the approximate tank size, location, and access details first.",
      included: ["Initial details about the tank size and location", "Confirmation of access and cleaning scope", "Agreeing on a visit, availability, and estimate"],
      storyTitle: "Tank size and safe access both matter",
      story: ["Tell us whether the tank is at ground level or elevated, its approximate size, and how the lid can be reached. This helps the team discuss a suitable scope and whether a visit is practical.", "Water supply may need to be stopped, and draining arrangements can vary. Ask clearly whether cleaning, sludge removal, and refilling are included."],
      prepare: ["Share the tank type, approximate capacity, and location.", "Describe safe access to the lid and the route to the tank.", "Let household members know the water supply may need to pause."],
      faqs: [["What information should I share first?", "Tell us the tank capacity, whether it is on the ground or roof, and access conditions."], ["Are draining and refilling included?", "These can be separate tasks. Confirm the scope of each step before booking."], ["Can every type of tank be cleaned?", "Availability depends on material, size, and access. Share details or a photo to enquire."]],
    },
  },
  upholstery: {
    icon: "FABRIC",
    image: "https://images.pexels.com/videos/9473231/pexels-photo-9473231.jpeg?auto=compress&cs=tinysrgb&w=1200",
    hi: {
      title: "चेयर और Upholstery सफाई",
      imageAlt: "सोफे और upholstery fabric की सफाई",
      description: "चेयर, सोफे या दूसरी fabric upholstery की सफाई के विकल्प पूछें। सामान की संख्या, material और स्थिति की जानकारी दें।",
      included: ["सामान की संख्या, fabric और स्थिति की जानकारी", "सफाई के तरीके और suitability पर चर्चा", "सामान देखकर scope और अनुमानित शुल्क कन्फर्म करना"],
      storyTitle: "Fabric के प्रकार को समझकर सफाई का तरीका चुनें",
      story: ["सोफा, dining chairs, office chairs या cushions के लिए enquiry करते समय item count, fabric type और दागों का विवरण बताएं। यदि material label उपलब्ध हो तो उसकी जानकारी भी साझा करें।", "हर fabric पर पानी या cleaning solution का असर अलग हो सकता है। रंग छूटने, पुराने दाग या shrinkage का जोखिम पहले discuss करें और किसी नज़र न आने वाली जगह पर test की उपलब्धता पूछें।"],
      prepare: ["कितने items और कौन से हिस्से साफ कराने हैं, गिन लें।", "कपड़े, cushions और आसपास का सामान हटा दें।", "पुराने दाग, delicate fabric या पहले हुए treatment के बारे में बताएं।"],
      faqs: [["कौन से upholstery items के लिए पूछ सकते हैं?", "सोफा, chairs, cushions और अन्य fabric surfaces के लिए item count के साथ enquiry करें।"], ["क्या हर fabric पर एक जैसा तरीका अपनाया जाता है?", "नहीं, material और care label के अनुसार method बदल सकता है; पहले suitability कन्फर्म करें।"], ["सफाई के बाद fabric कब तक सूखेगा?", "सूखने का समय fabric, मौसम और चुने गए process पर निर्भर करता है; team से अनुमान पूछें।"]],
    },
    en: {
      title: "Chairs & Upholstery Cleaning",
      imageAlt: "Cleaning a sofa and upholstery fabric",
      description: "Ask about cleaning options for chairs, sofas, or other fabric upholstery. Share the item count, material, and condition.",
      included: ["Details about item count, fabric, and condition", "A discussion about suitable cleaning options", "Confirming scope and estimate after assessing the items"],
      storyTitle: "Choose a cleaning approach for the fabric",
      story: ["When enquiring about sofas, dining chairs, office chairs, or cushions, share the item count, fabric type, and stain details. If a care label is available, share that information too.", "Water and cleaning solutions affect fabrics differently. Discuss colour transfer, older stains, or shrinkage risks in advance and ask whether a test on a hidden area is available."],
      prepare: ["Count the items and identify which areas need cleaning.", "Remove clothes, cushions, and nearby belongings.", "Mention old stains, delicate fabric, or previous treatments."],
      faqs: [["Which upholstery items can I enquire about?", "Ask about sofas, chairs, cushions, and other fabric surfaces, and share the item count."], ["Is the same method used for every fabric?", "No. The method can vary by material and care label; confirm suitability first."], ["How long will the fabric take to dry?", "Drying time depends on fabric, weather, and the agreed process. Ask the team for an estimate."]],
    },
  },
};

const serviceKey = new URLSearchParams(window.location.search).get("service");
const selectedService = services[serviceKey];
const serviceContent = document.querySelector("#service-detail");
const notFoundContent = document.querySelector("#service-not-found");
const serviceImage = document.querySelector("#service-detail-image");

if (selectedService) {
  serviceImage.addEventListener("error", () => {
    console.error(`Could not load the ${selectedService.hi.title} detail image: ${serviceImage.src}`);
  });
}

function setDetailLanguage(language) {
  const messages = serviceCopy[language];
  document.documentElement.lang = language;
  document.title = selectedService
    ? messages.pageTitle(selectedService[language].title)
    : messages.homeTitle;
  document.querySelector("#service-meta-description").content = selectedService
    ? selectedService[language].description
    : messages.metaDescription;

  document.querySelectorAll("[data-detail-copy]").forEach((element) => {
    element.textContent = messages[element.dataset.detailCopy];
  });

  document.querySelectorAll("[data-detail-language]").forEach((button) => {
    const isActive = button.dataset.detailLanguage === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (!selectedService) return;

  const content = selectedService[language];
  document.querySelector("#service-detail-title").textContent = content.title;
  document.querySelector("#service-detail-description").textContent = content.description;
  serviceImage.src = selectedService.image;
  serviceImage.alt = content.imageAlt;
  document.querySelector("#service-detail-story-title").textContent = content.storyTitle;
  document.querySelector("#service-detail-story-one").textContent = content.story[0];
  document.querySelector("#service-detail-story-two").textContent = content.story[1];
  document.querySelector("#service-included-list").replaceChildren(
    ...content.included.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }),
  );
  document.querySelector("#service-preparation-list").replaceChildren(
    ...content.prepare.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }),
  );
  document.querySelector("#service-faq-list").replaceChildren(
    ...content.faqs.map(([question, answer]) => {
      const item = document.createElement("details");
      const summary = document.createElement("summary");
      const response = document.createElement("p");
      summary.textContent = question;
      response.textContent = answer;
      item.append(summary, response);
      return item;
    }),
  );
  const whatsappUrl = `https://wa.me/919219059563?text=${encodeURIComponent(`${messages.messageStart} ${content.title}\n${messages.messageArea}`)}`;
  document.querySelector("#service-whatsapp").href = whatsappUrl;
  document.querySelector("#service-whatsapp-bottom").href = whatsappUrl;
  localStorage.setItem("apna-cleaning-language", language);
}

if (selectedService) {
  notFoundContent.hidden = true;
  serviceContent.hidden = false;
} else {
  serviceContent.hidden = true;
  notFoundContent.hidden = false;
}

document.querySelectorAll("[data-detail-language]").forEach((button) => {
  button.addEventListener("click", () => setDetailLanguage(button.dataset.detailLanguage));
});

const savedLanguage = localStorage.getItem("apna-cleaning-language");
setDetailLanguage(savedLanguage === "en" ? "en" : "hi");
document.querySelector("#service-year").textContent = new Date().getFullYear();
