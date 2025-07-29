import { ThemeToggle } from '~/components/common/theme-toggle/theme-toggle'
import Container from '~/components/layout/container/container'
import HStack from '~/components/layout/stacks/h-stack/h-stack'
import Breadcrumbs from './breadcrumbs'
import Logo from './logo'

export default function Header() {
  return (
    <header className="w-full border-b border-border-primary">
      <Container size="sm">
        <HStack alignment="between">
          <HStack>
            <Logo />
            <Breadcrumbs />
          </HStack>
          <ThemeToggle />
        </HStack>
      </Container>
    </header>
  )
}
