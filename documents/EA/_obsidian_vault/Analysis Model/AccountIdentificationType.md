---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Messages"
domain: "Analysis Model"
element_id: 1031670
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 AccountIdentificationType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Messages

## 🔗 Connections (6)

- ← Generalization «XSDextension»: [[CreateAccountRequest]]
- ← Generalization «XSDextension»: [[{MOD}InitiateAccountTerminationRequest]]
- ← Generalization «XSDextension»: [[CancelAccountRequest]]
- ← Generalization «XSDextension»: [[CancelAccountTerminationRequest]]
- ← Generalization «XSDextension»: [[AccountDetailType]]
- → Dependency: [[SourceSystemType]]

## 📊 Appears In (2 diagrams)

- Logical: Messages - LoyaltyManagementWS
- Logical: Types - LoyaltyManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalAccountSource | SourceSystemType |  |
| externalAccountNumber | AccountNumberType |  |
