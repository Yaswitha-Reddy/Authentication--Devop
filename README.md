Welcome to a modern, scalable, and developer-friendly boilerplate built on top of **Vite**, **React 18**, and **TypeScript**. It comes pre-configured with essential libraries and components to help you jump-start your next web app project with speed and style.

---

## 🚀 Key Features

- **React 18** with Hooks-based architecture
- **Vite** for lightning-fast development and HMR
- **TypeScript** for type-safe development
- **Reusable Component Library** with TailwindCSS
- **React Router v6** for flexible navigation
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **Authentication Flow** with context + hooks
- **ESLint** + **Prettier** preconfigured
- **Modular Project Structure** for scalability

---

## Project Structure
project/
├── public/ # Static files
├── src/
│ ├── components/ # Reusable UI and layout components
│ │ ├── auth/ # Login, Register, Forgot Password forms
│ │ ├── layout/ # AuthLayout and Navbar
│ │ └── ui/ # Input and Button components
│ ├── contexts/ # React context for Authentication
│ ├── hooks/ # Custom React Hooks (e.g., useAuth)
│ ├── pages/ # Route views (Login, Dashboard, etc.)
│ ├── App.tsx # Application wrapper and routes
│ ├── main.tsx # Entry point
│ ├── index.css # Global styles and Tailwind
│ └── vite-env.d.ts # Vite environment types
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json # TypeScript config
├── vite.config.ts # Vite configuration
└── package.json # Project metadata and scripts


---

## Pages and Components

### Pages
- **Home.tsx** - Landing page
- **Login.tsx** - Login interface
- **Register.tsx** - Registration interface
- **ForgotPassword.tsx** - Password recovery
- **Dashboard.tsx** - Protected user dashboard

###  Components
- `Navbar.tsx`, `AuthLayout.tsx` – Layout and navigation
- `LoginForm.tsx`, `RegisterForm.tsx`, `ForgotPasswordForm.tsx` – Authentication forms
- `Button.tsx`, `Input.tsx` – UI primitives

###  Contexts and Hooks
- `AuthContext.tsx` – Global auth context
- `useAuth.ts` – Custom hook for accessing auth state

---

##  Getting Started

###  Prerequisites

Ensure you have **Node.js (v16+)** and **npm** installed.

### 🚀 Installation & Development

git clone https://github.com/your-username/project-bolt.git
cd project-bolt/project
npm install
npm run dev
Visit http://localhost:5173 to view your app.

 Scripts
Command	           Description
npm run dev	      Start local development server
npm run build	  Build app for production
npm run preview	  Preview production build locally
npm run lint	  Lint code using ESLint

Tooling & Libraries
Tool	            Usage
React 18	       UI Library
Vite	           Development Server & Bundler
TypeScript	       Static Typing
Tailwind CSS	   Styling with utility classes
ESLint + Prettier	Linting and code formatting
React Router v6	    Routing
Framer Motion	    Animations

Authentication Flow
The app uses React.Context and useAuth for managing authentication state across components, with a protected Dashboard route.

Contributing
Contributions are welcome! Please fork the repo and submit a PR.

License
This project is licensed under the MIT License.
See the [LICENSE](./LICENSE) file for more details.
