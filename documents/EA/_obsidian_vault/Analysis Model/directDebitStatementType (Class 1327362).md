---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Confirmation"
domain: "Analysis Model"
element_id: 1327362
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 directDebitStatementType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Confirmation

## 📝 Notes

{ADD PAYM-1677 CBL-4161 /}

LDM destination:
DDM.JFS Partners

## 🔗 Connections (3)

- → Dependency: [[DdmJfsPartnerDto]]
- ← Association: [[directDebitStatementsType (Class 1327364)]]
- → Dependency: [[moneyAmountType (Class 1327365)]]

## 📊 Appears In (1 diagrams)

- Logical: DDS_Confirmation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalReference | string |  |
| contractReference | string |  |
| ddmReference | string |  |
| amount | moneyAmountType |  |
| BSLError | string |  |
| debited | boolean |  |
| reasonCode | integer |  |
| dueDate | date |  |
| JSFPartners | DdmJfsPartnerDto |  |
