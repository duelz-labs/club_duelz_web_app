'use server';

import { cookies } from "next/headers";

export const setAuthCookie = async (token: string): Promise<boolean> => {
    try {
        (await cookies()).set('auth_club_duelz', token);
        return true;
    } catch (err) {
        console.log("Error setting theme cookie: " + err);
        return false;
    }
}

export const getAuthCookie = async (): Promise<string | undefined> => {
    const token = (await cookies()).get('auth_club_duelz');
    return token?.value;
}