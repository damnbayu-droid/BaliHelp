import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    const result = await zai.functions.invoke('page_reader', {
      url: url
    });

    return NextResponse.json({
      success: true,
      data: result.data
    });
  } catch (error: any) {
    console.error('Error fetching website:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch website' },
      { status: 500 }
    );
  }
}
