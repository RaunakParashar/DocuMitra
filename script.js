const DEOGHAR_DOCUMENTS = [
  // --- Category: id (पहचान पत्र) ---
  {
    id: "aadhaar",
    category: "id",
    title: "आधार कार्ड (Aadhaar Card - नया / सुधार)",
    tag: "UIDAI / डाकघर देवघर",
    desc: "बायोमेट्रिक राष्ट्रीय पहचान और पते का अनिवार्य प्रमाण।",
    time: "नया: 15-30 दिन | सुधार: 3-7 दिन",
    fees: "नया: ₹0 (निःशुल्क) | सुधार: ₹50 - ₹100",
    portal: "uidai.gov.in",
    portalUrl: "https://uidai.gov.in/",
    documents: [
      "पहचान प्रमाण (वोटर कार्ड / पैन कार्ड / स्कूल ID)",
      "पते का प्रमाण (बिजली बिल / राशन कार्ड / जमीन का दस्तावेज / बैंक पासबुक)",
      "जन्म तिथि प्रमाण (जन्म प्रमाण पत्र / 10वीं मार्कशीट)",
      "सक्रिय मोबाइल नंबर (OTP सत्यापन हेतु)",
    ],
    tips: "देवघर प्रधान डाकघर या ब्लॉक स्थित सरकारी केंद्र पर ही जाएं।",
  },
  {
    id: "pan",
    category: "id",
    title: "पैन कार्ड (PAN Card - NSDL / Protean)",
    tag: "आयकर विभाग (Income Tax)",
    desc: "बैंकिंग, वित्तीय लेन-देन और छात्रवृत्ति के लिए 10 अंकों का पैन कार्ड।",
    time: "ई-पैन: 2 से 24 घंटे | फिजिकल कार्ड: 7-15 दिन",
    fees: "डिजिटल: ₹0 | फिजिकल कार्ड: ₹107",
    portal: "protean-tinpan.com",
    portalUrl: "https://www.protean-tinpan.com/services/pan/pan-index.html",
    documents: [
      "आधार कार्ड (मोबाइल लिंक होना चाहिए)",
      "2 पासपोर्ट साइज रंगीन फोटो",
      "सफेद कागज पर हस्ताक्षर की स्कैन कॉपी",
    ],
    tips: "आधार में मोबाइल नंबर लिंक हो तो incometax.gov.in से Instant e-PAN पोर्टल पर 10 मिनट में निःशुल्क पैन बन जाता है।",
  },
  {
    id: "voter",
    category: "id",
    title: "वोटर पहचान पत्र (Voter ID - Form 6)",
    tag: "भारत निर्वाचन आयोग (ECI)",
    desc: "18 वर्ष की आयु पूर्ण होने पर वैधानिक नागरिक मतदान पहचान पत्र।",
    time: "15 से 30 कार्य दिवस",
    fees: "₹0 (पूर्णतः निःशुल्क)",
    portal: "voters.eci.gov.in",
    portalUrl: "https://voters.eci.gov.in/",
    documents: [
      "आयु प्रमाण (आधार / जन्म प्रमाण पत्र)",
      "निवास प्रमाण (बिजली बिल / राशन कार्ड)",
      "1 पासपोर्ट साइज रंगीन फोटो",
      "परिवार के किसी सदस्य का मौजूदा वोटर आईडी नंबर",
    ],
    tips: "Voter Helpline App से खुद फॉर्म भरें या अपने बूथ के BLO से संपर्क करें।",
  },
  {
    id: "driving_licence",
    category: "id",
    title: "ड्राइविंग लाइसेंस (Learner & Permanent DL)",
    tag: "जिला परिवहन कार्यालय (DTO), देवघर",
    desc: "दोपहिया एवं चारपहिया वाहन चलाने का वैधानिक सरकारी लाइसेंस।",
    time: "लर्नर: 24 घंटे | परमानेंट: 15-30 दिन",
    fees: "लर्नर: ₹350 | परमानेंट DL: ₹1000-1500",
    portal: "parivahan.gov.in",
    portalUrl: "https://parivahan.gov.in/parivahan/",
    documents: [
      "आधार कार्ड (पता एवं आयु प्रमाण)",
      "रक्त समूह (Blood Group) रिपोर्ट",
      "10वीं पास प्रमाण पत्र (कमर्शियल वाहनों के लिए)",
    ],
    tips: "लर्नर टेस्ट अब आधार e-KYC के जरिए घर बैठे ऑनलाइन दिया जा सकता है।",
  },
  {
    id: "passport",
    category: "id",
    title: "पासपोर्ट (Passport - Tatkal & Normal)",
    tag: "विदेश मंत्रालय (MEA) / डाकघर पासपोर्ट सेवा केंद्र",
    desc: "विदेश यात्रा और अंतरराष्ट्रीय पहचान के लिए पासपोर्ट।",
    time: "सामान्य: 15-30 दिन | तत्काल: 3-7 दिन",
    fees: "सामान्य: ₹1500 | तत्काल: ₹3500",
    portal: "passportindia.gov.in",
    portalUrl: "https://www.passportindia.gov.in/",
    documents: [
      "आधार कार्ड",
      "पैन कार्ड / वोटर कार्ड",
      "10वीं मार्कशीट",
      "बैंक पासबुक (1 वर्ष का स्टेटमेंट)",
    ],
    tips: "देवघर या धनबाद स्थित पोस्ट ऑफिस पासपोर्ट सेवा केंद्र में स्लॉट बुक किया जा सकता है।",
  },

  // --- Category: revenue (अंचल / राजस्व) ---
  {
    id: "caste",
    category: "revenue",
    title: "जाति प्रमाण पत्र (Caste Certificate)",
    tag: "राजस्व विभाग, देवघर",
    desc: "झारखंड सरकार द्वारा ST / SC / OBC वर्ग के नागरिकों के लिए आरक्षण प्रमाण।",
    time: "15 से 21 कार्य दिवस",
    fees: "₹0 (प्रज्ञा केंद्र CSC शुल्क ₹30-40)",
    portal: "jharsewa.jharkhand.gov.in",
    portalUrl: "https://jharsewa.jharkhand.gov.in/",
    documents: [
      "खतियान की छायाप्रति (जमीन का ऐतिहासिक रिकॉर्ड)",
      "आवेदक का आधार कार्ड",
      "स्व-घोषणा पत्र (Self-Declaration)",
      "ग्राम प्रधान / वार्ड पार्षद का वंशावली सत्यापन",
    ],
    tips: "अगर खतियान पूर्वजों के नाम है तो वंशावली सही क्रम में बनवाकर अटैच करें।",
  },
  {
    id: "income",
    category: "revenue",
    title: "आय प्रमाण पत्र (Income Certificate)",
    tag: "राजस्व विभाग, देवघर",
    desc: "छात्रवृत्ति, ई-कल्याण और योजनाओं के लिए पारिवारिक वार्षिक आय का विवरण।",
    time: "7 से 14 कार्य दिवस",
    fees: "₹0 (निःशुल्क)",
    portal: "jharsewa.jharkhand.gov.in",
    portalUrl: "https://jharsewa.jharkhand.gov.in/",
    documents: [
      "वेतन पर्ची या कृषि आय का नोटरी शपथ पत्र",
      "आधार कार्ड",
      "राशन कार्ड या बिजली बिल",
      "मुखिया / पंचायत सेवक की रिपोर्ट",
    ],
    tips: "ई-कल्याण छात्रवृत्ति के लिए आय प्रमाण पत्र 6 महीने से अधिक पुराना नहीं होना चाहिए।",
  },
  {
    id: "residence",
    category: "revenue",
    title: "स्थानीय निवासी प्रमाण पत्र (Residential)",
    tag: "राजस्व विभाग, देवघर",
    desc: "झारखंड और देवघर का स्थायी नागरिक होने का कानूनी दस्तावेज।",
    time: "15 कार्य दिवस",
    fees: "₹0",
    portal: "jharsewa.jharkhand.gov.in",
    portalUrl: "https://jharsewa.jharkhand.gov.in/",
    documents: [
      "जमीन का खतियान / केवाला / रसीद",
      "आवेदक और पिता का आधार कार्ड",
      "मैट्रिक या अंतिम शैक्षणिक प्रमाण पत्र",
      "वोटर कार्ड या राशन कार्ड",
    ],
    tips: "भूमिहीन आवेदक स्थानीय नियोजन नीति नियमों के तहत नोटरी शपथ पत्र लगाएं।",
  },
  {
    id: "ews",
    category: "revenue",
    title: "EWS प्रमाण पत्र (आर्थिक रूप से कमजोर वर्ग)",
    tag: "अंचल कार्यालय, देवघर",
    desc: "सामान्य वर्ग के परिवारों को नौकरियों व शिक्षा में 10% आरक्षण हेतु।",
    time: "15 से 21 कार्य दिवस",
    fees: "₹0",
    portal: "jharsewa.jharkhand.gov.in",
    portalUrl: "https://jharsewa.jharkhand.gov.in/",
    documents: [
      "वार्षिक पारिवारिक आय प्रमाण (8 लाख से कम)",
      "जमीन का कागजात (5 एकड़ से कम कृषि भूमि)",
      "आधार कार्ड एवं पैन कार्ड",
      "पारिवारिक संपत्ति विवरण",
    ],
    tips: "EWS सर्टिफिकेट सिर्फ 1 वित्तीय वर्ष के लिए मान्य होता है।",
  },
  {
    id: "mutation",
    category: "revenue",
    title: "जमीन दाखिल-खारिज (Land Mutation)",
    tag: "राजस्व एवं भूमि सुधार विभाग",
    desc: "जमीन रजिस्ट्री के बाद सरकारी रजिस्टर (पंजी-II) में नाम दर्ज कराना।",
    time: "30 से 90 कार्य दिवस",
    fees: "₹0 (ऑनलाइन आवेदन)",
    portal: "jharbhoomi.jharkhand.gov.in",
    portalUrl: "https://jharbhoomi.jharkhand.gov.in/",
    documents: [
      "रजिस्ट्री डीड / केवाला की कॉपी",
      "विक्रेता की पूर्व लगान रसीद",
      "आधार कार्ड व मोबाइल नंबर",
    ],
    tips: "आवेदन के बाद अपने राजस्व कर्मचारी की रिपोर्ट ट्रैक करें।",
  },

  // --- Category: welfare (कल्याण व खाद्य) ---
  {
    id: "ration_new",
    category: "welfare",
    title: "नया राशन कार्ड (Green / Pink Ration Card)",
    tag: "खाद्य एवं आपूर्ति विभाग",
    desc: "राष्ट्रीय खाद्य सुरक्षा योजना और राज्य खाद्य योजना के तहत नया राशन कार्ड।",
    time: "30 से 45 कार्य दिवस",
    fees: "निःशुल्क",
    portal: "aahar.jharkhand.gov.in",
    portalUrl: "https://aahar.jharkhand.gov.in/",
    documents: [
      "परिवार के सभी सदस्यों का आधार कार्ड",
      "घर की वरिष्ठ महिला मुखिया का बैंक passbook",
      "आवासीय प्रमाण पत्र (बिजली बिल / जमीन रसीद)",
      "आय प्रमाण पत्र",
      "परिवार का संयुक्त पासपोर्ट साइज रंगीन फोटो",
      "एलपीजी गैस कनेक्शन संख्या (यदि हो)",
    ],
    tips: "राशन कार्ड में मुखिया केवल परिवार की सबसे वरिष्ठ महिला सदस्य को ही बनाया जाता है।",
  },
  {
    id: "ration_member",
    category: "welfare",
    title: "राशन कार्ड में नाम जोड़ना (Add Member)",
    tag: "खाद्य एवं आपूर्ति विभाग / ERCMS",
    desc: "विवाह या नए शिशु के जन्म के बाद राशन कार्ड में नए सदस्य का नाम जोड़ना।",
    time: "15 से 30 कार्य दिवस",
    fees: "₹0 (निःशुल्क ऑनलाइन आवेदन)",
    portal: "aahar.jharkhand.gov.in (ERCMS)",
    portalUrl: "https://aahar.jharkhand.gov.in/",
    documents: [
      "मौजूदा डिजिटल राशन कार्ड नंबर",
      "जोड़े जाने वाले नए सदस्य का आधार कार्ड",
      "नवजात शिशु के मामले में जन्म प्रमाण पत्र",
      "विवाहिता के मामले में विवाह प्रमाण पत्र या मायके का राशन सरेंडर पर्ची",
    ],
    tips: "ERCMS पोर्टल पर ऑनलाइन फॉर्म भरने के बाद पावती को अपने ब्लॉक के MO कार्यालय में जमा अवश्य करें।",
  },
  {
    id: "ayushman",
    category: "welfare",
    title: "आयुष्मान कार्ड (PM-JAY Golden Card)",
    tag: "स्वास्थ्य विभाग / NHA",
    desc: "प्रति वर्ष परिवार को ₹5 लाख तक का कैशलेस अस्पताल इलाज।",
    time: "हाथों-हाथ (24 घंटे में डिजिटल)",
    fees: "₹0 (पूर्णतः निःशुल्क)",
    portal: "beneficiary.nha.gov.in",
    portalUrl: "https://beneficiary.nha.gov.in/",
    documents: [
      "राशन कार्ड (लाल, पीला या हरा कार्ड)",
      "आधार कार्ड",
      "आधार से लिंक सक्रिय मोबाइल नंबर",
    ],
    tips: "सदर अस्पताल देवघर या नजदीकी प्रज्ञा केंद्र पर यह कार्ड निःशुल्क बन जाता है।",
  },
  {
    id: "pension",
    category: "welfare",
    title: "सर्वजन पेंशन योजना (वृद्धा, विधवा, दिव्यांग)",
    tag: "सामाजिक सुरक्षा कोषांग, देवघर",
    desc: "झारखंड सरकार द्वारा पात्र नागरिकों को ₹1000 प्रति माह की सहायता।",
    time: "30 से 60 कार्य दिवस",
    fees: "₹0",
    portal: "jharkhand.gov.in",
    portalUrl: "https://jharkhand.gov.in/",
    documents: [
      "आवेदक का आधार कार्ड",
      "बैंक पासबुक (DBT सक्रिय)",
      "आयु प्रमाण",
      "दिव्यांगता या पति का मृत्यु प्रमाण पत्र (यदि लागू हो)",
    ],
    tips: "फॉर्म भरकर सीधे अपने प्रखंड के BDO कार्यालय में जमा करें।",
  },

  // --- Category: civil (परिवार व नगर निगम) ---
  {
    id: "birth",
    category: "civil",
    title: "जन्म प्रमाण पत्र (Birth Certificate)",
    tag: "देवघर नगर निगम / स्वास्थ्य विभाग",
    desc: "अस्पताल या गृह प्रसव का आधिकारिक सरकारी जन्म पंजीकरण।",
    time: "7 से 21 कार्य दिवस",
    fees: "21 दिन के अंदर ₹0 | विलंब होने पर शुल्क",
    portal: "crsorgi.gov.in",
    portalUrl: "https://crsorgi.gov.in/",
    documents: [
      "अस्पताल का जन्म प्रमाण पर्ची (Discharge Slip)",
      "माता और पिता दोनों का आधार कार्ड",
      "माता-पिता का विवाह प्रमाण पत्र या शपथ पत्र",
    ],
    tips: "21 दिन के भीतर ऑनलाइन दर्ज कराने पर कोई जुर्माना नहीं लगता।",
  },
  {
    id: "death",
    category: "civil",
    title: "मृत्यु प्रमाण पत्र (Death Certificate)",
    tag: "नगर निगम / स्वास्थ्य विभाग",
    desc: "संपत्ति हस्तांतरण, बैंक क्लेम और कानूनी उत्तराधिकार के लिए आवश्यक।",
    time: "7 से 14 कार्य दिवस",
    fees: "निःशुल्क",
    portal: "crsorgi.gov.in",
    portalUrl: "https://crsorgi.gov.in/",
    documents: [
      "डॉक्टर / अस्पताल का मृत्यु प्रमाण पत्र",
      "मृतक का मूल आधार कार्ड",
      "श्मशान रसीद या वार्ड पार्षद की रिपोर्ट",
    ],
    tips: "मृतक के बैंक खाते या बीमा क्लेम के लिए 2-3 मूल प्रतियां सुरक्षित रखें।",
  },
  {
    id: "marriage",
    category: "civil",
    title: "विवाह पंजीकरण (Marriage Certificate)",
    tag: "निबंधन विभाग / नगर निगम देवघर",
    desc: "विवाह का कानूनी प्रमाण पत्र, पासपोर्ट व संयुक्त संपत्ति के लिए अनिवार्य।",
    time: "15 से 30 कार्य दिवस",
    fees: "₹100 - ₹250",
    portal: "jharsewa.jharkhand.gov.in",
    portalUrl: "https://jharsewa.jharkhand.gov.in/",
    documents: [
      "वर और वधू दोनों का आधार कार्ड एवं आयु प्रमाण",
      "शादी का कार्ड",
      "विवाह की संयुक्त फोटो",
      "3 गवाहों के आधार कार्ड",
    ],
    tips: "विवाह के समय दोनों पक्षों की कानूनी उम्र (लड़की 18+, लड़का 21+) होनी चाहिए।",
  },

  // --- Category: labour (किसान व श्रमिक) ---
  {
    id: "pm_kisan",
    category: "labour",
    title: "पीएम किसान सम्मान निधि (PM-Kisan & KCC)",
    tag: "कृषि विभाग, झारखंड",
    desc: "किसानों को सालाना ₹6000 की आर्थिक मदद एवं किसान क्रेडिट कार्ड।",
    time: "सत्यापन उपरांत अगली किस्त में",
    fees: "₹0 (निःशुल्क)",
    portal: "pmkisan.gov.in",
    portalUrl: "https://pmkisan.gov.in/",
    documents: [
      "जमीन की हालिया लगान रसीद / वंशावली",
      "किसान का आधार कार्ड",
      "बैंक पासबुक",
      "मोबाइल नंबर",
    ],
    tips: "पोर्टल पर e-KYC और बैंक खाते में NPCI मैपिंग होना अनिवार्य है।",
  },
  {
    id: "eshram",
    category: "labour",
    title: "ई-श्रम कार्ड (e-Shram Card - कामगार)",
    tag: "श्रम एवं रोजगार मंत्रालय",
    desc: "प्रवासी मजदूरों, निर्माण श्रमिकों, घरेलू कामगारों के लिए राष्ट्रीय कार्ड।",
    time: "तुरंत (Real-time Download)",
    fees: "₹0 (निःशुल्क)",
    portal: "eshram.gov.in",
    portalUrl: "https://eshram.gov.in/",
    documents: [
      "आधार कार्ड",
      "आधार से लिंक सक्रिय मोबाइल नंबर",
      "बैंक खाता विवरण",
    ],
    tips: "असंगठित क्षेत्र के मजदूर इसे अपने फोन से 5 मिनट में खुद बना सकते हैं।",
  },
  {
    id: "labour_card",
    category: "labour",
    title: "झारखंड लेबर कार्ड (BOCW Labour Card)",
    tag: "श्रम विभाग, देवघर",
    desc: "मजदूरों के बच्चों को छात्रवृत्ति, साइकिल, औजार और विवाह अनुदान।",
    time: "30 कार्य दिवस",
    fees: "₹20-50",
    portal: "shramadhan.jharkhand.gov.in",
    portalUrl: "https://shramadhan.jharkhand.gov.in/",
    documents: [
      "आधार कार्ड",
      "बैंक पासबुक",
      "90 दिन निर्माण कार्य का प्रमाण पत्र",
    ],
    tips: "लेबर कार्ड धारकों को हर साल नवीनीकरण कराना पड़ता है।",
  },
];

