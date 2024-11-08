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
import { Textarea } from '@/components/ui/textarea';

import { checkUserInDatabase } from '../actions/checkUserInDatabase';


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
  message: z.string().min(1, { message: 'O recado não pode estar vazio.' }),
});

// Infer the type from the Zod schema
type FormData = z.infer<typeof formSchema>;

export function MessageForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      message: '',
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const result = await checkUserInDatabase(data.fullName);
      if (result.found) {
        alert('conta de banco');
      } else {
        alert('Usuário não encontrado.');
      }
    });
  };

  return (
    <div className="mx-auto  rounded bg-gray-100 p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input className='bg-white' placeholder="Digite seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recado</FormLabel>
                <FormControl> 
                  <Textarea className='bg-white' placeholder="Digite seu recado" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-gray-700 text-white hover:bg-gray-800"
            disabled={isPending}
          >
            {isPending ? 'Enviando...' : 'Enviar Recado'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
