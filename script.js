// THIS FUNCTION TAKES OPTIONNUMBER AS ARGUEMENT AND ONLY ACTIVATE THE "ACTIVE" CLASS FOR SELECTED OPTION 
// THIS FUNCTION ALSO PROVIDE DYNAMIC PRICE CHANGE , BASED UPON OPTION SELECTION

const selectOption = (optionNumber) => {
    const prices = {
        1:"10:00",
        2:"18:00",
        3:"24:00",
    }
    let selectedOption = document.getElementById(`option${optionNumber}`)
    for(let i=1 ; i<=3 ; i++){
        let option = document.getElementById(`option${i}`);
        option.classList.remove('active')
    }
    selectedOption.classList.add('active')
    document.getElementById('totalPrice').innerHTML = prices[optionNumber]
}