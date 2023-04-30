import CardBox from './CardBox'
import { Grid, GridItem } from '@chakra-ui/react'
import { Link } from "react-router-dom";

type Props = {
    hospitals: {
        id: number;
        name: string;
        description: string;
    }[]
}

function HospitalsCards({ hospitals }: Props) {

    return (
        <Grid templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'} columnGap={'3'} rowGap={'4'} justifyItems={'center'}>
            {hospitals.map((hospital) => {
                const image = './assets/hospital_' + Math.floor(Math.random() * 10) + '.jpg'
                return (<GridItem key={hospital.id}>
                    <Link to={'hospital'} state={{ ...hospital, image }} >
                        <CardBox name={hospital.name} description={hospital.description} image={image} height={'25rem'} />
                    </Link>
                </GridItem>)
            })}
        </Grid>
    )
}

export default HospitalsCards