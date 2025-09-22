
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="SamudraSetu Home">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2C29.9411 2 38 10.0589 38 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          <path d="M2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2" stroke="white" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-bold text-white">SamudraSetu</span>
    </Link>
  );
}
