import type { Profile } from './types';

export const profile: Profile = {
  name: 'Salbi Faza Rinaldi',
  title: 'Senior Data Engineer',
  location: 'Johor Bahru, Malaysia',
  base: { place: 'Johor Bahru, MY', timeZone: 'Asia/Kuala_Lumpur' },
  email: 'salbi.rinaldi@gmail.com',
  linkedin: 'https://linkedin.com/in/salbifaza',
  github: 'https://github.com/salbifaza',
  photo: '/profile-photo.jpeg',
  cv: '/CV_Salbi_Faza_Rinaldi.pdf',
  bookingUrl: 'https://calendar.app.google/f3fUJ8ea5f5KXmkz7',
  hero: {
    statement: 'I build the data platforms and pipelines that turn raw data into decisions people trust.',
    audience: 'Data teams, engineering leads and growing companies that need pipelines they can rely on, mostly.',
    words: ['Pipelines', 'Streaming', 'Lakehouse', 'Modelling', 'Automation', 'Scraping'],
  },
  about: [
    'I am a data engineer who likes systems that stay boring in production. Over the last few years I have built batch and streaming platforms on AWS, GCP and Azure, cut warehouse costs, and put self-service analytics in front of the people who needed it.',
    'I work best between data, automation and the business: modelling the data properly, orchestrating it reliably, and writing down what I learned. I also mentor aspiring data engineers, which keeps my fundamentals honest.',
  ],
};
