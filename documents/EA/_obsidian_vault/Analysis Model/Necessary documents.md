---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1755480
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Necessary documents

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

Displayed only for Primary offer detail.

Customer must present defined combination of documents otherwise he/she can't apply for the loan. Combination of documents (document types) is defined on product using so called "document container". Customer must fulfill conditions defined by all default document containers assigned to the respective product (retrieved according to the rule Get document containers for product). Condition on document container is defined by enumeration of document types and number and means that customer matches document container condition when he/she brings the defined number of document types; only document types defined within document container are counted.

Localization code:
DOC_Necessary_documents

## 🔗 Connections (2)

- → Dependency: [[Get document containers for product]]
- → Dependency: [[Default document container]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Container name | text |  |
| Documents provided by client | Serialized Enumeration Document type |  |
| List of available documents | Serialized Enumeration Document type |  |
| Conditions fulfilled? | boolean |  |
| Number of mandatory documents | number |  |
