'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Badge } from '~/components/base/badges/badges'
import HStack from '~/components/layout/stacks/h-stack/h-stack'

export default function Breadcrumbs() {
  const params = useParams<{ organization_id: string, repository_id: string }>()
  const { organization_id, repository_id } = params

  return (
    <nav>
      <Badge type="modern" size="md">
        <HStack size="sm">
          <Link href={`/${organization_id}`}>
            {organization_id}
          </Link>
          {repository_id && (
            <>
              <span>/</span>
              <Link href={`/${organization_id}/${repository_id}`}>
                {repository_id}
              </Link>
            </>
          )}
        </HStack>
      </Badge>
    </nav>
  )
}
