import { doctors } from '../../asset/doctors';
import CardBox from './CardBox'
import { Grid, GridItem, Button, CardFooter } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const startingIndex = Math.floor(Math.random() * 5)
const endingIndex = Math.floor(Math.random() * (50 - 7) + 7);
const fliteredDoctors = doctors.slice(startingIndex, endingIndex)

function DoctorCards() {

  return (
    <Grid templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'} columnGap={'3'} rowGap={'4'} justifyItems={'center'}>
      {fliteredDoctors.map((doctor) => {
        const image = './assets/doctors/doctor_' + Math.floor(Math.random() * 10) + '.jpg'
        return (<GridItem key={doctor.id}>
          <Link to={'hospital/doctors'} state={{ ...doctor, image }} >
            <CardBox
              name={doctor.name}
              description={doctor.description}
              image={image}
              height={'25rem'}
              child={<CardFooter pt="1" pb={'2'} px="2">
                <Button variant='solid' colorScheme='blue' w={'100%'}>
                  Book Now
                </Button>
              </CardFooter>}
              noOfLine={2}
            />
          </Link>
        </GridItem>)
      })}
    </Grid>)
}

export default DoctorCards