import styled from 'styled-components';
import Carbonbadge from 'react-carbonbadge';
import Container, { TwoPanel } from './Container';

const Wrapper = styled.div`
    background-color: #eee;
    font-size: 14px;
    padding-bottom: 32px;

    ${TwoPanel} {
        margin-bottom: 0;
        padding: 50px 0;
    }
`;

function Footer() {
    return (
        <Wrapper>
            <Container>
                <TwoPanel>
                    <div>
                        <p>
                            Aeon is created and maintained by Lei Nelissen
                            <br />&copy; 2020 Lei Nelissen
                        </p>
                    </div>
                    <div>
                        <strong>Privacy Policy &amp; Terms of Service</strong>
                        <p>We don&apos;t story any of your data. Period. Also, this software is provided as is. No guarantees, no take-backsies.</p>
                    </div>
                </TwoPanel>
                <Carbonbadge />
            </Container>
        </Wrapper>
    )
}

export default Footer;