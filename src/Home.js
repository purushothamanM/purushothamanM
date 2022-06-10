import React, { Component } from 'react'
import Homeimage from "./Homeimage.json"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Header from "./Header"
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
export default class Home extends Component {
  render() {
      
    return (
      <div>
            <Header/>
          
          
          <div  className="row  col-md-12" style={{display:"flex",justifyContent:"center"}}>
           
            <Grid container spacing={1}>
                   
                      <div align="" className="inner" style={{display:"flex",margin:"100px",width:"100%"}} >
                        
                          <Grid item xs={4}>

                            <Card   style={{width: 350, height:400}}>
                            <div  class="item" style={{display:"flex",justifyContent:"center"}}>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeof8SZO61ZoXukyuxtB8YAYUk3flO9Ne0Q&usqp=CAU"/>
                               </div><br/>
                              <p align="center"> Oppo Mobile</p><br/><div style={{display:"flex",justifyContent:"center"}}><Link to="/Monitor">
                                  <Button variant="contained" size="large" color="primary">View </Button> </Link> <br/></div>
                          
                          </Card>
                          </Grid>
                          <Grid item xs={4}>
                          <Card  style={{ width: 350, height:400}}>
                          <div  class="item" style={{display:"flex",justifyContent:"center"}}>
                               <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUl-fv0v9wprWYf2Jxdumuum4_hnFpyrDHQ&usqp=CAU"}/> 
                               </div>
                              <p align="center"> Vivo Mobiles</p><br/>
                          
                               <div style={{display:"flex",justifyContent:"center"}}>
                               <Link to="/"> <Button variant="contained" color="primary" size="large" type="submit"> VIEW</Button></Link> 
                               </div>
                               </Card>
                               </Grid>
                               <Grid item xs={4}>
                          <Card style={{ width: 350, height:400}}>
                          <div  class="item" style={{display:"flex",justifyContent:"center"}}>
                               <img src={"data:image/jpeg;base64,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YaH0odZGF5UbJxQatJ00OOH1ftVZS3Ot36c8blZVXRjDY5u2YIzmBuvBnvvnISl4oc+PxC+t1c4WeOa10jH+IDPX6rjpWq0mtVXOEiupgutjb4d2/m+5bTRdzfFd7vI4O9nlu6uCYa/WrFd7vI4O9nlu6gVB8RYM3O82K1kRFsXJIiIiIiIiIiIiIiIiLiN87kS3rm95qpaN41/rHd4q6N9DkSvr2jrafgVS8fxr/vu7xUKN2yulq37u3f7qSneQzYtJq3prkM2LRaozVcxO0sgXpfAvqLIL2xSkW+CopqlW3wjzrxZZd65Sa8rYewrIR9pM+0zPU5xWOeutbHdhUhIyvCR47LQbWbmRU4C93wv2XroqhID4hP8AKfMLiviecoctT6LHOw/sh6s9X6rzBebLDnbSnM6/re3oUhlCWsuDa1pDeK/zQloQWVaBmsOrz0p1hXkACYnhMeLXLlqvjOh9JLEA+DgfIFSkkBV7Mxaac146qLYobN2IoRtF/PmWnJOo61rBp/IKdRKkHNxAzV6sOpTeim2RxIB/MLjxuBVqKSA8SwEx+U9ZvmeGSgZllkmzyTQgatHNeFruNDdgbwdH6FS87L3V0/VFERGEXa1z9NZIrr6viWmhbEGYqADiPhm2Zx0ZljJvNMMQsMJucXELYIrfhpGg/IKoJC6CCwtl4c8+iyQn9isTeRwd7PLd1cTP5KMJjXlwvFCKUpdW45xruXabyGD/AGeW62/ksWqk+IHteyG5pnc7/ZithERbVySIiIiIiIiIiIiIiIi5LfIyfEiyZfCaXxIDhHa0YuDQ5rgBnIa5zgM5aAqRmi1z+FYaw4nGadFq8tOgg5l+m1x2VN7yRjPdEDXQHuNXcEQwOOsEGmk2aVN60RYRde3FWlApzYLejiYY87FUczyGbFpNVueDCBSn7RFpov8AxLz4LoH+oi9f4lHFHerh1bUYmczwKqkL2rT8F8D/AFEXr/EvbN7CVzx4x2Op80+zvXorei6ngVVAUpLHiEKwn72EtmjxhtNfkvPgwg5piKOn8S8+zvXv8YossTwKpieHGooOPlWJCjvcADbNtzTXlltHEaLyeaivyLvSwHYzUboB7Vrxd5mTfy40V3M0HpUqjmJBM2qmrKLRqWJT4g58hUs7dg4gDgWXMLOUc9m/+lYYW6lwwhNwAxOZwdo1daunwISOaK/3GFffAhJelf7jFOFNjjAnwVGyr6Ozs2eLvZU43di8UpBbd/EflsWYbuX+gb7x+St3wISPpX+4xfRvISHpX+4z5LZ/EqV/MeDfZbBRIQzHF2Xcqeibt3EU4BvvH5LUibqCf8JvvH5K6zvISPpYnuQ/kngQkvSv9xi0vpUV/aPkpkKLEhdh4HH9KpAbpXeib7xXtu6dw/wm+8fkrs8CEl6V/uMTwISPpX+4xRpDRTRW1Nw6YcB+hUbO7oIkRpY1oYHXGnGJqcKnBX9vK5MeyUdHeCOF4NjK54cBghh4GYOdaOyi95H3oclwXB72ujOF9HGjDTS0Y7CaalYMOGAAAAAAAALgAMABmC9DZZKHSaXFjutRX2jKWyU53XDTQd6yIiLJRURERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF//2Q=="}/> <br/>
                               </div>
                               <p align="center">Redmi Mobiles</p><br/>
                               <div style={{display:"flex",justifyContent:"center"}}> <Link to="/Mouse"><Button variant="contained" size="large" color="primary"> VIEW</Button></Link> </div>
                          <br/>
                           </Card>
                           </Grid>
                          
                          
                          </div>
                          
                          </Grid>
                          </div>
                          </div>
                         
    )    
  }
}
