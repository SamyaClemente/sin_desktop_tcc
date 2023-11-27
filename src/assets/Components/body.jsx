import {Typography, Container, Box, Grid, Button, Card, CardContent,} from '@mui/material';
import banner from "./img/embarque2.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SchoolIcon from '@mui/icons-material/School';
  
export const Body = () =>{
    return(
        <>
        <Box>
            <img src={banner} width={"100%"} />
            <Container 
             sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
            <Typography
               variant="h2"
                sx={{
                fontWeight: 'bold',
                color: '#440E0E',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '3rem',
                marginTop:'3rem',
                 }}>
                 Sistemas para Internet
             </Typography>
         </Container>
         <Grid sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Grid>
         <Typography
               variant="h2"
                sx={{
                fontWeight: 'bold',
                color: '#440E0E',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '1rem',
                marginTop:'3rem',
                 }}>
                    Sobre o Curso
          </Typography>
          <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography 
          sx={{
          fontWeight: 'bold',
          color: '#110E0E',
          fontFamily: 'Montserrat, sans-serif',
          marginBottom: '1rem',
          marginTop:'3rem',
          fontSize: 20,
          width: '40rem'
           }}>
          De forma orgânica e sistêmica, oferecer uma formação integral de modo a formar profissionais capazes de projetar, analisar, 
          e desenvolver soluções computacionais focadas na plataforma web, 
          atreladas a uma boa visão estratégica de qualidade de software e com direção empreendedora de modelo de negócios, para atender e suprir demandas da sociedade e do mundo do trabalho.
          </Typography>
          <Button 
          sx={{
            background: '#440E0E',
            color: '#FFFFFFF6',
            marginLeft: '3rem',
            transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  background: '#270606',
                  color: '#FFFFFFF6',
                },
            }}
            style={{borderRadius: '10px'}}>
            Conheça os objetivos específicos
          </Button>
          
          </Grid>

          <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2%',
          }}>
                    <Card 
                        sx={{
                            height: '5rem',
                            width: '15rem',
                            display: 'flex',                
                            backgroundColor: '#FFFAFA',
                            margin: '3%',
                          }}
                          style={{border: '1px', borderStyle: 'solid', color:'#440E0E', borderRadius: '1rem'
                        }}
                          >
                    <CardContent>
                        <Typography sx={{ fontSize: 14, color:'#440E0E', fontWeight: 'bold', fontSize:'1rem'}}>
                            Carga Horária
                        </Typography>
                        <Typography sx={{display: 'flex', paddingTop:'3px', color:'#440E0E', fontWeight: 'bold', fontSize:'1rem'}}>
                        <AccessTimeIcon sx={{marginRight: '2rem'}}/> 1700h
                        </Typography>
                    </CardContent>
                    </Card> 

                    <Card
                     sx={{
                        height: '5rem',
                        display: 'flex',  
                        width: '15rem',              
                        backgroundColor: '#FFFAFA',
                      }}
                      style={{border: '1px', borderStyle: 'solid', color:'#440E0E', borderRadius: '1rem'
                        }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, color:'#000000',  color:'#440E0E', fontWeight: 'bold', fontSize:'1rem' }} >
                            Duração
                        </Typography>
                        <Typography sx={{display: 'flex', paddingTop:'3px', color:'#440E0E', fontWeight: 'bold', fontSize:'1rem'}}>
                        <CalendarMonthIcon sx={{marginRight: '2rem'}}/> 5 Semestres
                        </Typography>
                    </CardContent>
                    </Card>
                      </Box>

                      <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Card 
                     sx={{
                        height: '5rem',
                        width: '15rem',
                        display: 'flex',                
                        backgroundColor: '#FFFAFA',
                        margin: '3%',
                      }}
                      style={{border: '1px', borderStyle: 'solid', color:'#440E0E', borderRadius: '1rem'
                        }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, color:'#000000', color:'#440E0E', fontWeight: 'bold', fontSize:'1rem'}} >
                            Turno
                        </Typography>
                        <Typography sx={{display: 'flex', paddingTop:'3px', color:'#440E0E', fontWeight: 'bold', fontSize:'1rem'}}>
                        <NightsStayIcon sx={{marginRight: '2rem'}}/> Noite
                        </Typography>
                    </CardContent>
                    </Card>

                    <Card
                     sx={{
                        height: '5rem',
                        width: '15rem',
                        display: 'flex',                
                        backgroundColor: '#FFFAFA',
                      }}
                      style={{border: '1px', borderStyle: 'solid', color:'#440E0E', borderRadius: '1rem'
                        }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, color:'#440E0E', fontWeight: 'bold', fontSize:'1rem'}} >
                            Grau
                        </Typography>
                        <Typography sx={{display: 'flex', paddingTop:'3px', color:'#440E0E', fontWeight: 'bold', fontSize:'1rem'}}>
                        <SchoolIcon sx={{marginRight: '2rem'}}/> Tecnólogo
                        </Typography>
                    </CardContent>
                    </Card>
                    </Box>
          </Grid>
          </Grid>         
         
        </Box>
    </>
    )
}
    export default Body