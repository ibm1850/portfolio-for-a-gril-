import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type InquiryRecord = {
  id: string;
  name: string;
  brand: string;
  email: string;
  campaign: string;
  message: string;
  createdAt: string;
};

const storageDirectory = path.join(process.cwd(), "data");
const storageFile = path.join(storageDirectory, "bookings.json");

async function readInquiries() {
  try {
    const raw = await readFile(storageFile, "utf8");
    const parsed = JSON.parse(raw);

    return Array.isArray(parsed) ? (parsed as InquiryRecord[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<InquiryRecord>;
    const name = payload.name?.trim() ?? "";
    const brand = payload.brand?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const campaign = payload.campaign?.trim() || "Collaboration inquiry";
    const message = payload.message?.trim() ?? "";

    if (!name || !brand || !email || !message) {
      return NextResponse.json(
        { message: "Please fill in the required booking fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const inquiry: InquiryRecord = {
      id: randomUUID(),
      name,
      brand,
      email,
      campaign,
      message,
      createdAt: new Date().toISOString(),
    };

    const existingInquiries = await readInquiries();

    await mkdir(storageDirectory, { recursive: true });
    await writeFile(
      storageFile,
      JSON.stringify([inquiry, ...existingInquiries], null, 2),
      "utf8",
    );

    return NextResponse.json({
      message: "Inquiry saved successfully.",
      inquiry,
    });
  } catch (error) {
    console.error("Failed to save inquiry", error);

    return NextResponse.json(
      { message: "Something went wrong while saving the inquiry." },
      { status: 500 },
    );
  }
}
