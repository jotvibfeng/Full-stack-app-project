import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/atlasProfile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/atlasProfile"!</div>
}
