import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'
// MonsterDetails
interface MonsterDetails {
  name: string
  image: string
  description: string
  locations: string
  drops: string
}

// Event interface
interface Event {
  target: { name: string; value: string }
}

// Props interface
interface Props {
  value: MonsterDetails
  onChange: (e: Event) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const addMonsterFormComponent: React.FC<Props> = (props) => {
  const { value, onChange, onSubmit } = props
  const { t } = useTranslation('common')
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {t('AddMonsterPage.name')}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={t('AddMonsterPage.namePlaceholder')}
            onChange={onChange}
            name="name"
            value={value.name}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {t('AddMonsterPage.image')}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={t('AddMonsterPage.imagePlaceholder')}
            onChange={onChange}
            name="image"
            value={value.image}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {t('AddMonsterPage.description')}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={t('AddMonsterPage.descriptionPlaceholder')}
            onChange={onChange}
            name="description"
            value={value.description}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {t('AddMonsterPage.locations')}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={t('AddMonsterPage.locationsPlaceholder')}
            onChange={onChange}
            name="locations"
            value={value.locations}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {t('AddMonsterPage.drops')}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={t('AddMonsterPage.dropsPlaceholder')}
            onChange={onChange}
            name="drops"
            value={value.drops}
          />
        </Col>
      </Form.Group>

      <Button variant="primary" type={'submit'}>
        {t('Buttons.submit')}
      </Button>
    </Form>
  )
}

export default addMonsterFormComponent
