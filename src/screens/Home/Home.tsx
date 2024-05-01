import { useMemo } from 'react'
import { useGetApi } from '../../hooks/useGetApi'
import Search from '../../components/Search/Search'
import { normalizeString } from '../../helpers/stringFormatter'
import { WrapperList, TextBlock, Title, ExternalLink } from './styles'
import { CATEGORIES } from '../../constants'

const Home = () => {
  const { fetchData, data, isLoading, isEmpty } = useGetApi()

  const filteredList = async (search: string) => {
    await fetchData(`?search=${normalizeString(search)}`)
  };

  const renderData = useMemo(() => {
    if (isLoading)
      return <div>Loading...</div>

    if (isEmpty) 
      return <div>There are no results matching your query.</div>

    return (
      <ul>
        {data?.map(({ id, title, description, url, category }) => (
          <WrapperList key={id}>
            <ExternalLink href={url} target="_blank">
              <TextBlock>
                <Title> Title: </Title> 
                <p>{title}</p>
              </TextBlock>
              <TextBlock>
                <Title> Description: </Title> 
                <p>{description}</p>
              </TextBlock>
              <TextBlock>
                <Title> Category: </Title> 
                <p>{CATEGORIES[category]}</p>
              </TextBlock>
            </ExternalLink>
          </WrapperList>
        ))}
      </ul>
    )
  }, [isLoading, isEmpty, data])

  return (
    <div>
      <Search onClick={filteredList} />

      {renderData}
    </div>
  )
}

export default Home