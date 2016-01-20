# easytrip

Travis:
https://travis-ci.org/abdelrhamaneben/EasyTrip-api.svg

# Commit convention

## The seven rules of a great git commit message

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

### 1. Separate subject from body with a blank line

Not every commit requires both a subject and a body. Sometimes a single line is
fine, especially when the change is so simple that no further context is
necessary.


    <Commit title>
    <Blank line>
    <Commit description>


For example:

    Derezz the master control program

    MCP turned out to be evil and had become intent on world domination.
    This commit throws Tron's disc into MCP (causing its deresolution)
    and turns it back into a chess game.

### 2. Limit the subject line to 50 characters

Keeping subject lines to 50 characters ensures that they are readable, and
forces the author to think for a moment about the most concise way to explain
what's going on.

### 3. Capitalize the subject line

This is as simple as it sounds. Begin all subject lines with a capital letter.

For example:

    Accelerate to 88 miles per hour

Instead of:

    accelerate to 88 miles per hour


### 4. Do not end the subject line with a period

Trailing punctuation is unnecessary in subject lines. Besides, space is
precious when you're trying to keep them to 50 chars or less.

For example:

    Open the pod bay doors

Instead of:

    Open the pod bay doors.

### 5. Use the imperative mood in the subject line

Imperative mood just means "spoken or written as if giving a command or instruction".

A few examples:

- Clean your room
- Close the door
- Take out the trash

The imperative can sound a little rude; that's why we don't often use it. But
it's perfect for git commit subject lines. One reason for this is that git
itself uses the imperative whenever it creates a commit on your behalf.

A properly formed git commit subject line should always be able to complete the following sentence:

    If applied, this commit will <your subject line here>

For example:

    If applied, this commit will refactor subsystem X for readability
    If applied, this commit will update getting started documentation
    If applied, this commit will remove deprecated methods
    If applied, this commit will release version 1.0.0
    If applied, this commit will merge pull request #123 from user/branch

Notice how this doesn't work for the other non-imperative forms:

    If applied, this commit will fixed bug with Y
    If applied, this commit will changing behavior of X
    If applied, this commit will more fixes for broken stuff
    If applied, this commit will sweet new API methods

### 6. Wrap the body at 72 characters

Git never wraps text automatically. When you write the body of a commit
message, you must mind its right margin, and wrap text manually.

The recommendation is to do this at 72 characters, so that git has plenty of
room to indent text while still keeping everything under 80 characters overall.

### 7. Use the body to explain what and why vs. how

In most cases, you can leave out details about how a change has been made. Code
is generally self-explanatory in this regard (and if the code is so complex
that it needs to be explained in prose, that's what source comments are for).
Just focus on making clear the reasons you made the change in the first
place — the way things worked before the change (and what was wrong with that),
the way they work now, and why you decided to solve it the way you did.
