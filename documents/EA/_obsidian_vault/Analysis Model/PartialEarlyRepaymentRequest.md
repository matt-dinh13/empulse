---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607556
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PartialEarlyRepaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

Data structure for PER request type choice
Values are taken from the PER Result object (Result)

## 🔗 Connections (1)

- ← Dependency: [[{MOD}RequestTypeChoice]]

## 📊 Appears In (1 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| minimalAmountToPay | MoneyType |  |
| newExpectedTerm | int |  |
| newExpectedMonthlyInstallment | MoneyType |  |
| prepaidAmount | MoneyType |  |
| totalOverdueInstallments | MoneyType |  |
| erFeesSum | MoneyType |  |
| totalToPaid | MoneyType |  |
| totalPrepayments | MoneyType |  |
