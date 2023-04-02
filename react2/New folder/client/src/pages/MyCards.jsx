import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfoCard from "../cards/components/card/InfoCard";
import Cards from "../cards/components/Cards";
import PageHeader from "../components/header";
import useAxios from "../sandbox/hooks/customHooks/useAxios";
import useHandleFetch from "../sandbox/hooks/customHooks/useHandleFetch";

export default function MyCards() {

    useAxios();

    return (
        <div>
        <Container sx={{ mt: 2 }}>
            <PageHeader title={"My Cards"} subTitle={"All My Cards"}/>
            
            <Cards url="my-cards"/>
            
        </Container>
        </div>
    );
}
