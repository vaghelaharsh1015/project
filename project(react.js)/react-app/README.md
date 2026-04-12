# React Project Setup with Vite & Tailwind CSS

A modern React project initialized with Vite, TypeScript, and Tailwind CSS following best practices.

## Project Structure

```
react-app/
├── src/
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API & business logic
│   ├── App.tsx            # Main App component
│   ├── index.css          # Global styles with Tailwind
│   └── main.tsx           # Entry point
├── .env                   # Environment variables
├── .env.example           # Environment template
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies
```

## Quick Start

### Installation
```bash
cd react-app
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features

✅ **React 18+** with TypeScript
✅ **Vite** - Lightning fast build tool
✅ **Tailwind CSS** - Utility-first CSS framework
✅ **PostCSS & Autoprefixer** - CSS processing
✅ **Project Structure** - Following industry best practices

## Best Practices Implemented

### 1. **Functional Components + Hooks**
- All components use functional syntax
- Custom hooks for reusable logic (e.g., `useFetch`)
- Hooks like `useState`, `useEffect`, `useCallback`

### 2. **Small & Reusable Components**
```tsx
// Example: Button component
<Button label="Click Me" onClick={handleClick} variant="primary" />
```

### 3. **Separation of Concerns**
- **Components** (`src/components/`) - UI only
- **Services** (`src/services/`) - API calls & business logic
- **Hooks** (`src/hooks/`) - Shared logic

### 4. **Environment Variables**
Create a `.env` file from `.env.example`:
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_ENABLE_LOGGING=true
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### 5. **TypeScript Support**
- Full type safety with TypeScript
- Better IDE support and error detection
- Interfaces for props

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (if configured) |

## Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM rendering
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - Vendor prefixes

### Build Tools
- `vite` - Next generation build tool
- `@vitejs/plugin-react` - React plugin for Vite

## TypeScript Configuration

The project includes a `tsconfig.json` with strict mode enabled. Component files use `.tsx` extension.

## Tailwind CSS Setup

- **Config**: `tailwind.config.js` - Template configuration
- **Entry**: Tailwind directives in `src/index.css`
- **Content**: Configured to scan `src/**/*.tsx` files

## Tips for Development

### Creating Components
```tsx
import React from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const MyComponent: React.FC<Props> = ({ title, children }) => {
  return <div className="p-4">{title}</div>;
};

export default MyComponent;
```

### Using Custom Hooks
```tsx
import { useFetch } from '../hooks/useFetch';

const MyComponent = () => {
  const { data, loading, error, fetchData } = useFetch('/api/data');
  
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  );
};
```

### API Calls
```tsx
import apiClient from '../services/apiClient';

const response = await apiClient.get('/users');
const newUser = await apiClient.post('/users', { name: 'John' });
```

## Environment Setup

1. Copy `.env.example` to `.env`
2. Update API endpoints and feature flags
3. Never commit `.env` - add to `.gitignore`

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Cache
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Not Working
- Check `tailwind.config.js` content paths
- Verify `@tailwind` directives in `index.css`
- Restart dev server

## Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀**
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
