---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information"
domain: "Analysis Model"
element_id: 1655508
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Application status requests

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information

## 📝 Notes

Grid containing the list of requests for a status change, that were made on the respective application (e.g. request to cancel the application).

Individual records within the grid are initially ordered by:

	
- Request date ASC


This initial ordering can be possibly changed by user upon clicking the respective column.


Localization code:
APP_StatusRequests

## 📊 Appears In (1 diagrams)

- Custom: Tab - Application information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Request type | text |  |
| Application status requests | text |  |
| Request date | dateTime |  |
| Requested by | User Name |  |
| Cancellation date | dateTime |  |
| Cancelled by | User Name |  |
