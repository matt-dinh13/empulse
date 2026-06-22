---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575849
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GetPossibleBlockingReasonsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Response containing list of privileges with associated true/false flag whether privilege is allowed

## 🔗 Connections (1)

- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountManagementWS - Account blocking
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| blockingReasons | BlockingReasonCodeType |  |
| unblockingReasons | BlockingReasonCodeType |  |
