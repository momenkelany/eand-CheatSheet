export const details: string[] = [
  "1- Plan Type : Left-Panel ➡ Product Information ➡ (Plan Name)\n(Press Enter to get more details)",

"2- Usage Limit : 360 ➡ Customer profile ➡ Usage limit",

"3- DCB Limit : 360 ➡ Customer profile ➡ DCB Limit\n(If it appears, so it is activated)\n(ex. App Store / Google Play Purchases)",

"4- Credit Limit : Profile ➡ Account ➡ Dunning ➡ Credit Limit",

"5- Device Limit : Profile ➡ Party ➡ Current ➡ Device Limit Information",

"6- Bad Debt / Accounts Expense : Profile ➡ Party ➡ Current ➡ Bad Debit Details",

"7- Document Registration Expiry : Profile ➡ Party ➡ Profile Audit Trail ➡ Registration Expiry",

"8- CRC Notes : Profile ➡ Account ➡ Dunning ➡ CRC Notes (Credit Control Notes)\n(i.e Knows why is the number closed)",

"9- Amount Due : Profile ➡ Account ➡ Dunning ➡ Amount Due as of now\n(i.e Unbilled Rental)",

"10- VAS : Profile ➡ Account ➡ Subscriptions ➡ VAS + Instalments and All the Other Subscriptions",

"11- EID : Billing ➡ Billing and charges ➡ Searched Account ➡ Invoice Billing Address (Customer Address)",

"12- Proactive Order : Interaction ➡ Account ➡ Proactive order ❓❓❓❓❓",

"13- Future Dated Request : Interaction ➡ Account ➡ Future Dated Request",

"14- Proactive Complaint : Interaction ➡ Account ➡ Proactive Complaint\n(i.e Customer Complaint)\n(ex. Customer had a schedule technician visit)",

"15- Order Followup / Order Status: Interaction ➡ Account ➡ Order ➡ View Sub Orders ➡ View ➡ WFM (Work Force Management)\n(Order subscription and ❓❓❓❓❓)",

"16- Benefits and Remaining of the Plans : Mobile ➡ Network ➡ Allocated Resources ➡ Benefits and remaining of the plan",

"17- Call forwarding Condition / Call Waiting : Mobile ➡ Volte ➡ Call forwarding Condition and Call Waiting (active or not)",

"18- Country Preferred Number : Mobile ➡ Allocated Resources ➡ Country Name ➡ Preferred Number",

"19- Local Preferred Number : Mobile ➡ Networks in Details ➡ Friends and Family (Local Preferred Number)",

"20- International Preferred Number : Mobile ➡ Networks in Details ➡ Friends and Family : International / Home Country Code (International Preferred Number)",

"21- ❕❕❕❕❕ : Mobile ➡ Network ➡ HLR ➡ Roaming, \nMulti-Sim (Primary and Secondary), \nCall Forwarding, \nCall Barring (i.e Can't Call, the number is locked), \nSMS Incoming Status, \nMulti Party Service (❓❓❓❓❓), \nSim Status, \nHot-Line (i.e When the Customer tries to call he goes to the customer service because he has unbilled amount)",

"22- Account Info / B2C : Online ➡ B2C ➡ Personal E-mail, \nUsername (for e& App), \nPrimary Number (in Multi-SIM), \nLinked credit cards",

"23- ❕❕❕❕❕-Paid to ❕❕❕❕❕-Paid : USP ➡ Account Management ➡ Migration\n(from ??????-Paid to ??????-Paid)",

"24- Technician Visit (Paid Visit 155 AED) : USP ➡ Edit Account ➡ Technician Visit",

"25- ❕❕❕❕❕ : USP ➡ Account Management ➡ Edit Account ➡ Home Zone (in search)\n",

"26- Add / Delete add-ons for e-Life : USP ➡ Account Management ➡ Edit Account ➡ Add / Delete add-ons for e-Life (ex. Sports+ 39)",

"27- Technician Visit : USP ➡ Edit Account ➡ Technician Visit ➡ (Smart Living) 157.50 AED (including VAT) Installation Charges (2.4 GHz Only)❓❓❓❓❓"
]

