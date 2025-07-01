import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
function InfoBox({ info }) {
    const rain_day = "https://png.pngtree.com/background/20210714/original/pngtree-rainy-sky-background-picture-image_1230127.jpg";
    const cold_day = "https://th.bing.com/th/id/OIP.onVPev7Yp7ZnMVoRXdPzyAHaEo?rs=1&pid=ImgDetMain";
    const hot_day = "https://th.bing.com/th/id/OIP.Nfd-_b2A1A1D6AsvReUmgAHaEc?rs=1&pid=ImgDetMain";

    return (
        <div className="infoBox">
            <h2>Weather Info - {info.weather}</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="weather image"
                    height="140"
                    image={info.humadity>80 ? rain_day : (info.temp>15)?hot_day:cold_day}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{" "}{info.humadity>80 ? <ThunderstormIcon/> : (info.temp>15)? <SunnyIcon/>:<AcUnitIcon/>}

                    </Typography>
                    
                    {/* Fixed nested div issue by using multiple Typography components */}
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature = {info.temp} &deg;C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Minimum Temperature = {info.tempmin} &deg;C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Maximum Temperature = {info.tempmax} &deg;C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Humidity = {info.humadity}%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The Weather can be described as <i>{info.weather}</i> and feels like {info.feel} &deg;C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default InfoBox;
