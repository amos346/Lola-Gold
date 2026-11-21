# Lola Real Gold | Luxury Pure Gold Jewelry

Minimalist luxury real gold jewelry store website based in Oakland Land, Lagos, Nigeria. Features 100% pure 18k and 24k gold pieces, authentic stock photos, showroom visit booking, and instant WhatsApp ordering (`0816 881 4021`).

## Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Language:** TypeScript

---

## Project Structure
```
├── public/
│   └── assets/
│       └── aistudio/       # Real jewelry stock photos
├── src/
│   ├── App.tsx             # Main application component & 7 sections
│   ├── index.css           # Tailwind CSS & custom luxury styling
│   └── main.tsx            # React entry point
├── index.html              # HTML entry point with Google Fonts
├── package.json            # Project dependencies & scripts
├── vercel.json             # Vercel deployment configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite bundler configuration
└── README.md
```

---

## Getting Started

### 1. Installation
Clone the repository and install dependencies using npm:
```bash
npm install
```

### 2. Development
Run the development server locally on port 3000:
```bash
npm run dev
```

### 3. Production Build
Build the project for production (outputs to `dist/`):
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## Deployment on Vercel

1. Push this complete project repository to **GitHub**.
2. Log in to [Vercel](https://vercel.com) and click **Add New > Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework preset:
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your luxury store will be live instantly with all images and assets correctly preserved!
