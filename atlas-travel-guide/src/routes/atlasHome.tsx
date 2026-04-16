import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/atlasHome')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Country</div>
}
