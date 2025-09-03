import { PrismaClient } from '../src/generated/prisma';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create demo student
  const studentPassword = await hash('student123', 12);
  const student = await prisma.user.upsert({
    where: { email: 'student@skilltrove.com' },
    update: {},
    create: {
      email: 'student@skilltrove.com',
      passwordHash: studentPassword,
      name: 'Demo Student',
      role: 'STUDENT',
    },
  });

  // Create demo professional
  const professionalPassword = await hash('professional123', 12);
  const professional = await prisma.user.upsert({
    where: { email: 'professional@skilltrove.com' },
    update: {},
    create: {
      email: 'professional@skilltrove.com',
      passwordHash: professionalPassword,
      name: 'Demo Professional',
      role: 'PROFESSIONAL',
    },
  });

  console.log('✅ Demo users created:');
  console.log(`   Student: ${student.email} (password: student123)`);
  console.log(`   Professional: ${professional.email} (password: professional123)`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });