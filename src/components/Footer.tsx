'use client';

import { navigation } from '@/constants';
import { Button } from './ui/Button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-8">
      <div className="text-gray-700 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-xl">
            <h3 className="text-2xl lg:text-4xl font-bold uppercase">
              Đăng ký tham gia bootcamp
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-x-3 md:justify-end"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 rounded text-gray-500 bg-white outline-none border border-gray-400 focus:border-primary shadow-sm"
                />
              </div>
              <Button
                size={'default'}
                className="text-black text-base h-[42px] px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <ul className="items-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {navigation.map((item, idx) => (
            <li key={idx} className="hover:text-gray-800 text-lg">
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; 2024 Kim Trung All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCe1-v1WGKNtBKkjtc9fEShg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fc0900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://www.facebook.com/trungsaurieng/"
                >
                  <svg
                    className="svg-icon w-6 h-6 text-blue-700"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/trungsaurieng"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f201b9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center overflow-hidden">
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@trungsaurieng99"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="80"
                    height="80"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 32.740234 19.693359 L 32.740234 36.294922 C 32.740234 38.576922 30.756031 39.755859 29.332031 39.755859 C 28.259031 39.755859 25.818359 38.914578 25.818359 36.267578 C 25.818359 33.488578 28.095422 32.779297 29.357422 32.779297 C 30.092422 32.779297 30.380859 32.9375 30.380859 32.9375 L 30.380859 28.507812 C 30.380859 28.507813 29.830172 28.425781 29.201172 28.425781 C 24.682172 28.425781 21.464844 32.083578 21.464844 36.267578 C 21.464844 39.802578 24.229297 44.082031 29.279297 44.082031 C 34.658297 44.082031 37.121094 39.595969 37.121094 36.292969 L 37.121094 28.058594 C 37.121094 28.058594 39.518422 29.736328 42.732422 29.736328 L 42.732422 25.541016 C 39.045422 25.278016 37.0745 22.801359 36.9375 19.693359 L 32.740234 19.693359 z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </div>
    </footer>
  );
}
