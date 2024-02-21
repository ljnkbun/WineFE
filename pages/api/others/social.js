import socialLink from './social.json';

export function getSocials() {
  return socialLink;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const socialLinks = getSocials();
    res.status(200).json(socialLinks);
  }
}
