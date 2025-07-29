import type { Repository } from '../repository.type'
import { ArrowRight, Star01 } from '@untitledui/icons'
import Link from 'next/link'
import { Avatar } from '~/components/base/avatar/avatar'
import Container from '~/components/layout/container/container'
import HStack from '~/components/layout/stacks/h-stack/h-stack'
import VStack from '~/components/layout/stacks/v-stack/v-stack'

export default function RepositoryItem({ repository }: { repository: Repository }) {
  return (
    <Link
      href={`/${repository.organizationId}/${repository.repositoryId}/issues`}
      className="border border-primary rounded hover:bg-primary_hover transition-colors duration-300 group"
    >
      <Container>
        <VStack>

          <HStack>
            <Avatar
              size="xs"
              alt={`${repository.organizationId}/${repository.repositoryId} image`}
              initials={repository.repositoryId.charAt(1).toUpperCase()}
              src={repository.imageUrl}
            />
            <h3 className="text-lg">
              {repository.organizationId}
              <span className="text-sm mx-1 text-text-primary/70">/</span>
              {repository.repositoryId}
            </h3>
          </HStack>
          <p className="text-sm text-gray-500">{repository.description}</p>
          <HStack alignment="between">
            <HStack size="sm" className=" text-text-primary/60">
              <Star01 className="size-5" />
              <span className="mt-0.5">{repository.stars}</span>
            </HStack>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </HStack>
        </VStack>
      </Container>
    </Link>
  )
}
