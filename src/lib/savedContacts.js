const STORAGE_KEY = 'onedestiny.savedContacts'
const MAX_SAVED = 5

function write(contacts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  } catch {
    // Storage can be blocked or full. Suggestions are optional, so carry on without them.
  }
  return contacts
}

export function loadContacts() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveContact({ fullName, email, phone }) {
  const contact = { fullName: fullName.trim(), email: email.trim(), phone: phone.trim() }
  const others = loadContacts().filter(
    (saved) => saved.email.toLowerCase() !== contact.email.toLowerCase()
  )
  return write([contact, ...others].slice(0, MAX_SAVED))
}

export function removeContact(email) {
  return write(loadContacts().filter((saved) => saved.email !== email))
}
