import React, { FC } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { RouteLink } from '@ui/link'
import messages from '../../messages'

interface Props {
  intl: InjectedIntl
  firstName: string
  lastName: string
  errors: { firstName?: string; lastName?: string }
  onChangeInput: (inputType: string) => (value: string) => void
  onSave: () => void
  onCancel: () => void
}

const Login: FC<Props> = ({
  firstName,
  lastName,
  errors,
  intl,
  onChangeInput,
  onSave,
  onCancel,
}) => (
  <Column align='center'>
    <Layout basis={60} />
    <Text size='2xl' lineHeight='xs' weight='bold'>
      {intl.formatMessage(messages.userProfile)}
    </Text>
    <Layout basis={40} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.firstName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='firstName'
          borderColor='lightGray'
          error={!!errors.firstName}
          value={firstName}
          onChange={onChangeInput('firstName')}
          placeholder={intl.formatMessage(messages.firstName)}
        />
      </Layout>
    </Row>
    {errors.firstName && (
      <Row justify='center'>
        <Layout basis={360}>
          <Text size='s' color='red'>
            {errors.firstName}
          </Text>
        </Layout>
      </Row>
    )}
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.lastName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='lastName'
          borderColor='lightGray'
          error={!!errors.lastName}
          value={lastName}
          onChange={onChangeInput('lastName')}
          placeholder={intl.formatMessage(messages.lastName)}
        />
      </Layout>
    </Row>
    {errors.lastName && (
      <Row justify='center'>
        <Layout basis={360}>
          <Text size='s' color='red'>
            {errors.lastName}
          </Text>
        </Layout>
      </Row>
    )}
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Button
          text
          disabled={!firstName || !lastName || !!errors.firstName || !!errors.lastName}
          onClick={onSave}
        >
          {intl.formatMessage(messages.saveProfile)}
        </Button>
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Button text onClick={onCancel}>
          {intl.formatMessage(messages.cancel)}
        </Button>
      </Layout>
    </Row>
  </Column>
)

export default injectIntl(Login)
