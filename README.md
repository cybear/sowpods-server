# Sowpods-server

This is an API that enables general and specific searches in the SOWPODS dictionary.
All queries are done using GET and it returns JSON.

## Why?

I would like to whip up small word game prototypes at game jams. Maybe other people also find it useful?

## Routes

`/api/find/{word}` - find out if a word exists in the dictionary.

`/api/filter/length/{from}-{to}` - filter all words within a specific character length.

`/api/filter/letters-only/{letters}` - words that contain only these letters.

`/api/filter/hex-colors` - words that are also hex colors.

`/api/filter/melodies` - words that are also melodies (CDEFGAB).

`/api/filter/melodies-de` - words that are also melodies in German / Scandinavian notation (CDEFGABH).

`/api/filter/palindrome` - words that are palindromes.

`/api/filter/vowels` - words that only contain vowels.

`/api/filter/consonants` - words that only contain consonants.

`/api/anagram/{word}` - words that are anagrams to this word.


## License

ISC.
