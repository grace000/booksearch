export const mockGetBooks = jest.fn()
  .mockImplementationOnce(() => ({
    results: [
        { 
            id: 0, 
            title: "The Twitter Book",
            infoLink: "https://play.google.com/store/books/details?id=Jy1jfJm0HVIC&source=gbs_api",
            authors: ["Tim O'Reilly"]
        },
        {
            id: 1, 
            title: "Hatching Twitter",
            infoLink: "https://books.google.com/books/about/Hatching_Twitter.html?hl=&id=GX8ODAAAQBAJ",
            authors: ["Nick Bilton"]
        }
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('search returned no results'))
  })