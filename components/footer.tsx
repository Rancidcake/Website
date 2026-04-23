export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <div className="text-lg font-bold font-mono mb-4">
              IndusOpa<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Algorithmic oversight for supply chains.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide font-mono mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/diagnostics" className="text-muted-foreground hover:text-foreground transition">Diagnostics</a></li>
              <li><a href="/case-studies" className="text-muted-foreground hover:text-foreground transition">Solutions</a></li>
              <li><a href="/booking" className="text-muted-foreground hover:text-foreground transition">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide font-mono mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide font-mono mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} IndusOpa Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.29 20h7.97l-.92-4.3h2.68l.04-.46h-2.56l.45-2.11h2.02l.04-.46H15.3l.45-2.11h2.02l.04-.46h-2.56l.92-4.3h-7.97l-.92 4.3H7.85l-.04.46h2.56l-.45 2.11H8.9l-.04.46h2.56l-.45 2.11H9.35l-.04.46h2.56l-.92 4.3z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.487 1.348C1.114 1.348.5 2.017.5 2.883v14.234c0 .866.614 1.535 1.987 1.535h14.026c1.373 0 1.987-.669 1.987-1.535V2.883c0-.866-.614-1.535-1.987-1.535H2.487zm1.244 15.667h-2.48V7.116h2.48v10.899zm-1.24-12.37c-.794 0-1.288-.52-1.288-1.173 0-.652.494-1.173 1.288-1.173.794 0 1.288.521 1.288 1.173 0 .652-.494 1.173-1.288 1.173zm13.003 12.37h-2.48v-5.303c0-1.323-.474-2.225-1.667-2.225-.909 0-1.449.61-1.687 1.198-.087.211-.109.505-.109.8v5.53h-2.48s.033-8.984 0-9.899h2.48v1.403c.438-.675 1.221-1.634 2.973-1.634 2.171 0 3.79 1.415 3.79 4.459v5.671z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
