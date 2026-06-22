---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication"
domain: "Analysis Model"
element_id: 1736445
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Communication records

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication

## 📝 Notes

Grid containing the list of records about the communication with the client (communication records), that took place in relation with respective application.

Individual records within the grid are initially ordered by:

	
- Created when DESC


This initial ordering can be possibly changed by user upon clicking the respective column (except for the Result detail).


Other:
Visibility of individual grid's columns is controlled by the country-specific configuration - columns listed within the system property hiddenColumnsOnClientCommunicationEventsPanel are hidden.

Following country-specific setting of respective system property is applied:

	
- ID: Result detail, Note, ID
	
- IN: Subtype specification, Subtype subspecification, Note, ID
	
- KZ: Subtype specification, Subtype subspecification, ID
	
- PH: Subtype specification, Subtype subspecification, Result detail
	
- VN: Subtype specification, Subtype subspecification, Status, Result, Result detail, ID



Localization code: none

## 🔗 Connections (2)

- → Dependency: [[07.030 Show detail of communication (UseCase 1879992)]]
- → Dependency: [[Displaying tooltips]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - List of communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created when | dateTime |  |
| Created by | User Name |  |
| Channel | Communication Channel |  |
| Contact used | text |  |
| Type | Communication Type |  |
| Subtype | Communication Subtype |  |
| Subtype specification | Communication Subtype Specification |  |
| Subtype subspecification | Communication Subtype Subspecification |  |
| Status | Communication Status |  |
| Result | Communication Result Value |  |
| Result detail | Communication Result Type Part |  |
| Closed tickets | text |  |
| System | text |  |
| Note | text |  |
| ID | text |  |
| Detail | button |  |
