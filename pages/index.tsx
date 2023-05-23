import type { NextPage } from 'next'

import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '../components/Layouts';
import { EntryList } from '../context/ui';

const HomePage: NextPage = () => {
  return (    
    <>    
    <Layout  title="Home Open Jira">      
    <Grid container  spacing={2}>
      <Grid item  xs={12} sm={4} >
        <Card sx={{height:'calc(100vh - 100px)'}} >
          <CardHeader title="Pendientes" />
          
          <EntryList/>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} >
        <Card sx={{height:'calc(100vh - 100px)'}}>
          <CardHeader title="En progreso" />
          <EntryList/>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} >
        <Card sx={{height:'calc(100vh - 100px)'}}>
          <CardHeader title="Completadas" />
          <EntryList/>
        </Card>
        </Grid>        
    </Grid>  
    </Layout>
    
    </>
  )
}

export default HomePage;
