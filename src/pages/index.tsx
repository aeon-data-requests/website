import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';
import { faDownload } from 'assets/faDownload';
import { faMouseAlt } from 'assets/faMouseAlt';
import Container, { TwoPanel } from 'components/Container';
import Rights from 'components/Landing/Rights';

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

    h1 {
        text-shadow: 0 1px 1px rgba(0,0,0,0.04), 
            0 2px 2px rgba(0,0,0,0.04), 
            0 4px 4px rgba(0,0,0,0.04), 
            0 8px 8px rgba(0,0,0,0.04),
            0 16px 16px rgba(0,0,0,0.04);
    }

    @media(max-width: 800px) {
        padding-top: calc(100px + 15vw + 15vh);
        padding-left: 16px;
        margin: 0 auto;
        hyphens: auto;
    }
`;

const ScreenContainer = styled.div<{ inverse?: boolean }>`
    perspective: 400px;
    position: relative;

    & > div {
        transform: rotateY(${props => props.inverse ? 3 : -3}deg);
        box-shadow: 0 1px 1px rgba(0,0,0,0.06), 
            0 2px 2px rgba(0,0,0,0.06), 
            0 4px 4px rgba(0,0,0,0.06), 
            0 8px 8px rgba(0,0,0,0.06),
            0 16px 16px rgba(0,0,0,0.06);
        border-radius: 8px;
    }
`;

const OrganisationCTA = styled(Container)`
    text-align: center;
    max-width: 600px;
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
                    alt="Swirly swirls originating from poorly drawn vault"
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
            <Container>
                <TwoPanel>
                    <div>
                        <h1>By the power of the GDPR!</h1>
                        <p>As a European citizen, you have the right to get access to your data from any organisation that is processing it. Aeon makes exercising this right (and a couple more) easy and accessible.</p>
                    </div>
                    <div>
                        <Rights />
                    </div>
                </TwoPanel>
                <TwoPanel inverse>
                    <div>
                        <h1>Gather your data automatically</h1>
                        <p>Aeon automatically retrieves your personal data from a few well-known sources. Just add your account to get started.</p>
                        <p>A particular source you're looking for not available? Use the built-in auto-emailer to send off your request.</p>
                    </div>
                    <ScreenContainer inverse>
                        <Image 
                            className="screen"
                            src="/accounts.png"
                            width={556}
                            height={456}
                        />
                    </ScreenContainer>
                </TwoPanel>
                <TwoPanel>
                    <div>
                        <h1>Scanning...<br />Analyzing...</h1>
                        <p>Aeon offers a convenient overview of your personal data, sorted by type, source and account. Get a quick look at what's happening with your personal information.</p>
                    </div>
                    <ScreenContainer>
                        <Image 
                            className="screen"
                            src="/timeline.png"
                            width={556}
                            height={456}
                        />
                    </ScreenContainer>
                </TwoPanel>
                <TwoPanel inverse>
                    <div>
                        <h1>Live and let live, search &amp; destroy</h1>
                        <p>When you have obtained your data, it is up to you what to do with it. Either you let the data as-is, or you remove and modify some of it.</p>
                        <p>Aeon includes the auto-emailer, which can automatically generate emails that legally compel a particular source to modify or delete data.</p>
                    </div>
                    <ScreenContainer inverse>
                        <Image
                            className="screen"
                            src="/data.png"
                            width={556}
                            height={456}
                        />
                    </ScreenContainer>
                </TwoPanel>
                <OrganisationCTA>
                    <h3>Are you an organisation facilitating data requests?</h3>
                    <p>Aeon integrates with standardised formatting for data rights, in an initiative called the Open Data Rights API. Find details in the provided whitepaper:</p><br />
                    <Button href="https://whitepaper.open-data-rights.org/" target="_blank">Open Data Rights Whitepaper</Button>
                </OrganisationCTA>
            </Container>
        </>
    );
}