type Topic = { title: string; content: string[] };
export const topics: Topic[] = [
  {
    title: "Esclation / Angry Customer",
    content: []
    // content: [
    //   "1- Pich/ Open: -",
    //   "- TS/ problem solved",
    //   "- Any scenario that doesn't include an issue",
    //   "2- Open/ Don't pich: -",
    //   "- Angry CST",
    //   "- Open or long-opened complaints",
    //   "3- Don't open/ Don't pitch:-",
    //   "- Outage",
    //   "- Wrong IVR> Transfer",
    //   "- Out of Scope \"Social media apps\" / \"Consumer\"",
    //   "- Suspended Accounts",
    //   "- Call about document issue",
    //   "- Open request \"open SR\"",
    //   "- Expired LOA"
    // ]
  },
  {
    title: "Verification Process",
    content: []
    // content: [
    //   "Soft verification: -",
    //   "Company name (At least one name of the company)",
    //   "*We don't need to verify the CST for tech troubleshooting",
    //   "*We don't need to verify the CST if the CST is following up with a reference number",
    //   "Hard verification: -",
    //   "1- If the cst has an active/approved LOA: -",
    //   "*If the CST is calling from the authorized number = no verification is required",
    //   "A- If the CST is calling from the same party ID:",
    //   "for any general info: The company name is enough",
    //   "for any account modification: varication through OTP \"Only\"",
    //   "B- If the CST is calling from a different party ID:",
    //   "for any general info: Company name + OTP",
    //   "* In case LOA is not available for the OTP: provide 1- trade license number/ expiry date 2- establishment number/ expiry date",
    //   "*If the expiry date is old on CIM, accept any future expiry date",
    //   "for any account modification: Company name + OTP. Don't accept trade licenses or establishment details",
    //   "C- If the CST is called from the same phone number: -",
    //   "Company name for general info and account modification (add or delete add-ons) \"Except for block selfcare\"",
    //   "2- If the CST has a No Active/Approved LOA: -",
    //   "A- Same party ID:",
    //   "For any general info: Company name",
    //   "For any account modification: Update LOA",
    //   "B- Different Party ID",
    //   "For any general info: Company name + Manual Verification",
    //   "For any account modification: Update LOA",
    //   "C- IF the CST is calling from the same number",
    //   "For any general info: Company name",
    //   "For account modification except adding or deleting add-ons: CST must update the Documents"
    // ]
  },
  {
    title: "Dunning Account",
    content: []
    // content: [
    //   "- To use B2B Admin/Shadow Access tool:",
    //   "  1- From the main menu choose Corporate Management> Select Corporate Account: *write down the service number",
    //   "  2- From Management List> Select Get Customer View",
    //   "",
    //   "- To get the user's credential/license:",
    //   "  1- From the main menu choose Corporate Management> Select Corporate Account: *write down service number",
    //   "  2- From Management List> Select Get Customer View",
    //   "  3- Search in the portal using the account number> Service Details> Voice User Lines (Manage)",
    //   "* When you have an email: Search user ID",
    //   "",
    //   "- To see user's cameras:",
    //   "  1- From the main menu choose Corporate Management> Select Corporate Account: *write down service number",
    //   "  2- From Management List> Select Get Customer View",
    //   "  3- Services> Fixed Services> Video Surveillance> Manage> View & Manage Camera> Select Video Surveillance ID"
    // ]
  },
  {
    title: "Third Party Services Cancellation",
    content: []
    // content: [
    //   "*If the service is not under the Wayak: Usage> Content Usage Details",
    //   "CIM Smart flow: Billing complaint/ Troubleshooting> Billing dispute/Extra charges> Rental Issues> Third Party service charges",
    //   "   *To check if the CST has a previous refund: Billing> Adjustment and Transfers> Adjustment detailed History (search in the past three months)",
    //   "   * Max refund period is 3 months, max refund limit for agent 200, leader 500. for a refund of more than 200, generate a waiver 'from the info hub article'",
    //   "   *From CODE TOOL: Collection> Adjustment> Create"
    // ]
  },
  {
    title: "Checking unauthorized number (UAE owner)",
   content: [] 
  //  content: [
  //     "CBCM Tool> Favorite> Account inquiry> Search using Account Number"
  //   ]
  },
  {
    title: "Documents Issue, cst can't log in because EID linked to another company (Smart CIM Flow)",
    content: []
    // content: [
    //   "Complaint> Profiling and LOA related> Caller is not the same person in the Authorized contact/s list> Unable to Login /Renew Documents/ enroll new authorized access> Login Error: EID Registered with other PID",
    //   "Search the profile in BCRM using Emirates ID Open BCRM, Click on the filter tab on the left side> Choose \"Contacts\" from the drop-down menu, choose \"Emirates ID\" from the other drop-down menu, and search the Emirates ID number. Then click on \"Results\"",
    //   "If it's linked follow another flow based on CST inputs",
    //   "*1*If cst wants to link: Complaint> VAS Complaint> B2B Issues> Link Party ID> Educate customer to follow new Registration Flow on e& Business Portal (( Device care steps: Self-registration via UAE PASS thru B2B Portal)> follow the rest as per cst inputs"
    // ]
  }
];

