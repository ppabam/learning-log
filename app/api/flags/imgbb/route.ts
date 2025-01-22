import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.IMGBB_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'IMGBB API key is missing' },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const formDataToUpload = new FormData();
    formDataToUpload.append('image', file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formDataToUpload,
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: result.error.message },
        { status: response.status }
      );
    }

    return NextResponse.json({
      message: 'Image uploaded successfully',
      imageUrl: result.data.url,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Image upload failed' },
      { status: 500 }
    );
  }
}
