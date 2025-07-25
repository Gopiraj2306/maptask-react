import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        textAlign: 'center',
        marginTop: 'auto', // ensures it stays at the bottom if using flex layout
        boxShadow: '0 -1px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
