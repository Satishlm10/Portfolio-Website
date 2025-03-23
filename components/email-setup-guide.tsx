"use client"

import { useState } from "react"
import { AlertCircle, Check, Copy, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function EmailSetupGuide() {
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Email Setup Guide</CardTitle>
        <CardDescription>
          Follow these steps to enable the contact form to send emails to your Gmail account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            For security reasons, you should use an App Password instead of your regular Gmail password.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Step 1: Create an App Password for Gmail</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Go to your Google Account settings at{" "}
              <a
                href="https://myaccount.google.com/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                https://myaccount.google.com/security
              </a>
            </li>
            <li>Enable 2-Step Verification if you haven't already</li>
            <li>Go to App passwords (under "Signing in to Google")</li>
            <li>Select "Mail" as the app and "Other" as the device</li>
            <li>Enter "Portfolio Website" as the name</li>
            <li>Google will generate a 16-character password - save this</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Step 2: Add Environment Variables to Your Project</h3>
          <p>Add these environment variables to your Vercel project:</p>

          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">EMAIL_USER</label>
              <div className="flex">
                <Input value="your.email@gmail.com" readOnly className="rounded-r-none" />
                <Button
                  variant="outline"
                  className="rounded-l-none"
                  onClick={() => copyToClipboard("your.email@gmail.com", "email")}
                >
                  {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Replace with your actual Gmail address</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">EMAIL_PASSWORD</label>
              <div className="flex">
                <Input
                  type={showPassword ? "text" : "password"}
                  value="your-app-password"
                  readOnly
                  className="rounded-r-none"
                />
                <Button
                  variant="outline"
                  className="rounded-l-none border-r-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  className="rounded-l-none"
                  onClick={() => copyToClipboard("your-app-password", "password")}
                >
                  {copied === "password" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Use the App Password generated in Step 1</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Step 3: Deploy Your Project</h3>
          <p>
            After adding these environment variables, deploy your project to Vercel. The contact form will now send
            emails to your Gmail account whenever someone submits the form.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

