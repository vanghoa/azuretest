import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const sec = process.env.BJP;

export async function GET(request: NextRequest) {
    try {
        if (!sec) return NextResponse.json({ code: 'fuck' }, { status: 400 });

        return NextResponse.json({ code: sec });
    } catch (e) {
        console.log('error@@@: ', e);
        return NextResponse.json({ code: 'fuck' }, { status: 400 });
    }
}
