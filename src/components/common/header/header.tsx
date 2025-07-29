import { ThemeToggle } from '~/components/common/theme-toggle/theme-toggle'
import Container from '~/components/layout/container/container'
import HStack from '~/components/layout/stacks/h-stack/h-stack'
import Breadcrumbs from './breadcrumbs'
import GitHubLink from './github-link'
import Logo from './logo'

export default function Header() {
  return (
    <header className="w-full border-b border-border-primary fixed top-0 z-30 backdrop-blur-md bg-primary/50">
      <Container size="sm" className="sm:container mx-auto">
        <HStack alignment="between">
          <HStack>
            <Logo />
            <Breadcrumbs />
          </HStack>
          <HStack>
            <GitHubLink />
            <ThemeToggle />
          </HStack>
        </HStack>
      </Container>
    </header>
  )
}
