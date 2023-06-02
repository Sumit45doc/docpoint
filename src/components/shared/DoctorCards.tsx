import { useRef, useState } from 'react';
import { doctors } from '../../asset/doctors';
import { generateRandomNumber } from '../../utils';
import CardBox from './CardBox'
import { Grid, GridItem, Button, CardFooter, Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import SearchInput from './SearchInput';

const startingIndex = Math.floor(Math.random() * 5)
const endingIndex = Math.floor(Math.random() * (50 - 7) + 7);
const fliteredDoctors = doctors.slice(startingIndex, endingIndex)

export type DoctorSchema = {
  id: number;
  name: string;
  description: string;
  experience: number;
  rating: number;
}

function DoctorCards() {
  const navigate = useNavigate()
  const filterRef = useRef<number>()
  const [filterDoctor, setFilterDoctors] = useState(fliteredDoctors);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    const regex = new RegExp(`\\b${value}\\w*\\b`, 'i');
    clearTimeout(filterRef.current)
    filterRef.current = setTimeout(() => {
      let filtered = filterDoctor.filter(doctor => regex.test(doctor.name));

      if(value === "") filtered = fliteredDoctors
      setFilterDoctors([...filtered])
    }, 500)
  }


  const handleAppointmentClick = (doctorInfo: DoctorSchema, imageUrl: string) => {
    navigate(`/doctor`, { state: { ...doctorInfo, imageUrl } })
  }

  return (
    <Box>
      <Box w={['100%', '100%', '100%', '4xl']} mx={'auto'} mb={'5'}>
        <SearchInput onChange={handleSearchValue} placeHolder={'Search for Doctors'} />
      </Box>
      <Grid templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'} columnGap={'3'} rowGap={'4'} justifyItems={'center'}>
        {filterDoctor.map((doctor: DoctorSchema) => {
          const image = './assets/doctors/doctor_' + generateRandomNumber(10, 1) + '.jpg'
          return (<GridItem key={doctor.id}>
            <CardBox
              name={doctor.name}
              description={doctor.description}
              image={image}
              height={'25rem'}
              child={<CardFooter pt="1" pb={'2'} px="2">
                <Button variant='solid' colorScheme='blue' w={'100%'} onClick={() => handleAppointmentClick(doctor, image)}>
                  Book Now
                </Button>
              </CardFooter>}
              noOfLine={2}
            />
          </GridItem>)
        })}
      </Grid>
    </Box>
  )
}

export default DoctorCards