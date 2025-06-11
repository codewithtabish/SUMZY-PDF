// import Image from "next/image";
import Link from "next/link";
import { Facebook, GitBranch, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t max-w-6xl mx-auto py-5 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-semibold flex items-center space-x-2">
              <span className="text-blue-600 text-2xl font-bold">ES</span>
              <span>BAZAR</span>
            </h2>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet faucibus malesuada vitae.
            </p>
            <p className="mt-2 text-sm">
              <span className="font-semibold">(+92) 316 9000 919</span>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-3">
              <Link href="#" aria-label="Facebook" className="text-blue-600 hover:opacity-80">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Reddit" className="text-red-600 hover:opacity-80">
                <GitBranch size={24} />
              </Link>
              <Link href="#" aria-label="WhatsApp" className="text-green-500 hover:opacity-80">
                <Linkedin size={24} />
              </Link>
              <Link href="#" aria-label="Pinterest" className="text-pink-600 hover:opacity-80">
                {/* Inline Pinterest SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 4.99 3.052 9.272 7.388 11.104-.102-.943-.195-2.39.04-3.42.213-.93 1.374-5.926 1.374-5.926s-.35-.7-.35-1.733c0-1.623.942-2.84 2.116-2.84.998 0 1.48.75 1.48 1.65 0 1.004-.64 2.503-.972 3.897-.277 1.17.587 2.12 1.743 2.12 2.092 0 3.504-2.695 3.504-5.876 0-2.406-1.624-4.207-4.97-4.207-3.597 0-5.846 2.693-5.846 5.47 0 1.096.423 2.27.95 2.91a.383.383 0 0 1 .087.367c-.094.4-.307 1.27-.35 1.445-.055.22-.18.27-.417.164-1.56-.727-2.528-3.004-2.528-4.85 0-3.95 2.865-7.58 8.274-7.58 4.335 0 7.7 3.088 7.7 7.222 0 4.295-2.71 7.767-6.48 7.767-1.264 0-2.45-.657-2.855-1.404l-.776 2.953c-.28 1.084-1.04 2.44-1.547 3.267C9.986 23.71 10.976 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Help Center</Link></li>
              <li><Link href="#" className="hover:underline">Safety Center</Link></li>
              <li><Link href="#" className="hover:underline">Community Guidelines</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Cookies Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          {/* Payment Methods */}
          <div className="flex space-x-4">
            {/* <Image src="/images/payment/amex.svg" alt="American Express" width={40} height={24} /> */}
            {/* <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={40} height={24} /> */}
            {/* <Image src="/images/payment/paypal.svg" alt="Paypal" width={40} height={24} /> */}
            {/* <Image src="/images/payment/visa.svg" alt="Visa" width={40} height={24} /> */}
          </div>

          {/* App Download */}
          <div className="flex space-x-4">
            {/* <Image src="/images/apps/apple.svg" alt="Apple App Store" width={120} height={40} /> */}
            {/* <Image src="/images/apps/google.svg" alt="Google Play Store" width={120} height={40} /> */}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 ES BAZAR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
