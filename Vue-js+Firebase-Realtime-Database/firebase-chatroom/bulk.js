// Update Multiple References at Once

const payload = {}

payload['users/-L8HkVXx_jUWUXDIVDlR/nickname'] = 'elaine'

payload['messages/-L8HkXz1C1Xyr9r9WLdE/nickname'] = 'elaine'

payload['messages/-L8HkYMfiiEE0sQvBhJl/nickname'] = 'elaine'

database.ref().update(payload)