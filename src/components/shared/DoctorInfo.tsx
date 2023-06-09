import { Box, Heading, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react"
import { DoctorSchema } from "./DoctorCards"
import { StarIcon } from "@chakra-ui/icons"
import { memo } from 'react'
import TimeSlots from "./TimeSlots"

type Props = {
    info: DoctorSchema
}
function DoctorInfo({ info }: Props) {

    return (
        <Box>
            <Heading size="md" >Description</Heading>
            <TableContainer whiteSpace={'pre-wrap'}>
                <Table variant={'simple'}>
                    <Tbody>
                        <Tr>
                            <Td>
                                Name
                            </Td>
                            <Td>
                                {info.name}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Specialization
                            </Td>
                            <Td>
                                {info.description}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Experience
                            </Td>
                            <Td >
                                {info.experience}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Rating
                            </Td>
                            <Td>
                                {[...Array(info.experience)].map(() => <StarIcon color={'yellow.700'} />)}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Select Time Slot
                            </Td>
                            <Td>
                                <TimeSlots />
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(DoctorInfo)