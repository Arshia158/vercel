"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeSelector } from "@/components/theme-selector"
import {
  Globe,
  Shield,
  Zap,
  Heart,
  Mail,
  MessageCircle,
  Star,
  Smartphone,
  Palette,
  Info,
  ExternalLink,
} from "lucide-react"

export function AboutPage() {
  const features = [
    { icon: Globe, title: "Global Coverage", description: "Worldwide IP geolocation data" },
    { icon: Shield, title: "Privacy First", description: "No data stored or tracked" },
    { icon: Zap, title: "Lightning Fast", description: "Instant IP lookup results" },
    { icon: Smartphone, title: "Mobile Optimized", description: "Perfect mobile experience" },
  ]

  const handleContact = (type: "email" | "support") => {
    if (type === "email") {
      window.open("mailto:h3dev.pira@gmail.com", "_blank")
    } else {
      window.open("https://t.me/h3dev", "_blank")
    }
  }

  return (
    <div className="pb-24 md:pb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="relative mx-auto w-20 h-20 mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-3xl blur-lg opacity-50" />
          <div className="relative w-full h-full bg-gradient-to-r from-primary to-purple-500 rounded-3xl flex items-center justify-center">
            <Globe className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
          IP Lookup Pro
        </h1>
        <p className="text-muted-foreground text-lg">Advanced IP Intelligence Tool</p>
        <Badge variant="secondary" className="mt-2 rounded-full px-4 py-1">
          Version 2.0.1
        </Badge>
      </div>

      {/* Theme Selector Section */}
      <Card className="mb-6 border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5" />
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/20">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">Appearance</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
            <div>
              <p className="font-medium mb-1">Theme Selection</p>
              <p className="text-sm text-muted-foreground">Choose your preferred color scheme</p>
            </div>
            <ThemeSelector />
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mb-6 border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5" />
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500/20">
              <Star className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <CardTitle className="text-xl">Features</CardTitle>
              <CardDescription>What makes us special</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-4 bg-background/50 rounded-xl border border-blue-500/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-blue-500" />
                    <p className="font-semibold">{feature.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* App Info */}
      <Card className="mb-6 border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5" />
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-green-500/20">
              <Info className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <CardTitle className="text-xl">About</CardTitle>
              <CardDescription>Learn more about our app</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-4">
          <div className="p-4 bg-background/50 rounded-xl">
            <h3 className="font-semibold mb-2">What is IP Lookup Pro?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IP Lookup Pro is a powerful tool that provides comprehensive information about any IP address. Get
              detailed geolocation data, network information, timezone details, and more in a beautiful,
              mobile-optimized interface.
            </p>
          </div>
          <div className="p-4 bg-background/50 rounded-xl">
            <h3 className="font-semibold mb-2">Privacy & Security</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We respect your privacy. No IP addresses or personal data are stored on our servers. All lookups are
              processed in real-time and not logged or tracked.
            </p>
          </div>
          <div className="p-4 bg-background/50 rounded-xl">
            <h3 className="font-semibold mb-2">Data Source</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Powered by ipwho.is API, providing accurate and up-to-date IP geolocation data from around the world.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Support */}
      <Card className="mb-6 border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5" />
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-orange-500/20">
              <MessageCircle className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <CardTitle className="text-xl">Support</CardTitle>
              <CardDescription>Get help when you need it</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-3">
          <Button
            onClick={() => handleContact("email")}
            variant="outline"
            className="w-full justify-start gap-3 h-12 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-200"
          >
            <Mail className="h-5 w-5 text-orange-500" />
            <div className="text-left">
              <p className="font-medium">Email Support</p>
              <p className="text-xs text-muted-foreground">h3dev.pira@gmail.com</p>
            </div>
            <ExternalLink className="h-4 w-4 ml-auto" />
          </Button>
          <Button
            onClick={() => handleContact("support")}
            variant="outline"
            className="w-full justify-start gap-3 h-12 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-200"
          >
            <MessageCircle className="h-5 w-5 text-orange-500" />
            <div className="text-left">
              <p className="font-medium">Help Center</p>
              <p className="text-xs text-muted-foreground">FAQs and guides</p>
            </div>
            <ExternalLink className="h-4 w-4 ml-auto" />
          </Button>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          <span>for the community</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2025 IP Lookup Pro. All rights reserved.</p>
      </div>
    </div>
  )
}