let selectedDoc = DEOGHAR_DOCUMENTS[0];
let currentCategory = "all";
let checklistState = {};

// DOM Elements
const docsListEl = document.getElementById("docsList");
const docCountEl = document.getElementById("docCount");
const searchInput = document.getElementById("docSearch");
const voiceBtn = document.getElementById("voiceBtn");
const voiceStatus = document.getElementById("voiceStatus");
const ttsBtn = document.getElementById("ttsBtn");
const ttsPauseBtn = document.getElementById("ttsPauseBtn");
const whatsappBtn = document.getElementById("whatsappShareBtn");
const filterPills = document.querySelectorAll(".pill");

// Filter & Render List
function renderList() {
  const query = searchInput.value.trim().toLowerCase();
  docsListEl.innerHTML = "";

  const filtered = DEOGHAR_DOCUMENTS.filter((doc) => {
    const matchesCategory =
      currentCategory === "all" || doc.category === currentCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(query) ||
      doc.desc.toLowerCase().includes(query) ||
      doc.tag.toLowerCase().includes(query) ||
      doc.documents.some((d) => d.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  docCountEl.innerText = `${filtered.length} उपलब्ध`;

  if (filtered.length === 0) {
    docsListEl.innerHTML = `
      <div class="empty-state">
        <p style="font-size:24px; margin-bottom:8px;">📂</p>
        <strong style="color:#0f172a; display:block; margin-bottom:4px;">कोई दस्तावेज़ नहीं मिला</strong>
        <span style="font-size:12px;">कृपया दूसरा शब्द खोजें या 'सभी सेवाएँ' पर क्लिक करें।</span>
      </div>
    `;
    return;
  }

  if (!filtered.some((d) => d.id === selectedDoc.id)) {
    selectedDoc = filtered[0];
    renderDetails();
  }

  filtered.forEach((doc) => {
    const item = document.createElement("div");
    item.className = `doc-item ${doc.id === selectedDoc.id ? "selected" : ""}`;
    item.innerHTML = `
      <span class="tag">${doc.tag}</span>
      <h3>${doc.title}</h3>
      <p>${doc.desc}</p>
    `;
    item.onclick = () => {
      selectedDoc = doc;
      renderList();
      renderDetails();
    };
    docsListEl.appendChild(item);
  });
}

// Render Details Card
function renderDetails() {
  document.getElementById("docTag").innerText = selectedDoc.tag;
  document.getElementById("docTitle").innerText = selectedDoc.title;
  document.getElementById("docDesc").innerText = selectedDoc.desc;
  document.getElementById("docTime").innerText = selectedDoc.time;
  document.getElementById("docFees").innerText = selectedDoc.fees;

  const portalEl = document.getElementById("docPortal");
  const portalLink = document.getElementById("docPortalLink");
  portalEl.innerText = selectedDoc.portal;
  portalLink.href = selectedDoc.portalUrl;
  portalLink.target = "_blank";
  portalLink.rel = "noopener noreferrer";

  document.getElementById("docTip").innerHTML =
    `<strong>ज़रूरी सलाह:</strong> ${selectedDoc.tips}`;

  const container = document.getElementById("checklistItems");
  container.innerHTML = "";

  selectedDoc.documents.forEach((docItem, idx) => {
    const key = `${selectedDoc.id}-${idx}`;
    const isChecked = !!checklistState[key];

    const row = document.createElement("div");
    row.className = `check-row ${isChecked ? "checked" : ""}`;
    row.innerHTML = `
      <span>${idx + 1}. ${docItem}</span>
      <input type="checkbox" ${isChecked ? "checked" : ""} />
    `;
    row.onclick = () => {
      checklistState[key] = !checklistState[key];
      renderDetails();
    };
    container.appendChild(row);
  });
}

// Category Pills Click Event
filterPills.forEach((pill) => {
  pill.onclick = () => {
    filterPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    currentCategory = pill.dataset.cat;
    renderList();
  };
});

// Hindi Voice Search (Web Speech API)
voiceBtn.onclick = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert(
      "Aapke browser me voice search support nahi hai. Google Chrome use karein.",
    );
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "hi-IN";

  recognition.onstart = () => {
    voiceBtn.classList.add("active");
    voiceStatus.innerText = "सुन रहे हैं...";
  };

  recognition.onend = () => {
    voiceBtn.classList.remove("active");
    voiceStatus.innerText = "बोलकर खोजें";
  };

  recognition.onresult = (e) => {
    const spokenText = e.results[0][0].transcript.replace(/[।.]/g, "").trim();
    searchInput.value = spokenText;
    currentCategory = "all";
    filterPills.forEach((p) =>
      p.classList.toggle("active", p.dataset.cat === "all"),
    );

    const matched = DEOGHAR_DOCUMENTS.find(
      (doc) =>
        doc.title.toLowerCase().includes(spokenText.toLowerCase()) ||
        doc.desc.toLowerCase().includes(spokenText.toLowerCase()) ||
        doc.documents.some((d) =>
          d.toLowerCase().includes(spokenText.toLowerCase()),
        ),
    );
    if (matched) selectedDoc = matched;

    renderList();
    renderDetails();
  };

  recognition.start();
};

// Hindi speech formatting (Devanagari smooth flow)
function sanitizeTextForHindiSpeech(text) {
  // यहाँ e-pan या ई-पैन को सीधे 'डिजिटल कार्ड' में बदला गया है
  text = text.replace(/ई\s*-\s*पैन/gi, "डिजिटल कार्ड");
  text = text.replace(/\be-?pan\b/gi, "डिजिटल कार्ड");

  const numberMap = {
    0: "शून्य",
    1: "एक",
    2: "दो",
    3: "तीन",
    4: "चार",
    5: "पाँच",
    6: "छह",
    7: "सात",
    8: "आठ",
    9: "नौ",
    10: "दस",
    14: "चौदह",
    15: "पंद्रह",
    20: "बीस",
    21: "इक्कीस",
    24: "चौबीस",
    30: "तीस",
    36: "छत्तीस",
    40: "चालीस",
    45: "पैंतालीस",
    50: "पचास",
    60: "साठ",
    90: "नब्बे",
    100: "सौ",
    107: "एक सौ सात",
    250: "दो सौ पचास",
    350: "तीन सौ पचास",
    1000: "एक हज़ार",
    1500: "एक हज़ार पाँच सौ",
    3500: "तीन हज़ार पाँच सौ",
    5000: "पाँच हज़ार",
    6000: "छह हज़ार",
  };

  const wordMap = {
    "incometax.gov.in": "इनकम टैक्स पोर्टल",
    "instant e-pan": "तुरंत डिजिटल कार्ड",
    instant: "तुरंत",
    aadhaar: "आधार",
    aadhar: "आधार",
    card: "कार्ड",
    voter: "वोटर",
    id: "आईडी",
    dl: "डीएल",
    otp: "ओटीपी",
    csc: "प्रज्ञा केंद्र",
    pm: "प्रधानमंत्री",
  };

  let clean = text
    .replace(/\([^)]*\)/g, "")
    .replace(/₹\s*(\d+)\s*(?:-|से)\s*₹?\s*(\d+)/gi, (match, p1, p2) => {
      const n1 = numberMap[p1] || p1;
      const n2 = numberMap[p2] || p2;
      return `${n1} रुपये से ${n2} रुपये`;
    })
    .replace(/(\d+)\s*-\s*(\d+)/g, (match, p1, p2) => {
      const n1 = numberMap[p1] || p1;
      const n2 = numberMap[p2] || p2;
      return `${n1} से ${n2}`;
    })
    .replace(/2\s*से\s*24/g, "दो से चौबीस")
    .replace(/7\s*से\s*15/g, "सात से पंद्रह")
    .replace(/15\s*से\s*30/g, "पंद्रह से तीस")
    .replace(/3\s*से\s*7/g, "तीन से सात")
    .replace(/₹\s*0\b/g, "शून्य रुपये")
    .replace(/₹\s*(\d+)/g, (match, p1) => `${numberMap[p1] || p1} रुपये`)
    .replace(/₹/g, "रुपये ")
    .replace(/\|/g, "। ")
    .replace(/\//g, " या ")
    .replace(/&/g, " और ")
    .replace(/\bहैं\b/g, "है")
    .replace(/\s+है\s*।/g, " है।");

  Object.keys(wordMap).forEach((word) => {
    const reg = new RegExp(word.replace(".", "\\."), "gi");
    clean = clean.replace(reg, wordMap[word]);
  });

  const sortedNums = Object.keys(numberMap).sort((a, b) => b.length - a.length);
  sortedNums.forEach((num) => {
    const reg = new RegExp(`\\b${num}\\b`, "g");
    clean = clean.replace(reg, numberMap[num]);
  });

  clean = clean.replace(/[a-zA-Z]+/g, "");
  return clean.replace(/\s+/g, " ").trim();
}

// Conversational Hindi Narration Builder
function buildHumanNarration(doc) {
  const cleanTitle = doc.title.replace(/\([^)]*\)/g, "").trim();

  const script = `
    आप देख रहे हैं ${cleanTitle} की जानकारी। 
    समय सीमा की बात करें तो इसमें ${doc.time} का समय लगता है। 
    इसके लिए निर्धारित सरकारी शुल्क ${doc.fees} है। 
    आप यहाँ दिए गए लिंक से सीधे आवेदन कर सकते हैं। 
    आवेदन करते समय आपके पास ये जरूरी कागजात होने चाहिए। 
    ${doc.documents.join("। साथ ही ")}। 
    एक जरूरी सलाह, ${doc.tips}।
  `;

  return sanitizeTextForHindiSpeech(script);
}

// --- Voice Preloader (Soft Natural Female Priority) ---
let cachedFemaleVoice = null;

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const allVoices = window.speechSynthesis.getVoices();
  if (!allVoices || allVoices.length === 0) return;

  const isMale = (v) => {
    const name = v.name.toLowerCase();
    return (
      name.includes("male") ||
      name.includes("ravi") ||
      name.includes("hemant") ||
      name.includes("david") ||
      name.includes("madhav") ||
      name.includes("george")
    );
  };

  let voice = allVoices.find(
    (v) =>
      (v.lang === "hi-IN" || v.lang.startsWith("hi")) &&
      (v.name.includes("Google हिन्दी") ||
        v.name.toLowerCase().includes("swara") ||
        v.name.toLowerCase().includes("kalpana") ||
        v.name.toLowerCase().includes("natural")),
  );

  if (!voice) {
    voice = allVoices.find(
      (v) => (v.lang === "hi-IN" || v.lang.startsWith("hi")) && !isMale(v),
    );
  }

  if (!voice) {
    voice = allVoices.find(
      (v) =>
        v.lang === "en-IN" &&
        (v.name.toLowerCase().includes("female") ||
          v.name.toLowerCase().includes("heera") ||
          v.name.toLowerCase().includes("neerja")),
    );
  }

  if (voice) {
    cachedFemaleVoice = voice;
  }
}

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// --- Native Smooth Speech Engine (Exact Offset Resume & No Repeat) ---
let fullNarrationScript = "";
let currentWordCharOffset = 0;
let isPausedState = false;

