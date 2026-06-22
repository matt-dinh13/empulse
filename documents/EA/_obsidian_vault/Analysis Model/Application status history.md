---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information"
domain: "Analysis Model"
element_id: 1655507
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Application status history

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information

## 📝 Notes

Grid containing the full history of status changes, that occurred on the respective application.

Individual records within the grid are ordered by:

	
- Date ASC


Note: The ordering cannot be changed by user.


Localization code:
APP_StatusHistory

## 📊 Appears In (1 diagrams)

- Custom: Tab - Application information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | Application Status |  |
| Modified by | User Name |  |
| Date | dateTime |  |
| Detail | button |  |
