import { Badge } from '~/components/base/badges/badges'
import Center from '~/components/layout/center/center'

export default function Issues() {
  return (
    <Center className="h-[calc(100vh-10rem)]">
      <div>
        <Badge type="pill-color" size="md" color="warning">
          TODO
        </Badge>
        <p>Issueを検索できるRAGチャットボット</p>
      </div>
    </Center>
  )
}
