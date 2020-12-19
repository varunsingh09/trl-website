export const navigation = [
    { "label": `होम`, link: "/" },
    { "label": `विश्व`, link: "/world" },
    {
        "label": `राज्य`, link: "", children: [
            { "label": `बिहार`, link: "/Bihar" },
            { "label": `छत्तीसगढ़`, link: "/Chhattisgarh" },
            { "label": `गुजरात`, link: "/Gujarat" },
            { "label": `हिमाचल प्रदेश`, link: "Himachal Pradesh" },
            { "label": `हरियाणा`, link: "/Haryana" },
            { "label": `जम्मू कश्मीर`, link: "/Jammu" },
            { "label": `झारखण्ड`, link: "/Jharkhand" },
            { "label": `मध्य प्रदेश`, link: "/Madhya Pradesh" },
            { "label": `महाराष्ट्र`, link: "/Maharashtra" },
            { "label": `पंजाब`, link: "/Punjab" },
            { "label": `राजस्थान`, link: "/Rajasthan" },
            { "label": `उत्तर प्रदेश`, link: "/Uttar Pradesh" },
            { "label": `उत्तराखण्ड`, link: "/Uttarakhand" },
            { "label": `अन्य राज्य`, link: "/OtherStates" }
        ]
    },
    {
        "label": `आपका शहर`, link: "/city", children: [
            { "label": `पठानकोट`, link: "/Pathankot" },
            { "label": `गुरदासपुर`, link: "/Gurdaspur" }
        ]
    },
    { "label": `राजनीती`, link: "/Politics" },
    {
        "label": `खेल`, link: "/Sports", children: [
            { "label": `क्रिकेट`, link: "/Cricket" },
            { "label": `फुटबॉल`, link: "/Football" },
            { "label": `अन्य खेल`, link: "/othersports" }
        ]
    },
    { "label": `टेक्नोलॉजी`, link: "/Technology" },
    { "label": `मनोरंजन`, link: "/Entertainment" },
    { "label": `बिज़नेस`, link: "/Business" },
    { "label": `शिक्षा`, link: "/Education" },
    { "label": `स्टार्टअप्स`, link: "/Startups" },
    { "label": `लाइफस्टाइल`, link: "/Lifestyle" },
    { "label": `नौकरी`, link: "/Jobs" },
    { "label": `कृषि`, link: "/Agriculture" },
    { "label": `निबंधन और शर्तें`, link: "TermsCondition" },
    { "label": `गोपनीयता नीति`, link: "/PrivacyPolicy" }
]

export const AD_FLAG = false