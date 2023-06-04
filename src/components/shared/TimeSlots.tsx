import { Button, ButtonGroup } from '@chakra-ui/react';
import { generateRandomNumber, randomDate } from '../../utils'
import { useState } from 'react';

const numberOfSlots = generateRandomNumber(2, 8);

const slots = [...new Set([...Array(numberOfSlots)].map(() => {
    const date = randomDate(10, 20, 9, 18)
    return (date.getHours() + ":" + date.getMinutes())
}))]

function TimeSlots() {
    const [active, setActive] = useState(0)

    const handleDateSelect = (index: number) => {
        setActive(index)
    }

    return (
        <ButtonGroup my='2'>
            {slots.map((date, index) => <Button backgroundColor={index === active ? 'red.300' : 'inherite'} _hover={index === active ? { backgroundColor: 'red.300' } : { backgroundColor: 'inherite' }} onClick={() => handleDateSelect(index)}>{date}</Button>)}
        </ButtonGroup>

    )
}

export default TimeSlots
