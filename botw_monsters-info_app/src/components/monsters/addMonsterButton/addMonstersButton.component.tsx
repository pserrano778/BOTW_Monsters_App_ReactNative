import React from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'
// Props interface
interface Props {
  onClick: () => void
}

const AddMonsterButton: React.FC<Props> = (props) => {
  const { onClick } = props
  const { t } = useTranslation('common')

  return <Button onClick={onClick}>{t('MonsterListPage.addMonster')}</Button>
}

export default AddMonsterButton
