import server from './server';


//const port = 4000;
const port = process.env.PORT || 4000;



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

