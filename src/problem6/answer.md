# Problem 6: Transaction Broadcaster Service

## Diagram

Check broadcaster_service.pdf

## Key Requirements

1) A broadcasted transaction might fail and if it fails, it should be retried automatically.
2) A page that shows the list of transactions that passed or failed.
3) If interal API, POST /broadcast_transaction, retuns a status of 200 OK, transaction is expected to be broadcasted successfully even if the broadcaster service restarts or goes down temporarily.
4) An admin is able to, at any point in time, retry a failed broadcast.

## Solution

### Status State

In order to address point 2 and 4, the status of a transaction will be stored in a SQL database as the transaction data is standardized and structured. A status will reflect one of the following: 'Success', 'Failure' or 'Pending'. The 'Pending' state will be stored when a transaction is broadcasted. Once a respond is received, the state will be updated to either 'Success' or 'Failure'. Only the status of a signed transaction will be stored in the database.

### Addressing Pending/Failed Transaction

The broadcaster service will make attempts to broadcast the transaction in a loop until it is successful. Also when the service first starts up, a list of pending and failed transactions will be fetched and broadcasted in order to fulfill them.

With the transaction statuses stored in a database, an admin page can be created to display the list of transactions that have taken place, at the same time allowing the admin to retry a failed broadcast.
