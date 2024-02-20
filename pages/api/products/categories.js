import data from './categories.json';

export function getCategories() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const categories = getCategories();
    res.status(200).json(categories);
  }
}
