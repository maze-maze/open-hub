import { ArrowNarrowRight } from '@untitledui/icons'
import Link from 'next/link'
import { Badge } from '~/components/base/badges/badges'
import { Button } from '~/components/base/buttons/button'
import Center from '~/components/layout/center/center'
import VStack from '~/components/layout/stacks/v-stack/v-stack'

export default function Home() {
  return (
    <Center className="h-[calc(100vh-10rem)]">
      <VStack size='lg'>
        <div className="">
          <Badge type="pill-color" size="md" color="warning">
            TODO
          </Badge>
          <p>レポジトリを選択できるページ（最初は一個だけ）</p>
        </div>
        <Button href="/cli/cli/issues" size="lg" iconTrailing={<ArrowNarrowRight />}>Issues</Button>
      </VStack>
    </Center>
  )
}
