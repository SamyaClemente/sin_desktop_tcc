import { AppBar, Toolbar, Typography, IconButton, Tab, Tabs, Container, Button} from '@mui/material';
import logo from "./img/unicap-logo-full.png";

const fontWeight = 'bolder';
const customFontFamily = 'Montserrat, sans-serif'; 
  
export const Navbar = () =>{
    return(
        <>
        <AppBar position='static' margin='0px' sx={{ display: { xs: 'none', md: 'flex', background: '#FFFFFF' } }}>
            <Toolbar>
                <IconButton variant="contained" size='large' edge='start' color='inerith' sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <img src={logo} width={"160rem"} />
                </IconButton>
                <Tabs textColor='inherit' sx={{ color: '#301010', display: 'flex', marginLeft: '48rem' }}>
                    <Tab label='Sobre o SIN' sx={{ fontWeight, fontFamily: customFontFamily }} />
                    <Tab label='Gestão' sx={{ fontWeight, fontFamily: customFontFamily }} />
                    <Tab label='Pós-graduação' sx={{ fontWeight, fontFamily: customFontFamily }} />
                    <Tab label='Pesquisa e Extensão' sx={{ fontWeight, fontFamily: customFontFamily }} />
                    <Tab label='Comunicação' sx={{ fontWeight, fontFamily: customFontFamily }} />
                </Tabs>
                <Button
                sx={{
                    background: '#440E0E',
                    width: '5rem',
                    fontSize: '12px',
                    marginRight:'10px',
                    color: '#FFFFFFF6',
                }}
                style={{borderRadius: '10px'}}>
                Login</Button>
                <Button
                sx={{
                    background: '#440E0E',
                    width: '5rem',
                    fontSize: '12px',
                    color: '#FFFFFFF6',
                }}
                style={{borderRadius: '10px'}}>
                Cadastro</Button>

            </Toolbar>
        </AppBar>
            </>
    )
}

export default Navbar
