---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules"
domain: "Analysis Model"
element_id: 1031657
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}InitiateAccountTerminationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules

## 📝 Notes

{ADD PRB-507 /}
Terminate (only initiation) Loyalty account. Request.

## 🔗 Connections (4)

- ← Dependency: [[LoyaltyManagementWS]]
- → Dependency: [[{ADD}ReasonForTerminationType]]
- → Generalization «XSDextension»: [[AccountIdentificationType]]
- → Dependency: [[{MOD}Mapping InitiateAccountTerminationtRequest - LoyaltyManagementWS]]

## 📊 Appears In (4 diagrams)

- Custom: LoyaltyManagementWS - mapping rules
- Logical: LoyaltyManagementWS
- Logical: Messages - LoyaltyManagementWS
- Logical: Types - LoyaltyManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}reasonForTermination | ReasonForTermination |  |
