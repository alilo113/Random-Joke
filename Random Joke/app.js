const div = document.getElementById("div");

let jokes = [
    "just got my doctor's test results and I'm really upset about it. Turns out, I'm not gonna be a doctor.",
    "My grief counselor died. He was so good, I don’t even care.",
    "Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.",
    "A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!”",
    "As I get older, I remember all the people I lost along the way. Maybe my budding career as a tour guide was not the right choice.",
]

function onclick(){
    div.innerHTML = jokes[Math.floor(Math.random() * jokes.length)];
}