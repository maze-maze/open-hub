import AddRepositoryButton from '../add-repository/components/add-repository-button'
import { getRepositories } from '../get-repositories'
import RepositoryItem from './repository-item'

export default async function RepositoryList() {
  const repositories = await getRepositories()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      <AddRepositoryButton />
      {repositories.map(repository => (
        <RepositoryItem
          key={`${repository.organizationId}/${repository.repositoryId}`}
          repository={repository}
        />
      ))}
    </div>
  )
}
