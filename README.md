# AI & Software Development Freelancer Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS for a software developer and generative AI engineer looking to showcase their expertise and services.

## Features

- 📱 Fully responsive design that looks great on all devices
- 🎨 Modern UI with smooth animations and transitions
- 📝 Working contact form with email integration
- 📅 Calendar booking integration with Calendly
- 💰 Clear pricing information for services
- 🚀 Fast performance with Next.js
- 🔍 SEO optimized

## Sections

- **Hero** - Compelling introduction with call-to-action
- **Services** - Detailed information about offered services
- **Expertise** - Skills and work experience showcase
- **Pricing** - Transparent pricing for different service tiers
- **Testimonials** - Client feedback and success stories
- **Contact** - Contact form and booking calendar

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Calendar**: React Calendly
- **Icons**: React Icons
- **Email**: Nodemailer (SendGrid)

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   EMAIL_SERVER=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_USER=apikey
   EMAIL_PASSWORD=your-sendgrid-api-key
   EMAIL_FROM=your-email@example.com
   EMAIL_TO=your-email@example.com
   ```

4. Replace the profile image:
   - Place your profile image in the `public` directory as `profile-image.jpg`

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

- Update the personal information in each component
- Replace the placeholder images with your own
- Customize the color scheme in `tailwind.config.js`
- Update the Calendly URL in the Contact component
- Add your own testimonials and services

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-website)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [React Calendly](https://github.com/tcampb/react-calendly)
- [React Icons](https://react-icons.github.io/react-icons/)
