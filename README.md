1. Why was it important to re-format the data before sending it to the client?

  Re-formatting the data removes unnecessary fields and sends only the information the client needs. This makes the response simpler, easier to use, and reduces extra data being sent.

2. Why send a generic error message instead of the actual axios error?

  A generic error message protects sensitive technical details from being exposed. It keeps the system more secure while still informing the client that something went wrong.

3. How could you get a fact in a different language?

  You can add a query parameter like ?language=de in the request. The server reads this value from req.query and passes it to the external API so it returns the fact in that language.