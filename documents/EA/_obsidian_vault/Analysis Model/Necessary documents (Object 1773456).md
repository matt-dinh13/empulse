---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773456
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 Necessary documents

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Read only table displaying the missing documents required by the document containers. Different document container types are taken into account depending where on the AF this panel is used (see particular AF panel for more details). 
If there are no missing documents on the application from any required document container, the grid is hidden.

Localization code:
DOC_Necessary documents

Note:
Customer must present defined combination of documents otherwise he/she can't apply for the loan. Combination of documents (document types) is defined on product using so called "document container". Customer must fulfill all conditions defined by assigned document containers to product. Condition on document container is defined by enumeration of document types and number and means that customer matches container condition when he/she brings the defined number of document types; only document types defined within document container are counted.

## 📊 Appears In (1 diagrams)

- Custom: Common panel for document - product AF

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Container name | text |  |
| List of available documents | text |  |
| Number of missing documents | number |  |
