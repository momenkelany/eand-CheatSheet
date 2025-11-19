export const details: string[] = [
"1- Plan Type : Left-Panel ➡ Product Information ➡ (Plan Name)",

"2- Usage Limit : 360 ➡ Customer profile ➡ Usage limit",

"3- DCB Limit : 360 ➡ Customer profile ➡ DCB Limit\n(If it appears, so it is activated)\n(ex. App Store / Google Play Purchases)",

"4- Credit Limit : Profile ➡ Account ➡ Dunning ➡ Credit Limit",

"5- Device Limit : Profile ➡ Party ➡ Current ➡ Device Limit Information",

"6- Bad Debt / Accounts Expense : Profile ➡ Party ➡ Current ➡ Bad Debit Details",

"7- Document Registration Expiry : Profile ➡ Party ➡ Profile Audit Trail ➡ Registration Expiry",

"8- CRC Notes : Profile ➡ Account ➡ Dunning ➡ CRC Notes (Credit Control Notes)\n(i.e To know the reason of disconnection ex. OutgoingBar (OG) - Toss - Ceased - Home Region",

"9- Amount Due : Profile ➡ Account ➡ Dunning ➡ Amount Due as of now\n(i.e Unbilled Rental)",

"10- Active Add-ons and Subscriptions (VAS) : Profile ➡ Account ➡ Subscriptions ➡ VAS + Instalments and All the Other Subscriptions",

"11- View Previous Bills : Billing ➡ Billing and Charges ➡ Searched Account",

"12- Future Dated Request : Interaction ➡ Account ➡ Future Dated Request",

"13- Proactive Complaint : Interaction ➡ Account ➡ Proactive Complaint\n(i.e The system created an Proactive Complaint Automatically)\n(ex. when customer has an issue of elife service, to send technician visit for free)",

"14- Check Installation / Technician Visit / Shifting Appointment Date (Order Followup / Order Status): Interaction ➡ Account ➡ Order ➡ View Sub Orders ➡ View ➡ WFM (Work Force Management)",

"15- Check elife Installation Address: Interaction ➡ Account ➡ Order ➡ View Sub Orders ➡ View ➡ Installation Address",

"16- Check Location Home Ready or Not for Installation : Interaction ➡ Account ➡ Order ➡ View Sub Orders ➡ View ➡ EID Details",

"17- Benefits and Remaining of the Plans : Mobile ➡ Network ➡ Allocated Resources ➡ Benefits and remaining of the plan",

"18- Call Forwarding / Call Waiting Condition: Mobile ➡ Volte ➡ Call forwarding Condition and Call Waiting (active or not)",

"19- Local Preferred Number : Mobile ➡ Networks in Details ➡ Friends and Family (Local Preferred Number)",

"20- International Preferred Number : Mobile ➡ Networks in Details ➡ Friends and Family : International / Home Country Code (International Preferred Number)",

"21- Country Preferred Number : Mobile ➡ Allocated Resources ➡ Country Name ➡ Preferred Number",

"22- Check Roaming Profile Status (Country and Operator) :  Mobile ➡ Network ➡ HLR ➡ Roaming details, \nMulti-Sim (Primary and Secondary), \nCall Forwarding, \nCall Barring (i.e preventing incoming calls), \nSMS Incoming Status, \nMulti Party Service, \nSMS Incoming Status, \nHot-Line (i.e a service that stop incoming calls and directed the calls to customer service because he has unbilled amount)",

"23- Check App Username and Primary number and email: Online ➡ B2C ➡ Personal E-mail, \nUsername (for e& App), \nPrimary Number (of party ID), \nLinked credit cards",

"24- Post-Paid to Pre-Paid : USP ➡ Account Management ➡ Migration\n(from PostPaid to PrePaid) ➡ Select Produce ➡ Prepaid ➡ Wasel",

"25- Technician Visit (Paid Visit 157.5 AED VAT included) : USP ➡ Edit Account ➡ Technician Visit",

"26- Additional elife Router : USP ➡ Account Management ➡ Edit Account ➡ Home Zone (in search)",

"27- Add / Delete add-ons for e-Life : USP ➡ Account Management ➡ Edit Account ➡ Add / Delete add-ons for e-Life (ex. Sports+ 39)",
]

