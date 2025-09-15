"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { BottomNav } from "@/components/bottom-nav"
import { AboutPage } from "@/components/about-page"
import { ThemeSelector } from "@/components/theme-selector"
import {
  Search,
  Globe,
  MapPin,
  Wifi,
  Clock,
  Server,
  Smartphone,
  RefreshCw,
  Copy,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Activity,
  TrendingUp,
  Eye,
  Navigation,
} from "lucide-react"
import Image from "next/image"

interface IPData {
  ip: string
  success: boolean
  type: string
  continent: string
  continent_code: string
  country: string
  country_code: string
  region: string
  region_code: string
  city: string
  latitude: number
  longitude: number
  is_eu: boolean
  postal: string
  calling_code: string
  capital: string
  borders: string
  flag: {
    img: string
    emoji: string
    emoji_unicode: string
  }
  connection: {
    asn: number
    org: string
    isp: string
    domain: string
  }
  timezone: {
    id: string
    abbr: string
    is_dst: boolean
    offset: number
    utc: string
    current_time: string
  }
}

export default function IPToolApp() {
  const [activeTab, setActiveTab] = useState<"home" | "about">("home")
  const [ipData, setIpData] = useState<IPData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchIP, setSearchIP] = useState("")
  const [searching, setSearching] = useState(false)
  const [copied, setCopied] = useState(false)

  const fetchIPData = async (ip?: string) => {
    const isSearching = !!ip
    if (isSearching) {
      setSearching(true)
    } else {
      setLoading(true)
    }
    setError(null)

    try {
      const url = ip ? `https://ipwho.is/${ip}` : "https://ipwho.is/"
      const response = await fetch(url)
      const data = await response.json()

      if (data.success) {
        setIpData(data)
      } else {
        setError("Invalid IP address or API error")
      }
    } catch (err) {
      setError("Failed to fetch IP information")
    } finally {
      setLoading(false)
      setSearching(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchIP.trim()) {
      fetchIPData(searchIP.trim())
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    if (activeTab === "home") {
      fetchIPData()
    }
  }, [activeTab])

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleString()
  }

  if (activeTab === "about") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
          <AboutPage />
        </div>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 py-6 max-w-6xl relative z-10 pb-24 md:pb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur-lg opacity-50" />
              <div className="relative p-3 bg-gradient-to-r from-primary to-purple-500 rounded-2xl">
                <Globe className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                IP Lookup Pro
              </h1>
              <p className="text-muted-foreground text-sm md:text-lg">Advanced IP intelligence</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <ThemeSelector />
            <Button
              onClick={() => fetchIPData()}
              variant="outline"
              size="sm"
              className="gap-2 rounded-full hover:scale-105 transition-all duration-200"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Mobile Search Form */}
        <Card className="mb-6 border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5" />
          <CardContent className="p-4 md:p-8 relative">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter IP address (e.g., 8.8.8.8)"
                  value={searchIP}
                  onChange={(e) => setSearchIP(e.target.value)}
                  className="pl-12 h-12 md:h-14 text-base md:text-lg rounded-2xl border-2 bg-background/50 backdrop-blur-sm focus:bg-background/80 transition-all duration-200"
                />
              </div>
              <Button
                type="submit"
                disabled={searching || !searchIP.trim()}
                className="h-12 md:h-14 px-6 md:px-8 rounded-2xl bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                {searching ? (
                  <RefreshCw className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Zap className="h-5 w-5 mr-2" />
                    Lookup
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Error Alert */}
        {error && (
          <Alert className="mb-6 border-2 border-destructive/20 bg-destructive/5 backdrop-blur-sm rounded-2xl">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription className="text-base">{error}</AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="border-0 shadow-xl">
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-24 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* IP Data Display */}
        {ipData && !loading && (
          <div className="space-y-6">
            {/* Main IP Info */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10" />
              <CardHeader className="pb-4 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur opacity-50" />
                      <div className="relative p-3 bg-gradient-to-r from-primary to-purple-500 rounded-xl">
                        <Smartphone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl">IP Address</CardTitle>
                      <CardDescription className="text-sm md:text-base">Current lookup result</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-end md:items-center gap-2">
                    <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs md:text-sm font-semibold">
                      {ipData.type}
                    </Badge>
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
                      <Activity className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between p-4 md:p-6 bg-background/50 backdrop-blur-sm rounded-2xl border-2 border-primary/20">
                  <code className="text-xl md:text-3xl font-mono font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    {ipData.ip}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(ipData.ip)}
                    className="rounded-full hover:bg-primary/10 transition-all duration-200 hover:scale-110 p-2 md:p-3"
                  >
                    {copied ? (
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5 md:h-6 md:w-6" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl">Location</CardTitle>
                    <CardDescription>Geographic information</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-blue-500/20">
                  <Image
                    src={ipData.flag.img || "/placeholder.svg"}
                    alt={`${ipData.country} flag`}
                    width={32}
                    height={24}
                    className="rounded shadow-sm"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-base md:text-lg">{ipData.country}</p>
                    <p className="text-muted-foreground text-sm">{ipData.country_code}</p>
                  </div>
                  <Badge variant={ipData.is_eu ? "default" : "secondary"} className="rounded-full">
                    {ipData.is_eu ? "EU" : "Non-EU"}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-background/30 rounded-lg">
                    <p className="font-medium text-sm md:text-base">{ipData.region}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Region</p>
                  </div>
                  <div className="p-3 bg-background/30 rounded-lg">
                    <p className="font-medium text-sm md:text-base">{ipData.city}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">City</p>
                  </div>
                  <div className="p-3 bg-background/30 rounded-lg">
                    <p className="font-medium text-sm md:text-base">{ipData.postal}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Postal</p>
                  </div>
                  <div className="p-3 bg-background/30 rounded-lg">
                    <p className="font-medium text-sm md:text-base">+{ipData.calling_code}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Calling Code</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/30 rounded-xl">
                  <Navigation className="h-5 w-5 text-blue-500" />
                  <div className="flex-1">
                    <p className="font-medium text-sm md:text-base">
                      {ipData.latitude}°, {ipData.longitude}°
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">Coordinates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connection Info */}
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-green-500/20">
                    <Wifi className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl">Network</CardTitle>
                    <CardDescription>Connection details</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <div className="p-4 bg-background/50 rounded-xl border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="h-4 w-4 text-green-500" />
                    <p className="font-semibold">ISP Provider</p>
                  </div>
                  <p className="text-sm md:text-base">{ipData.connection.isp}</p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 bg-background/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <p className="font-medium text-sm">Organization</p>
                    </div>
                    <p className="text-xs md:text-sm">{ipData.connection.org}</p>
                  </div>
                  <div className="p-3 bg-background/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <p className="font-medium text-sm">ASN</p>
                    </div>
                    <p className="text-xs md:text-sm">{ipData.connection.asn}</p>
                  </div>
                  <div className="p-3 bg-background/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <p className="font-medium text-sm">Domain</p>
                    </div>
                    <p className="text-xs md:text-sm">{ipData.connection.domain}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timezone Info */}
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-500/20">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl">Timezone</CardTitle>
                    <CardDescription>Time information</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background/50 rounded-xl border border-orange-500/20 md:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-orange-500" />
                      <p className="font-semibold">Current Time</p>
                    </div>
                    <p className="text-lg md:text-xl font-mono">{formatTime(ipData.timezone.current_time)}</p>
                  </div>
                  <div className="p-3 bg-background/30 rounded-xl">
                    <p className="font-semibold mb-1 text-sm">Timezone</p>
                    <p className="text-xs md:text-sm">{ipData.timezone.id}</p>
                  </div>
                  <div className="p-3 bg-background/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm">UTC Offset</p>
                      <Badge variant={ipData.timezone.is_dst ? "default" : "secondary"} className="text-xs">
                        {ipData.timezone.is_dst ? "DST" : "Standard"}
                      </Badge>
                    </div>
                    <p className="text-xs md:text-sm">
                      {ipData.timezone.utc} ({ipData.timezone.abbr})
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
