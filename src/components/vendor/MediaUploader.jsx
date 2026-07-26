import { useRef, useState } from 'react'
import { FileText, ImagePlus, Loader2, Trash2, Video as VideoIcon } from 'lucide-react'
import { deleteMedia, mediaUrl, uploadMedia } from '../../lib/vendorApi'

const kindIcon = { image: ImagePlus, video: VideoIcon, document: FileText }

export default function MediaUploader({
  referenceCode,
  mediaType,
  label,
  hint,
  accept,
  allowedTypesLabel,
  maxSizeMB,
  kind = 'image',
  multiple = false,
  min = 0,
  max = 1,
  required = false,
  items,
  onAdd,
  onRemove,
  disabled = false,
}) {
  const inputRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const Icon = kindIcon[kind] || ImagePlus

  const acceptedTypes = accept.split(',').map((t) => t.trim())
  const remainingSlots = max - items.length
  const met = items.length >= min

  const validate = (file) => {
    if (!acceptedTypes.includes(file.type)) {
      return `"${file.name}" isn't an allowed format. Use ${allowedTypesLabel}.`
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      return `"${file.name}" is larger than ${maxSizeMB}MB.`
    }
    return null
  }

  const handleFiles = async (fileList) => {
    setError('')
    const files = Array.from(fileList).slice(0, multiple ? remainingSlots : 1)

    if (files.length === 0) return

    setUploading(true)
    for (const file of files) {
      const validationError = validate(file)
      if (validationError) {
        setError(validationError)
        continue
      }
      const previewUrl = kind === 'image' ? URL.createObjectURL(file) : null
      try {
        const data = await uploadMedia(referenceCode, file, mediaType)
        onAdd({ id: data.id, url: data.url, previewUrl, name: file.name })
      } catch (err) {
        if (err.status === 413) {
          setError(`"${file.name}" is too large for the server. Please compress the file and try again.`)
        } else {
          setError(err.message || 'Upload failed. Please try again.')
        }
      }
    }
    setUploading(false)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleRemove = async (id) => {
    setError('')
    try {
      await deleteMedia(referenceCode, id)
      onRemove(id)
    } catch (err) {
      setError(err.message || 'Could not remove this file.')
    }
  }

  const showDropzone = multiple ? remainingSlots > 0 : items.length === 0

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <span className="form-label mb-0">
          {label}
          {required && <span className="text-maroon-light"> *</span>}
        </span>
        {(multiple || min > 0) && (
          <span className={`font-dmsans text-xs ${met ? 'text-gold' : 'text-muted'}`}>
            {items.length}
            {multiple ? ` / ${max}` : ''}
            {min > 0 ? ` (min ${min})` : ''}
          </span>
        )}
      </div>
      {hint && <p className="mb-3 font-dmsans text-xs text-muted">{hint}</p>}

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-border-custom bg-surface"
          >
            {kind === 'image' ? (
              <img
                src={item.previewUrl || mediaUrl(item.url)}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-1 px-2 text-center">
                <Icon size={20} className="text-gold" />
                <span className="line-clamp-2 font-dmsans text-[10px] text-muted">
                  {item.name || 'Uploaded'}
                </span>
              </div>
            )}
            {!disabled && (
              <button
                type="button"
                onClick={() => handleRemove(item.id)}
                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-bg/80 text-text-primary opacity-0 transition-opacity group-hover:opacity-100"
                aria-label="Remove file"
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
        ))}

        {showDropzone && !disabled && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-gold/30 bg-surface-2/60 text-muted transition-colors hover:border-gold hover:text-gold disabled:opacity-60"
          >
            {uploading ? <Loader2 size={20} className="animate-spin" /> : <Icon size={20} />}
            <span className="font-dmsans text-[10px]">{uploading ? 'Uploading…' : 'Add'}</span>
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => e.target.files?.length && handleFiles(e.target.files)}
      />

      <p className="mt-2 font-dmsans text-[11px] text-muted">
        {allowedTypesLabel} &middot; up to {maxSizeMB}MB
      </p>
      {error && <p className="mt-1 font-dmsans text-xs text-maroon-light">{error}</p>}
    </div>
  )
}
