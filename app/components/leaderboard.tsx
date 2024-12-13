
import { ScrollArea, Flex, Text, Anchor } from "@mantine/core"

export default function Leaderboard(theme:any, data:Array<string>){

    return(
        <ScrollArea h={250} type='always' w={"95%"}>
                <Flex>
                    <Flex
                    w={"80%"}
                    miw={"fit-content"}
                    >
                        <Flex
                            direction={"column"}
                            align={"center"}
                            w={"30%"}
                        >
                            <Text pl={"4px"}  bg={"main"} fw={"600"} c={"white"} fz={"20px"} w={"100%"}>Rank</Text>
                            {data.map((item, index)=>(
                                (index % 2 == 0) 
                                ? <Text pl={"4px"} w={"100%"} bg={theme.colors.gray[1]} key={index}>{index + 1}</Text> : 
                                <Text pl={"4px"} w={"100%"} bg={"white"} key={index}>{index + 1}</Text>
                            ))}
                        </Flex>

                        <Flex
                            direction={"column"}
                            w={"69.9%"}
                        >
                            <Text bg={"main"} fw={"600"} c={"white"} fz={"20px"} w={"100%"}>Country</Text>
                            {data.map((item, index)=>(
                                (index % 2 == 0) 
                                ? <Anchor w={"100%"} bg={theme.colors.gray[1]} key={index}>{item}</Anchor> : 
                                <Anchor w={"100%"} bg={"white"} key={index}>{item}</Anchor>  
                            ))}
                        </Flex>
                    </Flex>

                    <Flex
                    direction={"column"}
                    align={"flex-end"}
                    w={"20%"}
                    miw={"fit-content"}
                    >
                        <Text bg={"main"} fw={"600"} c={"white"} fz={"20px"} w={"100%"} ta={"center"} >Score</Text>
                        {data.map((item, index)=>(
                             (index % 2 == 0) 
                             ? <Text w={"100%"} ta={"center"} bg={theme.colors.gray[1]} key={index}>0</Text> : 
                             <Text w={"100%" } ta={"center"} bg={"white"} key={index}>0</Text>  
                        ))}
                    </Flex>
                </Flex>
                </ScrollArea>
    )
}
