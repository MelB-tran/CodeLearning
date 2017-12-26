# Ruby - Un Poco Más
Ruby - basicos
Practical Object-Oriented Design in Ruby 

## Find, Sort in Code controls
``array.sort!`` sorts whether number or string arrays, changes object instead de crear un duplicate
``array.sort{ |item1, item2| item2 <=> item1 } `` una manera de sort in reverse order
``` 
	puts "some string" 
	text = gets.chomp #get string input
```

- [ ] checa files/scripts in Dropbox/Code/Ruby


`` .includes?`` on strings 
 no need to add a return value in a function -- last evaluated value is automatically
`` ||= `` conditional assignment (if null assign, otherwise leave como está)
``.respond_to? `` whether a variable/object will work with a specific type
`` "L".upto("P"){|x| print x}``
`` my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] my_array.each{ |x| puts x if x % 2 == 0} 
 4.times{do smthng}``
Using ``yield`` - adds extra functionality to a method
```
def double(num)     puts "parameter is #{num}"     puts "about to enter yield"     yield(num)     puts "out of it" end
double (2) { |n| puts n * 2 }
```

## Methods that use blocks 
- Collect - works best with arrays, hashes and ranges
```
#collect expects a "block", so se usa '&' to convert a proc to a block
ints = floats.collect(&round_down)
(1..10).collect{|n| n+1}
```

map y collect do the same thing, an explanation de que son [aqui](http://stackoverflow.com/questions/5254732/difference-between-map-and-collect-in-ruby)

map is like LINQ's Select
``Inject -> “accumulate"``
Accumulating values 
``(1..10).inject{ |memo, n| memo + n }``
end result is stored in "memo"
display would be like:
```
memo = 1
memo = memo + 2
memo = memo + 3
….
```

starts with value that is passed to it 
``array = [*1..10]``
``sum = array.inject(100){ |memo, n| memo + n }``

### Procs - como bloques de code?
Why Procs? Why bother saving ur blocks as procs? There are two main advantages:
- Procs are full-fledged objects, so they have all the powers and abilities of objects. (Blocks do not.)
- Unlike blocks, procs can be called over and over without rewriting them. This prevents you from having to retype the contents of your block every time you need to execute a particular bit of code.


```
floats = [1.2, 3.45, 0.91, 7.727, 11.42, 482.911]

#telling it that for each item in the array, it's passed, do a thing
round_down = Proc.new{ |y| y.floor}
```

to call a Proc, use call como ``procname.call``

using map to convert every item in an array to another type:
```
numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
strings_array = numbers_array.map(&:to_s)
crew = { captain: "Picard",
 first_officer: "Riker",
  lt_cdr: "Data",
  lt: "Worf",
  ensign: "Ro", 
  counselor: "Troi",
  chief_engineer: "LaForge",
  doctor: "Crusher"}

	first_half = lambda { |k, v| v < 'M' }
 a_to_m = crew.select(&first_half)
```

### Modules
- Usually kept in separate files
- Can serve as code libraries
- Need to have a way to load modules into Ruby ( "include") - pero you can also use  ``require`` & ``load``

Include 
Mix-ins

### File System Basics
cross platform pitfalls
- line break separators (between folders) 
- unix - forward slash, windows - backward slash
- Ruby is forward slash 
or you can also use the file class:
File.join(‘uppermost folder’, ‘next folder’, ‘file name’)

### Permissions
If on your own hard drive  -have access to all, but this changes in a network chmod allows changes to permissions of a file
properties/security tab for windows

### File Paths
Two ways to specify a path -
- absolute  - with folders and beginning with a forward slash from current position 
- relative - ../../path/to/file
_FILE_ special variable that returns the file we’re on. 
File.expand_path(_FILE_)
FILE.dirname(_FILE_)
