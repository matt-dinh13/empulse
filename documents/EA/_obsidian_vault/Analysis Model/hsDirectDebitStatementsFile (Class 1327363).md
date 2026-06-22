---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Confirmation"
domain: "Analysis Model"
element_id: 1327363
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 hsDirectDebitStatementsFile

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Confirmation

## 🔗 Connections (3)

- ← Dependency «use»: [[PaymentsWS (Interface 1170732)]]
- → Association: [[bankAccountNumberType (Class 1327366)]]
- → Association: [[directDebitStatementsType (Class 1327364)]]

## 📊 Appears In (2 diagrams)

- Logical: DDS_Confirmation
- Logical: PaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| hcBankBranchCode | string |  |
| directDebitChannelId | string |  |
