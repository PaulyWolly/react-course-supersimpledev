import { Link } from 'react-router'
import { Header } from '../components/Header'
import './header.css'
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <>
      <Header />

      <div className="not-found-page">
        <div className="not-found-content">
          <svg
            className="not-found-icon"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <circle cx="35" cy="40" r="4" fill="currentColor" />
            <circle cx="65" cy="40" r="4" fill="currentColor" />
            <path
              d="M 32 68 Q 50 52 68 68"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <div className="not-found-title">404</div>
          <div className="not-found-subtitle">Page not found</div>

          <p className="not-found-message">
            The page you are looking for doesn&apos;t exist or another error
            occurred. Go back, or return to the home page to choose a new
            direction.
          </p>

          <Link to="/" className="not-found-link">
            Go to home
          </Link>
        </div>
      </div>
    </>
  )
}
