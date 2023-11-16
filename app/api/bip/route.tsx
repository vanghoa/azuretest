import { NextRequest, NextResponse } from 'next/server';

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