function speakFromOffset(charOffset) {
  window.speechSynthesis.cancel();

  let safeOffset = charOffset;
  if (safeOffset > 0 && safeOffset < fullNarrationScript.length) {
    if (fullNarrationScript[safeOffset] !== " ") {
      const nextSpace = fullNarrationScript.indexOf(" ", safeOffset);
      if (nextSpace !== -1 && nextSpace - safeOffset < 10) {
        safeOffset = nextSpace + 1;
      }
    }
  }

  const remainingScript = fullNarrationScript.slice(safeOffset).trim();
  if (!remainingScript) {
    resetTtsButtons();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(remainingScript);
  utterance.lang = "hi-IN";
  utterance.rate = 0.92;
  utterance.pitch = 1.05;

  if (!cachedFemaleVoice) {
    loadVoices();
  }
  if (cachedFemaleVoice) {
    utterance.voice = cachedFemaleVoice;
  }

  utterance.onboundary = (event) => {
    if (event.charIndex !== undefined) {
      currentWordCharOffset = safeOffset + event.charIndex;
    }
  };

  utterance.onstart = () => {
    ttsBtn.innerHTML = "⏹️";
    if (ttsPauseBtn) {
      ttsPauseBtn.style.display = "inline-flex";
      ttsPauseBtn.innerHTML = "⏸️";
    }
  };

  utterance.onend = () => {
    if (!isPausedState) {
      resetTtsButtons();
    }
  };

  utterance.onerror = (e) => {
    if (e.error !== "canceled" && e.error !== "interrupted") {
      resetTtsButtons();
    }
  };

  window.speechSynthesis.speak(utterance);
}

// Master Play / Stop Button
ttsBtn.onclick = () => {
  if (!("speechSynthesis" in window)) {
    alert("Aapke browser me voice engine support nahi hai.");
    return;
  }

  if (window.speechSynthesis.speaking || isPausedState) {
    window.speechSynthesis.cancel();
    resetTtsButtons();
    return;
  }

  fullNarrationScript = buildHumanNarration(selectedDoc);
  currentWordCharOffset = 0;
  isPausedState = false;

  speakFromOffset(0);
};

// Pause / Resume Toggle (Exact Position Memory)
if (ttsPauseBtn) {
  ttsPauseBtn.onclick = () => {
    if (!("speechSynthesis" in window)) return;

    if (!isPausedState) {
      isPausedState = true;
      window.speechSynthesis.cancel();
      ttsPauseBtn.innerHTML = "▶️";
    } else {
      isPausedState = false;
      ttsPauseBtn.innerHTML = "⏸️";
      speakFromOffset(currentWordCharOffset);
    }
  };
}
// --- Night Mode Toggle Logic ---
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Check if user had dark mode enabled previously
if (localStorage.getItem("portal_theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggleBtn) themeToggleBtn.innerText = "☀️";
}

if (themeToggleBtn) {
  themeToggleBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("portal_theme", "dark");
      themeToggleBtn.innerText = "☀️"; // Subah ka icon
    } else {
      localStorage.setItem("portal_theme", "light");
      themeToggleBtn.innerText = "🌙"; // Raat ka icon
    }
  };
}

// Reset UI
function resetTtsButtons() {
  isPausedState = false;
  currentWordCharOffset = 0;
  fullNarrationScript = "";
  window.speechSynthesis.cancel();
  ttsBtn.innerHTML = "🔊";
  if (ttsPauseBtn) {
    ttsPauseBtn.style.display = "none";
    ttsPauseBtn.innerHTML = "⏸️";
  }
}
// WhatsApp Checklist Sharing
whatsappBtn.onclick = () => {
  const docsText = selectedDoc.documents
    .map((doc, idx) => `${idx + 1}. ${doc}`)
    .join("\n");

  const rawMessage = `*${selectedDoc.title}*

*समय सीमा:* ${selectedDoc.time}
*सरकारी शुल्क:* ${selectedDoc.fees}
*आधिकारिक पोर्टल:* ${selectedDoc.portalUrl}

*ज़रूरी कागज़ात:*
${docsText}

*सुझाव:* ${selectedDoc.tips}`;

  const encodedMessage = encodeURIComponent(rawMessage);
  window.open(`https://api.whatsapp.com/send?text=${encodedMessage}`, "_blank");
};

// Live Search Input Listener
searchInput.addEventListener("input", renderList);

// Initial Load
renderList();
renderDetails();
