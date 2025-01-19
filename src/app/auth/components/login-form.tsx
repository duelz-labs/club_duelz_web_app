'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginForm: React.FC = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        alert("let's dribble!");
        router.push('/my-duelz');
      } else {
        throw new Error("login service call returned false!");
      }
    } catch (error) {
      console.log(error);
      alert('something went wrong while cleaning your studs, please try again!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardDescription>welcome back, champ</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} autoComplete='email' required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="top#secret" onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Logging In..." : "Login"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default LoginForm;