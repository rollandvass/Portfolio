import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Home() {
    return (
        <>
            <main>Landing Page</main>
            <Link href="/services">
                <Button>Get started</Button>
            </Link>
        </>
    );
}