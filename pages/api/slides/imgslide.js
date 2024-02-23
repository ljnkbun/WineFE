import data from './imgslide.json';

export function getSlides() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const Slides = getSlides();
    res.status(200).json(Slides);
  }
}
