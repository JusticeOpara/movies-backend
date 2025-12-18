import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const creatorId = "801f4b07-851f-4b1d-bae8-271d558fd007"

export const movies = [
  {
    title: "Shadow Protocol",
    overview:
      "A retired intelligence operative is forced back into the field when a classified operation resurfaces, threatening global security.",
    releaseYear: 2023,
    genres: ["Action", "Thriller"],
    runtime: 128,
    posterUrl: "https://example.com/posters/shadow-protocol.jpg",
    createdBy: creatorId,
  },
  {
    title: "Midnight in Lagos",
    overview:
      "A romantic drama set in the heart of Lagos, following two strangers whose lives intersect during one unforgettable night.",
    releaseYear: 2022,
    genres: ["Romance", "Drama"],
    runtime: 112,
    posterUrl: "https://example.com/posters/midnight-in-lagos.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Last Algorithm",
    overview:
      "A brilliant software engineer discovers an AI system capable of predicting crimes before they happen — at a dangerous cost.",
    releaseYear: 2024,
    genres: ["Sci-Fi", "Mystery"],
    runtime: 140,
    posterUrl: "https://example.com/posters/the-last-algorithm.jpg",
    createdBy: creatorId,
  },
  {
    title: "Beneath the Savannah",
    overview:
      "A wildlife conservationist uncovers a hidden criminal network while protecting endangered species in rural Africa.",
    releaseYear: 2021,
    genres: ["Adventure", "Drama"],
    runtime: 121,
    posterUrl: "https://example.com/posters/beneath-the-savannah.jpg",
    createdBy: creatorId,
  },
  {
    title: "Laugh Track",
    overview:
      "An upcoming stand-up comedian navigates fame, failure, and friendships after a viral performance changes his life.",
    releaseYear: 2020,
    genres: ["Comedy"],
    runtime: 98,
    posterUrl: "https://example.com/posters/laugh-track.jpg",
    createdBy: creatorId,
  },
  {
    title: "Echoes of Tomorrow",
    overview: "After waking up with memories from the future, a young woman races to change events before disaster strikes.",
    releaseYear: 2025,
    genres: ["Sci-Fi", "Drama", "Thriller"],
    runtime: 135,
    posterUrl: "https://example.com/posters/echoes-of-tomorrow.jpg",
    createdBy: creatorId,
  },
];


const main = async ()=>{

    for(const movie of movies ){
        await prisma.movie.create({
            data: movie
        })
        console.log(`Created movie: ${movie.title}`)
    }
    console.log(`Seeding completed `)
}
 main().catch((err) =>{
 console.log(err,"error")
 process.exit(1)
 }).finally(async ()=>{
    await prisma.$disconnect()
 })



//  {
//    "movieId": "fd08ce38-6f37-4a96-9772-db952b8ad313",
//     "status": "WATCHING",
//     "rating": 2,
//     "note": "I love this movie"
// }