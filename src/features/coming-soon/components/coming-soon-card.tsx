'use client'

import { ArrowRight } from '@untitledui/icons'
import { Button } from '~/components/base/buttons/button'
import { Card } from '~/components/base/card/card'

export function ComingSoonCard() {
  return (
    <Card className="max-w-lg">
      <Card.Header>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Description>This feature is currently limited</Card.Description>
      </Card.Header>
      <Card.Content>
        Sorry...😔, this feature is currently under development and has limited functionality.
      </Card.Content>
      <Card.Footer>
        <Button href="/cli/cli/issues" size="lg" iconTrailing={<ArrowRight />}>Try available features</Button>
      </Card.Footer>
    </Card>
  )
}
