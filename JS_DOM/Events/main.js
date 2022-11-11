const quotes = {
    nelsonMandela: `"The greatest glory in living lies not in never falling, but in rising every time we fall" - Nelson Mandela`,
    steveJobs: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." - Steve Jobs`,
    johnLennon: `"Life is what happens when you're busy making other plans." - John Lennon`,
    anneFrank: `"Whoever is happy will make others happy too." - Anne Frank`,
  };
  
const quote = document.getElementById("quote");
const nelsonButton = document.getElementById("nelson-mandela");
const steveButton = document.getElementById('steve-jobs');
const anneButton = document.getElementById('anne-frank');
const johnButton = document.getElementById('john-lennon');  
  
nelsonButton.addEventListener (
    'click',
    () => (quote.innerText = quotes.nelsonMandela)
);

steveButton.addEventListener( 
'click', () => (quote.innerText = quotes.steveJobs)
);

anneButton.addEventListener(
'click', () => (quote.innerText = quotes.anneFrank)
);

johnButton.addEventListener(
    'click', () => (quote.innerText = quotes.johnLennon)
);