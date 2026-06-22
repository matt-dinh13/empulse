---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819445
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GracePeriodServiceParametersDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Grace period parameters
            
Source #1 is taken for contract before status = Signed; #2 since Signed

## 🔗 Connections (1)

- → Generalization «XSDextension»: [[ServiceParametersDto]]

## 📊 Appears In (1 diagrams)

- Logical: Account management structures  - Service Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| length | positiveInteger |  |
| debtTolerance | decimal |  |
| eligibleTariffItemTypeCodes | string |  |
