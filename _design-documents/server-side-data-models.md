# Server Side Data Models

------

## Database

**User**

- *id*

  - string
  - UUID

- *email*

  - string
  - integer max
  - email format

- *username (optional)* 

  - string
  - min length: 1 char
  - max length: 35 char
  - A-Z a-z 0-9 . -  _ [ ] |

  

- *profile picture (optional)*

  - max size: 10mb
  - Base64 encoded

**Room**

- *id*
  - string
  - UUID
- *participants*
  - number
  - max: 20
- *date*
  - date

**Topic**

- *id*

  - string

  - UUID

- *name*

  - string
  - min length: 1
  - max length: 100 char
  - all characters

- *description*

  - string
  - min length: 3 char
  - max length: 500 char
  - all characters

## Entity

