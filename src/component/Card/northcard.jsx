import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { createTheme,ThemeProvider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4,
  borderRadius:5,
};



export default function NorthCard() {
  const pattayatheme = createTheme({
    typography: {
      fontFamily: [
        'Pattaya',
        'sans-serif'
        
      ].join(','),
    },
  });
  const kanitheme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif'
        
      ].join(','),
    },
  });
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
    <Card sx={{ maxWidth: 345 ,borderRadius:5}} onClick={handleOpen}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="./asset/north.jpg"
          alt="ภาคเหนือ"
        />
        <CardContent>
        <ThemeProvider theme={pattayatheme}>
          <Typography variant="h6" component="div">
            ภาคเหนือ
          </Typography>
          </ThemeProvider>
        </CardContent>
      </CardActionArea>
    </Card>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <ThemeProvider theme={kanitheme}>
  <Typography id="modal-modal-title" variant="h6" component="h2">
    ภาคเหนือ
  </Typography>
  </ThemeProvider>
  <CardMedia
          component="img"
          height="auto"
          image="./asset/north.jpg"
          alt="ภาคเหนือ"
        />
        <ThemeProvider theme={kanitheme}>
  <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
  มีเทศกาลยี่เป็ง นอกจากลอยกระทง ยังมีการจุดประทีปโคมไฟ เพื่อบูชาพระพุทธเจ้าจังหวัดตาก มีพิธีปล่อย "กระทงสาย" ให้ลอยไปตามน้ำ
  </Typography>
  </ThemeProvider>
</Box>
</Modal>
</div>
  );
}