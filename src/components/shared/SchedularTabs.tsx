import { ButtonGroup, Button, Box } from '@chakra-ui/react'
import { useState } from 'react'
import DoctorCards from './DoctorCards'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const defaultFilterDate = { month: 0, date: 0, year: 0 }

function SchedularTabs() {
    const [showCalender, setShowCalender] = useState(false)
    const [date, setDate] = useState(new Date());
    const [scheduleDay, setScheduleDay] = useState(defaultFilterDate)

    const handleDateChange = (value: Date) => {
        if (!value) return
        setDate(value)
        setShowCalender(false)
        const date = value.getDate()
        const month = value.getMonth()
        const year = value.getFullYear();
        setScheduleDay({ date, month, year })
    }


    const handleCalenderDisplay = () => {
        setShowCalender((prev) => !prev)
    }

    const handleAllDays = () => {
        setShowCalender(false)
        setScheduleDay({ ...defaultFilterDate })
    }

    return (
        <>
            <ButtonGroup my='2'>
                <Button onClick={handleAllDays} backgroundColor={scheduleDay.year === 0 ? 'red.300' : 'inherite'}>
                    All
                </Button>
                <Button onClick={handleCalenderDisplay} backgroundColor={scheduleDay.year === 0 ? 'inherite' : 'red.300'}>
                    Select Date
                </Button>
            </ButtonGroup>
            {showCalender && <Calendar onChange={handleDateChange} value={date} />}
            <DoctorCards />
        </>
    )
}


export default SchedularTabs