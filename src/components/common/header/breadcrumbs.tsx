'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Badge } from '~/components/base/badges/badges'
import HStack from '~/components/layout/stacks/h-stack/h-stack'

export default function Breadcrumbs() {
  const params = useParams<{ organization_id: string, repository_id: string }>()
  const { organization_id, repository_id } = params

  if (!organization_id) {
    return null
  }

  if (!repository_id) {
    return (
      <nav>
        <Badge type="modern" size="md">
          <HStack size="sm">
            <Link href={`/${organization_id}`} className="font-semibold">
              {organization_id}
            </Link>
          </HStack>
        </Badge>
      </nav>
    )
  }

  return (
    <nav>
      <Badge type="modern" size="md">
        <HStack size="sm">
          <Link href={`/${organization_id}`} className="font-semibold">
            {organization_id}
          </Link>
          <span className="text-gray-500 text-sm">/</span>
          <Link href={`/${organization_id}/${repository_id}`} className="font-semibold">
            {repository_id}
          </Link>
        </HStack>
      </Badge>
    </nav>
  )
}
