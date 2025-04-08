'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { Button, Input, Textarea } from '@heroui/react';
import SectionHeader from '@/src/components/ui/SectionHeader';

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (siteConfig.contact.debug) {
      const fetchUserInfo = async () => {
        try {
          const res = await fetch('https://ipapi.co/json/', {
            mode: 'cors', // Explicitly set CORS mode
          });
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          const data = await res.json();
          const browserInfo = {
            ip: data.ip || 'N/A',
            country: data.country_name || 'N/A',
            city: data.city || 'N/A',
            region: data.region || 'N/A',
            timezone: data.timezone || 'N/A',
            isp: data.org || 'N/A',
            browser: navigator.userAgent,
            platform: navigator.platform,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            os: navigator.platform,
            chromeVersion: navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)?.[2] || 'N/A',
            domain: window.location.href,
          };
          setUserInfo(browserInfo);
        } catch (error) {
        if (error instanceof Error) {
    console.warn('Failed to fetch user info from ipapi.co:', error.message);
  } else {
    console.warn('Failed to fetch user info from ipapi.co:', error);
  }
  // Fallback user info if API fails
  setUserInfo({
    ip: 'N/A',
    country: 'N/A',
    city: 'N/A',
    region: 'N/A',
    timezone: 'N/A',
    isp: 'N/A',
    browser: navigator.userAgent,
    platform: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    os: navigator.platform,
    chromeVersion: navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)?.[2] || 'N/A',
    domain: window.location.href,
  });
        }
      };
      fetchUserInfo();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Rate limiting logic
    const lastSubmittedTime = sessionStorage.getItem('lastSubmittedTime');
    const lastEmail = sessionStorage.getItem('lastEmail');
    const currentTime = Date.now();
    const rateLimit = siteConfig.contact.rateLimit;
    const FIVE_MINUTES = rateLimit * 60 * 1000;

    if (lastSubmittedTime && currentTime - parseInt(lastSubmittedTime) < FIVE_MINUTES) {
      setIsWaiting(true);
      setWaitTime(Math.ceil((FIVE_MINUTES - (currentTime - parseInt(lastSubmittedTime))) / 1000));
      return;
    }

    if (lastEmail && lastEmail !== email) {
      setIsWaiting(true);
      setWaitTime(Math.ceil(FIVE_MINUTES / 1000));
      return;
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}${
        siteConfig.contact.debug ? `\nUser Info: ${JSON.stringify(userInfo, null, 2)}` : ''
      }`
    );
    const mailtoLink = `mailto:mianwasif.001@gmail.com?subject=${subject}&body=${body}`;
    // Open email client
    window.location.href = mailtoLink;

    // Simulate submission success
    setTimeout(() => {
      setIsSubmitted(true);
      sessionStorage.setItem('lastSubmittedTime', currentTime.toString());
      sessionStorage.setItem('lastEmail', email);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 500);
  };

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        id="contactme"
        title="Contact Me"
        content="Fill out the form below to contact me. It’ll open your email client to send the message!"
      />

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <div className="w-full rounded-xl border border-gray-800 hover:border-gray-900 bg-white dark:bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
            <h3 className="font-bold text-1xl tracking-tight text-foreground dark:text-white text-start">
              Email
            </h3>
            <p className="text-base mt-2 text-foreground dark:text-white">
              mianwasif.001@gmail.com
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <Input
                isClearable={true}
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div>
                <Input
                  isClearable={true}
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Input
                  isClearable={true}
                  label="Phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

           <div>
              <Textarea
                isClearable={true}
                label="Message"
                placeholder="Enter your message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => console.log('Textarea focused')}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 caret-black dark:caret-white"
                required
              />
            </div>

            <Button
              type="submit"
              className="flex items-center justify-center rounded-xl px-5 py-3 text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm transition ease mx-auto"
            >
              <span className="font-medium text-base">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </form>

          {isWaiting && (
            <div className="mt-4 text-red-500">
              <p>
                You need to wait {waitTime} second{waitTime !== 1 && 's'} before
                sending another message.
              </p>
            </div>
          )}
        </div>
      </div>

      {isSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-bold text-lg text-foreground dark:text-white mb-4">
              Thank you, {name}! <span className="text-black dark:text-white">🎉</span>
            </h3>
            <p className="text-base text-foreground dark:text-gray-400">
              Your email client should have opened. Please send the email to mianwasif.001@gmail.com.
            </p>
            <Button
              onPress={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition ease"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </AnimationContainer>
  );
};

export default ContactMe;