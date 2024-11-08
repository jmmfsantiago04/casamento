'use server'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitFormAction(data: {
  fullName: string;
  attendance: string;
  adultsCount: string;
  childrenCount: string;
  email: string;
  phone: string;
  notes?: string;
}) {
  try {
    // Inserir dados no banco de dados
    const newEntry = await prisma.confirmationForm.create({
      data,
    });

    return { success: true, newEntry };
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
    return { success: false, error: 'Erro ao inserir dados no banco de dados' };
  }
}
