/**
 * Blocking script for <head>: sets data-theme and data-motion before first paint.
 * Keep the rules in sync with theme.ts and motion.ts; init-script.test.ts runs this
 * string against the same cases.
 */
export const initScript = `(function(){var d=document.documentElement,t='dark',m='on',r=false;
try{if(localStorage.getItem('theme')==='light')t='light'}catch(e){}
try{r=matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}
m=r?'off':'on';
try{var s=localStorage.getItem('motion');if(s==='on'||s==='off')m=s}catch(e){}
d.setAttribute('data-theme',t);d.setAttribute('data-motion',m)})();`;
