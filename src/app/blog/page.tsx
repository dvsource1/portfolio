import PageContainer from '../components/PageContainer'

const BlogPage = () => {
  const types = {
    a: [
      'bg-[#e06c75] text-white border-[#e06c75] hover:bg-[#282c34] hover:text-white',
    ],
    b: [
      'bg-tranparent text-[#98c379] border-[#98c379] hover:bg-[#98c379] hover:text-white',
    ],
    c: [
      'bg-[#61afef] text-white border-[#61afef] hover:bg-[#282c34] hover:text-white',
    ],
    d: [
      'bg-tranparent text-[#c678dd] border-[#c678dd] hover:bg-[#c678dd] hover:text-white',
    ],
    e: [
      'bg-[#e5c07b] text-white border-[#e5c07b] hover:bg-[#282c34] hover:text-white',
    ],
  }

  /*
  #e06c75
  #98c379
  #e5c07b
  #61afef
  #c678dd
  #56b6c2
  */

  const categories = [
    { code: '1', name: 'Lorem', type: types.b },
    { code: '2', name: 'ipsum', type: types.c },
    { code: '3', name: 'dolor', type: types.a },
    { code: '4', name: 'consectetur', type: types.a },
    { code: '5', name: 'adipisicing', type: types.e },
    { code: '6', name: 'Aperiam', type: types.d },
    { code: '7', name: 'deleniti', type: types.d },
    { code: '8', name: 'aliquam', type: types.e },
    { code: '9', name: 'Dignissimos', type: types.c },
    { code: '10', name: 'consectetur', type: types.a },
    { code: '11', name: 'Aperiam', type: types.c },
    { code: '12', name: 'deleniti', type: types.b },
    { code: '13', name: 'aliquam', type: types.e },
    { code: '14', name: 'Dignissimos', type: types.a },
  ]

  return (
    <PageContainer title={'Blog'}>
      <div className="flex h-full flex-col">
        <div className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A molestiae
          laboriosam illo et voluptatibus, reprehenderit consequatur ducimus
          dolorem delectus soluta, cum aliquam provident tempore maiores nihil
          saepe enim sunt rem?
        </div>
        <div className="mt-4 flex flex-wrap justify-center text-sm">
          {categories.map(i => {
            return (
              <div
                key={i.code}
                className={`m-1 cursor-pointer ${i.type.join(
                  ' ',
                )} border-2 px-2 py-0.5 capitalize`}>
                {i.name}
              </div>
            )
          })}
        </div>
        <div className="mt-4 grid w-full flex-1 grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map(i => {
            return (
              <div
                key={i}
                className="relative rounded-md border-2 border-[#61afef]">
                <b className="absolute left-0 bg-red-200 text-white">
                  Lorem ipsum dolor sit, amet consectetur
                </b>
                <img
                  className="w-full"
                  src="https://source.unsplash.com/300x100/?reactjs"
                  alt="search terms"></img>
                <p>
                  Adipisicing elit. Quis aliquam officia modi laboriosam, quasi
                  deleniti, quas quo itaque voluptatibus non at laudantium
                  obcaecati. Veritatis magni deserunt beatae nesciunt, incidunt
                  numquam.
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </PageContainer>
  )
}

export default BlogPage
