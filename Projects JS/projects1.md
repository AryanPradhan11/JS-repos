# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## PROJECT 1 SOLUTION

``` javascript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    if (event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id == 'blue') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id == 'yellow') {
      body.style.backgroundColor = event.target.id;
    } else if ((event.target.id = 'purple')) {
      body.style.backgroundColor = event.target.id;
    }
  });
});
```


## PROJECT 2 SOLUTION

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const status = document.querySelector('#status');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please insert right value for height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `The inserted value is below 0`;
  } else {
    const BMIvalue = (weight / height / height) * 10000;
    results.innerHTML = `<span>${BMIvalue}</span>`;
    if (BMIvalue < 18.6) {
      status.innerHTML = 'Under Weight';
    } else if (BMIvalue >= 18.6 && BMIvalue <= 24.9) {
      status.innerHTML = 'Normal Range';
    } else if (BMIvalue > 24.9) {
      status.innerHTML = 'Overweight';
    }
  }
});
```