import type { Repository } from './repository.type'

export async function getRepositories(): Promise<Array<Repository>> {
  return [
    {
      organizationId: 'cli',
      repositoryId: 'cli',
      imageUrl: 'https://avatars.githubusercontent.com/u/59704711?s=48&v=4',
      description: 'GitHub’s official command line tool',
      stars: '40k',
    },
    {
      organizationId: 'cli',
      repositoryId: 'cli',
      imageUrl: 'https://avatars.githubusercontent.com/u/59704711?s=48&v=4',
      description: 'GitHub’s official command line tool',
      stars: '40k',
    },
    {
      organizationId: 'cli',
      repositoryId: 'cli',
      imageUrl: 'https://avatars.githubusercontent.com/u/59704711?s=48&v=4',
      description: 'GitHub’s official command line tool',
      stars: '40k',
    },
    {
      organizationId: 'cli',
      repositoryId: 'cli',
      imageUrl: 'https://avatars.githubusercontent.com/u/59704711?s=48&v=4',
      description: 'GitHub’s official command line tool',
      stars: '40k',
    },
  ]
}
