import { Box, Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/Reducer/userSlice";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((data) => data?.userReducer.userData);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = data.get("user");

        const newUser = {
            id: data?.length +1,
            name: user
        }
        dispatch(addUser(newUser));
    };

    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        margin="normal"
                        name="user"
                        label="User Name"
                        type="user"
                        id="user"
                        autoComplete="current-password"
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 3 }}>Add</Button>
                </Box>
            </Grid>
            <Grid size={4}>
                {
                    data?.map((data, id) => {
                        return (<h1 key={id}>{id + 1} {data?.name},</h1>)
                    })
                }
            </Grid>
        </Grid>
    )
}

export default Home;