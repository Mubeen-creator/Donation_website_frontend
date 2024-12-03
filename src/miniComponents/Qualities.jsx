import React from 'react'

const Qualities = () => {

  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "Community Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit nemo culpa cumque asperiores aliquam ut neque enim natus rem. Tempore aspernatur debitis laudantium! Quos similique molestias eaque atque consequuntur!"
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "Transparency",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit nemo culpa cumque asperiores aliquam ut neque enim natus rem. Tempore aspernatur debitis laudantium! Quos similique molestias eaque atque consequuntur!"
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "Impact Measurement",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit nemo culpa cumque asperiores aliquam ut neque enim natus rem. Tempore aspernatur debitis laudantium! Quos similique molestias eaque atque consequuntur!"
    }
  ]

  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {
            qualities.map(element => (
              <div key={element.id} className="card">
                <div className="img-wrapper">
                  <img src={element.image} alt={element.title} />
                </div>
                <div className='content'>
                  <p className='title'>{element.title}</p>
                  <p className='description'>{element.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Qualities