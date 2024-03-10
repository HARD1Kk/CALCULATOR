const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === '=') {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = 'Error';
          }
        } else if (buttonText === 'C') {
          currentInput = '';
        } else {
          currentInput += buttonText;
        }
        screen.textContent = currentInput;
      });
    });