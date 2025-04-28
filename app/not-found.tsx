import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl text-gold mb-6">404</h1>
        <h2 className="font-serif text-3xl mb-4">Invitation Not Found</h2>
        <p className="text-lg mb-8">
          We're sorry, but the invitation you're looking for could not be found.
        </p>
        <div>
          <Link 
            href="/"
            className="px-6 py-3 bg-gold text-white rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}