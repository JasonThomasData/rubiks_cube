# CONSIDER NOT READING THIS AND SOLVING THE PUZZLE YOURSELF
# READ THE ARTICLE IN THIS REPO FIRST
# YOU WILL LEARN MORE THIS WAY

The Rubik's Cube is a permutation puzzle, and any permutation can be expressed as one or more cycles of edges and one or more cycles of corners.

All you need to solve the cube is one algorithm that puts three edges in a cycle and another algorithm cycling corners. If you need to cycle elements that are not in the right spots, you can put them in the right spots first.

If A is an algorithm, B is a transformation to get the cubies into the right spots and B' is the opposite of B (opposite order, opposite directions) then you might consider:

    B
     A
    B'

Using a value and then applying its opposite, or conjugate, is a mathematical way to think about that. I prefer the analogy of a stack, (pushing in, popping out).

My algorithms are:

#### Three cycle of edges (fl -> bl -> br)

    D’
     U
      B2
     U’
    D
    L2

![front](http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&pzl=3&alg=D%27UB2U%27DL2&r=y45x-34)
![back](http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&pzl=3&alg=D%27UB2U%27DL2&r=y225x-34)

#### Three  cycle of corners (ufl -> bul -> rub)

    F
     R’
    F’

    L
    
    F
     R
    F’
    
    L’

![front](http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&pzl=3&alg=FR%27F%27LFRF%27L%27&r=y45x-34)
![back](http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&pzl=3&alg=FR%27F%27LFRF%27L%27&r=y225x-34)

#### Two corners and two sides (ufl -> rfu) (ul -> ru)

    L' F' L
     U
    L' F L

    U U

    L F' L'
     U
    L F L'

    U

![front](http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&pzl=3&alg=L%27F%27LUL%27FLUULF%27L%27ULFL%27U&r=y45x-34)
![back](http://cube.crider.co.uk/visualcube.php?fmt=svg&size=300&pzl=3&alg=L%27F%27LUL%27FLUULF%27L%27ULFL%27U&r=y225x-34)
