<Card>
<CardActionArea>
            <CardMedia component="img" title="" image="assets/images/business-card-top-imag.jpg" />
            <CardHeader
                title="tot"
                subheader="num"
                
            />
            <Divider/>
            <CardContent>
            <Typography variant="body2" color="initial"><strong>Phone:</strong> 05050050</Typography>
            <Typography variant="body2" color="initial"><strong>Address:</strong> sad a2 asd </Typography>
            <Typography variant="body2" color="initial"><strong>Card Number:</strong> 23444444</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions disableSpacing sx={{display:"flex",justifyContent:"space-between",position:"rela",marginBottom:"0px",paddingBottom:"0px"}}>
            <Box>
            <IconButton aria-label="Delete Button">
            <DeleteIcon/>
            </IconButton>

            <IconButton aria-aria-label='Edit Button'>
            <EditIcon/>
            </IconButton>

            </Box>  
            
            <Box>
            <IconButton aria-aria-label='Phone Button'>
            <PhoneIcon/>
            </IconButton>

            <IconButton aria-aria-label='Add To Favorites'> 
            <FavoriteIcon/>
            </IconButton>
            </Box>
        </CardActions>
    </Card>;