 function appendToResult(value) {
        var resultField = document.getElementById('result');
        var result = resultField.value;
        var lastChar = result.charAt(result.length - 1);

        // Check for edge cases
        if (value === '.' && (lastChar === '.' || result === '')) {
          // If the user tries to enter a second decimal point or enters a decimal point as the first character
          return;
        } else if (value === '0' && result === '') {
          // If the user tries to enter a zero as the first character
          return;
        } else if (value === '/' && lastChar === '/') {
          // If the user tries to enter two consecutive division operators
          return;
        } else if (value === '*' && (lastChar === '*' || lastChar === '/')) {
          // If the user tries to enter two consecutive multiplication operators or a multiplication operator after a division operator
          return;
        }

        // Append the new value to the result field
        resultField.value += value;
      }

      function calculate() {
        var resultField = document.getElementById('result');
        var result = resultField.value;

        // Check for division by zero
        if (result.includes('/0')) {
          resultField.value = 'Infinity';
          return;
        }

        // Calculate the result and display it back in the result field
        resultField.value = eval(result);
      }