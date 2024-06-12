import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Button } from '@mui/material';
import WidgetList from '../WidgetList';
import CreateWidget from '../CreateWidget';
import UpdateWidget from '../UpdateWidget/UpdateWidget';
import DeleteWidget from '../DeleteWidget';
import SearchOneWidget from '../SearchOneWidget/SearchOneWidget';
import { useState } from 'react';

function WidgetTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`widget-tabpanel-${index}`}
      aria-labelledby={`widget-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

WidgetTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function etcProps(index) {
  return {
    id: `widget-tab-${index}`,
    'aria-controls': `widget-tabpanel-${index}`,
  };
}

export default function WidgetHome() {
  const [value, setValue] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='widget tabs'>
          <Tab label='Widget List' {...etcProps(0)} />
          <Tab label='Create widget' {...etcProps(1)} />
          <Tab label='Update widget' {...etcProps(2)} />
          <Tab label='Delete widget' {...etcProps(3)} />
        </Tabs>
      </Box>
      <WidgetTabPanel value={value} index={0}>
        <Button variant='contained' onClick={handleClick}>
          {showSearch ? 'Show complete list' : 'Search one widget'}
        </Button>
        {!showSearch && <WidgetList />}
        {showSearch && <SearchOneWidget />}
      </WidgetTabPanel>
      <WidgetTabPanel value={value} index={1}>
        <CreateWidget />
      </WidgetTabPanel>
      <WidgetTabPanel value={value} index={2}>
        <UpdateWidget />
      </WidgetTabPanel>
      <WidgetTabPanel value={value} index={3}>
        <DeleteWidget />
      </WidgetTabPanel>
    </Box>
  );
}
