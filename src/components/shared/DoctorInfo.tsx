import { Box, Heading, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react"
import { DoctorSchema } from "./DoctorCards"
import { StarIcon } from "@chakra-ui/icons"
import { memo } from 'react'

type Props = {
    info: DoctorSchema
}
function DoctorInfo({ info }: Props) {
    const index = Math.floor(Math.random() * (4 - 0) + 0);
    const randomSlot = ["10:30Am", "11:30pm", "9:30Am", "4:00PM", "3:30PM"]
    const slotTime = randomSlot[index]
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
                                Time Slot
                            </Td>
                            <Td>
                                {slotTime}
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