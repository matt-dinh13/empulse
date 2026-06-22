---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607559
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ProposedInstallmentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

Type of proposed Service Offer Installment, e.g. by Payment Holiday

Filled in 13.205 Create contract supplement documents.

## 🔗 Connections (1)

- ← Dependency: [[ProposedInstallmentsType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentNumber | int |  |
| paymentDate | dateTime |  |
| installmentAmount | MoneyType |  |
| partPrincipal | MoneyType |  |
| outstandingPrincipal | MoneyType |  |
| partInterest | MoneyType |  |
| partFee | MoneyType |  |
