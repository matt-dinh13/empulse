---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879500
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

DocumentType represents structure for client's documents.

Source: data.person.documents

## 🔗 Connections (1)

- ← Dependency: [[ClientDataDto (Class 1879504)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_ALOP_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| type | string |  |
| issueDate | date |  |
| serialNumber | {MOD}DocumentAttributeType |  |
| expirationDate | date |  |
| country | string |  |
| issuer | string |  |
