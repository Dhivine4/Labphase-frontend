import { styled } from '@mui/material/styles';
import {AppBar, Typography} from '@mui/material';

export const AppBarWrapper = styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    });
    
    export const Heading = styled(Typography)({
        color: 'rgba(0, 183, 255, 1)',
    });
    
    export const Image = styled('img')({
        marginLeft: '15px',
    });