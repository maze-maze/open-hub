'use client'

import { Plus } from '@untitledui/icons'
import Container from '~/components/layout/container/container'
import { AddRepository } from '../add-repository'

export default function AddRepositoryButton() {
  return (
    <button
      className="border min-h-24 border-brand-200/50 rounded bg-brand-200/20 hover:bg-brand-200/30 transition-colors duration-300 group relative text-left cursor-pointer"
      onClick={() => AddRepository()}
    >
      <Container>
        <h3 className='text-lg'>Add Repository</h3>
        <div className="absolute bottom-4 right-6">
          <Plus className='group-hover:rotate-90 transition-transform duration-300' />
        </div>
      </Container>
    </button>
  )
}
