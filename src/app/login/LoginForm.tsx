"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { login } from "../actions/auth";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const result = await login(formData);
    if (result.success) {
      router.push("/dashboard");
    } else {
      setError(result.error || "An error occurred");
    }
  }

  useEffect(() => {
    if (error) {
      toast({
        title: "Error al iniciar sesión",
        duration: 2000,
        variant: "destructive",
      });
    }
  }, [error]);

  return (
    <Card className="pt-4">
      <form action={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Mail</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" name="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
