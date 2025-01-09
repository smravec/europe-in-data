'use client';

import FormatBigNumber from "../lib/format-big-nummber"
import { ScrollArea,Table, useMantineTheme } from "@mantine/core"

export default function Leaderboard(props){
    
    const theme = useMantineTheme();

    // const data = {
    //     order: "biggest",
    //     headers: ["Rank","Country","Score"],
    //     body: [[1,"austria","10"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","30"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"],[1,"belgium","20"]]
    // }

    const data = props.data
    const height = props.height

    function SortData(biggest_smallest, data) {
        let sorted_data = []
        let temp_data = [...data.body]
    
        if(biggest_smallest == "biggest") {
            temp_data.sort((a, b) => {
                return parseFloat(b[2]) - parseFloat(a[2]);
            });
        }
        else if(biggest_smallest == "smallest") {
            temp_data.sort((a, b) => {
                return parseFloat(a[2]) - parseFloat(b[2]);
            });
        }
    
        temp_data.forEach((item, index) => {
            item[0] = index + 1;
        });
    
        sorted_data = temp_data;
        return sorted_data;
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
            SortData(data.order,data).map((array,index) => (
                <Table.Tr key={index} >
                    {array.map((item,index1) => (
                        index1 == 2 ?(
                        <Table.Td 
                            ta={"right"} 
                            key={index1}
                            pr={"20px"}
                        >
                            {FormatBigNumber(item) + " " + data.units}
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
        <ScrollArea h={height} type='always'>
        <Table 
        striped 
        highlightOnHover 
        withRowBorders={false}
        withColumnBorders
        stickyHeader
        >
            <Table.Thead>
                {headers}
            </Table.Thead>

            <Table.Tbody>
                {body}
            </Table.Tbody>  
        </Table> 
        </ScrollArea>
    )
}