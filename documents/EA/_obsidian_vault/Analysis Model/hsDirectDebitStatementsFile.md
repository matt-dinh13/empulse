---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Import"
domain: "Analysis Model"
element_id: 1132889
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 hsDirectDebitStatementsFile

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Import

## 🔗 Connections (3)

- → Association: [[directDebitStatementsType]]
- → Association: [[bankAccountNumberType]]
- ← Dependency «use»: [[PaymentsWS (Interface 1170732)]]

## 📊 Appears In (2 diagrams)

- Logical: DDS_Import
- Logical: PaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| hcBankBranchCode | string |  |
| directDebitChannelId | string |  |
