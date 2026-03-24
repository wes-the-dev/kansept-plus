import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = process.env.CONTACT_OWNER_EMAIL ?? "";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
const FROM_NAME = "Kansept Plus Studio";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { source, firstName, lastName, email, phone, projectType, projectLocation, message, subject } = body;

    if (!email || !firstName) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const fullName = `${firstName} ${lastName ?? ""}`.trim();
    const isProjectEnquiry = source === "contact";

    // ── Email to the owner ─────────────────────────────────────────────────
    const ownerSubject = isProjectEnquiry
      ? `New Project Enquiry from ${fullName}`
      : `New Contact Form Submission from ${fullName}`;

    const ownerHtml = isProjectEnquiry
      ? `
        <div style="font-family:Georgia,serif;color:#1a3749;max-width:600px;margin:0 auto;padding:40px 32px;">
          <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#b5754d;margin-bottom:24px;">Kansept Plus — New Enquiry</p>
          <h2 style="font-size:28px;font-weight:300;margin-bottom:32px;">Project Enquiry Details</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;font-weight:300;">
            <tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;width:140px;">Name</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;">${fullName}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;">Email</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;"><a href="mailto:${email}" style="color:#b5754d;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;">Phone</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;">${phone}</td></tr>` : ""}
            ${projectType ? `<tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;">Project Type</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;">${projectType}</td></tr>` : ""}
            ${projectLocation ? `<tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;">Location</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;">${projectLocation}</td></tr>` : ""}
          </table>
          ${message ? `<div style="margin-top:28px;"><p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888;margin-bottom:10px;">Message</p><p style="font-size:14px;font-weight:300;line-height:1.7;background:#FFF3EB;padding:20px;border-left:2px solid #b5754d;">${message}</p></div>` : ""}
        </div>
      `
      : `
        <div style="font-family:Georgia,serif;color:#1a3749;max-width:600px;margin:0 auto;padding:40px 32px;">
          <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#b5754d;margin-bottom:24px;">Kansept Plus — Contact Form</p>
          <h2 style="font-size:28px;font-weight:300;margin-bottom:32px;">New Message</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;font-weight:300;">
            <tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;width:140px;">Name</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;">${fullName}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;">Email</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;"><a href="mailto:${email}" style="color:#b5754d;">${email}</a></td></tr>
            ${subject ? `<tr><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;color:#888;">Subject</td><td style="padding:12px 0;border-bottom:1px solid #e0d8d0;">${subject}</td></tr>` : ""}
          </table>
          ${message ? `<div style="margin-top:28px;"><p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888;margin-bottom:10px;">Message</p><p style="font-size:14px;font-weight:300;line-height:1.7;background:#FFF3EB;padding:20px;border-left:2px solid #b5754d;">${message}</p></div>` : ""}
        </div>
      `;

    // ── Confirmation email to the user ─────────────────────────────────────
    const userHtml = `
      <div style="font-family:Georgia,serif;color:#1a3749;max-width:600px;margin:0 auto;padding:40px 32px;">
        <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#b5754d;margin-bottom:24px;">Kansept Plus Studio</p>
        <h2 style="font-size:32px;font-weight:300;line-height:1.2;margin-bottom:24px;">Thank you,<br/>${firstName}.</h2>
        <p style="font-size:15px;font-weight:300;line-height:1.8;color:#1a3749cc;margin-bottom:24px;">
          We have received your ${isProjectEnquiry ? "project enquiry" : "message"} and will be in touch within two business days.
        </p>
        <p style="font-size:15px;font-weight:300;line-height:1.8;color:#1a3749cc;margin-bottom:40px;">
          In the meantime, feel free to explore our work and process on our website.
        </p>
        <div style="border-top:1px solid #e0d8d0;padding-top:32px;margin-top:8px;">
          <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888;margin-bottom:8px;">Kansept Plus Studio</p>
          <p style="font-size:13px;font-weight:300;color:#888;line-height:1.6;">3C Olumegbon Street, Ikoyi, Lagos, Nigeria</p>
        </div>
      </div>
    `;

    const [ownerResult, userResult] = await Promise.all([
      OWNER_EMAIL
        ? resend.emails.send({
            from: `${FROM_NAME} <${FROM_EMAIL}>`,
            to: OWNER_EMAIL,
            replyTo: email,
            subject: ownerSubject,
            html: ownerHtml,
          })
        : Promise.resolve({ error: null }),
      resend.emails.send({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: email,
        subject: `We received your ${isProjectEnquiry ? "enquiry" : "message"} — Kansept Plus`,
        html: userHtml,
      }),
    ]);

    if (userResult.error) {
      console.error("Resend user email error:", userResult.error);
      return NextResponse.json({ error: "Failed to send confirmation email." }, { status: 500 });
    }

    if (ownerResult && "error" in ownerResult && ownerResult.error) {
      console.error("Resend owner email error:", ownerResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
