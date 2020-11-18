import Container from 'components/Container';
import Main from 'components/Main';
import OsSelector from 'components/OsSelector';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Download() {
    const router = useRouter();
    useEffect(() => {
        const os = window.navigator.platform.toLowerCase();
        if (os.includes('mac')) {
            router.push('/download/macos');
        } else if (os.includes('win')) {
            router.push('/download/windows');
        } else if (os.includes('linux')) {
            router.push('/download/deb');
        }
    }, [router]);

    return (
        <Main>
            <Container>
                    <OsSelector />
                    <p>You are being redirected to the right OS. Please hold.</p>
            </Container>
        </Main>
    );
}