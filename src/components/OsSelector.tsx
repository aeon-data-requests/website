import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
    border-bottom: 1px solid #eee;
    margin-bottom: 32px;
`;

const MenuItem = styled.a`
    display: inline-block;
    margin-right: 32px;
    padding: 16px 0;
    text-decoration: none;
    color: black;
    border-bottom: 3px solid transparent;

    &:hover:not(.active) {
        border-color: #ddd;
        color: black;
    }

    &.active {
        border-color: #0000ff;
        color: #0000ff;
    }
`;

interface Props {
    activeOS?: string;
}

function OsSelector({ activeOS = '' }: Props) {
    return (
        <Container>
            <Link href="/download/macos" passHref>
                <MenuItem className={activeOS === 'macos' ? 'active' : ''}>macOS</MenuItem>
            </Link>
            <Link href="/download/windows" passHref>
                <MenuItem className={activeOS === 'windows' ? 'active' : ''}>Windows</MenuItem>
            </Link>
            <Link href="/download/deb" passHref>
                <MenuItem className={activeOS === 'deb' ? 'active' : ''}>Debian/Ubuntu</MenuItem>
            </Link>
            <Link href="/download/rpm" passHref>
                <MenuItem className={activeOS === 'rpm' ? 'active' : ''}>centOS/Fedora/RHEL</MenuItem>
            </Link>
        </Container>
    );
}

export default OsSelector;