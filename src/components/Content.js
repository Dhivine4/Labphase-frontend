import React from 'react';
import { Container, Grow, Grid } from '@mui/material';
import Posts from './posts/Posts';
import Form from './form/Form';
import memories from '../images/memories.png';
import { AppBarWrapper, Heading, Image } from '../styles';



const Content = () => {
    return (
        <Container maxWidth='lg'>
            <AppBarWrapper position='static' color='inherit'>
                <Heading variant='h2' align='center'>
                Nostalgia
                </Heading>
                <Image src={memories} alt='app-logo' height='60' />
            </AppBarWrapper>
            <Grow in>
                <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                    <Grid item xs={12} sm={7}>
                    <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Form />
                    </Grid>
                </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default Content;