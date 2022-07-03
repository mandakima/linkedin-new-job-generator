var customName = document.getElementById('customname');
var customTitle = document.getElementById('customtitle');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
"I am :insert_adverb1: :insert_adjective1: to announce that I'll be joining a wonderful company as their employee! I couldn’t be more :insert_adjective2: for this new chapter in my career! I am so :insert_adjective3: and for those of you struggling to find a job, just breathe and remember: :insert_quote: :insert_cheer1: :insert_hashtag1: :insert_hashtag2: :insert_hashtag3: :insert_hashtag4: :insert_hashtag5: :insert_hashtag6:";

var insert_adverb1 = ["very", "beyond", "super", "indredibly", "overly"];
var insert_adjective1 = ["delighted", "excited", "happy", "thrilled", "humble"];
var insert_adjective2 = ["delighted", "excited", "happy", "thrilled", "pleased"];
var insert_adjective3 = ["blessed", "lucky", "thankful", ];
var insert_quote = ["'Laugh a lot. Be sweet. Work hard. Play hard. Be happy.'", '"The 👏 best 👏 outfit 👏 is 👏 self 👏 confidence. You 👏 got 👏 this. "', '"Dance like nobody is watching. Sing like nobody is listening. Live, laugh, love."', '"Work as though EVERYTHING depends on you 💪"', '"Dare to dream. Do not let your dreams be dreams. Make your dreams happen."', '"Money is not everything in life and cannot buy happiness."', '"If at first you do not succeed, try, try and try again."', '"Just be yourself, everything else will fall in place."', '"Everything happens for a reason."'];
var insert_cheer1 = ["💯💯💯", "🔥🔥🔥", "🙏🙏🙏", "🙌🙌🙌", "👏👏👏"];
var insert_hashtag1 = ["#newjob", "#professional", "#powerful", "#blessed", "#winning"];
var insert_hashtag2 = ["#neverstopbelieving", "#livelaughlove", "#inspiration", "#believe"];
var insert_hashtag3 = ["#likeforlike", "#newbeginnings", "#dream", "#igotthejob"];
var insert_hashtag4 = ["#hardwork", "#neverstop", "#lifeisgood", "#excited"];
var insert_hashtag5 = ["#education", "#powerful", "#stayhumble", "#imhired"];
var insert_hashtag6 = ["#newjobnewme", "#sustainable", "#newemployee", "#pride"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var adverb1 = randomValueFromArray(insert_adverb1);
  var adjective1 = randomValueFromArray(insert_adjective1);
  var adjective2 = randomValueFromArray(insert_adjective2);
  var adjective3 = randomValueFromArray(insert_adjective3);
  var quote = randomValueFromArray(insert_quote);
  var cheer1 = randomValueFromArray(insert_cheer1);
  var hashtag1 = randomValueFromArray(insert_hashtag1);
  var hashtag2 = randomValueFromArray(insert_hashtag2);
  var hashtag3 = randomValueFromArray(insert_hashtag3);
  var hashtag4 = randomValueFromArray(insert_hashtag4);  
  var hashtag5 = randomValueFromArray(insert_hashtag5);
  var hashtag6 = randomValueFromArray(insert_hashtag6);


var newStory = newStory.replace(':insert_adverb1:', adverb1);
var newStory = newStory.replace(':insert_adjective1:', adjective1);
var newStory = newStory.replace(':insert_adjective2:', adjective2);
var newStory = newStory.replace(':insert_adjective3:', adjective3);
var newStory = newStory.replace(':insert_quote:', quote);
var newStory = newStory.replace(':insert_cheer1:', cheer1);
var newStory = newStory.replace(':insert_hashtag1:', hashtag1);
var newStory = newStory.replace(':insert_hashtag2:', hashtag2);
var newStory = newStory.replace(':insert_hashtag3:', hashtag3);
var newStory = newStory.replace(':insert_hashtag4:', hashtag4);
var newStory = newStory.replace(':insert_hashtag5:', hashtag5);
var newStory = newStory.replace(':insert_hashtag6:', hashtag6);

    if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('a wonderful company', name);
  }

    if (customTitle.value != '') {
    var title = customTitle.value;
    newStory = newStory.replace('employee', title);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}