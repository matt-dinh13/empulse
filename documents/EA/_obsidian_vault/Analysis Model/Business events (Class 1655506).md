---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information"
domain: "Analysis Model"
element_id: 1655506
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Business events

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information

## 📝 Notes

Grid containing the list of key operations (including their details), that were performed on the respective application.

Individual records within the grid are ordered by:

	
- Date of modification ASC


Note: The ordering cannot be changed by user.


Localization code:
CON_BusinessEvents

## 🔗 Connections (1)

- → Dependency: [[Translate of business event attribute]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Application information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type of modification | text |  |
| Event attributes | text |  |
| Modified by | User Name |  |
| Date of modification | dateTime |  |
