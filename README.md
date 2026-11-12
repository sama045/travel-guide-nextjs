# Nova Digital

เว็บไซต์เกี่ยวกับการท่องเที่ยวในประเทศไทย พัฒนาด้วย **Next.js 16.2.10 (App Router)**

---

# 🚀 Tech Stack

- Next.js 16.2.10
- React 19
- Sass (SCSS)
- JavaScript (ES6+)
- HTML5

---

# 📁 Project Structure

```
nova-digital/
│
├── app/
│   ├── favicon.ico
│   ├── globals.scss
│   ├── layout.jsx
│   └── page.jsx
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.scss
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.scss
│   │
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.scss
│   │
│   ├── Services/
│   │   ├── Services.jsx
│   │   └── Services.scss
│   │
│   ├── Portfolio/
│   │   ├── Portfolio.jsx
│   │   └── Portfolio.scss
│   │
│   ├── Testimonials/
│   │   ├── Testimonials.jsx
│   │   └── Testimonials.scss
│   │
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.scss
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.scss
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── favicon.ico
│
├── styles/
│   │
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   └── _breakpoints.scss
│   │
│   ├── base/
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   ├── _animations.scss
│   │   ├── _utilities.scss
│   │   └── _base.scss
│   │
│   ├── layout/
│   │   ├── _container.scss
│   │   ├── _grid.scss
│   │   └── _section.scss
│   │
│   ├── components/
│   │   ├── _button.scss
│   │   ├── _card.scss
│   │   ├── _form.scss
│   │   └── _navigation.scss
│   │
│   ├── pages/
│   │   └── _home.scss
│   │
│   └── main.scss
│
├── package.json
├── next.config.js
├── jsconfig.json
├── .gitignore
├── README.md
└── LICENSE
```

---

# 📦 Installation

Clone Repository

```bash
git clone https://github.com/your-username/nova-digital.git
```

เข้าโฟลเดอร์โปรเจกต์

```bash
cd nova-digital
```

ติดตั้ง Dependencies

```bash
npm install
```

ติดตั้ง Sass

```bash
npm install sass
```

---

# ▶️ Run Development

```bash
npm run dev
```

เปิดเว็บที่

```
http://localhost:3000
```

---

# 🏗️ Build Production

Build

```bash
npm run build
```

Run

```bash
npm run start
```

---

# 🎨 SCSS Structure

ไฟล์หลัก

```scss
// app/globals.scss

@use "../styles/main";
```

ไฟล์ `styles/main.scss`

```scss
@use "abstracts/variables";
@use "abstracts/functions";
@use "abstracts/mixins";
@use "abstracts/breakpoints";

@use "base/reset";
@use "base/base";
@use "base/typography";
@use "base/utilities";
@use "base/animations";

@use "layout/container";
@use "layout/grid";
@use "layout/section";

@use "components/button";
@use "components/card";
// @use "components/form";
// @use "components/navigation";

@use "pages/home";
```

---

# 📂 Assets

```
public/
├── images/
├── icons/
└── fonts/
```

---

# 🧩 Components

- Header
- Hero
- About
- Services
- Portfolio
- Testimonials
- Contact
- Footer

แต่ละ Component สามารถมีไฟล์ SCSS ของตัวเอง เช่น

```
Hero/
├── Hero.jsx
└── Hero.scss
```

---

# 📜 Scripts

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Production

```bash
npm run start
```

Lint

```bash
npm run lint
```

---

# 🌐 Browser Support

- Google Chrome
- Microsoft Edge
- Firefox
- Safari

---

# 📄 License

MIT License

---

Created with ❤️ using **Next.js 16.2.10 + React 19 + Sass**