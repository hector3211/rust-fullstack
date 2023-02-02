import { getSession } from 'next-auth/react';

export default async function AdminPage() {
    const session = await getSession({});

    if (session && session.user.)
}
