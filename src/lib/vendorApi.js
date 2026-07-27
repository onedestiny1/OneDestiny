const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')
const VENDOR_BASE = `${API_BASE}/api/public/vendor-registrations`

export class ApiError extends Error {
  constructor(message, errors = [], status = 0) {
    super(message)
    this.name = 'ApiError'
    this.errors = errors
    this.status = status
  }
}

async function envelope(res) {
  if (res.status === 413) {
    throw new ApiError('File too large. The server rejected the upload. Please compress your file and try again.', [], 413)
  }
  let body = null
  try {
    body = await res.json()
  } catch {
    throw new ApiError('The server returned an unexpected response.', [], res.status)
  }

  if (!res.ok || !body?.success) {
    throw new ApiError(body?.message || 'Something went wrong.', body?.errors || [], res.status)
  }

  return body
}

export function mediaUrl(relativePath) {
  if (!relativePath) return ''
  if (/^https?:\/\//i.test(relativePath)) return relativePath
  return `${API_BASE}/${relativePath.replace(/^\/+/, '')}`
}

export async function fetchCategories() {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)
  try {
    const res = await fetch(`${API_BASE}/api/categories?includeInactive=false`, { signal: controller.signal })
    let body = null
    try {
      body = await res.json()
    } catch {
      throw new ApiError('The server returned an unexpected response.', [], res.status)
    }
    // accept both { data: [...] } and a bare array
    const list = Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : []
    return list.map((c) => ({
      id: Number(c.id ?? c.categoryId),
      name: c.name ?? c.categoryName ?? c.title ?? `Category ${c.id ?? c.categoryId}`,
    }))
  } finally {
    clearTimeout(timeout)
  }
}

export async function createRegistration(payload) {
  const res = await fetch(VENDOR_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await envelope(res)
  return body.data
}

export async function getRegistration(referenceCode) {
  const res = await fetch(`${VENDOR_BASE}/${referenceCode}`)
  const body = await envelope(res)
  return body.data
}

export async function uploadMedia(referenceCode, file, mediaType) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('mediaType', mediaType)

  const res = await fetch(`${VENDOR_BASE}/${referenceCode}/media`, {
    method: 'POST',
    body: formData,
  })
  const body = await envelope(res)
  return body.data
}

export async function deleteMedia(referenceCode, mediaId) {
  const res = await fetch(`${VENDOR_BASE}/${referenceCode}/media/${mediaId}`, {
    method: 'DELETE',
  })
  return envelope(res)
}

export async function submitRegistration(referenceCode) {
  const res = await fetch(`${VENDOR_BASE}/${referenceCode}/submit`, {
    method: 'POST',
  })
  return envelope(res)
}
