---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820055
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CreatedDocument

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 🔗 Connections (4)

- ← Dependency: [[ApplicationDetail (Class 1820059)]]
- ← Dependency: [[ClientData (Class 1820099)]]
- → Dependency: [[FileList]]
- → Dependency: [[CreatedDocumentAttribute]]

## 📊 Appears In (2 diagrams)

- Logical: Get Application - client data
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creationDate | datetime |  |
| createdBy | string |  |
| creationMoment | string |  |
| printoutExternalID | string |  |
| documentAttributes | CreatedDocumentAttribute |  |
| documentTypeCode | string |  |
| note | string |  |
| photoTakingResult | string |  |
| uuid | string |  |
| verificationUUID | string |  |
| files | FileList |  |
