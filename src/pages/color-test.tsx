// ColorShowcase.js
import React from 'react'

const ColorShowcase = () => {
  return (
    <div className="flex justify-center items-center bg-background py-4">
      <div className="w-80">
        <div className="flex justify-between mb-2">
          <div className="bg-popover w-1/2 h-24"></div>
          <div className="bg-popover-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Popover</p>
          <p className="text-center text-sm">Popover Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-card w-1/2 h-24"></div>
          <div className="bg-card-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Card</p>
          <p className="text-center text-sm">Card Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-background w-1/2 h-24"></div>
          <div className="bg-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Background</p>
          <p className="text-center text-sm">Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-primary w-1/2 h-24"></div>
          <div className="bg-primary-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Primary Background</p>
          <p className="text-center text-sm">Primary Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-secondary w-1/2 h-24"></div>
          <div className="bg-secondary-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Secondary Background</p>
          <p className="text-center text-sm">Secondary Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-muted w-1/2 h-24"></div>
          <div className="bg-muted-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Muted Background</p>
          <p className="text-center text-sm">Muted Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-accent w-1/2 h-24"></div>
          <div className="bg-accent-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Accent Background</p>
          <p className="text-center text-sm">Accent Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-destructive w-1/2 h-24"></div>
          <div className="bg-destructive-foreground w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Destructive Background</p>
          <p className="text-center text-sm">Destructive Foreground</p>
        </div>
        <div className="flex justify-between mb-2">
          <div className="bg-border w-1/2 h-24"></div>
          <div className="bg-input w-1/2 h-24"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Border Color</p>
          <p className="text-center text-sm">Input Background</p>
        </div>
        <div className="flex justify-between">
          <div className="bg-ring w-1/2 h-24"></div>
          <div className="w-1/2"></div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <p className="text-center text-sm">Ring Color</p>
          <p className="text-center text-sm">(Unused)</p>
        </div>
      </div>
    </div>
  )
}

export default ColorShowcase
