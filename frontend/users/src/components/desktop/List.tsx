import React, { Fragment } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import messages from '../../messages'

interface Props {
  intl: InjectedIntl
  onClickSortButton: (sortBy: string) => () => void
  sortBy: string
  sortDirection: 'asc' | 'desc'
}

const SortButton = ({ onClickSortButton, value, sortBy, sortDirection }) => {
  const isActive = value === sortBy
  const isAsc = sortDirection === 'asc'
  return (
    <button onClick={onClickSortButton(value)}>
      <Text color={isActive && isAsc ? 'red' : 'black'} size='l'>
        {'\u2191'}
      </Text>
      <Text color={isActive && !isAsc ? 'red' : 'black'} size='l'>
        {'\u2193'}
      </Text>
    </button>
  )
}
const List = ({ rows, intl, onClickSortButton, sortBy, sortDirection }: Props) => (
  <Column>
    <Layout basis={60} />
    <Row>
      <Layout basis='10%' />
      <Text weight='medium' size='l'>
        {intl.formatMessage(messages.users)}
      </Text>
      <Layout basis='10%' />
    </Row>
    <Layout basis={20} />
    <Row>
      <Layout basis='10%' />
      <Layout basis={300}>
        <Layout basis={8} />
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.name)}
        </Text>
      </Layout>
      <Layout basis={200}>
        <SortButton
          onClickSortButton={onClickSortButton}
          value='email'
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
        <Layout basis={8} />
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.email)}
        </Text>
      </Layout>
      <Layout basis={260}>
        <SortButton
          onClickSortButton={onClickSortButton}
          value='registeredAt'
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
        <Layout basis={8} />
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.registered)}
        </Text>
      </Layout>
      <Layout basis={200}>
      <SortButton
          onClickSortButton={onClickSortButton}
          value='lastLogonAt'
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
        <Layout basis={8} />
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.lastLogin)}
        </Text>
      </Layout>
      <Layout basis='10%' />
    </Row>
    <Layout basis={8} />
    {rows.map(({ id, profile, email, registeredAt, lastLogonAt }) => (
      <Fragment key={id}>
        <Row>
          <Layout basis='10%' />
          <Layout basis={8} />
          <Layout basis={280}>
            <Text size='s'>
              {profile.firstName}
              <Space />
              {profile.lastName}
            </Text>
          </Layout>
          <Layout basis={12} />
          <Layout basis={188}>
            <Text size='s'>{email}</Text>
          </Layout>
          <Layout basis={12} />
          <Layout basis={248}>
            <Text size='s'>{intl.formatDate(registeredAt)}</Text>
          </Layout>
          <Layout basis={12} />
          <Text size='s'>
            {intl.formatDate(lastLogonAt)}
            <Space />
            {intl.formatMessage(messages.at)}
            <Space />
            {intl.formatTime(lastLogonAt)}
          </Text>
          <Layout basis='10%' />
        </Row>
        <Layout basis={12} />
      </Fragment>
    ))}
  </Column>
)

export default injectIntl(List)
