import { Input } from '@chakra-ui/react'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string
}

function SearchInput({ onChange, placeHolder, ...others }: Props) {

    return (
        <Input placeholder={placeHolder} onChange={onChange} {...others} />
    )
}

export default SearchInput