type Topic = { title: string; content: string[] };
export const topics: Topic[] = [
  {
    title: "Renew Registration",
    content: ["Keyword: Renew","How to renew mobile registration using UAE PASS via Mobile app -: PictureGuideTitle"]
  
  },
  {
    title: "View Bill",
    content: ["Keyword: pdf","How to View Bill (view PDF) -: PictureGuideTitle"]
  
  },
  {
    title: "View Current Plan",
    content: ["Keyword: benefits", "Know Base Plan Benefits -: PictureGuideTitle"]
   
  },
  {
    title: "Make Your Own Offer",
    content: ["Keyword: make your","Make Your Own Offer PictureGuideTitle"]
   
  },
  {
    title: "Deals for you",
   content: ["Keyword: deals","Deals for you subscription -: PictureGuideTitIe"] 
  },
  {
    title: "Cancel add-on / Third Party Services Subscriptions",
    content: ["Keyword: cancel any","How to cancel any of your add-ons and Third Party Services subscriptions-; Picture ideTitle"]
    
  },
   {
    title: "Check and Analyze Usage (calls, SMS and data)",
    content: ["Keyword:analyze","How to check and analyze usage (calls, SMS and data)—; PictureGUideTitle"]
  
  },
   {
    title: "Change Usage Limit / Charges",
    content: ["Keyword:Usage charge","Setting Usage Charges Limit via Mobile app PictureGuideTitle"]
  
  },
   {
    title: "Change dcb limit / App Store Purchase limit",
    content: ["Keyword: app store","Setting app store purchase limit using mobile app -: PictureGuideTitle"]
  
  },
  {
    title: "Decrease Credit Limit",
    content: ["Keyword:Credit L","Credit Limit via Mobile app -: PictureGuideTitle"]
  
  },
   {
    title: "Migrate from Prepaid to Postpaid (eligibility auto check)",
    content: ["Keyword:migrate","How to Migrate from Prepaid to Postpaid (eligibility auto check) PictureGuideTitIe"]
  
  },
   {
    title: "Migrate from Prepaid to Postpaid (manual upload of documents)",
    content: ["Keyword:migrate","How to Migrate from Prepaid to Postpaid (manual upload Of documents) PictureGuideT1tle"]
  
  },
   {
    title: "Apply for eSlM Replacement with UAE Pass",
    content: ["Keyword:esim replace","How to apply for eSlM Replacement with UAE Pass -: PictureGuideTitle"]
  
  },
   {
    title: "eSlM replacement",
    content: ["Keyword:esim replacement","How to do Apple watch eSlM replacement through UAE APP With facial recognition PictureGuideTitle"]
  
  },
  {
    title: "Transfer Active eSlM from old iPhone to new iPhone",
    content: ["Keyword:esim from","How to transfer active eSiM from oid 'Phone to new iPhone -: PictureGuideTitle"]
  
  },
   {
    title: "Change Postpaid Plans (Upgrade - Downgrade - Change Flavor - Migrate)",
    content: ["Keyword:flavor","How to change Postpaid plans (Upgrade%2C Downgrade%2C Change flavor%2C Migrate) PictureGuideTitle"]
  
  },
   {
    title: "Change Preferred Country",
    content: ["Keyword:preferred c","How to manage preferred Country PictureGuideTitle"]
  
  },
   {
    title: "Change Preferred Number",
    content: ["Keyword:preferred n","How to manage preferred number included in the plan PictureGuideTitle"]
  
  },
   {
    title: "Contract Renewal elife",
    content: ["Keyword:contract r","elife Contract Renewal via mobile app -: PictureGuideTitle"]
  
  },
   {
    title: "Contact Renewal Postpaid",
    content: ["Keyword:contract r","Mobile Postpaid Contract Renewal via mobile app -: PictureGuideTitle"]
  
  },
   
   {
    title: "Pay in Advance",
    content: ["Keyword:advance","How to pay in advance via e& UAE mobile app PictureGuideTitle"]
  
  },
   {
    title: "Check / Update Account Contact Details",
    content: ["Keyword:update","How to check/update account contact details PictureGuideTitle"]
  
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
    title: "📞 Outbound / Callback Tracker",
    content: [
      ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-B319DBD86A" target="_blank" >Infohub Article: Callback Request - Consumer Elite and Alternate SMB</a>`
      , ` <a href="<a https://contactcentre.etisalat.corp.ae/main/cc_sections/CompassAnserFlow/AnswerFlowImages/generator/Call%20Back%20Tracker.xlsb</a>" target="_blank" >Excel Sheet</a>`

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
    title: "✅ Outbound / Callback Tracker",
    content: [
            ` <a href="https://infohub.etisalat.corp.ae/StaticResources/shell/workspace?appid=ROOT_KB_READER&autologin=ADFS&app=ArticleDetail&d=SKB_PRODUCTION.TENANT2&code=ART-B319DBD86A" target="_blank" >Infohub Article: Callback Request - Consumer Elite and Alternate SMB</a>`
      , ` <a href="<a https://contactcentre.etisalat.corp.ae/main/cc_sections/CompassAnserFlow/AnswerFlowImages/generator/Call%20Back%20Tracker.xlsb</a>" target="_blank" >Excel Sheet</a>`
    ]
  },
  {
    title: "📞 Motive LandLine",
    content: [
      ` <a href="https://10.183.207.4/csc/startup.do" target="_blank" >Motive LandLine</a>`
    ]
  },
  {
    title: "📺 DTV (Packages and Channels)",
    content: [
      ` <a href="https://10.237.227.11:8000/cms/Default.aspx" target="_blank" >DTV</a>`
    ]
  },
  {
    title: "📍CLA (Customer Location Application)",
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
    title: "😁 Smiles Portal",
    content: [
      ` <a href="https://smiles-api.etisalat.corp.ae/loyaltyadmin/" target="_blank" >Smiles Portal</a>`
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
      ` <a href="https://basher-tech.me/Escaltion.html" target="_blank" >Quick Escalator</a>`    ]
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
  "Directory / Daleel (Local): 181 / AED 1.OO (AED 1.05 VAT)",
  "Business / Not Authorized: 71431",
  "Prestige / Emirati AR (Business / Not Authorized): 71461",
  "Prestige / Emirati EN (Business / Not Authorized): 71462",
  "CTSC AR/EN: 3154",
  "Home Move Gold AR: 71037",
  "Home Move Gold EN: 71038",
  "EGS Escalation AR/EN: 12183",
  "Enterprise Customers: 8009111",
  "SMB: 8005800 / Free",
  "Huawei Support: 80066600",
  "Main Menu (IVR - AR): 3137",
  "Main Menu (IVR - EN): 3139",
  "Cancellation Helpdesk: 8006665 / Free",
  "Cancellation Arabic: 3582",
  "Cancellation English: 3583",
  "Customer Service: 800101",
  "Fleet Management: 800102",
  "ED - AR : 3639",
  "ED - AR : 3640",
  "e& money: 800-392-5538 / Free",
  "Fleet Team: 800102 / Free",
  "e& money: 800-392-5538 / Free",
  "Appointment Centre: 8007622 / All Days from 08:00 AM to 10:00 PM",
  "Roaming Care: 9718002300 / Toll free while roaming (prepaid and postpaid)",
  "Etihad Bureau: 800-287328 / Sunday to Thursday: 08:00 AM to 04:00 PM",
  "Tel (international): 971800101 / Free",
  "Re-Open Complain (Answer \"No\"): 1661",
  "Balance: *121#",
  "Anti-Spam: DNCR 1012",
  "Play On Demand (Start/Stop): *800#",
  "Usage Limit Increase: *122#",
  "Wasel Flexi (6 GB): *101*50#",
  "Allowance: *140#",
  "Collection: 023014650",
  "Every Day 1 GB: *101*3030*2#",
  "Charge Code (Mobile): 1- 45 | Rental / Exit Charge Refunded (for refund rental & exit charge)\n2- ET | Wasel Refunds (for refund rental prepaid only)\n3- 16 | Usage (additional charge for usage calls & data)\n4- C94 | Roaming (for rental and call usage while roaming)\n5- LB | Roaming (for data usage while roaming)\n6- B6 | Third Party (181 calls - Special numbs - Mparking - greetune - All third party)\n7- 94 | sim cards (for sim card rentals and sin replacements)\n8- 47 | Balance Transfer (for balance transfer transaction)",
  "Charge Code (Fixed): 1- IU | Installation  (when customer have wrong installation fees)\n2- 45 | Rental / Exit charge (for refund rental & exit charge)\n3- 3 | External shifting (for refund wrong additional charges for shifting)\n4- 2 | Internal shifting (for refund wrong additional charges for shifting)\n5- 16 | USAGE (additional charge for usage calls)\n6- A78 | Router (Exit charge)\n7- YK | STB (Exit charge)\n8- YL | Wireless Phone (Exit charge)\n9- SM | Tech visit (for wrong additional charges for tech visit)\n10- GO | Wireless Phone (for refund wrong additional charges rental for V Package & Channels)",
];


