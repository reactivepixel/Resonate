import React from 'react';
import { DateTime } from 'luxon';



import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import CardHeader from '@material-ui/core/CardHeader';

const Event = (props) => {
    return (
        <div>
            { props.event ? (
                <Card>
                    <CardMedia
                        style={{height: 0, paddingTop: '56.25%'}}
                        image="https://picsum.photos/200/300?random"
                        title={props.event.title} />
                    <CardContent>
                        <CardHeader 
                            title={props.event.title}
                            subheader={props.event.venue.name} />

                        <Typography component="p">
                            {DateTime.local()
                                .toLocaleString({ 
                                    weekday: 'short',
                                    month: 'short',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    timeZoneName: 'short'
                                })}
                        </Typography>

                        <Typography 
                            component="p">
                            {props.event.description}
                        </Typography>
                        
                        <Typography component="p">
                            You are being requested by [Company Name] for a [Role Name] Position for this event.
                        </Typography>

                        <Typography headlineMapping="h5">
                            My Response
                        </Typography>
                        <div> 
                            <Button
                                size="medium"
                                variant="outlined"
                                color="secondary"
                                href="https://picsum.photos/200/300?random"
                                target="_blank">
                                Confirm
                            </Button>

                            <Button
                                size="medium"
                                variant="outlined"
                                color="secondary"
                                href="https://picsum.photos/200/300?random"
                                target="_blank">
                                Decline
                            </Button>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            href="https://picsum.photos/200/300?random"
                            target="_blank">
                            Details
                        </Button>

                        <Button
                            size="small"
                            color="primary"
                            href="https://picsum.photos/200/300?random"
                            target="_blank">
                            MSG
                        </Button>
                    </CardActions>
                </Card>
            ) : null }
        </div>
    )
}
export default Event