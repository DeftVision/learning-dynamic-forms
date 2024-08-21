import {Box, InputLabel, Select, MenuItem, Stack, Typography} from '@mui/material';
import {useState} from 'react';


const Exercise3Form = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedItem, setSelectedItem] = useState("")
    const [items, setItems] = useState([])

    const categories = {
        Fruits: ['Apple', 'Banana', 'Orange'],
        Vegetables: ['Carrot', 'Broccoli', 'Spinach']
    }

    const handleCategoryChange = (e) => {
        const selected = e.target.value;
        setSelectedCategory(selected);
        setItems(categories[selected] || []);
        setSelectedItem("");
    }

    console.log(selectedCategory);
    console.log(selectedItem);


    return (
        <Box>
            <Typography>Exercise | Day 3 & 4</Typography>

            <Box component='form' sx={{
                display: 'flex',
                flexWrap: 'wrap',
                direction: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 4
            }}>
                <Stack direction='column' spacing={2}>
                    <InputLabel>Categories</InputLabel>
                    <Select sx={{width: '350px', textAlign: 'start'}} value={selectedCategory} onChange={handleCategoryChange}>
                        {Object.keys(categories).map((category) => (
                         <MenuItem key={category} value={category}>{category}</MenuItem>
                        ))}
                    </Select>

                    <InputLabel>Items</InputLabel>
                    <Select sx={{width: '350px', textAlign: 'start'}} onChange={(e) => setSelectedItem(e.target.value)} value={selectedItem}>
                        {items.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>



                </Stack>
            </Box>
        </Box>
    );
};

export default Exercise3Form;