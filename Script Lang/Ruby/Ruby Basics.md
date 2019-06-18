# Ruby - Basics
Practical Object-Oriented Design in Ruby
De “Ruby Essential Training” from Lynda.com
- Interpreted language (no compilado)
- Object oriented & easily readable
- Unsurprising syntax, naming and behavior
- Whitespace independent w/o semicolons 😮
- “Synctactic Sugar” 


*No es Ruby on Rails* - ésta es una web framework written en Ruby
### Installation
Followed this (sin rails) so installed ``Homebrew rbenv`` and updieté a Ruby 2.3.0 
[info for macOS El Capitan](https://gorails.com/setup/osx/10.11-el-capitan)

### Commands
``ruby -e``  le dice a la terminal que es single command
``ruby -e ‘puts 123’`` outputs and adds a line return
``ruby -e ‘prints 123’`` lo mismo as puts but no new line
``ruby nombredelfile.rb`` runs the ruby file - after navigating al director
### Interactive Ruby Shell (IRB)
Great for testing code, funciona like a calculator
type ``irb`` en la terminal y ``quit`` para salirte add ``—simple-prompt`` para nomas ``>>``
with ‘puts’ returns “new line”  como ``=> nil``
## Documentation
[Official Documentation](http://www.ruby-doc.org/core/ )
Ruby is a bject-oriented language ! 😀

## Object Types
Ruby is an object-oriented language
Objects are instances of a class (como en otros)

### Variables
como en otros languages -> references that can be assigned

``values (1, 2)``  are objects (everything in ruby excepto por variables !)

*naming conventions* underscore over capitalized and dashes 
 
### Integers
one of the kinds of numbers (others are floatin-point numbers, floats)
``fixnum``  and ``bignum`` (increased from 1.8… to 2.3.0)
``number.class`` returns type of object (1234.class)
``number.abs`` returns absolute value 
``number.next`` returns next value 

### Floats
numbers with precision/decimal numbers 
integers divided by integers truncate results (return otro integer)
newer version rounds up to latest num
``number.round`` rounds to nearest full integer 
turns floating point to integer removes precision but no rounding ``.to_i``
always round down ``.floor``
always round up ``.ceil``

### Strings
use “” or ‘’, both work same way
concatenation with ``+``
like python, you can repeat with ``string"*5`` - repeats 5 times
escape with ``\`` while using double quotes
``\t`` is tab
to append variables to a string 
``bleep #{variablename}``
``.reverse .capitalize .downcase .upcase .length``
and all  of these pueden ser chained like ``“Hello”.reverse.upcase``

### Arrays
ordered, integer-indexd collection of objects, types of objects:
strings, numbers, other arrays, mixed types (como en python)
0-based index
``data_set << “e”`` adds el new value al array (mutable?)
``.clear `` clears array de values

### Array methods 
``.inspect `` returns array as string 
``puts array`` outputs array in different lines
``puts array.inspect`` outputs array not as string lol
``.to_s`` outputs all values as a single string
``.join()`` similarly as above but you can define what value goes entre
``.split()`` splits on a specific value
``.reverse reverses array
``array << value `` adds new value to array
``.sort`` works unless it’s a mixd type array
``.uniq `` returns unique values in array dupes original arary
``.uniq!`` changes array in place 
``.delete_at(index)`` deletes value at index from order and returns it
``.delete(value)`` deletes value from array and returns deleted value
``.push(value)`` to add a new value at the end of the array
``.pop`` removes value at last index
``.shift`` removes at end
``.shift(value)`` re-adds value in former position 
`` exampleArray + another_arrayv - returns concatenation of arrays
`` exampleArray- [value]`` removes value in array, alternative to ``.delete(value)``

### Hashes
Unordered, object-indexed collection of objects (or key-value pairs)
- Use cuando el label matters
- basically dictionaries 

```ruby
	persona = {‘primer_nombre’ => ‘Juan’, ‘apellido’ => ‘Dominguez’ }
	persona[‘primer_nombre'] 
	 #returns ‘primer_nombre'
	persona.index(‘Juan’)
	mixed = {1 => [‘a’,’b’,’c’], ‘hello’ => ‘world’, [10,20] => ’top'}
	mixed[1] #returns [“a”,”b”,”c"]
	mixed[[10,20]] #returns top
	mixed.keys #returns [[10,20], “hello”, 1].length.size
	.to_a #to array
	.clear
	persona[‘genero’] = ‘no-binario’ #para agregar nuevas cosas
```

Symbols, booleans, ranges, constants….

[ Control Structures](http://www.tutorialspoint.com/ruby/ruby_loops.htm)
```
	begin
		do_something # exception raised
		...
		rescue    # handles error
			...
		retry  # restart from beginning
	end
```
