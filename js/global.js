var myfunc = (function() {
  var bookData = [{
      bookName: 'Count on it 1',
      author: 'Belli Thyagi',
      pages: 150,
      genre: 'Comedy'
    },
    {
      bookName: 'Count on it 2',
      author: 'Bhagyalaxmi',
      pages: 200,
      genre: 'Drama'
    },
    {
      bookName: 'Count on it 3',
      author: 'Bhagya Thyagi',
      pages: 89,
      genre: 'Sci-fi'
    },
    {
      bookName: 'Count on it 4',
      author: 'Pradyumna',
      pages: 499,
      genre: 'Comedy'
    },
    {
      bookName: 'Count on it 5',
      author: 'Sanjana',
      pages: 455,
      genre: 'Thriller'
    },
    {
      bookName: 'Count on it 6',
      author: 'Shobha K N',
      pages: 122,
      genre: 'Spirituality'
    },
    {
      bookName: 'Count on it 7',
      author: 'Thyagaraj',
      pages: 150,
      genre: 'Public Speech'
    },
    {
      bookName: 'Hello on it 9',
      author: 'Harshitha',
      pages: 244,
      genre: 'Public Speech'
    },
    {
      bookName: 'Hey on it 10',
      author: 'Hemalatha',
      pages: 233,
      genre: 'Public Speech'
    },
    {
      bookName: 'Count on it 11',
      author: 'Ashwath',
      pages: 33,
      genre: 'Public Speech'
    },
    {
      bookName: 'Count on it 12',
      author: 'Thyagi',
      pages: 455,
      genre: 'Public Speech'
    }
  ]

  bookData.map((book, index) => {
    var aLink = document.createElement('a');
    aLink.className = 'list-group-item';
    aLink.setAttribute('href', '#');
    aLink.innerHTML = book.bookName;
    document.querySelector('.list-group').appendChild(aLink);
    aLink.addEventListener('click', function() {
      $(function() {
        $('list-group-item').click(function() {
          $('.active').removeClass('active');
          $(this).addClass('active');
        });
      });
      document.querySelector('.booktitle').innerHTML = book.bookName;
      document.querySelector('.authorname').innerHTML = 'Author : ' + '<i>' + book.author + '</i>';
      document.querySelector('.pages').innerHTML = 'Pages : ' + '<i>' + book.pages + '</i>';
      document.querySelector('.genre').innerHTML = 'Genre : ' + '<i>' + book.genre + '</i>';
    });
  })

})();


function filterText() {

  var inputbox = document.querySelector('.form-control');
  var filterValue = inputbox.value.toUpperCase();
  //var list = document.querySelectorAll('.list-group-item');
  var nodesArray = Array.prototype.slice.call(document.querySelectorAll('.list-group-item'));
  console.log(nodesArray);
  for(var i = 0; i < nodesArray.length; i++){
    var test = nodesArray[i].innerHTML.toUpperCase().indexOf(filterValue);
    console.log(test);
    debugger;
    if (nodesArray[i].innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      nodesArray[i].style.display = '';
    } else {
      nodesArray[i].style.display = 'none';
    }
  }
/*  nodesArray.map((listItem,index) => {
    if (listItem.innerHTML.toUpperCase().indexOf(filterValue > -1)) {
      listItem.style.display = '';
    } else {
      listItem.style.display = 'none';
    }
  })*/

}
