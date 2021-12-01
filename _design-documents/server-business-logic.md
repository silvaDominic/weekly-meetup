## Server Business Logic

------

**Meetup Creation (During Bootstrap)**

- Check if Meetup has been scheduled in DB
- IF NOT
  - Schedule Meetup for predetermined time
- OTHERWISE
  - Do nothing

**Meetup Creation (General)**

- Meetup is marked as 'completed'
- Meetup creation function is run
- Meetup for following week is created in DB with status of pending

...

