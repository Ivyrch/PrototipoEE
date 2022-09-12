import { Flex, Image, Heading } from "@chakra-ui/react"
import logo from "../../assets/EE-branco.png";


export default function Footer() {
    return (
        <>
            <Flex bg="#00C8DC" h={220} padding={50} justify='space-between'>
                <Flex justify='column'>
                    <Heading fontSize={40} color='aliceblue'>
                        Projeto cria nas favelas
                    </Heading>
                </Flex>
                <Flex>
                    <Image src={logo} boxSize={40}></Image>
                </Flex>

            </Flex>
        </>
    )
}