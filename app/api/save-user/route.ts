import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { name, avatar } = await req.json();

        if (!name || !avatar) {
            return NextResponse.json({ error: "Missing name or avatar" }, { status: 400 });
        }

        const result = await sql`
      INSERT INTO users (name, avatar)
      VALUES (${name}, ${avatar})
      RETURNING id
    `;

        return NextResponse.json({ success: true, userId: result[0]?.id });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}