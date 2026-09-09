# Restaurant Digital Menu

এটি শুধুমাত্র রেস্টুরেন্টের Digital Menu + Cart + WhatsApp Table Ordering ওয়েবসাইট।

## কীভাবে কাজ করবে
1. Customer QR/link দিয়ে Digital Menu খুলবে।
2. খাবার Cart-এ যোগ করবে।
3. Cart থেকে Checkout-এ যাবে।
4. **Table Number** অবশ্যই দিতে হবে।
5. চাইলে নাম, ফোন ও Note দিতে পারবে।
6. অর্ডারটি ম্যানেজারের WhatsApp-এ pre-filled message হিসেবে যাবে।

## সহজে পরিবর্তন
`site-config.js` ফাইল খুলে:
- BRAND_NAME = রেস্টুরেন্টের নাম
- TAGLINE = tagline
- LOGO = logo path/URL
- WHATSAPP = ম্যানেজারের WhatsApp নম্বর
- CATEGORIES = category
- PRODUCTS = খাবারের নাম, দাম, ছবি, description

## গুরুত্বপূর্ণ
WhatsApp নম্বর আন্তর্জাতিক format-এ লিখুন: +8801XXXXXXXXX
এই সাইটে payment gateway, admin panel, database বা table booking নেই।
