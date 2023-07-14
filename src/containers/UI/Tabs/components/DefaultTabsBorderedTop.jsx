import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { BorderedTopTabs } from '@/shared/components/Tabs';
import Tabs from './Tabs';

const DefaultTabsBorderedTop = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tabs.default_tabs_bordered_top')}</CardTitle>
          </CardTitleWrap>
          <BorderedTopTabs>
            <Tabs />
          </BorderedTopTabs>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultTabsBorderedTop;
