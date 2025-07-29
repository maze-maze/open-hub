import PageContainer from '~/components/layout/container/page-container'
import RepositoryList from '~/features/repositories/components/repository-list'

export default function Home() {
  return (
    <PageContainer>
      <RepositoryList />
    </PageContainer>
  )
}
