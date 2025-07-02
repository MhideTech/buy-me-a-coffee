# ☕ Buy Me a Coffee — Paystack Integration

A simple React web app that lets people support you by buying you a virtual coffee using Paystack. Built with TypeScript and styled using Tailwind CSS.

![screenshot](https://via.placeholder.com/1200x600?text=Buy+Me+a+Coffee+Screenshot)

---

## 🚀 Live Demo

👉 [View Live Project](https://your-deployment-link.vercel.app)

---

## 🛠 Tech Stack

- **React.js** (with Vite)
- **TypeScript**
- **Tailwind CSS**
- **Paystack Inline Payment Integration**

---

## ✨ Features

- Clean, responsive UI built with Tailwind CSS
- Paystack payment modal integration
- Supports multiple coffee donation amounts (₦500, ₦1000, ₦1500)
- Optional name and message fields (stored in payment metadata)
- Toast notifications for success and failure

---

## 🧪 Test Payment (Sandbox)

Use Paystack test card:

```
Card Number: 4084 0840 8408 4081  
Expiry Date: Any future date  
CVV: 408  
PIN: 0000  
OTP: 123456  
```

---

## 📦 Getting Started

1. **Clone this repo**

```bash
git clone https://github.com/yourusername/buy-me-a-coffee.git
cd buy-me-a-coffee
```

2. **Install dependencies**

```bash
npm install
```

3. **Add Paystack Public Key**

In `PayButton.tsx`, replace the `key` field with your Paystack **test public key** from the [dashboard](https://dashboard.paystack.com).

```ts
key: 'pk_test_yourkeyhere'
```

4. **Start the development server**

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── PayButton.tsx
│   ├── CoffeeCard.tsx
│   └── SuccessModal.tsx (optional)
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📸 Screenshots

| Home Page | Payment Modal |
|-----------|---------------|
| ![home](https://via.placeholder.com/400x250?text=Home+Page) | ![modal](https://via.placeholder.com/400x250?text=Paystack+Modal) |

---

## 💡 Inspiration

Inspired by real-world “Buy Me a Coffee” support pages, this project demonstrates real-time payment integration with Paystack for donation-based apps.

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 👋 Acknowledgments

- [Paystack Documentation](https://paystack.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React TypeScript Template](https://vitejs.dev/)

---