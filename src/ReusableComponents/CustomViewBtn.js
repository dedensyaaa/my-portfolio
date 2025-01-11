import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomViewButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Tevyat, sans-serif',
    fontSize: '12px',
    backgroundColor: '#B85A49',
    color: '#ffffff',
    border: '3px solid #AA5343',
    borderRadius: '16px',
    padding: '1%',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#AA5343', // Optional hover effect
    },
}));

export default CustomViewButton;