type Article = { title: string; content: string[] };
export const articles: Article[] = [
  {
    title: "🔒 Manual Verification",
    content: [
      ` <a href="https://contactcentre.etisalat.corp.ae/main/cc_sections/CompassAnserFlow/AnswerFlowImages/generator/Security%20verification%20questions.html" target="_blank" >Security Verification</a>`
    ]
  },
  {
    title: "📞 CallBack Request",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-B319DBD86A" target="_blank" >CallBack Request</a>`
      , ` <a href="" target="_blank" >Excel Sheet</a>`

    ]
  },
  {
    title: "📊 SLA",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-7Y84ZH_PR689" target="_blank" >SLA Dashboard</a>`
    ]
  },
  {
    title: "📍 e& Store Locations",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-NE76ZL_PR675" target="_blank" >e& Store Locations</a>`
    ]
  },
  {
    title: "🌍 Roam Like Home (RLH)",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-NGLKIN_PL940" target="_blank" >RLH</a>`
    ]
  },
  {
    title: "✈️ Roaming Packages",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-MTMYDH_PL550" target="_blank" >Roaming Packs</a>`
    ]
  },
  {
    title: "📡 Home Wireless",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-J7YYMV_PL994" target="_blank" >Home Wireless</a>`
    ]
  },
  {
    title: "📱 VAS",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-UANAM5_PL632" target="_blank" >Mobile VAS</a>`
    ]
  },
  {
    title: "🎯 Make your own offer",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-9T72VK_OF508" target="_blank" >Make your own offer</a>`
    ]
  },
  {
    title: "💰 Credit Limit / Usage Limit / App Purchase Limit",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-LCYN3F_PR918" target="_blank" >Credit Limit / Usage Limit / App Purchase Limit</a>`
    ]
  },
  {
    title: "✈️ Visitor Line",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-RHKXFO_PL612" target="_blank" >Visitor Line</a>`
    ]
  },
  {
    title: "📱 Go Digital",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-Z6IGL6_PR864" target="_blank" >Go Digital</a>`
    ]
  }
];

type Scenario = { title: string; content: string[] };
export const scenarios: Scenario[] = [
  {
    title: "🔄 Pay Bill for Bad Debt with Account ID through website",
    content: [
      "Test!!!!",
      "Step 1: Get Account Id ",
      ` <a href=\"https://outage.example.corp/\" target=\"_blank\">Go to e& website</a>`
    ]
  },
  {
    title: "🧾 Billing Dispute Scenario",
    content: [
      "Test!!!!",
      "Step 1: Verify invoice & charge history",
      ` <a href=\"https://billing.example.corp/\" target=\"_blank\">Billing Tool</a>`
    ]
  },
  {
    title: "🔧 Device Replacement Scenario",
    content: [
      "Test!!!!",
      "Step 1: Check device warranty & order a replacement",
      ` <a href=\"https://devices.example.corp/\" target=\"_blank\">Device Portal</a>`
    ]
  }
];

