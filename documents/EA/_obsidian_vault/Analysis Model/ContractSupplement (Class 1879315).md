---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Interface Provided/Web Services"
domain: "Analysis Model"
element_id: 1879315
diagrams: 7
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 ContractSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Interface Provided/Web Services

## 📝 Notes

A structure of Contract Supplement

## 🔗 Connections (8)

- ← Usage: [[AccountRenewalSupplements]]
- ← Usage: [[AccountRenewalSupplements]]
- → Dependency: [[SupplementTypeSpecificData (Class 1879319)]]
- → Usage: [[RelatedSubject (Class 1862983)]]
- → Usage: [[SupplementTypeSpecificData_v4]]
- → Usage: [[CustomData (Class 1862982)]]
- → Dependency: [[ContractSupplementStatusTransition (Class 1862871)]]
- → Usage: [[SupplementDocument (Class 1862967)]]

## 📊 Appears In (7 diagrams)

- Logical: Accept Card Balance Transfer Supplement documents - Web Service
- Logical: Cancel Account Renewal Supplement - Web Services
- Logical: Cancel Card Balance Transfer Supplement - Web Service
- Logical: Contract Supplements - Get Contract Supplement by CUID v3
- Logical: Contract Supplements - Get Contract Supplement by CUID v4
- Logical: Create Account Renewal Supplement - Web Services
- Logical: Create Card Balance Transfer Supplement - Web Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| supplementTypeCode | string |  |
| id | string |  |
| documents | SupplementDocument |  |
| currentStatus | string |  |
| statusLog | ContractSupplementStatusTransition |  |
| typeSpecificData | SupplementTypeSpecificData |  |
| relatedSubjects | RelatedSubject |  |
| customData | CustomData |  |
