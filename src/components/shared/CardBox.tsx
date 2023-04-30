import { Card, CardBody, Stack, Image, Heading, Text, CardProps } from '@chakra-ui/react'

type Props = {
  image?: string,
  name: string,
  description: string,
  body?: React.ReactElement | string | null
  child?: React.ReactElement | string
  fallbackDimension?: number,
  noOfLine?: number
} & Partial<CardProps>

function CardBox({ image, name, description, body = null, child, fallbackDimension, noOfLine = 3, ...others }: Props) {

  return (
    <Card maxW='sm' {...others}>
      <CardBody>
        {image && <Image
          src={image}
          alt={name}
          borderRadius='lg'
          objectFit={'cover'}
          maxHeight={'48'}
          width={'100%'}
          fallbackSrc={'https://via.placeholder.com/' + `${fallbackDimension ?? 150}`}
        />}
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text noOfLines={noOfLine}>
            {description}
          </Text>
          {body}
        </Stack>
      </CardBody>
      {child && child}
    </Card>)
}

export default CardBox