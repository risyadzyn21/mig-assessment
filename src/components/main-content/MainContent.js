import { Card } from 'antd'

function MainContent() {
  return (
    <div className='main-content'>
      <Card title="Card title" bordered={false} className='card'>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <div className='upper-card'>
        <Card title="Card title" bordered={false} className='card'>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" bordered={false} className='card'>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>


    </div>
  )
}

export default MainContent
