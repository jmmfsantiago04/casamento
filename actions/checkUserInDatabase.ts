'use server'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkUserInDatabase(fullName: string) {
  try {
    // Use findUnique agora que fullName é um campo único
    const user = await prisma.confirmationForm.findUnique({
      where: {
        fullName,
      },
    });

    return { found: !!user };
  } catch (error) {
    console.error('Erro ao verificar o usuário:', error);
    return { found: false, error: 'Erro ao verificar no banco de dados' };
  }
}
