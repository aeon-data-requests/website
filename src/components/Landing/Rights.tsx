import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from 'assets/faDownload';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    perspective: 500px;
    position: relative;
    perspective-origin: center left;
`;

const SingleRightContainer = styled.div`
    text-align: center;
    margin: 4px 0;
    transform: rotateY(-10deg) scale(0.85);
    
    p {
        margin-bottom: 6px;
    }

    span {
        opacity: 0.5;
    }
`;

const IconContainer = styled.div`
    border-radius: 15px;
    width: 120px;
    height: 120px;
    background-image: linear-gradient(to bottom right,#000080, #0000FF);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface SingleRightProps {
    icon: IconDefinition;
    right: string;
    article: number;
}

function SingleRight(props: SingleRightProps) {
    const { icon, right, article } = props;
    return (
        <SingleRightContainer>
            <IconContainer>
                <FontAwesomeIcon icon={icon} fixedWidth size="3x" />
            </IconContainer>
            <p>{right}</p>
            <span>[Article {article}]</span>
        </SingleRightContainer>
    )
}

function Rights() {
    return (
        <Container>
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
            <SingleRight
                icon={faDownload}
                right="Right to download"
                article={15}
            />
        </Container>      
    );
}

export default Rights;