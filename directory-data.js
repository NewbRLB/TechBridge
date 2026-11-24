// directory-data.js
// TechBridge Community Resource Directory entries (Taguig & Metro Manila)
// Includes Contact Information and Source / Reference placeholders for Data & Research verification.

const directoryResources = [
  // CATEGORY 1: Free Public Wi-Fi & Computer Access
  {
    title: "Taguig City Public Library",
    category: "wifi",
    categoryLabel: "Free Wi-Fi & Computer Access",
    verified: false,
    location: "Taguig City [Verify exact branch and address]",
    hours: "Typically weekdays, daytime hours [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Use free Wi-Fi on your own phone or laptop",
      "Use a public computer (some libraries have a time limit)",
      "Study or read in a quiet space",
      "Ask library staff for simple help with searching for information"
    ],
    tip: "A valid ID or student ID (many libraries ask for one to register), your own earphones, a flash drive if you need to save files, and ask about the time limit on computers when you arrive."
  },
  {
    title: "National Library of the Philippines",
    category: "wifi",
    categoryLabel: "Free Wi-Fi & Computer Access",
    verified: false,
    location: "T.M. Kalaw Street, Ermita, Manila [Verify]",
    hours: "Usually open on weekdays [Verify, including weekend schedule]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Research and study in a large reading area",
      "Use digital resources and computer stations",
      "Ask staff how to register as a library user"
    ],
    tip: "A valid government-issued or school ID, a notebook and pen (since some areas limit devices), and arrive early on busy days, especially during exam season."
  },
  {
    title: "Tech4ED / Digital Hub near you",
    category: "wifi",
    categoryLabel: "Free Wi-Fi & Computer Access",
    verified: false,
    location: "[Verify: nearest Tech4ED center or community digital hub through DICT or your barangay]",
    hours: "[Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Use computers and the internet for free or at a low fee",
      "Get a helper's guidance if you're unsure how to start",
      "Join community learning sessions (when offered)"
    ],
    tip: "A valid ID, your questions (staff are there to help), and ask if they offer printing or scanning."
  },
  {
    title: "Barangay Hall / Free Wi-Fi Spots",
    category: "wifi",
    categoryLabel: "Free Wi-Fi & Computer Access",
    verified: false,
    location: "Your local barangay hall or plaza [Verify: ask which barangays in Taguig offer free Wi-Fi]",
    hours: "Barangay hall hours are usually weekdays [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Connect to free public Wi-Fi where available",
      "Ask the barangay office about nearby computer or training programs"
    ],
    tip: "Your phone and charger, and avoid banking or entering passwords on public Wi-Fi."
  },
  {
    title: "School or University Computer Lab",
    category: "wifi",
    categoryLabel: "Free Wi-Fi & Computer Access",
    verified: false,
    location: "Public schools, Taguig City University, or nearby colleges [Verify which labs welcome community or alumni use]",
    hours: "Usually school days only [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Use computers for school requirements, research, and typing",
      "Ask whether the lab opens to the community or to parents",
      "Find out about school-led digital programs"
    ],
    tip: "A student ID or a letter from your school, a flash drive or your school email login, and ask the school office first since access rules differ."
  },

  // CATEGORY 2: Digital Literacy & Tech Training
  {
    title: "DICT Digital Literacy Programs",
    category: "training",
    categoryLabel: "Digital Literacy & Tech Training",
    verified: false,
    location: "Department of Information and Communications Technology (DICT) and partner centers [Verify: current training sites and online schedule]",
    hours: "Varies by session [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Learn basic computer and smartphone skills",
      "Practice staying safe online",
      "Find out where free trainings are happening near you"
    ],
    tip: "A valid ID, your own phone or laptop if you have one, a notebook for jotting down steps, and sign up early since some sessions have limited slots."
  },
  {
    title: "Government Online Portal Help Desk",
    category: "training",
    categoryLabel: "Digital Literacy & Tech Training",
    verified: false,
    location: "City Hall, local government offices, or barangay help desks [Verify which offices offer assisted online services]",
    hours: "Usually weekdays during office hours [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Get help creating or logging into accounts for government services (such as SSS, PhilHealth, Pag-IBIG, GSIS, or eGov-related portals)",
      "Learn how to fill out and submit online forms",
      "Ask how to book appointments online"
    ],
    tip: "Valid IDs and documents needed for your request, your mobile number and email address for codes—never share your password or one-time code (OTP) with anyone, including helpers."
  },
  {
    title: "Library or Community Center Workshops",
    category: "training",
    categoryLabel: "Digital Literacy & Tech Training",
    verified: false,
    location: "[Verify: Taguig library, senior citizens' office (OSCA), youth center, or community center]",
    hours: "[Verify: ask for the monthly workshop calendar]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Join beginner classes for smartphones, video calls, or email",
      "Get patient one-on-one help, especially for older adults",
      "Learn how to spot online scams"
    ],
    tip: "Your smartphone with some battery left, a trusted family member or friend if helpful, and ask whether classes are offered in Filipino or English."
  },
  {
    title: "TESDA Online Program",
    category: "training",
    categoryLabel: "Digital Literacy & Tech Training",
    verified: false,
    location: "Online, plus TESDA offices and partner centers in Taguig and Metro Manila [Verify nearest TESDA center]",
    hours: "Online courses can be studied anytime; center hours vary [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Take free online courses at your own pace",
      "Learn basic computer skills and other practical skills",
      "Ask about certificates or assessments after you finish a course"
    ],
    tip: "An email address and mobile number to register, a phone or computer with an internet connection, and start with a beginner course one lesson at a time."
  },
  {
    title: "Senior Citizens' Office (OSCA) Tech Help",
    category: "training",
    categoryLabel: "Digital Literacy & Tech Training",
    verified: false,
    location: "Taguig City OSCA or your barangay senior citizens' desk [Verify]",
    hours: "[Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Ask about phone and computer sessions made for older adults",
      "Get help with video calls, so you can talk to family far away",
      "Learn how to use online services for senior benefits"
    ],
    tip: "Your senior citizen ID, your phone fully charged, and a family member or friend if you'd like company."
  },
  {
    title: "Youth & Student Tech Programs",
    category: "training",
    categoryLabel: "Digital Literacy & Tech Training",
    verified: false,
    location: "[Verify: Sangguniang Kabataan (SK) office, city youth office, or school programs in your barangay]",
    hours: "[Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Join free workshops on typing, online research, and safe social media use",
      "Practice making a simple résumé or school presentation",
      "Meet other students who are learning too"
    ],
    tip: "A student ID, a notebook or USB drive, and ask parents or guardians to review the program details with you."
  },

  // CATEGORY 3: E-Waste Drop-Off & Tech Recycling
  {
    title: "Barangay Materials Recovery Facility",
    category: "ewaste",
    categoryLabel: "E-Waste Drop-Off & Tech Recycling",
    verified: false,
    location: "Your barangay's MRF or hall [Verify: ask if your barangay accepts e-waste or holds collection days]",
    hours: "[Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Ask where small e-waste can be dropped off",
      "Find out about scheduled community e-waste collection drives"
    ],
    tip: "Sort items first (phones, chargers, cables, and batteries together) and call ahead since not every barangay accepts every item."
  },
  {
    title: "Mobile Network Store E-Waste Bins",
    category: "ewaste",
    categoryLabel: "E-Waste Drop-Off & Tech Recycling",
    verified: false,
    location: "Selected stores of major mobile providers in malls around Taguig (such as BGC) and Metro Manila [Verify: which stores currently have bins]",
    hours: "Mall or store hours, usually daily [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Drop off old phones, chargers, and small gadgets",
      "Safely dispose of used batteries"
    ],
    tip: "Back up photos and contacts first, sign out of accounts (Google, Apple, Facebook), factory reset to erase data, and remove SIM and memory card."
  },
  {
    title: "DENR-Accredited E-Waste Recycler",
    category: "ewaste",
    categoryLabel: "E-Waste Drop-Off & Tech Recycling",
    verified: false,
    location: "[Verify: check the DENR-EMB list of accredited hazardous waste treaters and recyclers]",
    hours: "[Verify, and ask whether an appointment is needed]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Drop off larger items like old computers, monitors, printers, and TVs",
      "Recycle broken gadgets responsibly"
    ],
    tip: "Ask if there is a fee or minimum quantity, request a receipt or certificate for school/office drop-offs, and wipe or remove hard drives."
  },
  {
    title: "Community E-Waste Collection Drives",
    category: "ewaste",
    categoryLabel: "E-Waste Drop-Off & Tech Recycling",
    verified: false,
    location: "Taguig City Hall, city environment office, schools, or barangay events [Verify: ask the city environment office about upcoming collection days]",
    hours: "Scheduled events only, often announced on official city or barangay pages [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Drop off small and medium e-waste on a collection day",
      "Learn which items are accepted and how they are handled",
      "Join neighbors and schools in clean-up and recycling programs"
    ],
    tip: "A list of items you're bringing, a bag or box to keep items together, and follow official announcements since dates change often."
  },
  {
    title: "Battery Drop-Off Points",
    category: "ewaste",
    categoryLabel: "E-Waste Drop-Off & Tech Recycling",
    verified: false,
    location: "[Verify: participating supermarkets, hardware stores, malls, or barangay MRFs with battery bins]",
    hours: "Store hours, usually daily [Verify]",
    contact: "[To be supplied and verified by the Data and Research team]",
    source: "[To be supplied by the Data and Research team]",
    services: [
      "Drop off used household batteries (AA, AAA, button cells)",
      "Ask staff which battery types they accept"
    ],
    tip: "Keep batteries in a clear bag separate from other items, tape the ends of larger batteries, and never throw batteries in regular trash or burn them."
  }
];
