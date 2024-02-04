import { createClient } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'pca0g0ie',
    dataset: 'production',
    apiVersion: '2024-01-08',
    useCdn:true
    
})

const imgBuilder = ImageUrlBuilder(client)

export function urlFor(source) {
    return imgBuilder.image(source)
}
