import { KeyboardEvent, useState } from 'react'
import { Wrapper, Input, Button } from './styles'

type TSearch = {
  onClick: (type: string) => {}
}

const Search = ({ onClick }: TSearch) => {
  const [search, setSearch] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(search)
    }
  }

  return (
    <Wrapper>
      <Input
        type="text"
        value={search}
        onChange={(e: { target: HTMLInputElement }) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button onClick={() => onClick(search)}>Search</Button>
    </Wrapper>
  )
}

export default Search