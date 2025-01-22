import { Flag } from './definitions';
import { getCacheTimeout } from '@/lib/utils';

const CACHE_TIMEOUT = getCacheTimeout();

export async function getFlags(): Promise<Flag[]> {
  const response = await fetch(`${process.env.BASE_URL}/api/flags?k123=${process.env.NEXT_PUBLIC_F123_API_KEY}`,
    {
      next: {
        revalidate: CACHE_TIMEOUT,
      }
    });
  if (!response.ok) {
    throw new Error('Failed to fetch flags');
  }
  return response.json();
}