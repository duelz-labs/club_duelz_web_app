'use server';

import { setAuthCookie } from "./cookie.service";

const SERVER_API: string = process.env.NEXT_PUBLIC_SERVER_API!;

export const login = async (email: string, password: string): Promise<boolean> => {
    try {
        const response = await fetch(`${SERVER_API}/v1/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resJson = await response.json();
        setAuthCookie(resJson.data.token);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}