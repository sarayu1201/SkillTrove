import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "Learner";
  const score = searchParams.get("score") || "0";
  const role = searchParams.get("role") || "Student";

  const date = new Date().toLocaleDateString();

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="850">
  <!-- Background with gradient -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4361ee;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#3f37c9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4cc9f0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffd700;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ff6b35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f7931e;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffd700;stop-opacity:1" />
      <stop offset="25%" style="stop-color:#ff6b35;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#f7931e;stop-opacity:1" />
      <stop offset="75%" style="stop-color:#ffd700;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff6b35;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Main background -->
  <rect width="100%" height="100%" fill="url(#bgGradient)"/>
  
  <!-- Decorative border -->
  <rect x="20" y="20" width="1160" height="810" fill="none" stroke="url(#borderGradient)" stroke-width="8" rx="20"/>
  <rect x="40" y="40" width="1120" height="770" fill="none" stroke="url(#borderGradient)" stroke-width="3" rx="15"/>
  
  <!-- Celebration background elements -->
  <circle cx="100" cy="100" r="30" fill="#ffd700" opacity="0.3"/>
  <circle cx="1100" cy="120" r="25" fill="#ff6b35" opacity="0.3"/>
  <circle cx="80" cy="750" r="35" fill="#f7931e" opacity="0.3"/>
  <circle cx="1120" cy="780" r="28" fill="#ffd700" opacity="0.3"/>
  
  <!-- SkillTrove Logo/Header -->
  <rect x="400" y="60" width="400" height="80" fill="url(#titleGradient)" rx="40"/>
  <text x="600" y="110" font-size="32" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-weight="bold">🚀 SkillTrove 🚀</text>
  
  <!-- Main Certificate Title -->
  <text x="600" y="180" font-size="42" text-anchor="middle" fill="url(#titleGradient)" font-family="Arial, sans-serif" font-weight="bold">Certificate of Achievement</text>
  
  <!-- Celebration icons around title -->
  <text x="450" y="180" font-size="30" fill="#ffd700">🏆</text>
  <text x="750" y="180" font-size="30" fill="#ffd700">🎉</text>
  
  <!-- Decorative line -->
  <line x1="300" y1="200" x2="900" y2="200" stroke="url(#titleGradient)" stroke-width="4" stroke-linecap="round"/>
  
  <!-- This is proudly presented to -->
  <text x="600" y="250" font-size="28" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif">This is proudly presented to</text>
  
  <!-- Student/Professional Name -->
  <rect x="200" y="270" width="800" height="80" fill="rgba(255,255,255,0.1)" rx="40" stroke="url(#titleGradient)" stroke-width="3"/>
  <text x="600" y="320" font-size="48" text-anchor="middle" fill="url(#titleGradient)" font-family="Arial, sans-serif" font-weight="bold">${name}</text>
  
  <!-- Achievement description -->
  <text x="600" y="390" font-size="24" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif">for successfully completing the</text>
  <text x="600" y="420" font-size="26" text-anchor="middle" fill="#ffd700" font-family="Arial, sans-serif" font-weight="bold">${role} Quiz</text>
  
  <!-- Score display with celebration -->
  <rect x="300" y="450" width="600" height="100" fill="rgba(255,255,255,0.15)" rx="50" stroke="url(#titleGradient)" stroke-width="4"/>
  <text x="600" y="490" font-size="22" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif">with an outstanding score of</text>
  <text x="600" y="530" font-size="36" text-anchor="middle" fill="url(#titleGradient)" font-family="Arial, sans-serif" font-weight="bold">${score} Points</text>
  
  <!-- Celebration icons around score -->
  <text x="320" y="500" font-size="25" fill="#ffd700">⭐</text>
  <text x="880" y="500" font-size="25" fill="#ffd700">⭐</text>
  
  <!-- Date -->
  <text x="600" y="580" font-size="20" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif">Date: ${date}</text>
  
  <!-- Founder signature section -->
  <rect x="700" y="620" width="300" height="120" fill="rgba(255,255,255,0.1)" rx="20" stroke="url(#titleGradient)" stroke-width="2"/>
  <text x="850" y="680" font-size="20" text-anchor="middle" fill="url(#titleGradient)" font-family="Arial, sans-serif" font-weight="bold">A. VinayaSarayu</text>
  <text x="850" y="710" font-size="16" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif">Founder & CEO</text>
  <text x="850" y="730" font-size="18" text-anchor="middle" fill="url(#titleGradient)" font-family="Arial, sans-serif" font-weight="bold">SkillTrove</text>
  
  <!-- Decorative elements -->
  <text x="200" y="680" font-size="40" fill="#ffd700" opacity="0.7">🎯</text>
  <text x="1000" y="680" font-size="40" fill="#ffd700" opacity="0.7">💼</text>
  
  <!-- Bottom branding -->
  <rect x="200" y="780" width="800" height="40" fill="rgba(255,255,255,0.1)" rx="20"/>
  <text x="600" y="805" font-size="16" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-weight="bold">SkillTrove • IdeaSpark Startup Expo • Empowering Future Leaders</text>
  
  <!-- Additional celebration elements -->
  <text x="150" y="400" font-size="25" fill="#ff6b35" opacity="0.6">🎊</text>
  <text x="1050" y="400" font-size="25" fill="#ff6b35" opacity="0.6">🎊</text>
  <text x="150" y="600" font-size="25" fill="#f7931e" opacity="0.6">🚀</text>
  <text x="1050" y="600" font-size="25" fill="#f7931e" opacity="0.6">🚀</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Content-Disposition": `attachment; filename=SkillTrove-Certificate-${name}.svg`,
    },
  });
}

