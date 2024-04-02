

const authorEl = document.getElementById('author'),
      quoteEl = document.getElementById('quote'),
      categoriesContainer = document.getElementById('categories'),
      randomQuote = document.getElementById('random-quote'),
      copyLink = document.getElementById('copy-link');

randomQuote.addEventListener('click', ()=>{
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data =>{
      quoteEl.innerText = `"${data.content}"`;
      authorEl.innerText = data.author;
      console.log(`${data.content}-${data.author}`);
      categoriesContainer.innerHTML = '';
      for(let i = 0; i < data.tags.length; i++){
        console.log(data.tags[i]);
        let p = document.createElement('p');
        p.innerHTML = data.tags[i];
        categoriesContainer.appendChild(p);
      }
      })
      .catch(error =>{
        error = 404;
        quoteEl.innerText = error;
      })
});

const copiedDisplay = document.getElementById('copied');

copyLink.addEventListener('click', ()=>{
  const tempElement = document.createElement('textarea');

  tempElement.innerHTML = quoteEl.textContent;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand('copy');
  document.body.removeChild(tempElement);

  copiedDisplay.style.display = 'block';
  setTimeout(()=>{
    copiedDisplay.style.display = 'none';
  },1000);
});

