# Server Side Data Models

------

## Database

**User**

- *id*
  - string
  - UUID
- *email*

  - string
  - max length 254 char
  - email format
- *display name (optional)* 
  - string
  - min length: 1 char
  - max length: 35 char
  - A-Z a-z 0-9 . -  _ [ ] |
- *password*
  - string (hashed)
  - max length: 60 char
  - all characters
- *created_at*
  - timestamp

- *profile picture (optional)*

  - max size: 10mb
  - Base64 encoded

**Meetup**

- *id*
  - string
  - UUID
- *participants*
  - number
  - max: 20
- *created_at*
  - timestamp

**Topic**

- *id*

  - string

  - UUID

- *title*
  - string
  - min length: 1
  - max length: 100 char
  - all characters
  
- *description (optional)*
  - string
  - min length: 3 char
  - max length: 500 char
  - all characters

**Participants**

- *event_id* (references event id)
- *user_id* (references user id)

**RSVPs**

 - *event_id* (references event id)
 - *user_id* (references user id)
