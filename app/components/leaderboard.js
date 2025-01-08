'use client';

import { Table, useMantineTheme } from "@mantine/core"

export default function Leaderboard( {props} ){
    const theme = useMantineTheme();
    

    const data = {
        headers: ["Rank","Country","Score"],
        body: [[1,"austria","10"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"]]
    }

    const headers = (
        <Table.Tr>
            {data.headers.map((item, index) => 
                index === 0 ? (
                    <Table.Th key={item} w="10%" bg="main" c="white">{item}</Table.Th>
                ) : (
                    <Table.Th 
                        key={item} 
                        bg="main" 
                        c="white"
                        ta={index === 2 ? "right" : "left"}
                        pr={index === 2 ? "10px": "0px"}
                    >
                        {item}
                    </Table.Th>
                )
            )}
        </Table.Tr>
     )
    
    const body = (
            data.body.map((array,index) => (
                <Table.Tr key={index} >
                    {array.map((item,index1) => (
                        index1 == 2 ?(
                        <Table.Td 
                            ta={"right"} 
                            key={index1}
                            pr={"20px"}
                        >
                            {item}
                        </Table.Td>
                        ):(
                        <Table.Td key={index1}>
                            {item}
                        </Table.Td>
                        )
                        
                    ))}
                </Table.Tr>
            ))
    )

    return(
        <Table 
        striped 
        highlightOnHover 
        withRowBorders={false}
        withColumnBorders
        >
            <Table.Thead>
                {headers}
            </Table.Thead>

            <Table.Tbody>
                {body}
            </Table.Tbody>  
        </Table>
        
    )
}