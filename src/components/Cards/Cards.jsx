import {Card, CardContent, Typography, CardMedia} from '@material-ui/core';
import CountUp from 'react-countup';
import React from 'react';

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (<div className={styles.container}>
            <Card className={styles.card} xs={12} md={3}>
                <CardMedia
                    component="img"
                    image={'./confirmed.svg'}
                    className={styles.cardIcon}
                    title="Confirmed"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5"
                                component="h2">Confirmed</Typography>
                    <Typography variant="body1" color="textSecondary"
                                component="p">
                        <CountUp delay={0} end={confirmed} duration={2}
                                 separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(
                        lastUpdate).toDateString()}</Typography>
                </CardContent>
            </Card>
            <Card className={styles.card}>
                <CardMedia
                    component="img"
                    image={'./recovered.svg'}
                    className={styles.cardIcon}
                    title="Recovered"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5"
                                component="h2">Recovered</Typography>
                    <Typography variant="body1" color="textSecondary"
                                component="p">
                        <CountUp delay={0} end={recovered} duration={2}
                                 separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(
                        lastUpdate).toDateString()}</Typography>
                </CardContent>
            </Card>
            <Card className={styles.card}>
                <CardMedia
                    component="img"
                    image={'./deaths.svg'}
                    className={styles.cardIcon}
                    title="Deaths"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5"
                                component="h2">Deaths</Typography>
                    <Typography variant="body1" color="textSecondary"
                                component="p">
                        <CountUp delay={0} end={deaths} duration={2}
                                 separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(
                        lastUpdate).toDateString()}</Typography>
                </CardContent>
            </Card>
        </div>);
};

export default Cards;

