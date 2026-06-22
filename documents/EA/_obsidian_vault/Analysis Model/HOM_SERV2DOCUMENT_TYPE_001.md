---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371209
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SERV2DOCUMENT_TYPE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Defines document types available/required for a service. Typically that will be some service contract or addendum to the loan contract. Template for printing a document of the given type is also set up here

## 🔗 Connections (1)

- → Aggregation: [[HOM_SERVICE_001]]

## 📊 Appears In (1 diagrams)

- Logical: Service (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service ID | number |  |
| printout template code | string |  |
| document type code | string |  |
| when required | string |  |
| when printable | string |  |
| number of copies | number |  |
| archived | boolean |  |
