## PHP Cheat Sheet

### PHP Basics

#### PHP Tags

En PHP, le code doit être inclus entre balises PHP et se situe généralement dans un fichier avec l'extension .php.

```php
<?php 
    // PHP code goes here
?>
```

#### PHP Variables

PHP est un langage à typage dynamique, ce qui signifie que les variables n'ont pas besoin d'être déclarées avec un type spécifique.

```php
<?php
    $variable = "value";
?>
```

#### PHP Echo

Pour afficher du texte en PHP, utilisez la fonction `echo`.

```php
<?php
    echo "Hello World!";
?>
```

#### PHP Comments

```php
<?php
    // This is a single line comment

    /*
        This is a multi-line comment
    */
?>
```

#### PHP Data Types

```php
<?php
    $string = "Hello World!"; // String
    $integer = 10; // Integer
    $float = 10.5; // Float
    $boolean = true; // Boolean
    $array = array("Hello", "World"); // Array
    $null = null; // Null
?>
```

#### PHP Strings

```php
<?php
    $string = "Hello World!";

    // String Length
    echo strlen($string); // 12

    // Word Count
    echo str_word_count($string); // 2

    // Reverse String
    echo strrev($string); // !dlroW olleH

    // Search for a specific text within a string
    echo strpos($string, "World"); // 6

    // Replace text within a string
    echo str_replace("World", "Universe", $string); // Hello Universe!
?>
```

#### PHP Numbers

```php
<?php
    $x = 10;
    $y = 5;

    // Addition
    echo $x + $y; // 15

    // Subtraction
    echo $x - $y; // 5

    // Multiplication
    echo $x * $y; // 50

    // Division
    echo $x / $y; // 2

    // Modulus
    echo $x % $y; // 0
?>
```

#### PHP Arrays

```php
<?php 
    $array = array("Hello", "World");

    // Print the whole array
    print_r($array); // Array ( [0] => Hello [1] => World )

    // Print the element at index 0
    echo $array[0]; // Hello

    // Add an element to the array
    $array[] = "Universe";
    print_r($array); // Array ( [0] => Hello [1] => World [2] => Universe )

    // Associative Arrays
    $array = ["name" => "John", "age" => 20];
    print_r($array); // Array ( [name] => John [age] => 20 )
    echo $array["name"]; // John
?>

```

#### PHP Conditionals

```php
<?php
    $x = 10;
    $y = 5;

    // If Statement
    if ($x > $y) {
        echo "x is greater than y";
    }

    // If Else Statement
    if ($x > $y) {
        echo "x is greater than y";
    } else {
        echo "x is less than y";
    }

    // If Elseif Else Statement
    if ($x > $y) {
        echo "x is greater than y";
    } elseif ($x == $y) {
        echo "x is equal to y";
    } else {
        echo "x is less than y";
    }

    // Switch Statement
    switch ($x) {
        case 1:
            echo "x is 1";
            break;
        case 2:
            echo "x is 2";
            break;
        default:
            echo "x is not 1 or 2";
    }
?>
```

#### PHP Loops

```php
<?php
    $x = 0;

    // While Loop
    while ($x < 5) {
        echo $x;
        $x++;
    }

    // Do While Loop
    do {
        echo $x;
        $x++;
    } while ($x < 5);

    // For Loop
    for ($x = 0; $x < 5; $x++) {
        echo $x;
    }

    // Foreach Loop
    $array = array("Hello", "World");
    foreach ($array as $value) {
        echo $value;
    }
?>
```

#### PHP Functions

```php
<?php
    // Function with no parameters
    function hello() {
        echo "Hello World!";
    }

    hello(); // Hello World!

    // Function with parameters
    function hello($name) {
        echo "Hello $name!";
    }

    hello("John"); // Hello John!

    // Function with default parameter
    function hello($name = "World") {
        echo "Hello $name!";
    }

    hello(); // Hello World!

    // Function with return value
    function add($x, $y) {
        return $x + $y;
    }

    echo add(1, 2); // 3
?>

```

#### PHP Superglobals

```php
<?php
    // $_SERVER
    echo $_SERVER["PHP_SELF"]; // /index.php
    echo $_SERVER["SERVER_NAME"]; // localhost
    echo $_SERVER["HTTP_HOST"]; // localhost
    echo $_SERVER["HTTP_REFERER"]; // http://localhost/index.php
    echo $_SERVER["HTTP_USER_AGENT"]; // Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0
    echo $_SERVER["SCRIPT_NAME"]; // /index.php
    echo $_SERVER["REQUEST_METHOD"]; // GET

    // $_REQUEST
    echo $_REQUEST["name"]; // John

    // $_POST
    echo $_POST["name"]; // John

    // $_GET
    echo $_GET["name"]; // John

    // $_FILES
    echo $_FILES["file"]["name"]; // file.txt

    // $_ENV
    echo $_ENV["HOME"]; // C:\Users\John

    // $_COOKIE
    echo $_COOKIE["name"]; // John

    // $_SESSION
    echo $_SESSION["name"]; // John
?>
```

#### PHP Debugging

```php
<?php
    // Print a variable
    $x = 10;
    var_dump($x); // int(10)

    // Print a variable and exit
    $x = 10;
    var_dump($x); // int(10)
    exit;

    // Print a variable and continue
    $x = 10;
    var_dump($x); // int(10)
    echo "Hello World!"; // Hello World!

    // Print a variable and die
    $x = 10;
    var_dump($x); // int(10)
    die;
    echo "Hello World!"; // This will not be printed
?>
```
