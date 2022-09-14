import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useFormik } from 'formik'
import Map from "../Map/Map";
import { Link, NavLink } from 'react-router-dom';
import styles from "./Forms.module.css";




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
            
            <Link  to= "/envio"></Link>
        }, 
    })

    return (
        <>

            <Flex align="center" justify="center">
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isRequired>

                        <Text className={styles.p}> Olá Paulo, seja bem vindo(a)! <br></br> Já temos o seu endereço e até aqui está tudo certo para sua entrega. <br></br> O endereço fornecido é: <br></br> Rua Dionéia 741 casa 4q </Text>
                        


                    </FormControl>
                    <Text className={styles.p2}> agora, o próximo passo é marcar no mapa o local mais próximo da sua casa: </Text>
                    <Map />

                   <NavLink to="/envio" > <Button className={styles.btn} type="submit" >enviar</Button> </NavLink>

                </form>
            </Flex>
        
        </>
    )
}