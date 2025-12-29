# 3D Mama - Custom 3D Print Shop

A modern e-commerce website for showcasing and selling custom 3D printed items, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with dark mode support
- Product showcase and shop pages
- Instagram feed integration
- Contact form for custom orders
- Mobile-friendly navigation
- SEO-optimized

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 3Dmamaweb
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
3Dmamaweb/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with navbar and footer
│   ├── shop/              # Shop page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── ProductCard.tsx    # Product display card
│   └── InstagramFeed.tsx  # Instagram feed integration
└── public/               # Static assets

```

## TODO Items for Future Development

The following features and improvements need to be implemented:

### High Priority

1. **Product Images** (`components/ProductCard.tsx:10`)
   - Replace placeholder SVG icons with actual product images
   - Add product images to `/public/products/` directory

2. **Database Integration** (`app/page.tsx:5`)
   - Move product data from hardcoded arrays to a database or CMS
   - Consider using: Supabase, MongoDB, or Contentful
   - Create API routes for product data

3. **Instagram API Integration** (`components/InstagramFeed.tsx:4-7`)
   - Set up Instagram Graph API
   - Create Facebook Developer account and app
   - Configure Instagram Basic Display API
   - Add access token to `.env.local`
   - Fetch real Instagram posts

4. **Contact Form Backend** (`app/contact/page.tsx:17`)
   - Implement form submission endpoint
   - Options: SendGrid, Formspree, or custom API route
   - Add email notification system

### Medium Priority

5. **Shop Page Features** (`app/shop/page.tsx:47`)
   - Add product filtering (by category, price range)
   - Add sorting options (price, name, newest)
   - Implement search functionality

6. **Pagination** (`app/shop/page.tsx:54`)
   - Add pagination when product list grows
   - Consider implementing infinite scroll

7. **Shopping Cart**
   - Add shopping cart functionality
   - Implement cart state management
   - Add checkout process

8. **Payment Integration**
   - Integrate Stripe or PayPal
   - Set up secure payment processing
   - Add order confirmation emails

### Low Priority

9. **Product Detail Pages**
   - Create dynamic product detail routes
   - Add multiple product images/gallery
   - Add customer reviews section

10. **User Accounts**
    - Add user authentication
    - Order history tracking
    - Saved items/wishlist

11. **SEO Improvements**
    - Add sitemap.xml
    - Implement structured data
    - Add Open Graph tags

12. **Analytics**
    - Integrate Google Analytics or similar
    - Track user behavior and conversions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Instagram API (when implemented)
NEXT_PUBLIC_INSTAGRAM_TOKEN=your_token_here

# Email Service (when implemented)
EMAIL_SERVICE_API_KEY=your_key_here

# Payment Gateway (when implemented)
STRIPE_SECRET_KEY=your_key_here
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_key_here
```

## Customization

### Update Instagram Handle

Update the Instagram handle throughout the site:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/InstagramFeed.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

### Update Contact Email

Update the email address in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Add Your Products

Update the product arrays in:
- `app/page.tsx` (featured products)
- `app/shop/page.tsx` (all products)

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://react.dev/) - UI library

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

For other platforms, build the project:

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

See [LICENSE](LICENSE) file for details.
