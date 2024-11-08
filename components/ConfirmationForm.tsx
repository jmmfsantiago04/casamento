"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { submitFormAction } from '../actions/submitFormAction';

// Define schema for validation
const formSchema = z.object({
  fullName: z.string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
    .refine((name) => name.trim().split(' ').length >= 2, {
      message: 'O nome completo deve ter pelo menos 2 palavras.',
    })
    .refine((name) => /^[A-Za-z ]+$/.test(name), {
      message: 'O nome não deve conter acentos.',
    }),
  attendance: z.enum(['Sim', 'Não']),
  adultsCount: z.string().min(1, { message: 'Selecione a quantidade de adultos.' }),
  childrenCount: z.string(),
  email: z.string().email({ message: 'Insira um email válido.' }),
  phone: z.string().min(10, { message: 'Insira um número de telefone válido.' }),
  notes: z.string().optional(),
});

// Infer the type from the Zod schema
type FormData = z.infer<typeof formSchema>;

export function ConfirmationForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      attendance: 'Sim',
      adultsCount: '1',
      childrenCount: '0',
      email: '',
      phone: '',
      notes: '',
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const result = await submitFormAction(data);
      if (result.success) {
        alert('Confirmação enviada com sucesso!');
        console.log('Dados enviados com sucesso:', result.newEntry);
      } else {
        alert('Houve um erro ao enviar os dados. Tente novamente.');
        console.error(result.error);
      }
    });
  };

  return (
    <div className=' bg-gray-100 pt-7'>
      <h2 className=" mb-2  text-center text-2xl font-bold">Confirmação</h2>
      <p className="mb-6 text-center text-gray-600">Confirme sua presença</p>
      <div className=" mx-auto max-w-2xl rounded-md bg-white p-8 shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel className="w-1/4 text-right">Seu nome completo</FormLabel>
                  <FormControl className="flex-1">
                    <Input placeholder="Seu nome completo" {...field} className="max-w-[900px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Attendance */}
            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel className="w-1/4 text-right">Você irá ao evento?</FormLabel>
                  <FormControl className="flex-1">
                    <div className="flex max-w-[900px] space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="size-5 rounded-full border-gray-300 text-gray-800 focus:ring-gray-500"
                          checked={field.value === "Sim"}
                          onChange={() => field.onChange("Sim")}
                        />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="size-5 rounded-full border-gray-300 text-gray-800 focus:ring-gray-500"
                          checked={field.value === "Não"}
                          onChange={() => field.onChange("Não")}
                        />
                        <span>Não</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Adults Count */}
            <FormField
              control={form.control}
              name="adultsCount"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel className="w-1/4 text-right">Quantidade de adultos incluindo você</FormLabel>
                  <FormControl className="flex-1">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="max-w-[58px]">
                        <SelectValue placeholder="1" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10).keys()].map((num) => (
                          <SelectItem key={num} value={String(num + 1)}>
                            {num + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Children Count */}
            <FormField
              control={form.control}
              name="childrenCount"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel className="w-1/4 text-right">Quantidade de crianças</FormLabel>
                  <FormControl className="flex-1">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="max-w-[58px]">
                        <SelectValue placeholder="0" />
                      </SelectTrigger>
                      <SelectContent className="max-w-[58px]">
                        {[...Array(10).keys()].map((num) => (
                          <SelectItem key={num} value={String(num)} className="max-w-[58px]">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel className="w-1/4 text-right">Email</FormLabel>
                  <FormControl className="flex-1">
                    <Input placeholder="seu.email@exemplo.com" {...field} className="max-w-[900px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel className="w-1/4 text-right">Telefone para contato</FormLabel>
                  <FormControl className="flex-1">
                    <Input placeholder="(XX) XXXXX-XXXX" {...field} className="max-w-[900px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Notes */}
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem className=" flex items-center space-x-4">
                  <FormLabel className="w-1/4 text-right">Observações</FormLabel>
                  <FormControl className="flex-1">
                    <Textarea placeholder="Digite suas observações" {...field} className="max-w-[900px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="max-w-[600px] bg-gray-800 text-center text-white hover:bg-gray-900"
                disabled={isPending}
              >
                {isPending ? 'Enviando...' : 'Confirmar presença'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
