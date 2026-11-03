import { useState } from 'react'
import { X } from 'lucide-react'

const DETAIL_FIELD = { fullName: 'email', email: 'fullName', phone: 'fullName' }

export default function SavedInfoInput({ name, value, contacts, onPick, onRemove, onChange, ...inputProps }) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const query = value.trim().toLowerCase()
  const matches = contacts.filter((contact) => {
    const saved = (contact[name] || '').toLowerCase()
    return saved && saved !== query && saved.includes(query)
  })
  const showList = open && matches.length > 0
  const listId = `${name}-saved-info`

  const pick = (contact) => {
    onPick(contact)
    setOpen(false)
    setActiveIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
      return
    }
    if (!matches.length) return

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const step = e.key === 'ArrowDown' ? 1 : -1
      setOpen(true)
      setActiveIndex((current) => {
        if (current === -1) return step === 1 ? 0 : matches.length - 1
        return (current + step + matches.length) % matches.length
      })
    } else if (e.key === 'Enter' && showList && matches[activeIndex]) {
      e.preventDefault()
      pick(matches[activeIndex])
    }
  }

  return (
    <div className="relative">
      <input
        {...inputProps}
        name={name}
        value={value}
        autoComplete="off"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls={listId}
        aria-activedescendant={showList && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
        onChange={(e) => {
          onChange(e)
          setOpen(true)
          setActiveIndex(-1)
        }}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        onBlur={() => {
          setOpen(false)
          setActiveIndex(-1)
        }}
        onKeyDown={handleKeyDown}
      />

      {showList && (
        <ul
          id={listId}
          role="listbox"
          // Keeps focus in the input, so blur doesn't close the list before a click lands.
          onMouseDown={(e) => e.preventDefault()}
          className="absolute left-0 right-0 top-full z-30 mt-1 max-h-60 overflow-y-auto rounded-lg border border-gold/30 bg-surface-2 py-1 shadow-lg shadow-black/50"
        >
          {matches.map((contact, i) => (
            <li
              key={contact.email}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              onClick={() => pick(contact)}
              className={`group flex cursor-pointer items-center gap-3 border-l-2 px-4 py-2.5 transition-colors hover:border-gold hover:bg-maroon/25 ${
                i === activeIndex ? 'border-gold bg-maroon/25' : 'border-transparent'
              }`}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate font-dmsans text-sm text-text-primary group-hover:text-gold">
                  {contact[name]}
                </span>
                <span className="block truncate font-dmsans text-xs text-muted">
                  {contact[DETAIL_FIELD[name]]}
                </span>
              </span>
              <button
                type="button"
                aria-label={`Remove saved details for ${contact.email}`}
                tabIndex={-1}
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove(contact)
                }}
                className="flex-shrink-0 rounded p-1 text-muted transition-colors hover:text-gold"
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
