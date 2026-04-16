import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/atlasContact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/atlasContact"!</div>
}
