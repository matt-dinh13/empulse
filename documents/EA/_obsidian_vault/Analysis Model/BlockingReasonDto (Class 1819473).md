---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Account management/Account blockage/User interface"
domain: "Analysis Model"
element_id: 1819473
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 BlockingReasonDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account blockage/User interface

## 🔗 Connections (4)

- ← Dependency: [[UnblockAccountRequest]]
- ← Dependency: [[BlockAccountRequest]]
- ← Dependency: [[GetBlockingReasonsResponse]]
- → Dependency: [[BlockingReasonCodeType]]

## 📊 Appears In (3 diagrams)

- Custom: UI: Account blockage
- Logical: Account management structures
- Logical: AccountManagementWS - Account blocking

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceSystemCode | string |  |
| reasonCode | BlockingReasonCodeType |  |
| blockedBy | UserNameType |  |
| blockedFrom | date |  |
