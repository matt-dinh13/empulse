---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Sales Quote processing/Sales Quote (CM)"
domain: "Modules"
element_id: 1837707
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 SalesQuote

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Sales Quote processing/Sales Quote (CM)

## 🔗 Connections (6)

- → Usage: [[AmountArangement]]
- → Usage: [[FeeArangement]]
- → Usage: [[Specification (Class 1837703)]]
- → Usage: [[ServiceArangement]]
- → Usage: [[InterestArangement]]
- → Usage: [[Subvention (Class 1837697)]]

## 📊 Appears In (1 diagrams)

- Logical: Sales Quote (CM)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| transactionType | string |  |
| creationDate | dateTime |  |
| purpose | string |  |
| amountArangements | AmountArangement |  |
| interestArangements | InterestArangement |  |
| fee Arangement | FeeArangement |  |
| specifications | Specification |  |
| subventions | Subvention |  |
