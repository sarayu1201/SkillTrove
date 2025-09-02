import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "Learner";
  const score = searchParams.get("score") || "0";
  const role = searchParams.get("role") || "Student";

  const date = new Date().toLocaleDateString();

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="850">
  <rect width="100%" height="100%" fill="#ffffff"/>
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#111111" stroke-width="3"/>
  <text x="600" y="120" font-size="36" text-anchor="middle" fill="#111111" font-family="Georgia, serif">SkillTrove Certificate of Achievement</text>
  <text x="600" y="210" font-size="24" text-anchor="middle" fill="#333333" font-family="Georgia, serif">This is proudly presented to</text>
  <text x="600" y="280" font-size="44" text-anchor="middle" fill="#111111" font-weight="bold" font-family="Georgia, serif">${name}</text>
  <text x="600" y="340" font-size="22" text-anchor="middle" fill="#333333" font-family="Georgia, serif">for successfully completing the ${role} quiz</text>
  <text x="600" y="380" font-size="20" text-anchor="middle" fill="#333333" font-family="Georgia, serif">with a score of ${score} points</text>
  <text x="600" y="460" font-size="16" text-anchor="middle" fill="#555555" font-family="Georgia, serif">Date: ${date}</text>
  <text x="900" y="600" font-size="18" text-anchor="middle" fill="#111111" font-family="Georgia, serif">A. VinayaSarayu</text>
  <text x="900" y="625" font-size="14" text-anchor="middle" fill="#333333" font-family="Georgia, serif">Founder, SkillTrove</text>
  <line x1="800" y1="605" x2="1000" y2="605" stroke="#111111" stroke-width="2"/>
  <text x="600" y="720" font-size="12" text-anchor="middle" fill="#777777" font-family="Georgia, serif">SkillTrove • IdeaSpark Startup Expo</text>
 </svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Content-Disposition": `attachment; filename=SkillTrove-Certificate-${name}.svg`,
    },
  });
}

