import type { SVGProps } from "react";

export const icons = {
  python: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-sky-500"><path d="M13.5 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M10.5 14.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M14 6.042A5.5 5.5 0 0 1 14.5 4a5.5 5.5 0 0 1 5.5 5.5v.5c0 2-1.5 3.5-3.5 3.5h-1A2.5 2.5 0 0 0 13 16v1.5a2.5 2.5 0 0 0 2.5 2.5h1c2 0 3.5-1.5 3.5-3.5V18a5.5 5.5 0 0 1-5.5-5.5 5.5 5.5 0 0 1 .458-2.208"/><path d="M10 17.958A5.5 5.5 0 0 1 9.5 20a5.5 5.5 0 0 1-5.5-5.5v-.5c0-2 1.5-3.5 3.5-3.5h1A2.5 2.5 0 0 0 11 8V6.5A2.5 2.5 0 0 0 8.5 4h-1C5.5 4 4 5.5 4 7.5V8a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-.458 2.208"/></svg>
  ),
  sql: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-sky-500"><path d="M20 16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M15 16H8"/><path d="M12 12H8"/><path d="M12 8H8"/></svg>
  ),
  aws: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-500"><path d="M17.11 9.11a5.11 5.11 0 1 0-10.22 0"/><path d="m12.11 14.11-5 5"/><path d="M12.11 14.11a5.11 5.11 0 1 0 7.22-7.22"/><path d="m12.11 14.11 7.07-7.07"/><path d="M6.34 19.66 12 14.11l.11.11"/><path d="M12.11 14.11 12 14l.11.11z"/><path d="M12.11 14.11a5.11 5.11 0 1 0-7.22 7.22"/><path d="M12.11 14.11 5.04 21.18"/><path d="M17.88 19.66 12 14.11l-.11.11"/><path d="M12.11 14.11 12 14l-.11.11z"/></svg>
  ),
  gcp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-600"><path d="M12 12a5.13 5.13 0 0 0-2.2 9.54c.62.33 1.2.6 1.76.84.3.14.62.26.94.36h.02c.3-.1.6-.22.9-.36.56-.23 1.14-.5 1.76-.84A5.13 5.13 0 0 0 12 12Z"/><path d="M12 12a5.13 5.13 0 0 0-7.34-4.8c-.5.54-.95 1.13-1.34 1.76-.4.62-.73 1.28-.96 1.96A5.13 5.13 0 0 0 12 12Z"/><path d="M12 12a5.13 5.13 0 0 1 7.34-4.8c.5.54.95 1.13 1.34 1.76.4.62.73 1.28.96 1.96A5.13 5.13 0 0 1 12 12Z"/><path d="M2.26 10.94a5.13 5.13 0 0 0 2.58 8.6c.62.33 1.2.6 1.76.84.3.14.62.26.94.36h.02c-.3-.1-.6-.22-.9-.36a10.26 10.26 0 0 1-4.4-9.44Z"/><path d="M21.74 10.94a5.13 5.13 0 0 1-2.58 8.6c-.62.33-1.2.6-1.76.84-.3.14-.62.26-.94.36h-.02c.3-.1.6-.22.9-.36a10.26 10.26 0 0 0 4.4-9.44Z"/><path d="M12 2.26a10.26 10.26 0 0 0-8.88 4.4c-.5.98-.86 2-1.08 3.02.04.3.1.6.16.9h.02c.04-.3.1-.6.14-.9.22-1.02.58-2.04 1.08-3.02a10.26 10.26 0 0 1 17.76 0c.5.98.86 2 1.08 3.02.04.3.1.6.14.9h.02c-.04-.3-.1-.6-.16-.9-.22-1.02-.58-2.04-1.08-3.02A10.26 10.26 0 0 0 12 2.26Z"/></svg>
  ),
  airflow: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-500"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m15.5 15.5-3-3-3-3 3-3 3 3 3 3-3 3z"/><path d="m8.5 8.5 3 3 3 3-3 3-3-3-3-3 3-3z"/></svg>
  ),
  docker: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-500"><path d="M22 17.5c0 .28-.22.5-.5.5H19c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.5c.28 0 .5.22.5.5Z"/><path d="M22 15.5c0 .28-.22.5-.5.5H20c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1.5c.28 0 .5.22.5.5Z"/><path d="M22 13.5c0 .28-.22.5-.5.5H19.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H22c.28 0 .5.22.5.5Z"/><path d="M21 11.5c0 .28-.22.5-.5.5H20c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h.5c.28 0 .5.22.5.5Z"/><path d="M20 9.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M4.74 18.23a4.5 4.5 0 0 1-1.48-3.43c0-2.49 2.01-4.5 4.5-4.5h8.5c2.49 0 4.5 2.01 4.5 4.5a4.5 4.5 0 0 1-1.48 3.43"/><path d="M17.5 9.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M15.5 7.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M13.5 9.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M11.5 7.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M9.5 9.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M7.5 7.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M17.5 11.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M15.5 13.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M13.5 11.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M11.5 13.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M9.5 11.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M7.5 13.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/><path d="M5.5 11.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5Z"/></svg>
  ),
  kubernetes: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-600"><path d="M10.88 2.34a2 2 0 0 0-3.76 0l-3.3 6.6a2 2 0 0 0 .38 2.2l5.5 8.26a2 2 0 0 0 3.56 0l5.5-8.26a2 2 0 0 0 .38-2.2z"/><path d="M12 12.5 3.5 8"/></svg>
  ),
  spark: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-400"><path d="m12 3-1.9 4.2-4.3.4 3.4 2.8-.9 4.2L12 12l3.7 2.6-.9-4.2 3.4-2.8-4.3-.4L12 3z"/><path d="m12 16.5-1.9 4.2-4.3.4 3.4 2.8-.9 4.2L12 21l3.7 2.6-.9-4.2 3.4-2.8-4.3-.4L12 16.5z"/></svg>
  ),
  dbt: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-600"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M16 8h-3.333a4 4 0 1 0 0 8H16"/><path d="m16 12-4-4"/><path d="m16 12 4 4"/></svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  menu: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
  ),
  sun: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  ),
  moon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
  ),
  download: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  ),
};
