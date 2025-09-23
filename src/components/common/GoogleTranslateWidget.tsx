
'use client';

import { useEffect } from 'react';

export function GoogleTranslateWidget() {
  useEffect(() => {
    // Check if the script already exists
    if (document.getElementById('google-translate-script')) {
        // If it does, and the widget isn't there, re-initialize
        if (!document.querySelector('.goog-te-combo')) {
            window.googleTranslateElementInit?.();
        }
        return;
    }

    const addScript = document.createElement('script');
    addScript.id = 'google-translate-script';
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    };
  }, []);

  return (
    <div>
        <div id="google_translate_element" />
    </div>
  );
}

// Extend the Window interface
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google: {
        translate: {
            TranslateElement: any; // You can be more specific if you have the types
        }
    }
  }
}
