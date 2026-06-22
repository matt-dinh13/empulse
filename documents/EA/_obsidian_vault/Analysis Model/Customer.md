---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3"
domain: "Analysis Model"
element_id: 1667375
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Customer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3

## 🔗 Connections (3)

- ← Dependency: [[GetContractJFSPartnershipRequest (Class 1615964)]]
- → Dependency: [[FinancialType]]
- → Dependency: [[Document (Class 1667387)]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientCuid | string |  |
| birthDate | date |  |
| primaryIDDocuments | Document |  |
| financial | FinancialType |  |
