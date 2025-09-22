import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="OceanGuard Home">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="white"/>
        <path d="M26 12H14C12.8954 12 12 12.8954 12 14V26C12 27.1046 12.8954 28 14 28H26C27.1046 28 28 27.1046 28 26V14C28 12.8954 27.1046 12 26 12Z" fill="#4A90E2"/>
        <path d="M18 18C18 17.4477 18.4477 17 19 17H21C21.5523 17 22 17.4477 22 18V24C22 24.5523 21.5523 25 21 25H19C18.4477 25 18 24.5523 18 24V18Z" fill="white"/>
        <path d="M24 16C24 15.4477 24.4477 15 25 15H27C27.5523 15 28 15.4477 28 16V20C28 20.5523 27.5523 21 27 21H25C24.4477 21 24 20.5523 24 20V16Z" fill="white"/>
        <path d="M12 16C12 15.4477 12.4477 15 13 15H15C15.5523 15 16 15.4477 16 16V20C16 20.5523 15.5523 21 15 21H13C12.4477 21 12 20.5523 12 20V16Z" fill="white"/>
      </svg>
      <span className="text-2xl font-bold text-white">OceanGuard</span>
    </Link>
  );
}
