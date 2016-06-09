// =================BackEnd===================
var numTen;
var numOne;
var romeNum = [];
var romeInt = [1000, 500, 100, 50, 10, 5, 1]
var whichRome = function(num) {
  if (num === 1) {
    return 'I';
  }
  else if (num === 5) {
    return 'V';
  }
  else if (num === 10)  {
    return 'X';
  }
  else if (num === 50)  {
    return 'L';
  }
  else if (num === 100) {
    return 'C';
  }
  else if (num === 500) {
    return 'D';
  }
  else if (num === 1000)  {
    return 'M';
  }
};
var romanizer = function(num) {
  for (i = 0; i < numTen; i++)  {
    if (numTen === 4)  {
      romeNum.push("XL");
      break;
    }
    else if (numTen === 9) {
      romeNum.push("XC");
      break;
      }

    else if (numTen >= 5) {
      // debugger;
    romeNum.push("L");
    for (i = 0; i < (numTen - 5); i++)  {
      romeNum.push("X");
      };
    break;
    }
    else {
      romeNum.push("X");
    }
  };
  for (i = 0; i < numOne; i ++) {
    if (numOne === 4)  {
      romeNum.push("IV");
      break;
    }
    else if (numOne === 9) {
      romeNum.push("IX");
      break;
      }

    else if (numOne >= 5) {
      // debugger;
    romeNum.push("V");
    for (i = 0; i < (numOne - 5); i++)  {
      romeNum.push("I");
      };
    break;
    }
    else {
      romeNum.push("I");
    }
  };
};
  // for (i = 0; i < romeInt.length; i++) {
  //   // debugger;
  //   if (num > romeInt[i] && numint === 9) {
  //     romeNum.push(romeInt[i -1] + rome);
  //   }
  //   else if
  //   // if (num < romeInt[i] && num >= (romeInt[i] - romeInt[i - 1])) {
  //   // console.log('2num');
  //   // romeNum.push((whichRome(romeInt[i - 1])) + (whichRome(romeInt[i])));
  //   // break;
  //   // // return (whichRome(romeInt[i - 1])) + (whichRome(romeInt[i]));
  //   // }
  //   // else if (num < romeInt[i] && num < (romeInt[i] - romeInt[i -1])) {
  //   // console.log('1num');
  //   // romeNum.push(whichRome(romeInt[i - 1]));
  //   // break;
  //   // // return whichRome(romeInt[i - 1]);
  //   // }
  //   // else if ()
  // };

// =================FrontEnd==================
$(function() {
  $('#romannumeral').submit(function(event) {
    event.preventDefault();
    var number = parseInt($('#numbers').val());
    numTen = (number - (number%10))/10;
    numOne = (number % 10);
    // $('#results').text(romanizer(number));
    romanizer(number);
    $('#results').text(romeNum.join(''));
    $('#result').show();
    $('#romannumeral').toggle();
  });
});
