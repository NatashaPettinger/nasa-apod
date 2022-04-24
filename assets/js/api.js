//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.getElementById('fetchMedia').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const date = `&date=${choice}&`
  const url = `https://api.nasa.gov/planetary/apod?api_key=xscfmAcuf70UUhLmXX4qCea9CWa3qjnvCpT151Si${date}`

  let first = document.getElementById('first')
  let dailyImage = document.getElementById('dailyImage')

  if (document.getElementById('description')) {
    first.removeChild(document.getElementById('description'));
  }

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        let apod = document.createElement('div');
        apod.id = "description"
        apod.innerHTML = `<h2 id="title" class="major">${data.title}</h2><h4>${data.date}</h4>
        <p id="explanation">${data.explanation}</p>`;
        first.appendChild(apod)
        
        if (data.media_type === 'image') {
          dailyImage.innerHTML = `<img src="${data.url}" alt="" />`;
        }
        else if (data.media_type === 'video') {
          dailyImage.innerHTML = `<iframe src="${data.url}" alt="" ></iframe>`;
        }

        if (data.copyright) {
          let copy = document.createElement('p');
          copy.id = 'copy';
          copy.innerHTML = `&copy; ${data.copyright}`
          dailyImage.appendChild(copy);
        }



      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}