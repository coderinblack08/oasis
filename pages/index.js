import React from 'react';
import Image from 'next/image';
import signInWithGitHub, { signOut } from '../utils/auth';

const Index = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8">
        <nav className="flex items-center justify-between py-8">
          <img src="/static/oasis-logo.png" alt="Oasis Logo" className="w-32" />
          <ul className="flex items-center space-x-6 md:space-x-10 text-lg">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
          </ul>
        </nav>
        <div className="mt-24">
          <h1 className="leading-tight md:leading-snug text-3xl sm:text-4xl md:text-5xl font-black">
            <span className="text-primary-light">Find and Contribute to</span> <br />
            Trending Open-Source Projects
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-3">
            Discuss and discover open-source using Oasis’s social-media like approach.
          </p>
          <div className="space-x-4 mt-9">
            <button
              className="bg-primary text-white px-6 py-2.5 rounded-md font-bold"
              onClick={async () => {
                let login = await signInWithGitHub();
                login = await login.json();
                console.log(login);
                if (login.status === 'success') {
                  window.location.reload();
                }
              }}
            >
              Login with GitHub
            </button>
            <button className="bg-gray-600 text-white px-6 py-2.5 rounded-md font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute bottom-0 w-full justify-center">
        <img
          width={475}
          height={475}
          src="/static/vr-illustration.png"
          alt="Vr Illustration"
          quality={100}
          priority
        />
      </div>
    </>
  );
};

export default Index;
