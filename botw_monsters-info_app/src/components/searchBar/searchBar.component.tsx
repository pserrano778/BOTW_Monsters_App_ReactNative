import React from 'react'
import { Input, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import '../../styles/css/searchBarStyle.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  value: string
  onChange: (event: Event) => void
}

interface Event {
  target: { value: string }
}

// Function that display the searchBar
const SearchBar: React.FC<Props> = (props) => {
  const { value, onChange } = props
  const { t } = useTranslation('common')
  // Return a searchBar
  return (
    <div>
      <Container>
        <Row>
          <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 7, offset: 2 }}
            md={{ span: 5, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
          >
            <Input
              value={value}
              onChange={onChange}
              placeholder={t('SearchBar.placeholder')}
              allowClear
              suffix={
                <Tooltip title={t('SearchBar.message')}>
                  <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SearchBar
