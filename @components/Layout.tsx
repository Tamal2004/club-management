import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import ResponsiveGrid from '@components/ResponsiveGrid';

const Container = styled.div`
    grid-column: content-start / content-end;
`;

const Layout: React.FC = ({ children }) => {
    return (
        <ResponsiveGrid>
            <Header />
            <Container>{children}</Container>
        </ResponsiveGrid>
    );
};

export default Layout;
