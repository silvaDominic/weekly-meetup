# Weekly Meetup App

*Software Design Document*

------

## **Contents**

- Purpose
- Concept
- Features
- Technologies

## **Purpose**

This project is both a technical exercise as well as a response to the tedium of extended discussion about compelling topics in group chats. The aim is to create a more organized discussion about topics using a more appropriate interface as well as making it scheduled so discussion is reserved for a time people are comfortable dedicating toward it.

*NOTE*: Because this is partially an exercise in software development, a POC will eventually be forked into a separate, private repository and versioned with updates and new features/designs.

## **Concept**

Every week a video meetup will be generated with a series of discussion topics that have been selected throughout the week.

The [initial] intention is to reserve only a single day a week to a digital meetup to give more significance to the meetup as well as to promote a higher quality discussion. The chosen date will remain the same *or* it will change week to week depending on a vote (TBD). In order to prevent the meetup from becoming too formal in creation and nature, members can suggest topics throughout the week that can be up/down voted. This will create a natural hierarchy of topics ordered by what a group finds to be most interesting/valuable. At some point during the week (*x* number of hours before the start of the meetup), topic suggestions will be closed. Throughout the same voting period of time, members can choose to indicate that they are attending or not, although this is not required and will not be required to *enter* a meetup.

**Meetup Lifecycle**

Meetup is implicitly scheduled --> Topics are open to suggestion --> Members add topics and vote on others, members optionally indicate if they are attending or not --> Topics close and are locked *x* hours before meetup--> Meetup occurs --> Topics are cleared --> (Repeat)

## Features

**Account**

Simple account with:

- Email

- Username

- Profile picture

**Topic Suggestions**

Members will be able to add topics of their own and/or vote on whether they like/dislike others.

A topic will be composed of:

- Creator
- Description
- Resources (relevant links or attachments)

**Video/Audio Chat**

Members will be able to engage in conversation via video or audio chat.

## Technologies

**Typescript**

Data-typing offers the obvious benefit of improved debugging and far fewer errors by explicitly defining what data is and how it should interact with the rest of the code.

**ReactJS**

React offers the most flexible experience and greatest control over functionality when developing modular SPAs. This particular project does not lend itself specifically to React, but as this is an exercise, it is merely a preference in this case.

**Redux + Thunk**

This project will require centralized state and benefit from a tool that can store and manipulate said state (as well as asynchronously). Redux (+Thunk) is the defacto state manager for React.

**NodeJS + Express**

Server side applications using Javascript/Typescript must be done using NodeJS. Express is a NodeJS framework that makes implementing a server much simpler. NodeJS will also benefit this application greatly as one of the key benefits of using it serverside is with Websockets which will be utilized for establishing video streams between users.

**MySQL**

While the exercise portion of this application could utilize either a relational or non-relational, document based database, the nature of the data currently and likely in the future, will be highly structured and benefit from a relational database.
