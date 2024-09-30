import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="span">
                        <Link to="/todo"><Button sx={{ color: '#FFF' }} color="inherit">Todo Reducer</Button></Link>
                    </Typography>
                    <Typography variant="h6" component="span">
                        <Link to="/countdown"><Button sx={{ color: '#FFF' }} color="inherit">Count down</Button></Link>
                    </Typography>
                    <Typography variant="h6" component="span">
                        <Link to="/context"><Button sx={{ color: '#FFF' }} color="inherit">use Context</Button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}