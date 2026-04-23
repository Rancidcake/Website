'use client'

import { useAuth } from '@/providers/auth-provider'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Globe3D } from '@/components/globe-3d'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Brain, Zap, Target } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [loading, user, router])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance font-mono">
            Algorithmic<br/><span className="text-primary">Oversight.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl text-pretty font-mono">
            We inject determinism into your supply chain. Move beyond basic empathy—deploy data-driven consulting models designed for scalability and minimal variance.
          </p>
          <div className="flex gap-4 pt-6">
            <Link
              href="/auth/signup"
              className="bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors font-mono uppercase text-sm tracking-wide"
            >
              Initialize Diagnostic
            </Link>
            <button className="border-2 border-foreground text-foreground px-8 py-3 font-medium hover:bg-foreground/5 transition-colors font-mono uppercase text-sm tracking-wide">
              Schedule Audit
            </button>
          </div>
        </div>

        {/* 3D Globe */}
        <div className="h-96 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Globe3D />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Approach</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            We combine structured methodologies with creative thinking to solve complex business challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Empathize & Define',
                description: 'Deep dive into user needs and business context to define the real problem',
              },
              {
                icon: Zap,
                title: 'Ideate & Prototype',
                description: 'Generate innovative solutions and validate them through rapid prototyping',
              },
              {
                icon: Target,
                title: 'Test & Implement',
                description: 'Refine solutions based on feedback and implement with measurable impact',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take our diagnostic assessment to understand your business&apos;s transformation readiness.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
