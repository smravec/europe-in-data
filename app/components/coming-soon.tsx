'use client'

import { Flex, Title, Button, Text } from "@mantine/core"
import { useRouter} from "next/navigation"

export default function ComingSoon(){
    const router = useRouter()
    return(
        <Flex 
        direction={"column"}
        align={"center"}
        justify={"center"}
        mt={"30vh"}>
            <Title>
                Coming soon
            </Title>
            <Text mb={"sm"}>
                Finished pages: Country profiles, Economy
            </Text>

            <Button onClick={()=>{router.push("/")}}>
                Back to main page
            </Button>
        </Flex>
    )
}