type StartupTool = { title: string; content: string[] };
export const startupTools: StartupTool[] = [
  {
    title: "🌐 Contact Centre",
    content: [
      ` <a href="https://contactcentre.etisalat.corp.ae" target="_blank" >Contact Centre</a>`
    ]
  },
  {
    title: "💼 CIM",
    content: [
      ` <a href="http://cim.etisalat.corp.ae/" target="_blank" >CIM</a>`
    ]
  },
  {
    title: "🔐 Manual Verification",
    content: [
      ` <a href="https://contactcentre.etisalat.corp.ae/main/cc_sections/CompassAnserFlow/AnswerFlowImages/generator/Security%20verification%20questions.html" target="_blank" >Security Verification</a>`
    ]
  },
  {
    title: "🏢 InfoHub",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/login" target="_blank" >InfoHub</a>`
    ]
  },
  {
    title: "🔧 Device Care",
    content: [
      ` <a href="https://simulator-devicecare.etisalat.corp.ae:7777/dcss/Default.aspx" target="_blank" >Device Care</a>`
    ]
  },
  {
    title: "📋 Message Board",
    content: [
      ` <a href="https://contactcentre.etisalat.corp.ae/Main/cc_apps/MBN_AD/WebForm/main.aspx" target="_blank" >Message Board</a>`
    ]
  },
  {
    title: "✉️ WebMail / Care Mail",
    content: [
      ` <a href="https://webmail.etisalat.corp.ae/owa" target="_blank" > WebMail / Care Mail</a>`
    ]
  },
  {
    title: "📱 Motive Mobile",
    content: [
      ` <a href="https://10.183.207.2/csc" target="_blank" >Motive Mobile</a>`
    ]
  },
  {
    title: "📞 Motive LandLine",
    content: [
      ` <a href="https://10.183.207.4/csc/startup.do" target="_blank" >Motive LandLine</a>`
    ]
  },
  {
    title: "🏠 Motive HS (Home Services)",
    content: [
      ` <a href="http://10.237.27.3/csc/startup.do" target="_blank" >Motive HS (Home Services)</a>`
    ]
  },
  {
    title: "📺 DTV",
    content: [
      ` <a href="https://10.237.227.11:8000/cms/Default.aspx" target="_blank" >DTV</a>`
    ]
  },
  {
    title: "📍CLA (Customer Locator Application)",
    content: [
      ` <a href="http://egis/customerlocator/logincs.aspx" target="_blank" >CLA (Customer Locator Application)</a>`
    ]
  },
  {
    title: "🔢 Collection and Dunning Engine Code",
    content: [
      ` <a href="https://ssocode.etisalat.corp.ae/code" target="_blank" >Collection Code</a>`
    ]
  },
  {
    title: "🔢 CODE (Login)",
    content: [
      ` <a href="https://ssocode.etisalat.corp.ae/code/codeuserLogin.do" target="_blank" >CODE (Login)</a>`
    ]
  },
  {
    title: "🎵 Orchestra",
    content: [
      ` <a href="http://au4056:9090/OrchestraCCC/login" target="_blank" >Orchestra</a>`
    ]
  },
  {
    title: "🌐 EBW",
    content: [
      ` <a href="http://ssobas.etisalat.corp.ae/BASSelfCare/menuEBWAccServiceDetailsReadOnly.action" target="_blank" >EBW</a>`
    ]
  },
  {
    title: "🔐 Verification (OKM)",
    content: [
      ` <a href="https://okm.etisalat.corp.ae:8226/library/ETISALAT/AnswerFlowImages/generator/Security%20verification%20questions.html" target="_blank" >Verification (OKM)</a>`
    ]
  },
  {
    title: "📖 New OKM",
    content: [
      ` <a href="https://okm.etisalat.corp.ae:8227/infocentermobile/index?page=home" target="_blank" >New OKM</a>`
    ]
  },
  {
    title: "📈 Sahir",
    content: [
      ` <a href="https://cccsahir.etisalat.corp.ae/Sahir/" target="_blank" >Sahir</a>`
    ]
  },
  {
    title: "📞 Tawasul",
    content: [
      ` <a href="https://tawasul-backend.etisalat.corp.ae/SM9.41/index.do" target="_blank" >Tawasul</a>`
    ]
  },
  {
    title: "💳 NGA",
    content: [
      ` <a href="http://10.37.240.78:7001/ngaa/index.html" target="_blank" >NGA</a>`
    ]
  },
  {
    title: "💰 Weyak",
    content: [
      ` <a href="https://pt2.etisalat.ae/ocg/" target="_blank" >Weyak</a>`
    ]
  },
  {
    title: "💳 IPG",
    content: [
      ` <a href="https://ipg.comtrust.ae/Merchant/#/Search" target="_blank" >IPG</a>`
    ]
  },
  {
    title: "📚 eLearning",
    content: [
      ` <a href="https://cc-elearning.etisalat.ae/" target="_blank" >eLearning</a>`
    ]
  },
  {
    title: "✅ FCR Tracker",
    content: [
      ` <a href="https://forms.office.com/r/RY2zhF5TKV" target="_blank" >FCR Tracker</a>`
    ]
  },
  {
    title: "⚙️ Adjustment Generator",
    content: [
      ` <a href="https://contactcentre.etisalat.corp.ae/main/cc_sections/CompassAnserFlow/AnswerFlowImages/generator/Adjustment%20Generator.html" target="_blank" >Adjustment Generator</a>`
    ]
  },
  {
    title: "💸 Waiver Generator",
    content: [
      ` <a href="https://okm.etisalat.corp.ae:8226/library/ETISALAT/AnswerFlowImages/generator/add%20adjusment_frontline.html" target="_blank" >Waiver Generator</a>`
    ]
  },
  {
    title: "🤖 Adjust Dispatcher (RPA)",
    content: [
      ` <a href="https://rpaorchestrator.etisalat.corp.ae:444/processes/home" target="_blank" >Adjust Dispatcher (RPA)</a>`
    ]
  },
  {
    title: "⚡Quick Escalator",
    content: [
      ` <a href="https://basher-tech.me/Escaltion.html" target="_blank" >Quick Escalator</a>`
    ]
  },
  {
    title: "🛠️ Utility Console",
    content: [
      ` <a href="https://basher-tech.me/AdvancedWorkspaceHub.html" target="_blank" >
      💰 VAT Calculator (5%) <br>
      📅 Prorated Calculator <br>
      📆 Prorated (Date Range) <br>
      📞 Phonetic Alphabet Helper <br>
      📧 Mail Helper <br>
      📋 Quick Checklist <br>
      </a>`
    ]
  }
];

export const codesNumbers: string[] = [
  "AVAYA Survey: 71990",
  "Business / Not Authorized: 71431",
  "Prestige AR: 71461",
  "Prestige EN: 71462",
  "CTSC AR/EN: 3154",
  "Home Move Gold AR: 71037",
  "Home Move Gold EN: 71038",
  "EGS Escalation AR/EN: 12183",
  "Enterprise Customers: 8009111",
  "SMB: 8005800",
  "Huawei Support: 80066600",
  "Main Menu: 3137",
  "Cancellation: 8006665",
  "Re-Open Complain (Answer \"No\"): 1661",
  "Balance: *121#",
  "Anti-Spam: DNCR 1012",
  "Play On Demand (Start/Stop): *800#",
  "Usage Limit Increase: *122#",
  "Customer Service: 800101",
  "Wasel Flexi (6 GB): *101*50#",
  "Fleet Management: 800102",
  "Cancellation Arabic: 3582",
  "Cancellation English: 3583",
  "Allowance: *140#",
  "Collection: 023014650",
  "Every Day 1 GB: *101*3030*2#",
];


