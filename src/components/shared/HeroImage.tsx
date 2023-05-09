import { Image } from '@chakra-ui/react'

type Props = {
    imageUrl?: string
}
function HeroImage({ imageUrl }: Props) {
    return (
        <Image
            src={imageUrl ?? 'https://via.placeholder.com/500'}
            maxW={['auto', 'auto', 'auto', '3xl']}
            objectFit={'cover'}
            borderRadius='lg'
            fallbackSrc={'https://via.placeholder.com/500'}
        />
    )
}

export default HeroImage