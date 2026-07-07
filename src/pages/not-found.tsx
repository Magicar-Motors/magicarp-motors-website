import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <p>
        That page doesn't exist. Head back to the <Link to="/">home page</Link>.
      </p>
    </>
  )
}
