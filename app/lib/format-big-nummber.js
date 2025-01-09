export default function FormatBigNumber(number){
    if(number >= 10000){
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return number
}