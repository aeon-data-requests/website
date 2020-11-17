import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'components/Button';
import { faDownload } from 'assets/faDownload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouseAlt } from 'assets/faMouseAlt';

const ImageContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;

    > div:first-child {
        position: absolute !important;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;

        img {
            object-fit: cover;

            @media(max-width: 800px) {
                object-fit: cover;
                transform: scale(2) translateX(-50px);
            }
        }
    }
`;

const LandingContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 150px;
    gap: 0px 0px;
    grid-template-areas:
        ". description"
        "more-info more-info";

    @media(max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 150px;
        grid-template-areas:
            "description"
            "more-info";
    }
`;

const MoreInfo = styled.div`
    grid-area: more-info;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.25;
    transition: opacity 0.5s ease;
    font-size: 12px;

    &:hover {
        opacity: 1;
    }

    @keyframes scroll {
        0% {
            transform: translateY(0px);
        }
        75% {
            transform: translateY(25px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    span {
        margin-bottom: 12px;
    }

    svg {
        animation: scroll 5s infinite;
    }
`;

const Description = styled.div`
    grid-area: description;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 600px;
    color: white;
    padding-top: 200px;
    margin-left: calc(100px - 10%);
    padding-right: 16px;
    hyphens: none;

    p {
        font-size: 20px;
    }

    @media(max-width: 800px) {
        padding-top: calc(100px + 15vw + 15vh);
        padding-left: 16px;
        margin: 0 auto;
        hyphens: auto;

        h1 {
            font-size: 48px;
        }
    }
`;

export default function Home() {
    return (
        <>
            <ImageContainer>
                <Image
                    src="/landing-bg.png"
                    width={1920}
                    height={1080} 
                    quality={95}
                />
                <LandingContainer>
                    <Description>
                        <h1>Get a grip on your per&shy;sonal infor&shy;mation.</h1>
                        <p>With Aeon, you get an insight in what personal data is floating around on the internet. Retrieve, manage and adjust your personal information with the click of a button.</p>
                        <Link href="/download" passHref>
                            <Button icon={faDownload}>Download Aeon</Button>
                        </Link>
                    </Description>
                    <MoreInfo>
                        <span>Learn More</span>
                        <FontAwesomeIcon icon={faMouseAlt} size="lg" />
                    </MoreInfo>
                </LandingContainer>
            </ImageContainer>
            <div style={{ height: '500vh' }}>
                Heaps of content
            </div>
        </>
    );
}
