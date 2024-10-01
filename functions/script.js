let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]

const UL = document.getElementById("list");

const showStates = (StateList) => {
    UL.innerHTML = "";
    StateList.forEach(ele => {
        const list = `<li>${ele}</li>`
        UL.innerHTML += list;
    })
}
showStates(states);

document.getElementById("input_box").addEventListener('keyup', () => {
    const filteredState = states.filter((ele) => {
        return ele.toLowerCase().includes(document.getElementById("input_box").value.toLowerCase())
    });
    showStates(filteredState);
    console.log(filteredState);
})
