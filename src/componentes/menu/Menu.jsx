import './Menu.css'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
  } from '@chakra-ui/react'

function Menu() {
    return(
        <Box bg='#BEE3F8' w='100%' p={4} color='#000'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='BlackAlpha 400' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/Tareas'>Tareas</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href='/Snosotros'>Sobre Nosotros</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
        </Box>
            
    )
}
export default Menu