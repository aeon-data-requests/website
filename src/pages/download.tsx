import Button from 'components/Button';
import Container from 'components/Container';
import Main from 'components/Main';

interface ReleaseProps {
    hasData: boolean;
    macos?: string;
    windows?: string;
    deb?: string;
    rpm?: string;
    version: string;
    created_at: string
}

export async function getStaticProps() {
    const data = await fetch('https://api.github.com/repos/leinelissen/aeon/releases/latest')
        .then(response => response.json()) as any;
    
    if (!data) {
        return {
            props: {
                hasData: false
            }
        };
    }

    console.log(data);
    
    return {
        props: {
            hasData: true,
            macos: data.assets.find((d: any) => d.name.indexOf('darwin') !== -1).browser_download_url,
            windows: data.assets.find((d: any) => d.name.indexOf('.exe') !== -1).browser_download_url,
            deb: data.assets.find((d: any) => d.name.indexOf('.deb') !== -1).browser_download_url,
            rpm: data.assets.find((d: any) => d.name.indexOf('.rpm') !== -1).browser_download_url,
            version: data.name,
            created_at: data.created_at,
        }
    };
}

export default function Download(props: ReleaseProps) {
    const {
        hasData,
        version,
        macos,
        windows,
        deb, 
        rpm,
        created_at,
    } = props;

    if (!hasData) {
        return (
            <Main>
                <Container>
                    <p>Find our releases on GitHub</p>
                </Container>
            </Main>
        )
    }

    return (
        <Main>
            <Container>
                    <h2>Download</h2>
                    <p>Latest version: {version}</p>
                    <p>Last release: {new Date(created_at).toLocaleDateString()}</p>
                    <Button href={macos}>Download for macOS</Button>
                    <Button href={windows}>Download for Windows</Button>
                    <Button href={deb}>Download for Debian/Ubuntu</Button>
                    <Button href={rpm}>Download for Fedora/centOS/RHEL</Button>
            </Container>
        </Main>
    );
}