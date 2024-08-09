import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Home() {
    return (
        <>
            <main>Landing Page Section</main>
            <Link href="/aboutme">
                <Button>Get started</Button>
            </Link>
        </>
    );
}