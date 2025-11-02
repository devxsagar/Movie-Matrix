import Banner from '@/components/Banner'
import useSectionFetch from '@/hooks/useSectionFetch'
import MediaSection from '@/sections/MediaSection'
import React, { use } from 'react'

const Movies = () => {
    const bannerData = useSectionFetch({ category: 'now_playing', mediaType: 'movie', page: 1 })

  return (
    <div>
        <Banner data={bannerData} />
        <MediaSection title="popular" category="popular" mediaType="movie" page={1} />
    </div>
  )
}

export default Movies   