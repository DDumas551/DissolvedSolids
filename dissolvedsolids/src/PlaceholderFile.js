const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pwLengthCheck = () => {
  if (password.length > 4) {
    console.log("long enough");
    pwNumberCheck();
    this.setState({
      pwExists: 1
    });
  } else {
    console.log("not Long enough");
    this.setState({
      pwExists: 0
    });
  }
};
const pwNumberCheck = () => {
  if (password.includes(numberArray)) {
    this.setState({ number: 1 });
    console.log("includes number");
  } else {
    this.setState({ number: 0 });
  }
};
const pwLowerCaseCheck = () => {
  if (
    password.length > 4 &&
    password.includes(
      "a" ||
        "b" ||
        "c" ||
        "d" ||
        "e" ||
        "f" ||
        "g" ||
        "h" ||
        "i" ||
        "j" ||
        "k" ||
        "l" ||
        "m" ||
        "n" ||
        "o" ||
        "p" ||
        "q" ||
        "r" ||
        "s" ||
        "t" ||
        "u" ||
        "v" ||
        "w" ||
        "x" ||
        "y" ||
        "z"
    )
  ) {
    this.setState({ lowercase: 1 });
    console.log("includes lowercase");
  } else {
    this.setState({ lowercase: 0 });
  }
};

const pwUpperCaseCheck = () => {
  if (
    password.length > 4 &&
    password.includes(
      "A" ||
        "B" ||
        "C" ||
        "D" ||
        "E" ||
        "F" ||
        "G" ||
        "H" ||
        "I" ||
        "J" ||
        "K" ||
        "L" ||
        "M" ||
        "N" ||
        "O" ||
        "P" ||
        "Q" ||
        "R" ||
        "S" ||
        "T" ||
        "U" ||
        "V" ||
        "W" ||
        "X" ||
        "Y" ||
        "Z"
    )
  ) {
    this.setState({ uppercase: 1 });
    console.log("includes uppercase");
  } else {
    this.setState({ uppercase: 0 });
  }
};

const pwSpecialCharCheck = () => {
  if (
    password.length > 4 &&
    password.includes(
      "`" ||
        "~" ||
        "!" ||
        "@" ||
        "#" ||
        "$" ||
        "%" ||
        "^" ||
        "&" ||
        "*" ||
        "(" ||
        ")" ||
        "-" ||
        "_" ||
        "=" ||
        "+" ||
        "[" ||
        "{" ||
        "]" ||
        "}" ||
        "|" ||
        ";" ||
        ":" ||
        "," ||
        "<" ||
        "." ||
        ">" ||
        "/" ||
        "?"
    )
  ) {
    console.log("Contains Special Char");
    this.setState({ specialChar: 1 });
  } else {
    this.setState({ specialChar: 0 });
  }
};
