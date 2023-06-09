interface LabelProps {
  htmlFor: string,
  label: string
}

export default function Label({ htmlFor, label}: LabelProps) {

  return (
    <label htmlFor={htmlFor} className="text-lg capitalize">
      {label}
    </label>
  )
}