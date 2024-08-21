import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FilterMenuCard from '../../helper/FilterMenuCard/FilterMenuCard';

const ReactTabs = () => {
  const tablistStyle = { textAlign: "center" }
  const tabStyle = { fontSize: "2.5rem", fontWeight: "600" }
  return (
    <Tabs>

      <TabList style={tablistStyle} >
        <Tab style={tabStyle}>Drinks</Tab>
        <Tab style={tabStyle}>Popular</Tab>
        <Tab style={tabStyle}>Dessert</Tab>
        <Tab style={tabStyle}>Pizza</Tab>
        <Tab style={tabStyle}>Cofee</Tab>
      </TabList>

      <TabPanel>
        <FilterMenuCard filtermenu="drinks"></FilterMenuCard>
      </TabPanel>

      <TabPanel>
         <FilterMenuCard filtermenu="popular"></FilterMenuCard>
      </TabPanel>

      <TabPanel>
        <FilterMenuCard filtermenu="dessert"></FilterMenuCard>
      </TabPanel>

      <TabPanel>
         <FilterMenuCard filtermenu="pizza"></FilterMenuCard>
      </TabPanel>

      <TabPanel>
         <FilterMenuCard filtermenu="cofee"></FilterMenuCard>
      </TabPanel>

    </Tabs>
  )
}

export default ReactTabs
