import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useFormik } from 'formik'
import Map from "../Map/Map";




export default function Forms() {

   

 

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            cpf: "",
            email: "",
            phone: "",
        },
        onSubmit: values => {
            
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <>

            <Flex align="center" justify="center">
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isRequired>

                        <Text mt={10} ml={5} color="#00C8DC" fontSize={40}> Essas informações estão certas?</Text>
                        <Flex>
                            <Flex>
                                <Input
                                    variant='flushed'
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder='Nome'
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    m={10} />
                            </Flex>
                            <Flex>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    variant='flushed'
                                    placeholder='E-mail'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    m={10} />
                            </Flex>

                        </Flex>


                        <Flex>
                            <Flex>
                                <Input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    variant='flushed'
                                    placeholder='CPF'
                                    onChange={formik.handleChange}
                                    value={formik.values.cpf}
                                    m={10} />
                            </Flex>
                            <Flex>
                                <Input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    variant='flushed'
                                    placeholder='Telefone de Contato'
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    m={10} />
                            </Flex>
                        </Flex>
                        <Flex>
                            <Input

                                type="text"
                                id="endereco"
                                name="endereco"
                                variant='flushed'
                                placeholder='Endereço na Comunidade'
                                onChange={formik.handleChange}
                                value={formik.values.endereco}
                                m={10} />
                        </Flex>


                    </FormControl>
                    <Text ml={10} mb={10} color="#00C8DC" fontSize={23}> Nos ajude marcando no mapa onde você acredita ser sua casa: </Text>
                    <Map />

                    <Button ml={80} mb={100} color="#00C8DC" type="submit" >enviar</Button>

                </form>
            </Flex>
        
        </>
    )
}