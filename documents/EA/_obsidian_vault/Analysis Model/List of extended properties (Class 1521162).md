---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Extended properties"
domain: "Analysis Model"
element_id: 1521162
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 List of extended properties

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Extended properties

## 📝 Notes

Grid containing the list of extended properties, that are related to the respective application.

Individual records within the grid are initially ordered by:

	
- Name (Extended_Property_Value->Extended_Property_Item.Name) DESC
	
- Extended_Property_Value->Extended_Property_Item.Code DESC


This initial ordering can be possibly changed by user upon clicking the respective column.


Localization code: none

## 🔗 Connections (1)

- → Dependency: [[{MOD}00.040 Remove extended property]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Extended properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | text |  |
| Value | text |  |
| Remove extended property | button |  |
