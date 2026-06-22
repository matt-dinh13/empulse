---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1"
domain: "Modules"
element_id: 1795093
diagrams: 4
connections: 2
tags:
  - class
  - modules
---

# 🔷 DealStatusTransition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1

## 🔗 Connections (2)

- ← Dependency: [[Deal (Class 1795097)]]
- → Dependency: [[DealStatusType (Enumeration 1795087)]]

## 📊 Appears In (4 diagrams)

- Logical: Create Deal
- Logical: Deal structures
- Logical: Find Deal
- Logical: Get Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | DealStatusType |  |
| {ADD}changeDate | DateTime |  |
| {DEL}createdBy | string |  |
| {DEL}creationDate | DateTime |  |
| reasonCode | string |  |
| reasonNotice | string |  |
| {DEL}businessReasonCode | string |  |
