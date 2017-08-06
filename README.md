# Sowpods-server

This is an API that enables general and specific searches in the SOWPODS dictionary.
All queries are done using GET and it returns JSON.

## Why?

I would like to whip up small word game prototypes at game jams. Maybe other people also find it useful?

## Routes

[/api/find/{word}](https://sowpods.net/api/find/hello) - find out whether a word exists in the dictionary.

[/api/filter/length/{from}-{to}](https://sowpods.net/api/filter/length/2-3) - filter all words within a specific character length range.

[/api/filter/letters-only/{letters}](https://sowpods.net/api/filter/letters-only/abcde) - words that contain only these letters.

[/api/filter/hex-colors](https://sowpods.net/api/filter/hex-colors) - words that are also hex colors.

[/api/filter/prefix/{prefix}](https://sowpods.net/api/filter/prefix/inter) - words beginning with this prefix.

[/api/filter/suffix/{suffix}](https://sowpods.net/api/filter/suffix/ation) - words ending with this suffix.

[/api/filter/prefix-and-suffix/{prefix},{suffix}](https://sowpods.net/api/filter/prefix-and-suffix/inter,ation) - words with this prefix and suffix.

[/api/filter/interfix/{interfix}](https://sowpods.net/api/filter/interfix/iza) - words containing this interfix.

[/api/filter/melodies](https://sowpods.net/api/filter/melodies) - words that are also melodies (CDEFGAB).

[/api/filter/melodies-de](https://sowpods.net/api/filter/melodies-de) - words that are also melodies in German / Scandinavian notation (CDEFGABH).

[/api/filter/palindrome](https://sowpods.net/api/filter/palindrome) - words that are palindromes.

[/api/filter/vowels](https://sowpods.net/api/filter/vowels) - words that only contain vowels.

[/api/filter/consonants](https://sowpods.net/api/filter/consonants) - words that only contain consonants.

[/api/anagram/{word}](https://sowpods.net/api/anagram/pears) - words that are anagrams to this word.


## License

ISC.
