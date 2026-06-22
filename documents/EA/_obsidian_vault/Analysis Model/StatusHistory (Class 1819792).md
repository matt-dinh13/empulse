---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819792
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 StatusHistory

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Merged data from Contact Status Transition and Contract Substatus Transition

## 🔗 Connections (2)

- → Realisation: [[LOR-658 PaperLess - provide contract history and contract detail before signature]]
- ← Dependency: [[ApplicationDetail]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| order | integer |  |
| status | string |  |
| substatus | string |  |
| createdBy | string |  |
| creationDate | datetime |  |
| reason | string |  |
| notice | string |  |
