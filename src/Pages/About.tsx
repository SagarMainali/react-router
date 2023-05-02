import { Link } from "react-router-dom"

function About() {
  return (
    <div>
      <h2>This is About</h2>
      <Link to='/about/:id'>link 1</Link><br />
      <Link to='/about/:id'>link 2</Link>
    </div>
  )
}

export default About