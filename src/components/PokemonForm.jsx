import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PokemonForm(props){

    const [form, setForm] = useState({
        name: "",
        weight: "",
        height: ""
    })

    const navigate = useNavigate()

    function handleChange(e){

        setForm({ 
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // call the function from the app, and pass in the data that we want
        // in order to lift it to the app component
        props.addPokemon(form)
        //navigate to the /pokemon route
        navigate('/pokemon'); //navigate takes a client side route url.
    }

    return (
        <>
        <h2>New Pokemon</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' id='name' value={form.name} onChange={handleChange} />
            <label htmlFor="weight">Weight</label>
            <input type="text" name='weight' id='weight' value={form.weight} onChange={handleChange} />
            <label htmlFor="height">Height</label>
            <input type="text" name='height' id='height' value={form.height} onChange={handleChange} />
            <button type='submit'>Submit</button>

        </form>
        
        </>

    )
}