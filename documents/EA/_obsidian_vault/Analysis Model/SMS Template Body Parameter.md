---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model"
domain: "Analysis Model"
element_id: 1371287
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SMS Template Body Parameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model

## 📝 Notes

Template body parameter defined/contained in Template.Body (e.g. <title> to be replaced by corresponding value when constructing message, (e.g. <title> in SMS Template.Body will be replaced by value "Mr.")

Note: If different template contains the same parameter, e.g. <title> or <contractNumber> then those parameters are shared by templates - that's why (shared) aggregation is set between SMS Template and SMS Template Body Parameter.

## 🔗 Connections (2)

- → Dependency: [[SMS Template Body Parameter Type]]
- → Aggregation: [[SMS Template]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | Template Body Parameter Type |  |
