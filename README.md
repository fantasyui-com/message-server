# message-server
Beautiful, minimalist stateful server for converting internet into a list of messages with title, body, comments, and read/unread states.

Message Server is similar to RSS readers, but it is wrapped around SQL storage.
Simple and standard SQL queries tower over feature requirements, for the purpose
of supporting multiple client interfaces, and message daemons.

## Message Daemons

Simple SQL centric structure makes for simple local daemons that can inject new
messages by simply running an INSERT query. No CRUD, no HTTP, nothing special.

It is of some note that a message daemon should query the database to see if
it should scrape and inject more messages. For example a HN scraper can keep an
eye on unread HN message count,  should it find the message count is low it will
fetch more (below a preset threshold scrape more).

## Multiple Client Interfaces

Message server outputs HTML by default but JSON can be requested by appending
.json to the URL. Client interaction revolves around fetching data, and
later sending back lists of GUID/s of messages to be marked as read.

## Notes

### NOJS

Primary interface does not require JavaScript
