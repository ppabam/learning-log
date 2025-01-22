import { NextResponse } from 'next/server';
import { insertFlag } from '@/app/lib/data'; // insertFlag 함수가 정의된 경로

export async function POST(req: Request) {
  try {
    const { name, img_url } = await req.json();

    if (!name || !img_url) {
      return NextResponse.json({ error: 'Name and img_url are required' }, { status: 400 });
    }

    const newFlag = await insertFlag({ name, img_url });
    return NextResponse.json(newFlag, { status: 200 });
  } catch (error) {
    console.error('Error inserting flag:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
