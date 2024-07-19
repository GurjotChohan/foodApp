import { Text, Container, useMantineTheme, Title, Input, NativeSelect, Tooltip, Chip} from '@mantine/core';
import '../Styles/SectionOne.scss';
import { useState, useContext, useEffect} from 'react';
import Axios from "axios";
import {Button} from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { Context } from "./Context";


const SectionOne = () => {
    const theme = useMantineTheme();
    const [ing, seting] = useState("");
    const [ingArray, setingArray] = useState([]);
    const [ingliststring, setingstr] = useState('');    
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('max-used-ingredients');
    const [checked, setChecked] = useState(false);
    const url = `/.netlify/functions/geting?ing=${ing}`;
    const url2 = `/.netlify/functions/getrecipes?ingliststring=${ingliststring}&value=${value}&value2=${value2}&value3=${value3}&value4=${value4}&checked=${checked}`;
    const { items, setItems } = useContext(Context);

    
    useEffect(() => {
        var commaSeparated = ingArray.map(String).join(',');
        setingstr(commaSeparated);
        
      }, [ingArray]);
    
    useEffect(() => {
        showrecpies();
      }, [ingliststring, value, value2, value3, value4, checked]);
    
    async function checkInput() {
        if(ing !== ""){
            var result = await Axios.get(url);
            const data = result.data.inginfo;
            seting(ing.trim());
            seting(ing.toLowerCase());
            if(data.length === 0){
                alert("Not an Ingredient");
            }
            else{
                if (ingArray.includes(ing))
                    alert("Duplicate Value");
                else if(ing.toLowerCase() === data[0].name)
                    setingArray((prevState) => prevState.concat(data[0].name)); 
                else{
                    if (window.confirm("Did you mean: " + data[0].name)) {
                        setingArray((prevState) => prevState.concat(data[0].name));
                    }
                }       
            }
                
            seting(""); 
        }
        else
            alert("Empty Field");
        return;
    }
    
      const addtolist = (e) =>{
        e.preventDefault(); 
        checkInput(); 
        return
      }

      async function showrecpies() {
        var result = await Axios.get(url2);
        const data = Array.from(result.data.recipeURL);
        setItems(data);
        return;
      }

    return (
        <section id="Pantry">
            <Container>
                <Text color="bblue.7" align="center" mb="15px">
                    <Title order={1}>Let's Get Started!</Title>
                </Text>

                <Text color="bblue.7" align="center" mb="25px">
                    Add items that are currently in your fridge or pantry below.
                </Text>
                <Input className='input'
                        type='sumbit' 
                        variant="default" 
                        size="lg" 
                        radius="lg" 
                        placeholder="Input Ingredients" 
                        value = {ing} 
                        onChange={(e) => seting(e.target.value)}
                        onKeyDown={getHotkeyHandler([
                            ['Enter', addtolist]])}/>

                <div className='options'>

                <NativeSelect 
                    className='input1'
                    label="Meal Types"
                    value={value}
                    radius="s"
                    onChange={(e) => setValue(e.target.value)}
                    data={[
                        { label:'', value:'' }, 
                        { label: 'main course', value: 'main%20course' }, 
                        { label: 'side dish', value: 'side%20dish' }, 
                        { label: 'dessert', value:'dessert' }, 
                        { label: 'appetizer', value: 'appetizer' }, 
                        { label: 'salad', value: 'salad' },
                        { label: 'bread', value: 'bread' },
                        { label: 'breakfast', value: 'breakfast' }, 
                        { label: 'soup', value: 'soup' }, 
                        { label: 'beverage', value: 'beverage' }, 
                        { label: 'sauce', value: 'sauce' },
                        { label: 'marinade', value: 'marinade' },
                        { label: 'fingerfood', value: 'fingerfood' }, 
                        { label: 'snack', value: 'snack' }, 
                        { label: 'drink', value: 'drink' }]}
                />

                <NativeSelect label="Diet"
                    className='input2'
                    value={value2}
                    radius="s"
                    onChange={(e) => setValue2(e.target.value)}
                    data={[{ label:'', value:''}, 
                        { label: 'Gluten Free', value: 'Gluten%20Free' }, 
                        { label: 'Ketogenic', value: 'Ketogenic' }, 
                        { label: 'Vegetarian', value:'Vegetarian' }, 
                        { label: 'Lacto-Vegetarian', value: 'Lacto-Vegetarian' }, 
                        { label: 'Ovo-Vegetarian', value: 'Ovo-Vegetarian' },
                        { label: 'Vegan', value: 'Vegan' },
                        { label: 'Pescetarian', value: 'Pescetarian' }, 
                        { label: 'Paleo', value: 'Paleo' }, 
                        { label: 'Primal', value: 'Primal' }, 
                        { label: 'Low FODMAP', value: 'Low%20FODMAP' },
                        { label: 'Whole30', value: 'Whole30' }]}
                />
                
                <NativeSelect 
                    className='input3'
                    label="Cuisine"
                    value={value3}
                    radius="s"
                    onChange={(e) => setValue3(e.target.value)}
                    data={[{ label:'', value:''}, 'African', 'Asian', 'American', 'British', 'Cajun', 'Caribbean',
                        'Chinese', 'Eastern European', 'European','French','German', 'Greek','Indian',
                        'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean',
                        'Mexican' , 'Middle Eastern' , 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese']}
                />

                <NativeSelect 
                    className='input4'
                    label="Sort Order"
                    value={value4}
                    radius="s"
                    onChange={(event) => setValue4(event.currentTarget.value)}
                    data={[{ label:'', value:''},'max-used-ingredients','min-missing-ingredients']}
                />
                
            <Tooltip label="ignore typical pantry items">
                    <Chip color='cblue' radius="lg" value="chip" checked={checked} onChange={setChecked}>Comman Pantry</Chip>
                </Tooltip>

                </div>
                    
                    <div className='buttons'>
                        { ingArray.map(ing =>(
                            <Button 
                            key={ing}
                            variant="default" radius="lg" size="md"
                            onClick={() => {seting(""); setingArray(ingArray.filter(a => a !== ing));}}
                            >
                            {ing}{' '}
                            </Button>
                        
                        ))
                        }
                    </div>

                <Text color="bblue.7" align="center" mb="15px">
                    <Title order={5}>*click the ingredient to remove*</Title>
                </Text>

            </Container>
        </section>
    );
};

export default SectionOne;