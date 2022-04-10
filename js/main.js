//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const date = `&date=${choice}&`
  const url = `https://api.nasa.gov/planetary/apod?api_key=xscfmAcuf70UUhLmXX4qCea9CWa3qjnvCpT151Si${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.getElementById('dailyImage').src = data.hdurl;
        document.getElementById('dailyImage').alt = data.title;
        document.getElementById('name').innerText = data.title;
        document.getElementById('description').innerText = 'Description';
        document.getElementById('explanation').innerHTML = `${data.explanation}`;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}