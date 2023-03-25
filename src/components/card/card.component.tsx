import { useState } from 'react';
import styles from'./card.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Cart=()=>{
    const [toggelBox,setToggeleBox]=useState(false);
    const moreButton = ()=>{
        setToggeleBox(true);
    }
    const lessButton =()=>{
        setToggeleBox(false)
    }
    const bull = (
        <Box
          component="span"
          sx={{ color:'red', display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    return<>
    <Card  className={!toggelBox ? styles['card-container'] : styles['card-container-toggle']}>
        <CardContent  >
        <Typography  className={styles['card-title']} component="div">
            Card Titel { bull}
        </Typography>
        <div className={styles['card-detail']}>
               <div className={styles['card-paragragh']}> <p className={!toggelBox ? styles['card-text'] : styles['card-text-toggle']}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptates. Tempore sit officia repudiandae illum libero! Ut eos, sed dicta architecto ex iusto placeat provident facilis similique molestiae consectetupkokpmomjhhbnmquisquamaljkdfhlkasdjfsldkjfafjkdhfskjfd?</p>
                    <div className={styles['text-button']}>
                        <span onClick={ moreButton} className={!toggelBox ?styles['card-text-option']:styles['hidden'] }>more</span>
                        <span onClick={ lessButton } className={toggelBox ?styles['card-text-option'] : styles['hidden']}>less</span>
                    </div>
                </div>
            <div className={styles['card-buttons']}>
                <button className={styles['card-button']}>Edit</button>
                <button className={styles['card-button']}>Delete</button>
            </div>
        </div>
        </CardContent>
    </Card>
    </>
}
export default Cart;
