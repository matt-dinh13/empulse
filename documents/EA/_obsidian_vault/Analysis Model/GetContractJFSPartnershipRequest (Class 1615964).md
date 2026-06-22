---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3"
domain: "Analysis Model"
element_id: 1615964
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 GetContractJFSPartnershipRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3

## 🔗 Connections (6)

- → Dependency: [[Customer]]
- → Dependency: [[{MOD}Commodity]]
- → Dependency: [[Product (Class 1667377)]]
- → Dependency: [[Contract (Class 1667389)]]
- → Dependency: [[ContractConsolidation]]
- ← Dependency: [[FinancialPartnershipService_v3 (Interface 1624720)]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contract | Contract |  |
| contractConsolidation | ContractConsolidation |  |
| customer | Customer |  |
| product | Product |  |
| commodities | Commodity |  |
