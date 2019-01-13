import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Event = (props) => {
    return (
        <div>
            { props.event ? (
                <Card>
                    <CardMedia
                        style={{height: 0, paddingTop: '56.25%'}}
                        image={props.event.fields.eventImage.fields.file.url}
                        title={props.event.fields.title} />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant="headline"
                            component="h2">
                            {props.event.fields.title}
                        </Typography>
                        <Typography 
                            component="p">
                            {props.event.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            href={props.event.fields.url}
                            target="_blank">
                            Go To Event
                        </Button>
                    </CardActions>
                </Card>
            ) : null }
        </div>
    )
}
export default Event