



import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CardForm from '../cards/components/helpers/CardForm';
import cardSchema from '../cards/components/helpers/cardSchema';
import initialCardForm from '../cards/components/helpers/initialForms/initialCardForm';
import mapCardToModel from '../cards/components/helpers/normalization/mapToModel';
import normalizeCard from '../cards/components/helpers/normalization/normalizeCard';
import useCards from '../cards/components/helpers/useCards'
import useForm from '../forms/hooks/useForm';
import { useDataProvider } from '../forms/hooks/UserProvider';

export default function EditCardPage() {

    const {id} = useParams();

    const {handleUpdateCard,handleGetCard,card} = useCards();

    const {user} = useDataProvider();


    const {value,...rest}= useForm(initialCardForm,cardSchema,()=>{handleUpdateCard(card._id,{...normalizeCard({...value.data})})})

    useEffect(()=>{
        handleGetCard(id).then((data)=>{
            const modelCard = mapCardToModel(data);
            rest.setData(modelCard);
        })
    },[])

    return (

        <Container sx={{width:"fit-content"}}>
            <CardForm title='editCard' onSubmit={rest.onSubmit} onFormChange={rest.validateForm} onInputChange={rest.handleChange} data={value.data} errors={value.errors} onReset={rest.handleReset} />
        </Container>
    )
}
