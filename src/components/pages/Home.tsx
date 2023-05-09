import { useState, useRef } from 'react'
import HospitalsCards from '../shared/HospitalsCards'
import SearchInput from '../shared/SearchInput'
import { Box, Heading } from '@chakra-ui/react'
import { hospitals } from '../../asset/hospitals'

function Home() {
  const filterRef = useRef<number>()
  const [filterHospital, setFilterHospital] = useState(hospitals);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    const regex = new RegExp(`\\b${value}\\w*\\b`, 'i');
    clearTimeout(filterRef.current)
    filterRef.current = setTimeout(() => {
      const filtered = hospitals.filter(hospital => regex.test(hospital.name));
      setFilterHospital([...filtered])
    }, 500)
  }

  return (
    <Box p={'2'}>
      <Box w={['100%', '100%', '100%', '4xl']} mx={'auto'} mb={'5'}>
        <SearchInput onChange={handleSearchValue} placeHolder={'Search for Hospitals'}  />
      </Box>
      <Heading size={'lg'} ml={'2'}>Hospitals</Heading>
      <HospitalsCards hospitals={filterHospital} />
    </Box>
  )
}

export default Home