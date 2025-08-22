import Link from "next/link"
import { Github, Linkedin, Twitter, Workflow } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer id="footer" className="border-t">
      <div className="container grid gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-3">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
              <Workflow className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight">StreamLine</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            StreamLine helps teams automate, collaborate, and deliver better software, faster.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:justify-self-center">
          <div className="space-y-2">
            <div className="text-sm font-semibold">Product</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link className="hover:underline" href="#features">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#testimonials">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-semibold">Company</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link className="hover:underline" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 lg:justify-self-end">
          <div className="text-sm font-semibold">Follow us</div>
          <div className="flex items-center gap-3">
            <Link aria-label="StreamLine on Twitter" href="#">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link aria-label="StreamLine on GitHub" href="#">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link aria-label="StreamLine on LinkedIn" href="#">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} StreamLine Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
