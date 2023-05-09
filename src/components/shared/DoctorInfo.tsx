import { Box, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { DoctorSchema } from "./DoctorCards"
import { StarIcon } from "@chakra-ui/icons"

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
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default DoctorInfo