import Center from '~/components/layout/center/center'
import VStack from '~/components/layout/stacks/v-stack/v-stack'
import { ComingSoonCard } from './coming-soon-card'

export function ComingSoon() {
  return (
    <Center className="h-[calc(100vh-10rem)]">
      <VStack alignment="center" size="md">
        <Center>
          <ComingSoonCard />
        </Center>
      </VStack>
    </Center>
  )
}
