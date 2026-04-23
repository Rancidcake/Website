'use client'

import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { useRouter } from 'next/navigation'

export function Header() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-mono text-foreground">
          IndusOpa<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wide">
          <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition">
            Solutions
          </Link>
          <Link href="/diagnostics" className="text-muted-foreground hover:text-foreground transition">
            Diagnostics
          </Link>
          <Link href="/booking" className="text-muted-foreground hover:text-foreground transition">
            Book Consult
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="hidden sm:inline text-muted-foreground hover:text-foreground transition font-mono text-sm"
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="border border-foreground text-foreground px-4 py-2 hover:bg-foreground hover:text-background transition font-mono text-sm uppercase tracking-wide"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="border border-foreground text-foreground px-4 py-2 hover:bg-foreground/5 transition font-mono text-sm uppercase tracking-wide"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition font-mono text-sm uppercase tracking-wide"
              >
                Client Portal
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
